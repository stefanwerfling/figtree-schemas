import {ExtractSchemaResultType, Vts} from 'vts';

/**
 * Enum ENV_CLUSTER
 */
export enum ENV_CLUSTER {
    'CLUSTER_ENABLED' = 'CLUSTER_ENABLED',
    'CLUSTER_WORKERS' = 'CLUSTER_WORKERS',
    'CLUSTER_SHUTDOWN_TIMEOUT_MS' = 'CLUSTER_SHUTDOWN_TIMEOUT_MS',
    'CLUSTER_SHARED_STORE_TYPE' = 'CLUSTER_SHARED_STORE_TYPE',
    'CLUSTER_SHARED_STORE_NAMESPACE' = 'CLUSTER_SHARED_STORE_NAMESPACE',
}

/**
 * Enum ClusterSharedStoreType
 */
export enum ClusterSharedStoreType {
    'IPC' = 'ipc',
    'Redis' = 'redis',
}

/**
 * Schema of ConfigClusterRespawn
 */
export const SchemaConfigClusterRespawn = Vts.object({
    backoffMs: Vts.optional(Vts.array(Vts.number({description: 'sequence of delays in ms for successive crashes within a window. The last value is reused once the index exceeds the array length.                                                                                                                                                                                                                              Default [0, 1000, 5000, 15000, 30000].'}))),
    maxPerWindow: Vts.optional(Vts.number({description: 'if more than this many crashes happen within `windowMs`, the cluster halts (process.exit(1)). Default 5.'})),
    windowMs: Vts.optional(Vts.number({description: 'rolling window for the circuit breaker. Default 60000.'})),
}, {
    description: '',
});

/**
 * Type of schema ConfigClusterRespawn
 */
export type ConfigClusterRespawn = ExtractSchemaResultType<typeof SchemaConfigClusterRespawn>;

/**
 * Schema of ConfigClusterSharedStore
 */
export const SchemaConfigClusterSharedStore = Vts.object({
    type: Vts.enum(ClusterSharedStoreType),
    namespace: Vts.optional(Vts.string({description: 'key namespace prefix (default \'sharedstore\').'})),
}, {
    description: '',
});

/**
 * Type of schema ConfigClusterSharedStore
 */
export type ConfigClusterSharedStore = ExtractSchemaResultType<typeof SchemaConfigClusterSharedStore>;

/**
 * Schema of ConfigClusterRoles
 */
export const SchemaConfigClusterRoles = Vts.object2(Vts.string(), Vts.number());

/**
 * Type of schema ConfigClusterRoles
 */
export type ConfigClusterRoles = ExtractSchemaResultType<typeof SchemaConfigClusterRoles>;

/**
 * Schema of ConfigCluster
 */
export const SchemaConfigCluster = Vts.object({
    enabled: Vts.optional(Vts.boolean({description: 'master switch - if false (or omitted) the backend runs single-process. Default false.'})),
    workers: Vts.optional(Vts.number({description: 'total worker count when no roles are configured. Defaults to os.cpus().length on the consumer side. Ignored when `roles` is set.'})),
    roles: Vts.optional(SchemaConfigClusterRoles),
    shutdownTimeoutMs: Vts.optional(Vts.number({description: 'time (ms) the master waits for workers to exit gracefully  before SIGKILL. Should be larger than the worker-side shutdown timeout. Default 15000.'})),
    shutdownSignals: Vts.optional(Vts.array(Vts.string({description: 'process signals that trigger a graceful cluster shutdown. Default [\'SIGTERM\', \'SIGINT\'].'}))),
    respawn: Vts.optional(SchemaConfigClusterRespawn),
    sharedStore: Vts.optional(SchemaConfigClusterSharedStore),
}, {
    description: '',
});

/**
 * Type of schema ConfigCluster
 */
export type ConfigCluster = ExtractSchemaResultType<typeof SchemaConfigCluster>;