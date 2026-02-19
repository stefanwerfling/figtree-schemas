import { Vts } from 'vts';
import { StatusCodes } from './StatusCodes.js';
export var HandlerResultType;
(function (HandlerResultType) {
    HandlerResultType["json"] = "json";
    HandlerResultType["empty"] = "empty";
    HandlerResultType["handled"] = "handled";
})(HandlerResultType || (HandlerResultType = {}));
export const SchemaDefaultReturn = Vts.object({
    statusCode: Vts.or([Vts.string(), Vts.enum(StatusCodes)], {}),
    msg: Vts.optional(Vts.string({ description: 'Optional string message, is only set by a error code.' })),
}, {
    description: 'Default response from server.',
});
export const SchemaDefaultHandlerReturn = Vts.object({
    type: Vts.enum(HandlerResultType),
    body: Vts.optional(Vts.unknown()),
}, {
    description: '',
});
//# sourceMappingURL=DefaultReturn.js.map