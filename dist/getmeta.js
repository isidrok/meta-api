'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMeta = undefined;

var _meta = require('./meta');

var getMeta = exports.getMeta = function getMeta(meta, keys) {

    keys = keys.split('.');
    if (keys[0] === _meta.META) return meta;
    return keys.reduce(function (pre, cur) {
        if (!pre) return undefined;
        return pre[cur];
    }, meta);
};