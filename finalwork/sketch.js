// 最終課題を制作しよう




alert('Aを押すと雪が大きくなり、Lを押すと雪が小さくなります') ///setup, draw以外の関数



let balls = [];
let snowpiles = [];
let snowsize = 20

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(160, 192, 255);

  
  if (keyIsDown("A".charCodeAt(0))){
    snowsize += 5;
  } else if(keyIsDown("L".charCodeAt(0))){
    snowsize -= 1;
  }

  if (frameCount % 20 === 0) {
    const b = {
      x: random(width),
      y: 0,
      size: snowsize,
      vx: random(-2, 2),
      vy: random(0, 2)
    };
    balls.push(b);

  if(snowsize<0){snowsize=1}
  if(snowsize>40){snowsize=40}
  
 }
   
  

  // 雪の描画と移動
  for (let i = 0; i < balls.length; i++) {
    let b1 = balls[i];
    noStroke();
    fill(255);
    ellipse(b1.x, b1.y, b1.size);
    b1.x += b1.vx;
    b1.y += b1.vy;

    if (b1.y > height - 10) {
      // ボールを地面の高さに補正
      b1.y = height - 10;

      let snowPile = {
        x: b1.x,
        y: b1.y,
        size: b1.size
      };
      snowpiles.push(snowPile);

      // ボールを削除
      balls.splice(i, 1);
      i--;
    } else if (b1.x < 0 || b1.x > width || b1.y < 0 || b1.y > height) {
      // ボールが画面外に出たら削除
      balls.splice(i, 1);
      i--;
    }
  }

  // 雪の積もりを描画
  fill(255); // 雪の色
  for (let i = 0; i < snowpiles.length; i++) {
    let pile = snowpiles[i];
    ellipse(pile.x, pile.y, pile.size);
  }

  {
  fill(255);
  noStroke();
  ellipse(width*6/8,height*6.75/10,width/8,height*2/10);
  //の中心,中心,半径,半径
  ellipse(width*6/8,height*5/10,width/9,height*2/10);
  //円の中心,中心,半径,半径

//雪だるまの帽子△ver
//fill(255,0,0);
//noStroke();
//beginShape();
//vertex(width*6/8,height*3/10);
//vertex(width*6.4/8,height*4/10);
//vertex(width*5.6/8,height*4/10);
//endShape(CLOSE);

//雪だるまの帽子□ver
fill(255,0,0);
noStroke();
rect(width*5.85/8,height*3/10,width*1.5/40,height/10)

//雪だるまの顔の中身
fill(0);
  noStroke(0);
  ellipse(width*23/32,height*9/20,10,10);
  ellipse(width*24/32,height*9/20,10,10);

  fill(251,177,97);
  noStroke();
  ellipse(width*47/64,height*19/40,15,15);

  fill(255);
  stroke(0)
  arc(width*47/64,height*10/20,40,20,0,PI);

}

  
  // 木の葉（手動で描画）
  fill(34, 139, 34); // 緑
  beginShape();
  
  let x=windowWidth/4.18
  let y=windowHeight/5
  vertex(x, y); // 上部中央
  vertex(x*1.25, y*2); // 右上
  vertex(x*1.125, y*2); // 右中
  vertex(x*1.25, y*400/150); //　右下
  vertex(x*150/200, y*400/150); //　左下
  vertex(x*175/200, y*2); // 左中
  vertex(x*150/200, y*2); // 左上
  endShape(CLOSE);

  fill(139, 69, 19); // 茶色
  rect(x*183/200, y*400/150,(x*1.25-x*150/200)/3 , 100);


  noStroke()
    fill(255, 204, 0);
    beginShape();
    for(let z = 0; z < 5; z++){
      let theta = TWO_PI * z * 2 / 5 - HALF_PI;
      let r= windowWidth/4.18+ cos(theta) * 50;
      //画面横幅の２分の１が星の中心のr座標→「2」を変更してクリスマスツリーの頂点に合わせる
      let k= windowHeight/5+ sin(theta) * 50;
      //画面縦幅の２分の１が星の中心のk座標→「２」を変更してクリスマスツリーの頂点に合わせる
      vertex(r, k);
     }
    endShape(CLOSE);
    }




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}