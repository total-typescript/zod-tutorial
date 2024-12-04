"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
/**
 * 🕵️‍♂️ Refactor this code below to reduce the duplication,
 * while also making sure the cases don't go red!
 */
var User = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    name: zod_1.z.string(),
});
var Post = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    title: zod_1.z.string(),
    body: zod_1.z.string(),
});
var Comment = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    text: zod_1.z.string(),
});
