import {ExtractSchemaResultType, Vts} from 'vts';
import {SchemaDefaultReturn} from './DefaultReturn.js';
import {SchemaServiceInfoEntry} from '../../Service/ServiceInfoEntry.js';
import {SchemaServiceLogEntry} from '../../Service/ServiceLog.js';

/**
 * Schema of ServiceStatusResponse
 */
export const SchemaServiceStatusResponse = SchemaDefaultReturn.extend({
    services: Vts.optional(Vts.array(SchemaServiceInfoEntry)),
}, {
    description: '',
});

/**
 * Type of schema ServiceStatusResponse
 */
export type ServiceStatusResponse = ExtractSchemaResultType<typeof SchemaServiceStatusResponse>;

/**
 * Schema of ServiceByNameRequest
 * Service by name request
 */
export const SchemaServiceByNameRequest = Vts.object({
    name: Vts.string({description: 'Name of the service to be addressed'}),
}, {
    description: 'Service by name request',
});

/**
 * Type of schema ServiceByNameRequest
 */
export type ServiceByNameRequest = ExtractSchemaResultType<typeof SchemaServiceByNameRequest>;

/**
 * Schema of ServiceLogStartRequest
 * Enable the per-service ring-buffer log capture for one service.
 */
export const SchemaServiceLogStartRequest = Vts.object({
    name: Vts.string({description: 'Name of the service whose buffer to enable'}),
    maxLines: Vts.optional(Vts.number({description: 'Ring-buffer size; defaults to the server-side default when omitted'})),
}, {
    description: 'Service log start request',
});

/**
 * Type of schema ServiceLogStartRequest
 */
export type ServiceLogStartRequest = ExtractSchemaResultType<typeof SchemaServiceLogStartRequest>;

/**
 * Schema of ServiceLogResponse
 * Current state of one service's ring buffer plus the captured lines.
 */
export const SchemaServiceLogResponse = SchemaDefaultReturn.extend({
    active: Vts.optional(Vts.boolean({description: 'Is the buffer currently capturing for this service'})),
    maxLines: Vts.optional(Vts.number({description: 'Configured ring-buffer size'})),
    lines: Vts.optional(Vts.array(SchemaServiceLogEntry)),
}, {
    description: 'Service log buffer snapshot',
});

/**
 * Type of schema ServiceLogResponse
 */
export type ServiceLogResponse = ExtractSchemaResultType<typeof SchemaServiceLogResponse>;