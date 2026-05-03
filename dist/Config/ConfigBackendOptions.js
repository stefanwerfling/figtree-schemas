import { Vts } from 'vts';
import { SchemaConfigOptions } from './ConfigOptions.js';
import { SchemaConfigDbOptions } from './ConfigDb.js';
import { SchemaConfigHttpServer } from './ConfigHttpServer.js';
import { SchemaConfigCluster } from './ConfigCluster.js';
export const SchemaConfigBackendOptions = SchemaConfigOptions.extend({
    db: SchemaConfigDbOptions,
    httpserver: SchemaConfigHttpServer,
    cluster: Vts.optional(SchemaConfigCluster),
}, {
    description: '',
});
//# sourceMappingURL=ConfigBackendOptions.js.map