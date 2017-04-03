import { META } from './meta';
import { createMeta } from './createmeta';
import { validateArgs } from './helpervalidations';
export const getMeta = function (target, keys) {

    validateArgs(null, target, key);
    let meta = createMeta(target);
    if (keys[0] === META) return meta;
    keys = keys.split('.');
    return keys.reduce((pre, cur) => {
        if (!pre[cur]) throw new Error('invalid meta attribute');
        return pre[cur];
    }, meta);
}
