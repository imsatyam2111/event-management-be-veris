"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = void 0;
var graphql_1 = require("graphql");
exports.EventType = new graphql_1.GraphQLObjectType({
    name: "Event",
    fields: function () { return ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        date: { type: graphql_1.GraphQLString },
        time: { type: graphql_1.GraphQLString },
        duration: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        location: { type: graphql_1.GraphQLString },
        guests: { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
    }); },
});
