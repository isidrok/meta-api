'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getmeta = require('./getmeta');

Object.keys(_getmeta).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getmeta[key];
    }
  });
});

var _setmeta = require('./setmeta');

Object.keys(_setmeta).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _setmeta[key];
    }
  });
});

var _meta = require('./meta');

Object.keys(_meta).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _meta[key];
    }
  });
});