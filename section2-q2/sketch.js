// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
     if(i%2==0){
     if(j%2==1){
       fill(125);
       rect(size*i,size*j,25,25);
       fill(255,0,0);
       circle(12.5+25*i,37.5,20);
       fill(51);
       circle(12.5+25*i,137.5,20);
       circle(12.5+25*i,187.5,20);
       }
   }
    else{
    if(j%2==0){
      fill(125);
      rect(size*i,size*j,25,25);
      fill(255, 0,0);
      circle(12.5+25*i,12.5,20);
      circle(12.5+25*i,62.5,20);
      fill(51);
      circle(12.5+25*i,162.5,20);
        }
      }
    }
  }
}
