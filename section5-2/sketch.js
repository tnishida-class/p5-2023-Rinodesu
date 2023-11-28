// テキスト「関数を作る(1) 引数のある関数」
// 練習問題：星を描く関数を改造して正N角形を描画する関数を作ってみよう
function setup(){
  createCanvas(300, 100);
  background(200);
  fill(0);
  crossmark(10, 10, 90, 90);
  ngmark(150, 50, 80);
  star(250, 50, 40);
}

function crossmark(x1, y1, x2, y2){
  line(x1, y1, x2, y2);
  line(x2, y1, x1, y2);
}

function ngmark(cx, cy, r){
  push();
  noFill();
  strokeWeight(r * 0.1);
  let d = sqrt(r * r / 8);
  ellipse(cx, cy, r);
  line(cx - d, cy - d, cx + d, cy + d);
  pop();
}

function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}


function setup(){
  createCanvas(120, 120);
  background(255);
  noStroke();

  fill(255, 204, 0);
  beginShape();//図形の書き始めを示す命令
  for(let i = 0; i < 5; i++){
    let theta = TWO_PI * i / 5- HALF_PI ;//角度{方向）をtheta(シータ)で指定する//TWO_PI＝πの2倍＝1周分//3時方向が0度であるため、12時方向を0度とするためにマイナス半π
    let x = width/2 + cos(theta) * 60;//円上の角度（theta）のX座標。この60はキャンバスが120だからその半分の長さの60を半径にした。
    let y = height/2 + sin(theta) * 60;//〃のY座標
     //円周上のある角度（theta)の座標（X，y）は、円の半径（r）、円の中心座標（width/2,height/2)を用いてx=r*cos(theta)+width/2,y=r*sin(theta)+height/2で表すことが出来る
    vertex(x, y);//次につなぐ点を一つ増やすvertexは頂点という意味
  }//キャンパスの中心から円をn（ここでは5）等分し，360*1/5ずつずらしてポイントした5点をつなげる
  endShape(CLOSE);//点をつなぎ終わる
}
 
//①biginShape()で描き始めの命令、②for=5未満の値で一ずつ増えていく、③let thetaで角度を指定、④③で指定した角度について、円上の座標をそれぞれx=r*cos(theta)+width/2,y=r*sin(theta)+height/2で指定、④vertexは点を増やす指示、⑤endshapeは点つなぎを終える指