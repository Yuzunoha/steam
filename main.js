// 実行コマンド
// docker run -it -v `pwd`:/tmp node bash -c 'cd tmp; node main;'
'use strict';

const p = console.log;
const main = () => {
  const data = require('./data.js')();
  const objects = [];
  data.forEach((e) => {
    const object = {
      purchaseDate: e[0],
      titles: e[1],
      amountYen: e[3],
    };
    objects.push(object);
  });
  p(objects);
};

main();
