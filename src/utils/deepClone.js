function deepClone(val) {
  const cache = new WeakMap();
  function _deepClone(val) {
    if (typeof val !== "object" || val === null) {
      return val;
    }
    if (cache.has(val)) {
      return cache.get(val);
    }
    const res = Array.isArray(val) ? [] : {};
    cache.set(val, res);
    for (let key in val) {
      if (val.hasOwnProperty(key)) {
        res[key] = _deepClone(val[key]);
      }
    }
    return res;
  }
  return _deepClone(val);
}


