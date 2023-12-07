"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var eventSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    guests: {
        type: [String],
        required: true,
    },
}, {
    timestamps: true,
});
var Event = mongoose_1.default.model("Event", eventSchema);
exports.default = Event;
