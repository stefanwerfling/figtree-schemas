import {ExtractSchemaResultType, Vts} from 'vts';
import {StatusCodes} from './StatusCodes.js';

/**
 * Enum HandlerResultType
 */
export enum HandlerResultType {
    'json' = 'json',
    'empty' = 'empty',
    'handled' = 'handled',
}

/**
 * Schema of DefaultReturn
 * Default response from server.
 */
export const SchemaDefaultReturn = Vts.object({
    statusCode: Vts.or([Vts.string(), Vts.enum(StatusCodes)]),
    msg: Vts.optional(Vts.string({description: 'Optional string message, is only set by a error code.'})),
}, {
    description: 'Default response from server.',
});

/**
 * Type of schema DefaultReturn
 */
export type DefaultReturn = ExtractSchemaResultType<typeof SchemaDefaultReturn>;

/**
 * Schema of DefaultHandlerReturn
 */
export const SchemaDefaultHandlerReturn = Vts.object({
    type: Vts.enum(HandlerResultType),
    body: Vts.optional(Vts.unknown()),
}, {
    description: '',
});

/**
 * Type of schema DefaultHandlerReturn
 */
export type DefaultHandlerReturn = ExtractSchemaResultType<typeof SchemaDefaultHandlerReturn>;