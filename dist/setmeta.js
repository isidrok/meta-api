'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.insertMeta = exports.setMeta = undefined;

var _createmeta = require('./createmeta');

var setMeta = exports.setMeta = function setMeta(target, keys, value, inArray) {
    var meta = (0, _createmeta.createMeta)(target);
    insertMeta(meta, keys, value, inArray);
};

var insertMeta = exports.insertMeta = function insertMeta(meta, keys, value, inArray) {
    meta = meta || {};
    keys = keys.split('.');
    keys.reduce(function (pre, cur, index) {
        if (inArray) {
            if (index !== keys.length - 1) pre[cur] = pre[cur] || {};else {
                pre[cur] = pre[cur] || [];
                pre[cur].push(value);
            }
        } else index !== keys.length - 1 ? pre[cur] = pre[cur] || {} : pre[cur] = value;
        return pre[cur];
    }, meta);
};