// 実行コマンド
// docker run -it -v `pwd`:/tmp node bash -c 'cd tmp; node main;'
'use strict';

const p = console.log;
const getObjectsFromData = (data) => {
  const objects = [];
  data.forEach((e) => {
    const object = {
      purchaseDate: e[0],
      titles: e[1],
      amountYen: e[3],
    };
    objects.push(object);
  });
  return objects;
};
const each = (obj, callback /* (value, keys, data) */) => {
  const ret = [];
  const keys = Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];
    ret.push(callback(value, key, obj));
  }
  return ret;
};
const main = () => {
  const data = require('./data.js')();
  const objects = getObjectsFromData(data);
  each(objects, (v) => p(v));
};

main();
