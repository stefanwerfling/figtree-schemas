import {ExtractSchemaResultType, Vts} from 'vts';

/**
 * Enum ServiceType
 */
export enum ServiceType {
    'runner' = '0',
    'scheduler' = '1',
}

/**
 * Enum ServiceStatus
 */
export enum ServiceStatus {
    'None' = 'none',
    'Progress' = 'progress',
    'Success' = 'success',
    'Error' = 'error',
}

/**
 * Enum ServiceImportance
 */
export enum ServiceImportance {
    'Optional' = '0',
    'Important' = '1',
    'Critical' = '2',
}

/**
 * Schema of ServiceInfoScheduler
 */
export const SchemaServiceInfoScheduler = Vts.object({
    status: Vts.enum(ServiceStatus),
    inProcess: Vts.boolean({description: 'Is currently a process execute by scheduler'}),
    lastRun: Vts.dateString({description: 'Datestring for last run'}),
    cron: Vts.string({description: 'Show cron setting for scheduler'}),
}, {
    description: '',
});

/**
 * Type of schema ServiceInfoScheduler
 */
export type ServiceInfoScheduler = ExtractSchemaResultType<typeof SchemaServiceInfoScheduler>;

/**
 * Schema of ServiceInfoEntry
 * Service Entry information
 */
export const SchemaServiceInfoEntry = Vts.object({
    type: Vts.enum(ServiceType),
    name: Vts.string({description: 'Name of service'}),
    status: Vts.enum(ServiceStatus),
    statusMsg: Vts.string({description: 'Last status message'}),
    importance: Vts.enum(ServiceImportance),
    inProcess: Vts.boolean({description: 'Is the service in process'}),
    dependencies: Vts.array(Vts.string({description: 'A service dependencie'})),
    scheduler: Vts.optional(SchemaServiceInfoScheduler),
}, {
    description: 'Service Entry information',
});

/**
 * Type of schema ServiceInfoEntry
 */
export type ServiceInfoEntry = ExtractSchemaResultType<typeof SchemaServiceInfoEntry>;