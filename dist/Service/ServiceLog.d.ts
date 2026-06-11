import { ExtractSchemaResultType } from 'vts';
export declare enum ServiceLogLevel {
    'error' = "error",
    'warn' = "warn",
    'info' = "info",
    'debug' = "debug"
}
export declare const SchemaServiceLogEntry: import("vts").ObjectSchema<{
    ts: import("vts").StringSchema<import("vts").StringSchemaOptions>;
    level: import("vts").EnumSchema<ServiceLogLevel>;
    msg: import("vts").StringSchema<import("vts").StringSchemaOptions>;
}>;
export type ServiceLogEntry = ExtractSchemaResultType<typeof SchemaServiceLogEntry>;
