// 小手調べ
function setup(){
  createCanvas(100,100)
  noFill();
 
 
  for(let i = 0; i <= 100;i=i+10){
    // BLANK[1]
    ellipse(50,50,i,i)
    if(i<=40){ stroke(0,0,255)}
    else{stroke(255,0,0)};
   
  }
}
