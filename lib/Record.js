"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var lodash_1 = require("lodash");
var Record = /** @class */ (function () {
    function Record() {
        this.optimisticPrimaryKey = lodash_1.uniqueId('i_');
        this.collection = null;
    }
    Object.defineProperty(Record.prototype, "attributesNames", {
        get: function () {
            var c = this.constructor;
            return c._attributes || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Record.prototype, "attributes", {
        get: function () {
            var _this = this;
            var attributesObject = {};
            lodash_1.forEach(this.attributesNames, function (a) {
                attributesObject[a] = _this[a];
            });
            return attributesObject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Record.prototype, "associations", {
        get: function () {
            var c = this.constructor;
            return c._associations || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Record.prototype, "associationsNames", {
        get: function () {
            return lodash_1.keys(this.associations);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        mobx_1.computed
    ], Record.prototype, "attributes", null);
    return Record;
}());
exports.Record = Record;
