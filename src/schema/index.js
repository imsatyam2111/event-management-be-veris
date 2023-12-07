"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
var graphql_1 = require("graphql");
var Event_js_1 = require("./queries/Event.js");
var Event_js_2 = require("./mutations/Event.js");
var Query = new graphql_1.GraphQLObjectType({
    name: "Query",
    fields: {
        getAllEvents: Event_js_1.GET_ALL_EVENTS,
    },
});
var Mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createEvent: Event_js_2.CREATE_EVENT,
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: Query,
    mutation: Mutation,
});
