// 実行コマンド
// docker run -it -v `pwd`:/tmp node bash -c 'cd tmp; node main;'
'use strict';

const p = console.log;
const main = () => {
  const data = require('./data.js')();
  const object = {
    購入日: 0,
    品目: 0,
    金額: 0,
  };
  p(object);
};

main();
