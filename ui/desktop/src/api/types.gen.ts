// This file is auto-generated by @hey-api/openapi-ts

export type ConfigKey = {
    default?: string | null;
    name: string;
    required: boolean;
    secret: boolean;
};

export type ConfigKeyQuery = {
    is_secret: boolean;
    key: string;
};

export type ConfigResponse = {
    config: {};
};

export type Envs = {
    [key: string]: string;
};

/**
 * Represents the different types of MCP extensions that can be added to the manager
 */
export type ExtensionConfig = {
    description?: string | null;
    envs?: Envs;
    /**
     * The name used to identify this extension
     */
    name: string;
    timeout?: number | null;
    type: 'sse';
    uri: string;
} | {
    args: Array<string>;
    cmd: string;
    description?: string | null;
    envs?: Envs;
    /**
     * The name used to identify this extension
     */
    name: string;
    timeout?: number | null;
    type: 'stdio';
} | {
    display_name?: string | null;
    /**
     * The name used to identify this extension
     */
    name: string;
    timeout?: number | null;
    type: 'builtin';
} | {
    /**
     * Instructions for how to use these tools
     */
    instructions?: string | null;
    /**
     * The name used to identify this extension
     */
    name: string;
    /**
     * The tools provided by the frontend
     */
    tools: Array<Tool>;
    type: 'frontend';
};

export type ExtensionEntry = ExtensionConfig & {
    type?: 'ExtensionEntry';
} & {
    enabled: boolean;
};

export type ExtensionQuery = {
    config: ExtensionConfig;
    enabled: boolean;
    name: string;
};

export type ExtensionResponse = {
    extensions: Array<ExtensionEntry>;
};

/**
 * Enum representing the possible permission levels for a tool.
 */
export type PermissionLevel = 'always_allow' | 'ask_before' | 'never_allow';

export type ProviderDetails = {
    /**
     * Indicates whether the provider is fully configured
     */
    is_configured: boolean;
    metadata: ProviderMetadata;
    /**
     * Unique identifier and name of the provider
     */
    name: string;
};

/**
 * Metadata about a provider's configuration requirements and capabilities
 */
export type ProviderMetadata = {
    /**
     * Required configuration keys
     */
    config_keys: Array<ConfigKey>;
    /**
     * The default/recommended model for this provider
     */
    default_model: string;
    /**
     * Description of the provider's capabilities
     */
    description: string;
    /**
     * Display name for the provider in UIs
     */
    display_name: string;
    /**
     * A list of currently known models
     * TODO: eventually query the apis directly
     */
    known_models: Array<string>;
    /**
     * Link to the docs where models can be found
     */
    model_doc_link: string;
    /**
     * The unique identifier for this provider
     */
    name: string;
};

export type ProvidersResponse = {
    providers: Array<ProviderDetails>;
};

/**
 * A tool that can be used by a model.
 */
export type Tool = {
    annotations?: ToolAnnotations | null;
    /**
     * A description of what the tool does
     */
    description: string;
    /**
     * A JSON Schema object defining the expected parameters for the tool
     */
    inputSchema: unknown;
    /**
     * The name of the tool
     */
    name: string;
};

/**
 * Additional properties describing a tool to clients.
 *
 * NOTE: all properties in ToolAnnotations are **hints**.
 * They are not guaranteed to provide a faithful description of
 * tool behavior (including descriptive properties like `title`).
 *
 * Clients should never make tool use decisions based on ToolAnnotations
 * received from untrusted servers.
 */
export type ToolAnnotations = {
    /**
     * If true, the tool may perform destructive updates to its environment.
     * If false, the tool performs only additive updates.
     *
     * (This property is meaningful only when `read_only_hint == false`)
     *
     * Default: true
     */
    destructiveHint?: boolean;
    /**
     * If true, calling the tool repeatedly with the same arguments
     * will have no additional effect on its environment.
     *
     * (This property is meaningful only when `read_only_hint == false`)
     *
     * Default: false
     */
    idempotentHint?: boolean;
    /**
     * If true, this tool may interact with an "open world" of external
     * entities. If false, the tool's domain of interaction is closed.
     * For example, the world of a web search tool is open, whereas that
     * of a memory tool is not.
     *
     * Default: true
     */
    openWorldHint?: boolean;
    /**
     * If true, the tool does not modify its environment.
     *
     * Default: false
     */
    readOnlyHint?: boolean;
    /**
     * A human-readable title for the tool.
     */
    title?: string | null;
};

/**
 * Information about the tool used for building prompts
 */
export type ToolInfo = {
    description: string;
    name: string;
    parameters: Array<string>;
    permission?: PermissionLevel | null;
};

export type UpsertConfigQuery = {
    is_secret: boolean;
    key: string;
    value: unknown;
};

export type GetToolsData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Optional extension name to filter tools
         */
        extension_name?: string | null;
    };
    url: '/agent/tools';
};

export type GetToolsErrors = {
    /**
     * Unauthorized - invalid secret key
     */
    401: unknown;
    /**
     * Agent not initialized
     */
    424: unknown;
    /**
     * Internal server error
     */
    500: unknown;
};

export type GetToolsResponses = {
    /**
     * Tools retrieved successfully
     */
    200: Array<Tool>;
};

export type GetToolsResponse = GetToolsResponses[keyof GetToolsResponses];

export type ReadAllConfigData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/config';
};

export type ReadAllConfigResponses = {
    /**
     * All configuration values retrieved successfully
     */
    200: ConfigResponse;
};

export type ReadAllConfigResponse = ReadAllConfigResponses[keyof ReadAllConfigResponses];

export type GetExtensionsData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/config/extensions';
};

export type GetExtensionsErrors = {
    /**
     * Internal server error
     */
    500: unknown;
};

export type GetExtensionsResponses = {
    /**
     * All extensions retrieved successfully
     */
    200: ExtensionResponse;
};

export type GetExtensionsResponse = GetExtensionsResponses[keyof GetExtensionsResponses];

export type AddExtensionData = {
    body: ExtensionQuery;
    path?: never;
    query?: never;
    url: '/config/extensions';
};

export type AddExtensionErrors = {
    /**
     * Invalid request
     */
    400: unknown;
    /**
     * Could not serialize config.yaml
     */
    422: unknown;
    /**
     * Internal server error
     */
    500: unknown;
};

export type AddExtensionResponses = {
    /**
     * Extension added or updated successfully
     */
    200: string;
};

export type AddExtensionResponse = AddExtensionResponses[keyof AddExtensionResponses];

export type RemoveExtensionData = {
    body?: never;
    path: {
        name: string;
    };
    query?: never;
    url: '/config/extensions/{name}';
};

export type RemoveExtensionErrors = {
    /**
     * Extension not found
     */
    404: unknown;
    /**
     * Internal server error
     */
    500: unknown;
};

export type RemoveExtensionResponses = {
    /**
     * Extension removed successfully
     */
    200: string;
};

export type RemoveExtensionResponse = RemoveExtensionResponses[keyof RemoveExtensionResponses];

export type InitConfigData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/config/init';
};

export type InitConfigErrors = {
    /**
     * Internal server error
     */
    500: unknown;
};

export type InitConfigResponses = {
    /**
     * Config initialization check completed
     */
    200: string;
};

export type InitConfigResponse = InitConfigResponses[keyof InitConfigResponses];

export type ProvidersData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/config/providers';
};

export type ProvidersResponses = {
    /**
     * All configuration values retrieved successfully
     */
    200: Array<ProviderDetails>;
};

export type ProvidersResponse2 = ProvidersResponses[keyof ProvidersResponses];

export type ReadConfigData = {
    body: ConfigKeyQuery;
    path?: never;
    query?: never;
    url: '/config/read';
};

export type ReadConfigErrors = {
    /**
     * Configuration key not found
     */
    404: unknown;
};

export type ReadConfigResponses = {
    /**
     * Configuration value retrieved successfully
     */
    200: unknown;
};

export type RemoveConfigData = {
    body: ConfigKeyQuery;
    path?: never;
    query?: never;
    url: '/config/remove';
};

export type RemoveConfigErrors = {
    /**
     * Configuration key not found
     */
    404: unknown;
    /**
     * Internal server error
     */
    500: unknown;
};

export type RemoveConfigResponses = {
    /**
     * Configuration value removed successfully
     */
    200: string;
};

export type RemoveConfigResponse = RemoveConfigResponses[keyof RemoveConfigResponses];

export type UpsertConfigData = {
    body: UpsertConfigQuery;
    path?: never;
    query?: never;
    url: '/config/upsert';
};

export type UpsertConfigErrors = {
    /**
     * Internal server error
     */
    500: unknown;
};

export type UpsertConfigResponses = {
    /**
     * Configuration value upserted successfully
     */
    200: string;
};

export type UpsertConfigResponse = UpsertConfigResponses[keyof UpsertConfigResponses];

export type ClientOptions = {
    baseUrl: `${string}://${string}` | (string & {});
};