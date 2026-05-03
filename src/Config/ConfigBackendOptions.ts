import {ExtractSchemaResultType, Vts} from 'vts';
import {SchemaConfigOptions} from './ConfigOptions.js';
import {SchemaConfigDbOptions} from './ConfigDb.js';
import {SchemaConfigHttpServer} from './ConfigHttpServer.js';
import {SchemaConfigCluster} from './ConfigCluster.js';

/**
 * Schema of ConfigBackendOptions
 */
export const SchemaConfigBackendOptions = SchemaConfigOptions.extend({
    db: SchemaConfigDbOptions,
    httpserver: SchemaConfigHttpServer,
    cluster: Vts.optional(SchemaConfigCluster),
}, {
    description: '',
});

/**
 * Type of schema ConfigBackendOptions
 */
export type ConfigBackendOptions = ExtractSchemaResultType<typeof SchemaConfigBackendOptions>;