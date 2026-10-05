import {ExtractSchemaResultType, Vts} from 'vts';

/**
 * Enum ServiceLogLevel
 */
export enum ServiceLogLevel {
    'error' = 'error',
    'warn' = 'warn',
    'info' = 'info',
    'debug' = 'debug',
}

/**
 * Schema of ServiceLogEntry
 * Per-service captured log line
 */
export const SchemaServiceLogEntry = Vts.object({
    ts: Vts.dateString({description: 'Datestring when the line was captured'}),
    level: Vts.enum(ServiceLogLevel),
    msg: Vts.string({description: 'Log message after string-formatting'}),
}, {
    description: 'Per-service captured log line',
});

/**
 * Type of schema ServiceLogEntry
 */
export type ServiceLogEntry = ExtractSchemaResultType<typeof SchemaServiceLogEntry>;