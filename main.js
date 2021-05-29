// 実行コマンド
// docker run -it -v `pwd`:/tmp node bash -c 'cd tmp; node main;'
'use strict';

const p = console.log;
const data = require('./data.js')();
const main = () => {
  p(data);
};

main();
