import { ExtractSchemaResultType } from 'vts';
export declare const SchemaServiceStatusResponse: import("vts").ObjectSchema<{
    statusCode: import("vts").OrSchema<import("vts").StringSchema<import("vts").StringSchemaOptions> | import("vts").EnumSchema<import("./StatusCodes.js").StatusCodes>>;
    msg: import("vts").OptionalSchema<import("vts").StringSchema<import("vts").StringSchemaOptions>>;
} & {
    services: import("vts").OptionalSchema<import("vts").ArraySchema<import("vts").ObjectSchema<{
        type: import("vts").EnumSchema<import("../../Service/ServiceInfoEntry.js").ServiceType>;
        name: import("vts").StringSchema<import("vts").StringSchemaOptions>;
        status: import("vts").EnumSchema<import("../../Service/ServiceInfoEntry.js").ServiceStatus>;
        statusMsg: import("vts").StringSchema<import("vts").StringSchemaOptions>;
        importance: import("vts").EnumSchema<import("../../Service/ServiceInfoEntry.js").ServiceImportance>;
        inProcess: import("vts").BooleanSchema;
        dependencies: import("vts").ArraySchema<import("vts").StringSchema<import("vts").StringSchemaOptions>>;
        startedAt: import("vts").OrSchema<import("vts").NullSchema | import("vts").StringSchema<import("vts").StringSchemaOptions>>;
        restartCount: import("vts").NumberSchema;
        logBufferActive: import("vts").BooleanSchema;
        scheduler: import("vts").OptionalSchema<import("vts").ObjectSchema<{
            status: import("vts").EnumSchema<import("../../Service/ServiceInfoEntry.js").ServiceStatus>;
            inProcess: import("vts").BooleanSchema;
            lastRun: import("vts").OrSchema<import("vts").NullSchema | import("vts").StringSchema<import("vts").StringSchemaOptions>>;
            lastSuccessAt: import("vts").OrSchema<import("vts").NullSchema | import("vts").StringSchema<import("vts").StringSchemaOptions>>;
            nextRun: import("vts").OrSchema<import("vts").NullSchema | import("vts").StringSchema<import("vts").StringSchemaOptions>>;
            lastDurationMs: import("vts").OrSchema<import("vts").NullSchema | import("vts").NumberSchema>;
            runCount: import("vts").NumberSchema;
            failCount: import("vts").NumberSchema;
            cron: import("vts").StringSchema<import("vts").StringSchemaOptions>;
        }>>;
    }>>>;
}>;
export type ServiceStatusResponse = ExtractSchemaResultType<typeof SchemaServiceStatusResponse>;
export declare const SchemaServiceByNameRequest: import("vts").ObjectSchema<{
    name: import("vts").StringSchema<import("vts").StringSchemaOptions>;
}>;
export type ServiceByNameRequest = ExtractSchemaResultType<typeof SchemaServiceByNameRequest>;
export declare const SchemaServiceLogStartRequest: import("vts").ObjectSchema<{
    name: import("vts").StringSchema<import("vts").StringSchemaOptions>;
    maxLines: import("vts").OptionalSchema<import("vts").NumberSchema>;
}>;
export type ServiceLogStartRequest = ExtractSchemaResultType<typeof SchemaServiceLogStartRequest>;
export declare const SchemaServiceLogResponse: import("vts").ObjectSchema<{
    statusCode: import("vts").OrSchema<import("vts").StringSchema<import("vts").StringSchemaOptions> | import("vts").EnumSchema<import("./StatusCodes.js").StatusCodes>>;
    msg: import("vts").OptionalSchema<import("vts").StringSchema<import("vts").StringSchemaOptions>>;
} & {
    active: import("vts").OptionalSchema<import("vts").BooleanSchema>;
    maxLines: import("vts").OptionalSchema<import("vts").NumberSchema>;
    lines: import("vts").OptionalSchema<import("vts").ArraySchema<import("vts").ObjectSchema<{
        ts: import("vts").StringSchema<import("vts").StringSchemaOptions>;
        level: import("vts").EnumSchema<import("../../Service/ServiceLog.js").ServiceLogLevel>;
        msg: import("vts").StringSchema<import("vts").StringSchemaOptions>;
    }>>>;
}>;
export type ServiceLogResponse = ExtractSchemaResultType<typeof SchemaServiceLogResponse>;
