//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
}

function mouseDragged(){//マウスの移動座標でどう動くか
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: 20, vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


let balls;


function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  background(160, 192, 255);
  if (frameCount % 40===0) {
    const b ={
      x: random(width),
      y: random(height),
      size: random(10,30),//ボールのサイズをランダムに
      vx: random(-2, 2),
      vy: random(-2, 2)
    };
    balls.push(b);
  }

  for(let i = 0; i < balls.length; i++){
    let b1 = balls[i];
    ellipse(b1.x, b1.y, b1.size);
    b1.x += b1.vx;
    b1.y += b1.vy;

    for(let j = 0; j < balls.length; j++){
      if (i !== j) {
        let b2 = balls[j];
        let d = dist(b1.x, b1.y, b2.x, b2.y);
        let minDist =b1.size / 2 + b2.size / 2;

        if (d < minDist){
          let angle = atan2(b2.y - b1.y, b2.x - b1.x);
          b1.vx = cos(angle)*2;
          b1.vx = sin(angle)*2;
        }
      }
    }

    if(b1.x< 0 || b1.x> width || b1.y < 0 || b1.y > height){
      balls.splice(i, 1);
      i--;
    }
  }
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: random(10, 100), vx: dx, vy: dy };//配列の中身を指定、ボールのサイズは10から100のランダム
    balls.push(b);//上の配列bが表示される　ballsっていう関数
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}