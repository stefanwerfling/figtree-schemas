import { ExtractSchemaResultType } from 'vts';
export declare enum ServiceType {
    'runner' = "0",
    'scheduler' = "1"
}
export declare enum ServiceStatus {
    'None' = "none",
    'Progress' = "progress",
    'Success' = "success",
    'Error' = "error"
}
export declare enum ServiceImportance {
    'Optional' = "0",
    'Important' = "1",
    'Critical' = "2"
}
export declare const SchemaServiceInfoScheduler: import("vts").ObjectSchema<{
    status: import("vts").EnumSchema<ServiceStatus>;
    inProcess: import("vts").BooleanSchema;
    lastRun: import("vts").OrSchema<import("vts").NullSchema | import("vts").StringSchema<import("vts").StringSchemaOptions>>;
    lastSuccessAt: import("vts").OrSchema<import("vts").NullSchema | import("vts").StringSchema<import("vts").StringSchemaOptions>>;
    nextRun: import("vts").OrSchema<import("vts").NullSchema | import("vts").StringSchema<import("vts").StringSchemaOptions>>;
    lastDurationMs: import("vts").OrSchema<import("vts").NullSchema | import("vts").NumberSchema>;
    runCount: import("vts").NumberSchema;
    failCount: import("vts").NumberSchema;
    cron: import("vts").StringSchema<import("vts").StringSchemaOptions>;
}>;
export type ServiceInfoScheduler = ExtractSchemaResultType<typeof SchemaServiceInfoScheduler>;
export declare const SchemaServiceInfoEntry: import("vts").ObjectSchema<{
    type: import("vts").EnumSchema<ServiceType>;
    name: import("vts").StringSchema<import("vts").StringSchemaOptions>;
    status: import("vts").EnumSchema<ServiceStatus>;
    statusMsg: import("vts").StringSchema<import("vts").StringSchemaOptions>;
    importance: import("vts").EnumSchema<ServiceImportance>;
    inProcess: import("vts").BooleanSchema;
    dependencies: import("vts").ArraySchema<import("vts").StringSchema<import("vts").StringSchemaOptions>>;
    startedAt: import("vts").OrSchema<import("vts").NullSchema | import("vts").StringSchema<import("vts").StringSchemaOptions>>;
    restartCount: import("vts").NumberSchema;
    logBufferActive: import("vts").BooleanSchema;
    scheduler: import("vts").OptionalSchema<import("vts").ObjectSchema<{
        status: import("vts").EnumSchema<ServiceStatus>;
        inProcess: import("vts").BooleanSchema;
        lastRun: import("vts").OrSchema<import("vts").NullSchema | import("vts").StringSchema<import("vts").StringSchemaOptions>>;
        lastSuccessAt: import("vts").OrSchema<import("vts").NullSchema | import("vts").StringSchema<import("vts").StringSchemaOptions>>;
        nextRun: import("vts").OrSchema<import("vts").NullSchema | import("vts").StringSchema<import("vts").StringSchemaOptions>>;
        lastDurationMs: import("vts").OrSchema<import("vts").NullSchema | import("vts").NumberSchema>;
        runCount: import("vts").NumberSchema;
        failCount: import("vts").NumberSchema;
        cron: import("vts").StringSchema<import("vts").StringSchemaOptions>;
    }>>;
}>;
export type ServiceInfoEntry = ExtractSchemaResultType<typeof SchemaServiceInfoEntry>;
