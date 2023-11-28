// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);//ベースの四角形
  background(240);//ベースが灰色

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){//360度を10分割したときの1つ分ずつ増やし続ける
    scores[i] = random(20, 100); // 20以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく 553.4
  let total = 0;
  for(let i = 0; i < scores.length; i++){ total += scores[i]; }

  // BLANK[1]
}
