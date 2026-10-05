import {ExtractSchemaResultType, Vts} from 'vts';

/**
 * Enum PluginUiFieldType
 */
export enum PluginUiFieldType {
    'string' = 'string',
    'number' = 'number',
    'bool' = 'bool',
    'password' = 'password',
    'enum' = 'enum',
    'textarea' = 'textarea',
}

/**
 * Schema of PluginUiFieldOption
 * One selectable option of an enum field
 */
export const SchemaPluginUiFieldOption = Vts.object({
    value: Vts.string({description: 'Stored value of the option'}),
    label: Vts.string({description: 'Human readable label of the option'}),
}, {
    description: 'One selectable option of an enum field',
});

/**
 * Type of schema PluginUiFieldOption
 */
export type PluginUiFieldOption = ExtractSchemaResultType<typeof SchemaPluginUiFieldOption>;

/**
 * Schema of PluginUiField
 * Declarative description of a single plugin config field
 */
export const SchemaPluginUiField = Vts.object({
    key: Vts.string({description: 'Property key the value is stored/returned under'}),
    type: Vts.enum(PluginUiFieldType),
    label: Vts.string({description: 'Human readable field label'}),
    description: Vts.optional(Vts.string({description: 'Optional help text shown with the field'})),
    placeholder: Vts.optional(Vts.string({description: 'Optional placeholder for text-like fields'})),
    required: Vts.optional(Vts.boolean({description: 'Whether a value must be provided'})),
    default: Vts.optional(Vts.or([Vts.string(), Vts.number(), Vts.boolean()], {description: 'Optional default value'})),
    options: Vts.optional(Vts.array(SchemaPluginUiFieldOption)),
    group: Vts.optional(Vts.string({description: 'Optional group/section/tab the field belongs to'})),
}, {
    description: 'Declarative description of a single plugin config field',
});

/**
 * Type of schema PluginUiField
 */
export type PluginUiField = ExtractSchemaResultType<typeof SchemaPluginUiField>;