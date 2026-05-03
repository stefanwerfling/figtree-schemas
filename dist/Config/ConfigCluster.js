import { Vts } from 'vts';
export var ENV_CLUSTER;
(function (ENV_CLUSTER) {
    ENV_CLUSTER["CLUSTER_ENABLED"] = "CLUSTER_ENABLED";
    ENV_CLUSTER["CLUSTER_WORKERS"] = "CLUSTER_WORKERS";
    ENV_CLUSTER["CLUSTER_SHUTDOWN_TIMEOUT_MS"] = "CLUSTER_SHUTDOWN_TIMEOUT_MS";
    ENV_CLUSTER["CLUSTER_SHARED_STORE_TYPE"] = "CLUSTER_SHARED_STORE_TYPE";
    ENV_CLUSTER["CLUSTER_SHARED_STORE_NAMESPACE"] = "CLUSTER_SHARED_STORE_NAMESPACE";
})(ENV_CLUSTER || (ENV_CLUSTER = {}));
export var ClusterSharedStoreType;
(function (ClusterSharedStoreType) {
    ClusterSharedStoreType["IPC"] = "ipc";
    ClusterSharedStoreType["Redis"] = "redis";
})(ClusterSharedStoreType || (ClusterSharedStoreType = {}));
export const SchemaConfigClusterRespawn = Vts.object({
    backoffMs: Vts.optional(Vts.array(Vts.number({ description: 'sequence of delays in ms for successive crashes within a window. The last value is reused once the index exceeds the array length.                                                                                                                                                                                                                              Default [0, 1000, 5000, 15000, 30000].' }))),
    maxPerWindow: Vts.optional(Vts.number({ description: 'if more than this many crashes happen within `windowMs`, the cluster halts (process.exit(1)). Default 5.' })),
    windowMs: Vts.optional(Vts.number({ description: 'rolling window for the circuit breaker. Default 60000.' })),
}, {
    description: '',
});
export const SchemaConfigClusterSharedStore = Vts.object({
    type: Vts.enum(ClusterSharedStoreType),
    namespace: Vts.optional(Vts.string({ description: 'key namespace prefix (default \'sharedstore\').' })),
}, {
    description: '',
});
export const SchemaConfigClusterRoles = Vts.object2(Vts.string(), Vts.number());
export const SchemaConfigCluster = Vts.object({
    enabled: Vts.optional(Vts.boolean({ description: 'master switch - if false (or omitted) the backend runs single-process. Default false.' })),
    workers: Vts.optional(Vts.number({ description: 'total worker count when no roles are configured. Defaults to os.cpus().length on the consumer side. Ignored when `roles` is set.' })),
    roles: Vts.optional(SchemaConfigClusterRoles),
    shutdownTimeoutMs: Vts.optional(Vts.number({ description: 'time (ms) the master waits for workers to exit gracefully  before SIGKILL. Should be larger than the worker-side shutdown timeout. Default 15000.' })),
    shutdownSignals: Vts.optional(Vts.array(Vts.string({ description: 'process signals that trigger a graceful cluster shutdown. Default [\'SIGTERM\', \'SIGINT\'].' }))),
    respawn: Vts.optional(SchemaConfigClusterRespawn),
    sharedStore: Vts.optional(SchemaConfigClusterSharedStore),
}, {
    description: '',
});
//# sourceMappingURL=ConfigCluster.js.map