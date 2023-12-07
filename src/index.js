"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var express_2 = require("graphql-http/lib/use/express");
var index_js_1 = require("./schema/index.js");
var db_js_1 = require("./config/db.js");
var PORT = process.env.PORT || 5000;
(0, db_js_1.default)();
console.log(PORT);
var app = (0, express_1.default)();
// middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/graphql', (0, express_2.createHandler)({
    schema: index_js_1.schema,
}));
// app.get("/", (req, res) => {
//   // server health check route
//   res.status(200).send("server online");
// });
app.listen(PORT, function () { return console.log("server running at PORT:".concat(PORT)); });
exports.default = app;
