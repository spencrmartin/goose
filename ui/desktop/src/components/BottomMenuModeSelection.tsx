import React, { useEffect, useRef, useState } from 'react';
import { getApiUrl, getSecretKey } from '../config';
import { Settings, AutoMode, ChatMode } from './icons';
import {
  all_goose_modes,
  filterGooseModes,
  ModeSelectionItem,
} from './settings/basic/ModeSelectionItem';
import { useConfig } from './ConfigContext';
import { settingsV2Enabled } from '../flags';

export const BottomMenuModeSelection = () => {
  const [isGooseModeMenuOpen, setIsGooseModeMenuOpen] = useState(false);
  const [gooseMode, setGooseMode] = useState('auto');
  const [previousApproveModel, setPreviousApproveModel] = useState('');
  const gooseModeDropdownRef = useRef<HTMLDivElement>(null);
  const { read, upsert } = useConfig();

  useEffect(() => {
    const fetchCurrentMode = async () => {
      try {
        if (!settingsV2Enabled) {
          const response = await fetch(getApiUrl('/configs/get?key=GOOSE_MODE'), {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-Secret-Key': getSecretKey(),
            },
          });

          if (response.ok) {
            const { value } = await response.json();
            if (value) {
              setGooseMode(value);
            }
          }
        } else {
          const mode = (await read('GOOSE_MODE', false)) as string;
          setGooseMode(mode);
        }
      } catch (error) {
        console.error('Error fetching current mode:', error);
      }
    };

    fetchCurrentMode();
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsGooseModeMenuOpen(false);
      }
    };

    if (isGooseModeMenuOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isGooseModeMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        gooseModeDropdownRef.current &&
        !gooseModeDropdownRef.current.contains(event.target as Node)
      ) {
        setIsGooseModeMenuOpen(false);
      }
    };

    if (isGooseModeMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isGooseModeMenuOpen]);

  const handleModeChange = async (newMode: string) => {
    if (gooseMode === newMode) {
      return;
    }

    try {
      if (!settingsV2Enabled) {
        const storeResponse = await fetch(getApiUrl('/configs/store'), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Secret-Key': getSecretKey(),
          },
          body: JSON.stringify({
            key: 'GOOSE_MODE',
            value: newMode,
            isSecret: false,
          }),
        });

        if (!storeResponse.ok) {
          const errorText = await storeResponse.text();
          console.error('Store response error:', errorText);
          throw new Error(`Failed to store new goose mode: ${newMode}`);
        }
      } else {
        await upsert('GOOSE_MODE', newMode, false);
      }

      if (gooseMode.includes('approve')) {
        setPreviousApproveModel(gooseMode);
      }
      setGooseMode(newMode);
      setIsGooseModeMenuOpen(false); // Close the menu after selection
    } catch (error) {
      console.error('Error changing mode:', error);
    }
  };

  const getIconForMode = () => {
    switch (gooseMode) {
      case 'auto':
        return <AutoMode className="text-textSubtle hover:text-textStandard w-4 h-4" />;
      case 'chat':
        return <ChatMode className="text-textSubtle hover:text-textStandard w-4 h-4" />;
      default:
        return <Settings className="text-textSubtle hover:text-textStandard w-4 h-4" />;
    }
  };

  return (
    <div className="relative flex items-center min-w-[24px]" ref={gooseModeDropdownRef}>
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsGooseModeMenuOpen(!isGooseModeMenuOpen)}
      >
        {getIconForMode()}
      </div>

      {/* Dropdown Menu */}
      {isGooseModeMenuOpen && (
        <div className="absolute bottom-[24px] left-0 w-[240px] bg-bgApp rounded-lg border border-borderSubtle z-50 shadow-lg">
          <div>
            {filterGooseModes(gooseMode, all_goose_modes, previousApproveModel).map((mode) => (
              <ModeSelectionItem
                key={mode.key}
                mode={mode}
                currentMode={gooseMode}
                showDescription={false}
                isApproveModeConfigure={false}
                handleModeChange={handleModeChange}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
