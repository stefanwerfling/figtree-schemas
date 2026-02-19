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
        scheduler: import("vts").OptionalSchema<import("vts").ObjectSchema<{
            status: import("vts").EnumSchema<import("../../Service/ServiceInfoEntry.js").ServiceStatus>;
            inProcess: import("vts").BooleanSchema;
            lastRun: import("vts").OrSchema<import("vts").StringSchema<import("vts").StringSchemaOptions> | import("vts").NullSchema>;
            cron: import("vts").StringSchema<import("vts").StringSchemaOptions>;
        }>>;
    }>>>;
}>;
export type ServiceStatusResponse = ExtractSchemaResultType<typeof SchemaServiceStatusResponse>;
export declare const SchemaServiceByNameRequest: import("vts").ObjectSchema<{
    name: import("vts").StringSchema<import("vts").StringSchemaOptions>;
}>;
export type ServiceByNameRequest = ExtractSchemaResultType<typeof SchemaServiceByNameRequest>;
