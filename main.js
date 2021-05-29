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
  objects.sort((a, b) => (a.purchaseDate < b.purchaseDate ? -1 : +1));
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
const 購入月整数 = ({ obj }) => Number(obj.purchaseDate.split('-')[1]);
const n月のオブジェクトを抽出する = ({ objects, n月 }) => objects.filter((obj) => 購入月整数({ obj }) === n月);
const n月の合計金額 = ({ objects, n月 }) => {
  return each(objects, (object) => {
    const 購入月整数 = object.purchaseDate.split('-')[1];
    if (Number(n月) === Number(購入月整数)) {
      return object.amountYen;
    }
    return 0;
  }).reduce((a, b) => a + b);
};
const main = () => {
  const data = require('./data.js')();
  const objects = getObjectsFromData(data);
  const result = {
    '1月の合計金額': n月の合計金額({ objects, n月: 1 }),
    '2月の合計金額': n月の合計金額({ objects, n月: 2 }),
    '3月の合計金額': n月の合計金額({ objects, n月: 3 }),
    '4月の合計金額': n月の合計金額({ objects, n月: 4 }),
    '5月の合計金額': n月の合計金額({ objects, n月: 5 }),
  };
  // p(result);
  n月のオブジェクトを抽出する({ objects, n月: 5 }).forEach((o) => {
    p(o.purchaseDate, o.titles, o.amountYen);
  });
};

main();
