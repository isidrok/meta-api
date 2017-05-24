import { createMeta } from './createmeta';

export const setMeta = function (target, keys, value) {
    let meta = createMeta(target);
    keys = keys.split('.');
    keys.reduce((pre, cur, index) => {
        (index !== keys.length - 1) ? pre[cur] = (pre[cur] || {}) : pre[cur] = value;
        return pre[cur];
    }, meta);
}
