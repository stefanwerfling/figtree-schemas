import { ExtractSchemaResultType } from 'vts';
export declare enum PluginUiFieldType {
    'string' = "string",
    'number' = "number",
    'bool' = "bool",
    'password' = "password",
    'enum' = "enum",
    'textarea' = "textarea"
}
export declare const SchemaPluginUiFieldOption: import("vts").ObjectSchema<{
    value: import("vts").StringSchema<import("vts").StringSchemaOptions>;
    label: import("vts").StringSchema<import("vts").StringSchemaOptions>;
}>;
export type PluginUiFieldOption = ExtractSchemaResultType<typeof SchemaPluginUiFieldOption>;
export declare const SchemaPluginUiField: import("vts").ObjectSchema<{
    key: import("vts").StringSchema<import("vts").StringSchemaOptions>;
    type: import("vts").EnumSchema<PluginUiFieldType>;
    label: import("vts").StringSchema<import("vts").StringSchemaOptions>;
    description: import("vts").OptionalSchema<import("vts").StringSchema<import("vts").StringSchemaOptions>>;
    placeholder: import("vts").OptionalSchema<import("vts").StringSchema<import("vts").StringSchemaOptions>>;
    required: import("vts").OptionalSchema<import("vts").BooleanSchema>;
    default: import("vts").OptionalSchema<import("vts").OrSchema<import("vts").StringSchema<import("vts").StringSchemaOptions> | import("vts").BooleanSchema | import("vts").NumberSchema>>;
    options: import("vts").OptionalSchema<import("vts").ArraySchema<import("vts").ObjectSchema<{
        value: import("vts").StringSchema<import("vts").StringSchemaOptions>;
        label: import("vts").StringSchema<import("vts").StringSchemaOptions>;
    }>>>;
    group: import("vts").OptionalSchema<import("vts").StringSchema<import("vts").StringSchemaOptions>>;
}>;
export type PluginUiField = ExtractSchemaResultType<typeof SchemaPluginUiField>;
