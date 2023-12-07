"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseType = void 0;
var graphql_1 = require("graphql");
exports.ResponseType = new graphql_1.GraphQLObjectType({
    name: "Response",
    fields: function () { return ({
        successful: { type: graphql_1.GraphQLBoolean },
        message: { type: graphql_1.GraphQLString },
    }); },
});
