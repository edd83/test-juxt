"use strict";
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
exports.main = void 0;
var bent = require('bent');
var getJSON = bent('json');
var TOKEN = '1f9fcb72e6b5d043a34b34bc5f4f86e1';
function messageFormat(obj) {
    return "Current weather - " + obj.currently.summary + ", Today we will see - " + obj.hourly.summary + " with a " + obj.currently.precipProbability + "% chance of rain.";
}
function getWeather(lat, lng) {
    return __awaiter(this, void 0, void 0, function () {
        var url, obj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://api.darksky.net/forecast/" + TOKEN + "/" + lat + "," + lng;
                    return [4 /*yield*/, getJSON(url)];
                case 1:
                    obj = _a.sent();
                    if (!obj) {
                        console.log('efdweiufhiwehfuihweiuhfiuwehfiuhewiuhfiowehfiuhweihf');
                        throw new Error('An error occured when requesting weather api');
                    }
                    throw new Error('blalbla');
            }
        });
    });
}
function getCityInfo(city) {
    return __awaiter(this, void 0, void 0, function () {
        var obj, location, message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getJSON('https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json')];
                case 1:
                    obj = _a.sent();
                    if (!obj) {
                        throw new Error('An error occured when requesting cities json');
                    }
                    location = obj.filter(function (elem) { return elem.name === city; });
                    if (location.length === 0) {
                        throw new Error('City entered in paramteter does not exist');
                    }
                    return [4 /*yield*/, getWeather(location[0].lat, location[0].lng)];
                case 2:
                    message = _a.sent();
                    return [2 /*return*/, message];
            }
        });
    });
}
function main(args) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, err_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    // console.log(await getWeather(60.59329987, -1.44250533));
                    _b = (_a = console).log;
                    return [4 /*yield*/, getCityInfo(args[0])];
                case 1:
                    // console.log(await getWeather(60.59329987, -1.44250533));
                    _b.apply(_a, [_c.sent()]);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _c.sent();
                    console.error(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.main = main;
