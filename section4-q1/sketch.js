// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];//scoresの関数作ります。内容はまだ分かりません。
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); 
  }// iという集団には、0以上100未満のランダムな数を代入
  //scoresには、iにする上の作業によってできたランダムな60^100までのかず
 
console.log(scores);

  let sum=0;
  for(let i=0;i<scores.length;i++){sum +=scores[i];
  } //合計にscore[i]足すっていうのは、iという集団から一つ目に拾った数がaとする。2つめに拾った数がbとするなら、sumはaを指し、そこにiという集団からランダムに平ったbを加えるということ。その次の作業では、sumはaとbの合計を表し、そこにiという集団からランダムにひっぱった3つ目にひっぱったcという数を足す。
console.log(sum);
 //配列数値の合計を求める。そのために、繰り返しを使って配列の数値を全て足し合わせる。
  let average=sum/scores.length;
  console.log(average);

//平均を出す。後で線を引くからさきにここで数値的な作業は計算しきってしまう。合計を度数で割っている。

//最大値の話をする。最大値用の関数を作って、箱の中で指定された数字iが最大値を宇和間っていたら、そのiが今度は最大値になります。ってこと。スタートは0です（初期設定）。それでランダムにiという集団から引いた数が0より大きかったらそれが最大値になります。それを度数分だけする。
let largest=0;
for(let i=0;i<scores.length;i++){if(largest<scores[i]){largest=scores[i];}}
console.log(largest);

//最小値の話をする。最大値の逆で大きい方から。
let smallest=100;
for(let i=0;i<scores.length;i++){if(scores[i]<smallest){smallest=scores[i];}}
console.log(smallest);


  // 横線を引く
  const n = 10;//10の領域に分けるために、10で変数を固定
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }
  //0地点からスタート、高さをi分だけ積み重ねてn等分する。（なんでi分積み重ねるのか、かけるiなのか）widthのところは幅か。0からスタートして、上に上がって右行って下に下がるかんじ？
noStroke();//フチなし
  //棒グラフ
  
  for(let i=0;i<scores.length;i++){const dx=width/scores.length;const h=height*scores[i]/100;}
//色を染める。横幅を度数で割ったのが棒グラフ1つあたりの横幅(dx)で、iという集団から引っ張ってきたランダムな数値分高さを伸ばす。積み重ねてグラフのサイズに合わせるために100でわる(?)

  // ここからが本番
  
  
  if(scores[i]=largest)
  {fill(255,0,0);}
  else if(scores[i]=smallest)
  {fill(0,0,255);}
  else{fill(122);}
//色分け作業

  
  rect(i*dx+2,height-h,dx-4,h);//どゆこと？
  fill(0);
  text(scores[i].toPrecision(3),i*dx,height-h);//値を上にかく

 


stroke(0,255,0);const ah=height*average/100;line(0,height-ah,width,height-ah);
}
//線の色、線の位置を指定するためにahってのを一旦おいて、lineの関数の中でahという一言で場所指定。
//なんでahがこの市ｋになるのか。なんでheightからとwidthから引き算しているのか。


 //const dx = width / scores.length;
  //let px, py; // 線を引くために一つ前の点を覚えておく変数
  //for(let i = 0; i < scores.length; i++){
    // BLANK[1]
  //}
//}

//scores[i]は一個のデータを指していて、この数字のi番目の数って意味