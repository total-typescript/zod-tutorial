"use strict";
// CODE
Object.defineProperty(exports, "__esModule", { value: true });
exports.toString = void 0;
var vitest_1 = require("vitest");
var zod_1 = require("zod");
var numberParser = zod_1.z.number();
var toString = function (num) {
    var parsed = numberParser.parse(num);
    return String(parsed);
};
exports.toString = toString;
// TESTS
(0, vitest_1.it)("Should throw a runtime error when called with not a number", function () {
    (0, vitest_1.expect)(function () { return (0, exports.toString)("123"); }).toThrowError("Expected number, received string");
});
(0, vitest_1.it)("Should return a string when called with a number", function () {
    (0, vitest_1.expect)((0, exports.toString)(1)).toBeTypeOf("string");
});
