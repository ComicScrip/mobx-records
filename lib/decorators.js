"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
function attribute(target, key) {
    if (!lodash_1.isArray(target.constructor._attributes)) {
        target.constructor._attributes = [];
    }
    target.constructor._attributes.push(key);
}
exports.attribute = attribute;
function association(collection) {
    return function (target, key) {
        if (!lodash_1.isObject(target.constructor._associations)) {
            target.constructor._associations = {};
        }
        target.constructor._associations[key] = { collection: collection };
    };
}
exports.association = association;
