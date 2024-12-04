"use strict";
// CODE
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var StarWarsPerson = zod_1.z.object({
    name: zod_1.z.string(),
});
var StarWarsPeopleResults = zod_1.z.object({
    results: zod_1.z.array(StarWarsPerson),
});
var logStarWarsPeopleResults = function (data) {
    data.results.map(function (person) {
        console.log(person.name);
    });
};
