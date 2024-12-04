"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var Id = zod_1.z.string().uuid();
var User = zod_1.z.object({
    id: Id,
    name: zod_1.z.string(),
});
var Post = zod_1.z.object({
    id: Id,
    title: zod_1.z.string(),
    body: zod_1.z.string(),
});
var Comment = zod_1.z.object({
    id: Id,
    text: zod_1.z.string(),
});
