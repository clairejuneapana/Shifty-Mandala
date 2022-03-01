let angle = 0
let speed = 0.001
let r=0
let b=255

function preload(){
  song = loadSound('the space between our minds.mp3')}

function mousePressed() {
  userStartAudio();
}

function setup() {
  getAudioContext().suspend();
  createCanvas(windowWidth, windowHeight)
  noStroke()
  song.setVolume(0.1)
  song.play()
  song.loop()
  osc= new p5.Oscillator();
  osc.setType('sine')
  osc.amp(0.002)
  osc.start()
  
}

function draw() {
  let speed = map(mouseY, 0, height, -0.1, 0.1)
  let arm = map(mouseX, 350, width, 10, 400)
  let shearAmountX = map(mouseX, 0, width, -HALF_PI/2, HALF_PI/2)
      background(12,33,54)

   // let shearAmountY = map(mouseY, 0, width, -HALF_PI/2, HALF_PI/2)
    let volume1= map (mouseX, 0, width, -8, 8)
  let rate1 = map (mouseY,0,height,-2,2)
 
 song.amp(volume1)
  song.rate (rate1)
  
let freq= map(mouseX,20,mouseY,0,4000)
  osc.freq(freq)

  
  r=map(mouseX,0,600,0,255)
  b=map(mouseX,0,200,0,200)
    background(r,80,b);
  
  translate(width/2, height/2)
  rotate(angle)
  
    
  
  for(let i=0; i<10; i++){
    push()
    rotate(i*TWO_PI/10)
    translate(0, arm)  
      circle(0,0,0)
      fill(mouseX,mouseY,200, 40)
    
    for(let j=0; j<10; j++){
      push()
      rotate(j*TWO_PI/15)
      translate(0, arm)
      circle(10,20,130)
      
      pop()
    }
    pop()
  }
  angle += speed
  // shearX(shearAmountX)
   // shearY(shearAmountY)

  for (let l=0; l<10; l++){
    push()
    rotate(l*TWO_PI/10)
      translate(0,arm)
    circle(0,0,0)
    fill(mouseY, mouseX,200,30)
    
    for (let m=0; m<10; m++){
      push()
      rotate(m*TWO_PI/10)
      translate(0,arm)
      circle(10,10,70)
      pop()
    }
    
    pop()
  }
    for(let k=0; k<20; k++){
        push()
        rotate(k*TWO_PI/10)
        translate(0,arm)
        circle(0,0,0)
        fill(mouseY,0,mouseX-20,13)
      for (let n=0; n<50; n++){
        push()
        rotate(n/TWO_PI*5)
        translate(arm, 0)
        circle(50,10,3)
         for (let o=0; o<10; o++){
        push()
        rotate(o*TWO_PI/10)
        translate(0,arm)
        circle(80,10,3)
        pop()
 
         }
        pop()

      }
        pop()
    }
 
}
