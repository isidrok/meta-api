import { createMeta } from './createmeta';
import { validateArgs } from './helpervalidations';

export const setMeta = function (target, keys, value) {

    validateArgs(null, target, key, value);
    let meta = createMeta(target);
    keys = keys.split('.');
    keys.reduce((pre, cur, index) => {
        (index !== keys.length - 1) ? pre[cur] = (pre[cur] || {}) : pre[cur] = value;
        return pre[cur];
    }, meta);
}
