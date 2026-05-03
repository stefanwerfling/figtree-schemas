import { ExtractSchemaResultType } from 'vts';
export declare enum ENV_CLUSTER {
    'CLUSTER_ENABLED' = "CLUSTER_ENABLED",
    'CLUSTER_WORKERS' = "CLUSTER_WORKERS",
    'CLUSTER_SHUTDOWN_TIMEOUT_MS' = "CLUSTER_SHUTDOWN_TIMEOUT_MS",
    'CLUSTER_SHARED_STORE_TYPE' = "CLUSTER_SHARED_STORE_TYPE",
    'CLUSTER_SHARED_STORE_NAMESPACE' = "CLUSTER_SHARED_STORE_NAMESPACE"
}
export declare enum ClusterSharedStoreType {
    'IPC' = "ipc",
    'Redis' = "redis"
}
export declare const SchemaConfigClusterRespawn: import("vts").ObjectSchema<{
    backoffMs: import("vts").OptionalSchema<import("vts").ArraySchema<import("vts").NumberSchema>>;
    maxPerWindow: import("vts").OptionalSchema<import("vts").NumberSchema>;
    windowMs: import("vts").OptionalSchema<import("vts").NumberSchema>;
}>;
export type ConfigClusterRespawn = ExtractSchemaResultType<typeof SchemaConfigClusterRespawn>;
export declare const SchemaConfigClusterSharedStore: import("vts").ObjectSchema<{
    type: import("vts").EnumSchema<ClusterSharedStoreType>;
    namespace: import("vts").OptionalSchema<import("vts").StringSchema<import("vts").StringSchemaOptions>>;
}>;
export type ConfigClusterSharedStore = ExtractSchemaResultType<typeof SchemaConfigClusterSharedStore>;
export declare const SchemaConfigClusterRoles: import("vts").Object2Schema<import("vts").StringSchema<import("vts").StringSchemaOptions>, import("vts").NumberSchema>;
export type ConfigClusterRoles = ExtractSchemaResultType<typeof SchemaConfigClusterRoles>;
export declare const SchemaConfigCluster: import("vts").ObjectSchema<{
    enabled: import("vts").OptionalSchema<import("vts").BooleanSchema>;
    workers: import("vts").OptionalSchema<import("vts").NumberSchema>;
    roles: import("vts").OptionalSchema<import("vts").Object2Schema<import("vts").StringSchema<import("vts").StringSchemaOptions>, import("vts").NumberSchema>>;
    shutdownTimeoutMs: import("vts").OptionalSchema<import("vts").NumberSchema>;
    shutdownSignals: import("vts").OptionalSchema<import("vts").ArraySchema<import("vts").StringSchema<import("vts").StringSchemaOptions>>>;
    respawn: import("vts").OptionalSchema<import("vts").ObjectSchema<{
        backoffMs: import("vts").OptionalSchema<import("vts").ArraySchema<import("vts").NumberSchema>>;
        maxPerWindow: import("vts").OptionalSchema<import("vts").NumberSchema>;
        windowMs: import("vts").OptionalSchema<import("vts").NumberSchema>;
    }>>;
    sharedStore: import("vts").OptionalSchema<import("vts").ObjectSchema<{
        type: import("vts").EnumSchema<ClusterSharedStoreType>;
        namespace: import("vts").OptionalSchema<import("vts").StringSchema<import("vts").StringSchemaOptions>>;
    }>>;
}>;
export type ConfigCluster = ExtractSchemaResultType<typeof SchemaConfigCluster>;
