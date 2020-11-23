// 最終課題を制作しよう

function setup(){
  createCanvas(400, 400);
  background(240);

  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100);
  }
  console.log(scores);
  barchart(scores);
  noLoop();
}



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}



function sum(arr){
  let n =0;
  for(let i = 0; i < arr.length; i++){ 
    n += arr[i];
  }
  return n;
}

function average(arr){
  let n =0;
  sum(arr)
  let ave = sum(arr) / arr.length;
  return ave;
}

function largest(arr){
  let max=0;
  for(let i = 0; i < arr.length; i++){
    if(max<arr[i]){
      max=arr[i]
    }
  }
  return max;
}

function smallest(arr){
  let min =100;
  for(let i = 0; i < arr.length; i++){
    if(min>arr[i]){
      min=arr[i]
  }
  }
  return min;
}

function median(arr){
  let med=0;
  arr =sort(arr,arr.length)
  if(arr.length%2==1){
    med=arr[(arr.length-1)/2];
  }
  else{
    med=(arr[arr.length/2]+arr[(arr.length-2)/2])/2;
  }
  return med;
}

function barchart(scores){
  scaleY(10);
  let max=largest(scores);
  let min=smallest(scores);
  let ave=average(scores);
  let med=median(scores);
  noStroke();

  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
    fill(50,250);
    if(scores[i]==max){
      fill('rgb(100%,0%,10%)');
    }

  　if(scores[i]==min){
      fill(color(0,0,255));
    }
    rect(i * dx + 2, height - h, dx - 4, h);
    text(scores[i].toPrecision(3), i * dx, height - h);

  }

 　 stroke('rgb(0,255,0)');
    fill('rgb(0,255,0)');
    text('平均値', 0, height-height * ave / 100);
    text(ave.toPrecision(3), 40, height-height * ave / 100);
　  line(0, height-height * ave / 100, 500,height-height * 　　　　 ave / 100 );

 　 stroke('#fae');
    fill('#fae');
    text('中央値', 0, height-height * med / 100);
    text(med.toPrecision(3), 40, height-height * med / 100);
 　 line(0, height-height * med / 100, 500,height-height *            med / 100 );

}

function scaleY(n){
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }
}

function scaleX(n){
  for(let i = 0; i < n; i++){ line(width * i / n, 0, width * i / n, height); }
}
