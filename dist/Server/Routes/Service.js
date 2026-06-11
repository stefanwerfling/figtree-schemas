import { Vts } from 'vts';
import { SchemaDefaultReturn } from './DefaultReturn.js';
import { SchemaServiceInfoEntry } from '../../Service/ServiceInfoEntry.js';
import { SchemaServiceLogEntry } from '../../Service/ServiceLog.js';
export const SchemaServiceStatusResponse = SchemaDefaultReturn.extend({
    services: Vts.optional(Vts.array(SchemaServiceInfoEntry)),
}, {
    description: '',
});
export const SchemaServiceByNameRequest = Vts.object({
    name: Vts.string({ description: 'Name of the service to be addressed' }),
}, {
    description: 'Service by name request',
});
export const SchemaServiceLogStartRequest = Vts.object({
    name: Vts.string({ description: 'Name of the service whose buffer to enable' }),
    maxLines: Vts.optional(Vts.number({ description: 'Ring-buffer size; defaults to the server-side default when omitted' })),
}, {
    description: 'Service log start request',
});
export const SchemaServiceLogResponse = SchemaDefaultReturn.extend({
    active: Vts.optional(Vts.boolean({ description: 'Is the buffer currently capturing for this service' })),
    maxLines: Vts.optional(Vts.number({ description: 'Configured ring-buffer size' })),
    lines: Vts.optional(Vts.array(SchemaServiceLogEntry)),
}, {
    description: 'Service log buffer snapshot',
});
//# sourceMappingURL=Service.js.map