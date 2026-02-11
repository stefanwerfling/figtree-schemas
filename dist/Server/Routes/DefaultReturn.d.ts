import { ExtractSchemaResultType } from 'vts';
import { StatusCodes } from './StatusCodes.js';
export declare enum HandlerResultType {
    'json' = "json",
    'empty' = "empty",
    'handled' = "handled"
}
export declare const SchemaDefaultReturn: import("vts").ObjectSchema<{
    statusCode: import("vts").OrSchema<import("vts").StringSchema<import("vts").StringSchemaOptions> | import("vts").EnumSchema<StatusCodes>>;
    msg: import("vts").OptionalSchema<import("vts").StringSchema<import("vts").StringSchemaOptions>>;
}>;
export type DefaultReturn = ExtractSchemaResultType<typeof SchemaDefaultReturn>;
export declare const SchemaDefaultHandlerReturn: import("vts").ObjectSchema<{
    type: import("vts").EnumSchema<HandlerResultType>;
    body: import("vts").OptionalSchema<import("vts").UnknownSchema>;
}>;
export type DefaultHandlerReturn = ExtractSchemaResultType<typeof SchemaDefaultHandlerReturn>;
