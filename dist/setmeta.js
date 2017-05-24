'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setMeta = undefined;

var _createmeta = require('./createmeta');

var setMeta = exports.setMeta = function setMeta(target, keys, value) {
    var meta = (0, _createmeta.createMeta)(target);
    keys = keys.split('.');
    keys.reduce(function (pre, cur, index) {
        index !== keys.length - 1 ? pre[cur] = pre[cur] || {} : pre[cur] = value;
        return pre[cur];
    }, meta);
};