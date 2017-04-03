'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createMeta = undefined;

var _meta = require('./meta');

var createMeta = exports.createMeta = function createMeta(target) {
    if (target.name) return target[_meta.META] = target[_meta.META] || {};
    return target.constructor[_meta.META] = target.constructor[_meta.META] || {};
};