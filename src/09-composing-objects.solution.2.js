"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var ObjectWithId = zod_1.z.object({
    id: zod_1.z.string().uuid(),
});
var User = ObjectWithId.extend({
    name: zod_1.z.string(),
});
var Post = ObjectWithId.extend({
    title: zod_1.z.string(),
    body: zod_1.z.string(),
});
var Comment = ObjectWithId.extend({
    text: zod_1.z.string(),
});
