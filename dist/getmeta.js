'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMeta = undefined;

var _meta = require('./meta');

var _createmeta = require('./createmeta');

var getMeta = exports.getMeta = function getMeta(target, keys) {

    var meta = (0, _createmeta.createMeta)(target);
    if (keys[0] === _meta.META) return meta;
    keys = keys.split('.');
    return keys.reduce(function (pre, cur) {
        if (!pre[cur]) throw new Error('invalid meta attribute');
        return pre[cur];
    }, meta);
};