import { Vts } from 'vts';
export var ServiceLogLevel;
(function (ServiceLogLevel) {
    ServiceLogLevel["error"] = "error";
    ServiceLogLevel["warn"] = "warn";
    ServiceLogLevel["info"] = "info";
    ServiceLogLevel["debug"] = "debug";
})(ServiceLogLevel || (ServiceLogLevel = {}));
export const SchemaServiceLogEntry = Vts.object({
    ts: Vts.dateString({ description: 'Datestring when the line was captured' }),
    level: Vts.enum(ServiceLogLevel),
    msg: Vts.string({ description: 'Log message after string-formatting' }),
}, {
    description: 'Per-service captured log line',
});
//# sourceMappingURL=ServiceLog.js.map