'use strict';

const 入力値 = {
  スプレッドシートID: SpreadsheetApp.getActiveSpreadsheet().getId(),
  入力シート名: 'steam',
};

const myFunction = () => {
  /* 関数定義 */
  const p = console.log;
  const シートを返す関数 = ({ スプレッドシートID, シート名 }) => {
    return SpreadsheetApp.openById(スプレッドシートID).getSheetByName(シート名);
  };
  const シートの中身を返す関数 = ({ スプレッドシートID, シート名 }) => {
    return シートを返す関数({ スプレッドシートID, シート名 }).getDataRange().getValues();
  };

  /* 処理 */
  const { スプレッドシートID, 入力シート名 } = 入力値;
  const data = シートの中身を返す関数({ スプレッドシートID, シート名: 入力シート名 });
  data.map((e) => {
    const json = JSON.stringify(e[0]);
    e[0] = json.slice(1).split('T')[0];
  });
  p(data);
};
