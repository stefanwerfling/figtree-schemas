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
    lastRun: Vts.or([Vts.dateString(), Vts.null()], { description: 'Datestring for last run' }),
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
    scheduler: Vts.optional(SchemaServiceInfoScheduler),
}, {
    description: 'Service Entry information',
});
//# sourceMappingURL=ServiceInfoEntry.js.map