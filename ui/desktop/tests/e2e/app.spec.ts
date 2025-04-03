import { test, expect } from '@playwright/test';
import { _electron as electron } from '@playwright/test';
import { join } from 'path';
import { spawn, exec } from 'child_process';
import { promisify } from 'util';

const { runningQuotes } = require('./basic-mcp');
const execAsync = promisify(exec);

test.describe('Goose App', () => {
  let electronApp;
  let appProcess;
  let mainWindow;
  let isProviderSelected = false;

  test.beforeAll(async () => {
    console.log('Starting Electron app...');
    
    // Start the electron-forge process
    appProcess = spawn('npm', ['run', 'start-gui'], {
      cwd: join(__dirname, '../..'),
      stdio: 'pipe',
      shell: true,
      env: {
        ...process.env,
        ELECTRON_IS_DEV: '1',
        NODE_ENV: 'development'
      }
    });

    // Log process output
    appProcess.stdout.on('data', (data) => {
      console.log('App stdout:', data.toString());
    });

    appProcess.stderr.on('data', (data) => {
      console.log('App stderr:', data.toString());
    });

    // Wait a bit for the app to start
    console.log('Waiting for app to start...');
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Launch Electron for testing
    electronApp = await electron.launch({
      args: ['.vite/build/main.js'],
      cwd: join(__dirname, '../..'),
      env: {
        ...process.env,
        ELECTRON_IS_DEV: '1',
        NODE_ENV: 'development'
      }
    });

    // Get the main window once for all tests
    mainWindow = await electronApp.firstWindow();
    await mainWindow.waitForLoadState('domcontentloaded');

    // Check if we're already on the chat screen
    try {
      const chatInput = await mainWindow.waitForSelector('textarea[placeholder*="What can goose help with?"]',
        { timeout: 5000 });
      isProviderSelected = await chatInput.isVisible();
      console.log('Provider already selected, chat interface visible');
    } catch (e) {
      console.log('On provider selection screen');
      isProviderSelected = false;
    }
  });

  test.afterAll(async () => {
    console.log('Final cleanup...');

    // Close the test instance
    if (electronApp) {
      await electronApp.close().catch(console.error);
    }

    // Kill any remaining electron processes
    try {
      if (process.platform === 'win32') {
        await execAsync('taskkill /F /IM electron.exe');
      } else {
        await execAsync('pkill -f electron || true');
      }
    } catch (error) {
      if (!error.message?.includes('no process found')) {
        console.error('Error killing electron processes:', error);
      }
    }

    // Kill any remaining npm processes from start-gui
    try {
      if (process.platform === 'win32') {
        await execAsync('taskkill /F /IM node.exe');
      } else {
        await execAsync('pkill -f "start-gui" || true');
      }
    } catch (error) {
      if (!error.message?.includes('no process found')) {
        console.error('Error killing npm processes:', error);
      }
    }

    // Kill the specific npm process if it's still running
    try {
      if (appProcess && appProcess.pid) {
        process.kill(appProcess.pid);
      }
    } catch (error) {
      if (error.code !== 'ESRCH') {
        console.error('Error killing npm process:', error);
      }
    }
  });

  test.describe('General UI', () => {
    test('verify initial screen and select provider if needed', async () => {
      console.log('Checking initial screen state...');
  
      if (!isProviderSelected) {
        // Take screenshot of provider selection screen
        await mainWindow.screenshot({ path: 'test-results/provider-selection.png' });
  
        // Verify provider selection screen
        const heading = await mainWindow.waitForSelector('h2:has-text("Choose a Provider")', { timeout: 10000 });
        const headingText = await heading.textContent();
        expect(headingText).toBe('Choose a Provider');
  
        // Find and verify the Databricks card container
        console.log('Looking for Databricks card...');
        const databricksContainer = await mainWindow.waitForSelector(
          'div:has(h3:text("Databricks"))[class*="relative bg-bgApp rounded-lg"]'
        );
        expect(await databricksContainer.isVisible()).toBe(true);
  
        // Find the Launch button within the Databricks container
        console.log('Looking for Launch button in Databricks card...');
        const launchButton = await databricksContainer.waitForSelector('button:has-text("Launch")');
        expect(await launchButton.isVisible()).toBe(true);
  
        // Take screenshot before clicking
        await mainWindow.screenshot({ path: 'test-results/before-databricks-click.png' });
  
        // Click the Launch button
        await launchButton.click();
  
        // Wait for chat interface to appear
        const chatTextarea = await mainWindow.waitForSelector('textarea[placeholder*="What can goose help with?"]',
          { timeout: 15000 });
        expect(await chatTextarea.isVisible()).toBe(true);
      } else {
        console.log('Provider already selected, skipping provider selection test');
      }
  
      // Take screenshot of current state
      await mainWindow.screenshot({ path: 'test-results/chat-interface.png' });
    });
  
    test('dark mode toggle', async () => {
      console.log('Testing dark mode toggle...');
  
      // Click the three dots menu button in the top right
      await mainWindow.waitForSelector('div[class*="bg-bgSubtle border-b border-borderSubtle"]');
      const menuButton = await mainWindow.waitForSelector('button:has(svg)', { timeout: 10000 });
      await menuButton.click();
  
      // Find and click the dark mode toggle button
      const darkModeButton = await mainWindow.waitForSelector('button:has-text("Dark Mode"), button:has-text("Light Mode")');
  
      // Get initial state
      const isDarkMode = await mainWindow.evaluate(() => document.documentElement.classList.contains('dark'));
      console.log('Initial dark mode state:', isDarkMode);
  
      // Click to toggle
      await darkModeButton.click();
  
      // Verify the change
      const newDarkMode = await mainWindow.evaluate(() => document.documentElement.classList.contains('dark'));
      expect(newDarkMode).toBe(!isDarkMode);
  
      // Take screenshot to verify
      await mainWindow.screenshot({ path: 'test-results/dark-mode-toggle.png' });
  
      // Toggle back to original state
      await darkModeButton.click();
  
      // Close menu with ESC key
      await mainWindow.keyboard.press('Escape');
    });
  
    test('new session and directory operations', async () => {
      console.log('Testing new session and directory operations...');
  
      // Get initial window count
      const initialWindows = await electronApp.windows();
      console.log('Initial window count:', initialWindows.length);
  
      // Test keyboard shortcut for new session (⌘N)
      await mainWindow.keyboard.press('Meta+N');
  
      // Wait and check for new window with retries
      console.log('Waiting for new window after keyboard shortcut...');
      let newWindow = null;
      let attempts = 0;
      const maxAttempts = 5;
  
      while (attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const windows = await electronApp.windows();
        console.log(`Attempt ${attempts + 1}: Current window count:`, windows.length);
  
        if (windows.length > initialWindows.length) {
          newWindow = windows[windows.length - 1];
          break;
        }
        attempts++;
      }
  
      if (!newWindow) {
        console.log('Failed to detect new window after keyboard shortcut');
      } else {
        // Take screenshot of new window
        await newWindow.screenshot({ path: 'test-results/new-session-shortcut.png' });
        await newWindow.close();
      }
  
      // Test UI button for new session
      const menuButton = await mainWindow.waitForSelector('button:has(svg)', { timeout: 10000 });
      await menuButton.click();
  
      const newSessionButton = await mainWindow.waitForSelector('button:has-text("New session")');
      await newSessionButton.click();
  
      // Wait and check for new window with retries
      console.log('Waiting for new window after button click...');
      let newestWindow = null;
      attempts = 0;
  
      while (attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const windows = await electronApp.windows();
        console.log(`Attempt ${attempts + 1}: Current window count:`, windows.length);
  
        if (windows.length > initialWindows.length) {
          newestWindow = windows[windows.length - 1];
          break;
        }
        attempts++;
      }
  
      if (!newestWindow) {
        console.log('Failed to detect new window after button click');
      } else {
        // Take screenshot of newest window
        await newestWindow.screenshot({ path: 'test-results/new-session-button.png' });
        await newestWindow.close();
      }
  
      // Switch back to main window for directory operations
      await mainWindow.bringToFront();
  
      // Test keyboard shortcut for open directory (⌘O)
      // Note: This will trigger system file dialog which we can't interact with in the test
      await mainWindow.keyboard.press('Meta+O');
  
      // Test UI button for changing directory
      await menuButton.click();
  
      const openDirButton = await mainWindow.waitForSelector('button:has-text("Open directory")');
      await openDirButton.click();
  
      // Take screenshot
      await mainWindow.screenshot({ path: 'test-results/directory-operations.png' });
    });
  });

  test.describe('Chat', () => {
    test('chat interaction', async () => {
      console.log('Testing chat interaction...');

      // Find the chat input
      const chatInput = await mainWindow.waitForSelector('textarea[placeholder*="What can goose help with?"]');
      expect(await chatInput.isVisible()).toBe(true);

      // Type a message
      await chatInput.fill('Hello, can you help me with a simple task?');

      // Take screenshot before sending
      await mainWindow.screenshot({ path: 'test-results/before-send.png' });

      // Get initial message count
      const initialMessages = await mainWindow.locator('.prose').count();

      // Send message
      await chatInput.press('Enter');

      // Wait for loading indicator to appear (using the specific class and text)
      console.log('Waiting for loading indicator...');
      const loadingGoose = await mainWindow.waitForSelector('.text-textStandard >> text="goose is working on it…"',
        { timeout: 10000 });
      expect(await loadingGoose.isVisible()).toBe(true);

      // Take screenshot of loading state
      await mainWindow.screenshot({ path: 'test-results/loading-state.png' });

      // Wait for loading indicator to disappear
      console.log('Waiting for response...');
      await mainWindow.waitForSelector('.text-textStandard >> text="goose is working on it…"',
        { state: 'hidden', timeout: 30000 });

      // Wait for new message to appear
      await mainWindow.waitForFunction((count) => {
        const messages = document.querySelectorAll('.prose');
        return messages.length > count;
      }, initialMessages, { timeout: 30000 });

      // Get the latest response
      const response = await mainWindow.locator('.prose').last();
      expect(await response.isVisible()).toBe(true);

      // Verify response has content
      const responseText = await response.textContent();
      expect(responseText).toBeTruthy();
      expect(responseText.length).toBeGreaterThan(0);

      // Take screenshot of response
      await mainWindow.screenshot({ path: 'test-results/chat-response.png' });
    });

    test('verify chat history', async () => {
      console.log('Testing chat history...');

      // Find the chat input again
      const chatInput = await mainWindow.waitForSelector('textarea[placeholder*="What can goose help with?"]');

      // Test message sending with a specific question
      await chatInput.fill('What is 2+2?');

      // Get initial message count
      const initialMessages = await mainWindow.locator('.prose').count();

      // Send message
      await chatInput.press('Enter');

      // Wait for loading indicator and response using the correct selector
      await mainWindow.waitForSelector('.text-textStandard >> text="goose is working on it…"', { timeout: 10000 });
      await mainWindow.waitForSelector('.text-textStandard >> text="goose is working on it…"',
        { state: 'hidden', timeout: 30000 });

      // Wait for new message
      await mainWindow.waitForFunction((count) => {
        const messages = document.querySelectorAll('.prose');
        return messages.length > count;
      }, initialMessages, { timeout: 30000 });

      // Get the latest response
      const response = await mainWindow.locator('.prose').last();
      const responseText = await response.textContent();
      expect(responseText).toBeTruthy();

      // Check for message history
      const messages = await mainWindow.locator('.prose').all();
      expect(messages.length).toBeGreaterThanOrEqual(2);

      // Take screenshot of chat history
      await mainWindow.screenshot({ path: 'test-results/chat-history.png' });

      // Test command history (up arrow)
      await chatInput.press('Control+ArrowUp');
      const inputValue = await chatInput.inputValue();
      expect(inputValue).toBe('What is 2+2?');
    });
  });

  test.describe('MCP Integration', () => {
    test('running quotes MCP server integration', async () => {
      console.log('Testing Running Quotes MCP server integration...');
  
      // Clean up any existing running-quotes extensions from localStorage
      await mainWindow.evaluate(() => {
        const USER_SETTINGS_KEY = 'user_settings';
        const settings = JSON.parse(localStorage.getItem(USER_SETTINGS_KEY) || '{"extensions":[]}');
        
        // Remove any running-quotes extensions
        settings.extensions = settings.extensions.filter(ext => ext.id !== 'running-quotes');
        
        // Save back to localStorage
        localStorage.setItem(USER_SETTINGS_KEY, JSON.stringify(settings));
        
        // Log the cleanup
        console.log('Cleaned up existing running-quotes extensions');
      });
  
      // Reload the page to ensure settings are fresh
      await mainWindow.reload();
      await mainWindow.waitForLoadState('networkidle');
  
      // Click the menu button (3 dots)
      const menuButton = await mainWindow.waitForSelector('button:has(svg)', { timeout: 10000 });
      await menuButton.click();
  
      // Click Advanced Settings
      const advancedSettingsButton = await mainWindow.waitForSelector('button:has-text("Advanced Settings")');
      await advancedSettingsButton.click();
  
      // Wait for settings page and take screenshot
      await mainWindow.screenshot({ path: 'test-results/mcp-settings-page.png' });
  
      // Click Add Custom Extension button and wait for modal
      const addExtensionButton = await mainWindow.waitForSelector('button:has-text("Add Custom Extension")');
      await addExtensionButton.click();
  
      // Wait for modal and form to be fully rendered
      await mainWindow.waitForSelector('form', { state: 'visible', timeout: 10000 });
      console.log('Form found, waiting for modal animation...');
      await mainWindow.waitForTimeout(1000); // Wait for modal animation
  
      try {
        // Fill ID (find by label text)
        console.log('Filling ID field...');
        await mainWindow.locator('label:has-text("ID *") + input[type="text"]').fill('running-quotes');
  
        // Fill Name (find by label text)
        console.log('Filling Name field...');
        await mainWindow.locator('label:has-text("Name *") + input[type="text"]').fill('Running Quotes');
  
        // Fill Description (find by label text)
        console.log('Filling Description field...');
        await mainWindow.locator('label:has-text("Description *") + input[type="text"]').fill('Inspirational running quotes MCP server');
  
        // Fill Command (find by label text and placeholder)
        console.log('Filling Command field...');
        const mcpScriptPath = join(__dirname, 'basic-mcp.ts');
        await mainWindow.locator('label:has-text("Command *") + input[placeholder="e.g. goosed mcp example"]')
          .fill(`node ${mcpScriptPath}`);
  
        // Take screenshot of filled form
        await mainWindow.screenshot({ path: 'test-results/mcp-form-filled.png' });
  
        // Add a delay to inspect the form
        console.log('Waiting 5 seconds to inspect form...');
        await mainWindow.waitForTimeout(5000);
  
        // Click Add button (it's a submit button)
        console.log('Clicking Add button...');
        await mainWindow.locator('button[type="submit"]').click();
  
        // Wait for success toast and take screenshot
        await mainWindow.waitForSelector('.Toastify__toast-body div div:has-text("Successfully enabled extension")',
          { state: 'visible', timeout: 10000 });
        await mainWindow.screenshot({ path: 'test-results/mcp-extension-added.png' });
        console.log('Extension added successfully');
  
        // Click Exit button to return to chat
        const exitButton = await mainWindow.waitForSelector('button:has-text("Exit")', { timeout: 5000 });
        await exitButton.click();
  
      } catch (error) {
        // Take error screenshot
        await mainWindow.screenshot({ path: 'test-results/mcp-form-error.png' });
        console.error('Error during form filling:', error);
        throw error;
      }
    });
  
    test('test running quotes functionality', async () => {
      console.log('Testing running quotes functionality...');
  
      // Find the chat input
      const chatInput = await mainWindow.waitForSelector('textarea[placeholder*="What can goose help with?"]');
      expect(await chatInput.isVisible()).toBe(true);
  
      // Type a message requesting a running quote
      await chatInput.fill('Can you give me an inspirational running quote using the runningQuote tool?');
  
      // Take screenshot before sending
      await mainWindow.screenshot({ path: 'test-results/before-quote-request.png' });
  
      // Get initial message count
      const initialMessages = await mainWindow.locator('.prose').count();
  
      // Send message
      await chatInput.press('Enter');
  
      // Wait for loading indicator
      const loadingIndicator = await mainWindow.waitForSelector('.text-textStandard >> text="goose is working on it…"',
        { timeout: 10000 });
      expect(await loadingIndicator.isVisible()).toBe(true);
  
      // Take screenshot of loading state
      await mainWindow.screenshot({ path: 'test-results/quote-loading.png' });
  
      // Wait for loading indicator to disappear
      await mainWindow.waitForSelector('.text-textStandard >> text="goose is working on it…"',
        { state: 'hidden', timeout: 30000 });
  
      // Wait for new message to appear
      await mainWindow.waitForFunction((count) => {
        const messages = document.querySelectorAll('.prose');
        return messages.length > count;
      }, initialMessages, { timeout: 30000 });
  
      // Get the latest response
      const response = await mainWindow.locator('.prose').last();
      expect(await response.isVisible()).toBe(true);
  
      // Click the Output dropdown to reveal the actual quote
      const outputButton = await mainWindow.waitForSelector('button:has-text("Output")', { timeout: 5000 });
      await outputButton.click();
  
      // Wait a bit and dump HTML to see structure
      await mainWindow.waitForTimeout(1000);
      const html = await mainWindow.evaluate(() => document.documentElement.outerHTML);
      console.log('Full page HTML after clicking Output:', html);
  
      // Also dump just the response area HTML
      const responseHtml = await response.evaluate(el => el.outerHTML);
      console.log('Response area HTML:', responseHtml);
  
      // Take screenshot before trying to find content
      await mainWindow.screenshot({ path: 'test-results/quote-response-debug.png' });
  
      // Now try to get the output content
      const outputContent = await mainWindow.waitForSelector('.whitespace-pre-wrap', { timeout: 5000 });
      const outputText = await outputContent.textContent();
      console.log('Output text:', outputText);
  
      // Take screenshot of expanded response
      await mainWindow.screenshot({ path: 'test-results/quote-response.png' });
  
      // Check if the output contains one of our known quotes
      const containsKnownQuote = runningQuotes.some(({ quote, author }) => 
        outputText.includes(`"${quote}" - ${author}`)
      );
      expect(containsKnownQuote).toBe(true);
    });
  });
});