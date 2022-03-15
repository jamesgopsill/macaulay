"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.macaulay = void 0;
__exportStar(require("./interfaces"), exports);
/**
 * Macaulay is a const function that takes some MacaulayNotation format.
 *
 * @param notation is an array of INotation
 * @param xmin is the starting distance
 * @param xmax is the max distance to reach to
 * @param datapoints is the number of datapoints to capture
 *
 * @returns an MacaulayReturn object featuring the x points, shear and bending moments as well as err that could contain an error if there was an issue calculating the equation.
 */
var macaulay = function (notation, xmin, xmax, nPoints) { return __awaiter(void 0, void 0, void 0, function () {
    var linspace, step, i, shear, bending, _i, linspace_1, x, s, b, _a, notation_1, n, out;
    return __generator(this, function (_b) {
        linspace = [];
        step = (xmax - xmin) / nPoints;
        for (i = 0; i <= nPoints; i++) {
            linspace.push(xmin + step * i);
        }
        shear = [];
        bending = [];
        for (_i = 0, linspace_1 = linspace; _i < linspace_1.length; _i++) {
            x = linspace_1[_i];
            s = 0;
            b = 0;
            for (_a = 0, notation_1 = notation; _a < notation_1.length; _a++) {
                n = notation_1[_a];
                if (x > n.x) {
                    s += n.force(x) * Math.pow((x - n.x), n.power);
                    b += n.force(x) * (Math.pow((x - n.x), (n.power + 1)) / (n.power + 1));
                }
            }
            shear.push(s);
            bending.push(b);
        }
        out = {
            x: linspace,
            shear: shear,
            bending: bending,
            err: null
        };
        return [2 /*return*/, out];
    });
}); };
exports.macaulay = macaulay;
