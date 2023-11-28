// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  // BLANK[1]
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // BLANK[2]
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}


// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(400, 400);
  calendar(2019, 10);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}//下でうるう年の判定計算

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
   // 日付と曜日を表示する
   let x = 10 + (dow * 30); // 各日のX座標
   let y = 30 + (floor((d + dow) / 7) * 20); // 各日のY座標
    text(d + dayOfWeekAsString(dow), x, y);
   // 曜日を1増やす
   dow++;
   // 曜日が7になったら0に戻す
   if(dow == 7){
     dow = 0;
   }
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);//うるう年の基準が4で割れるかつ100で割り切れるまたは400で割り切れない。leapyear の関数で戻り値
}

function daysInYear(y){
  // BLANK[1]
  // うるう年なら366日、そうでなければ365日を返す
    return isLeapYear(y) ? 366 : 365;
  }


function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
   // y年m月d日が一年のうちで何日目かを返す関数
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){//year,month,day
  // BLANK[2]
    // 基準日を設定（1900年1月1日は月曜日）→この基準日は決まっている。
    const baseYear = 1900;
    const baseMonth = 1;
    const baseDay = 1;
    const baseDayOfWeek = 1; // 1は月曜日を表す（0が日曜日、1が月曜日、、、）
  
    // y年m月d日が一年のうちで何日目かを返す関数から指定された日付までの日数を計算
    const days = dayOfYear(y, m, d) - dayOfYear(baseYear, baseMonth, baseDay);
  
    // 曜日を計算し、0から6の範囲で返す（1が月曜日、2が火曜日、...、7が日曜日）
    return (baseDayOfWeek + days) % 7 + 1;
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}