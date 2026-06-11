import {ExtractSchemaResultType, Vts} from 'vts';

/**
 * Log level a captured line was emitted at. Mirrors the winston levels
 * the standard Logger uses (error / warn / info / debug). Anything more
 * granular collapses into one of these four.
 */
export enum ServiceLogLevel {
    'error' = 'error',
    'warn' = 'warn',
    'info' = 'info',
    'debug' = 'debug',
}

/**
 * One line in a service's in-memory log buffer.
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