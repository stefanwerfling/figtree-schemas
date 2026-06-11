import { Vts } from 'vts';
export var ServiceType;
(function (ServiceType) {
    ServiceType["runner"] = "0";
    ServiceType["scheduler"] = "1";
})(ServiceType || (ServiceType = {}));
export var ServiceStatus;
(function (ServiceStatus) {
    ServiceStatus["None"] = "none";
    ServiceStatus["Progress"] = "progress";
    ServiceStatus["Success"] = "success";
    ServiceStatus["Error"] = "error";
})(ServiceStatus || (ServiceStatus = {}));
export var ServiceImportance;
(function (ServiceImportance) {
    ServiceImportance["Optional"] = "0";
    ServiceImportance["Important"] = "1";
    ServiceImportance["Critical"] = "2";
})(ServiceImportance || (ServiceImportance = {}));
export const SchemaServiceInfoScheduler = Vts.object({
    status: Vts.enum(ServiceStatus),
    inProcess: Vts.boolean({ description: 'Is currently a process execute by scheduler' }),
    lastRun: Vts.or([Vts.dateString(), Vts.null()], { description: 'Datestring for last run (success or failure)' }),
    lastSuccessAt: Vts.or([Vts.dateString(), Vts.null()], { description: 'Datestring for the last run that completed successfully' }),
    nextRun: Vts.or([Vts.dateString(), Vts.null()], { description: 'Datestring for the next planned run, null when scheduler is inactive' }),
    lastDurationMs: Vts.or([Vts.number(), Vts.null()], { description: 'Wall-clock duration of the last run in milliseconds, null before the first run' }),
    runCount: Vts.number({ description: 'Number of runs (success + failure) since the service was last started' }),
    failCount: Vts.number({ description: 'Number of runs that threw out of _execute since the service was last started' }),
    cron: Vts.string({ description: 'Show cron setting for scheduler' }),
}, {
    description: '',
});
export const SchemaServiceInfoEntry = Vts.object({
    type: Vts.enum(ServiceType),
    name: Vts.string({ description: 'Name of service' }),
    status: Vts.enum(ServiceStatus),
    statusMsg: Vts.string({ description: 'Last status message' }),
    importance: Vts.enum(ServiceImportance),
    inProcess: Vts.boolean({ description: 'Is the service in process' }),
    dependencies: Vts.array(Vts.string({ description: 'A service dependencie' })),
    startedAt: Vts.or([Vts.dateString(), Vts.null()], { description: 'Datestring for the last successful start, null when the service has never started' }),
    restartCount: Vts.number({ description: 'Number of times the health monitor restarted this service after the initial startAll' }),
    logBufferActive: Vts.boolean({ description: 'Is the per-service log buffer currently capturing' }),
    scheduler: Vts.optional(SchemaServiceInfoScheduler),
}, {
    description: 'Service Entry information',
});
//# sourceMappingURL=ServiceInfoEntry.js.map