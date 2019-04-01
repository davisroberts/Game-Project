
//create an empty array called balls

let balls = [];

function setup() {
  createCanvas(800, 400);

}

function draw(){
	background(40, 40, 40);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  let  b = new Ball(random(0, 800), random(0, 400),random(10,50),random(10,50));
  let  c = new Ball(random(0, 800), random(0, 400),random(10,50),random(10,50));
  let  d = new Ball(random(0, 800), random(0, 400),random(10,50),random(10,50));
  let  e = new Ball(random(0, 800), random(0, 400),random(10,50),random(10,50));
  let  f = new Ball(random(0, 800), random(0, 400),random(10,50),random(10,50));
  let  h = new Ball(random(0, 800), random(0, 400),random(10,50),random(10,50));
  let  i = new Ball(random(0, 800), random(0, 400),random(10,50),random(10,50));
  let  j = new Ball(random(0, 800), random(0, 400),random(10,50),random(10,50));
  let  k = new Ball(random(0, 800), random(0, 400),random(10,50),random(10,50));
  let  l = new Ball(random(0, 800), random(0, 400),random(10,50),random(10,50));
  balls.push(b);
  balls.push(c);
  balls.push(d);
  balls.push(e);
  balls.push(f);
  balls.push(h);
  balls.push(i);
  balls.push(j);
  balls.push(k);
  balls.push(l);
  console.log(balls);
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y, width, height){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.width =width;
        this.height =height;
	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(random(0,255), random(0,255), random(0,255));
		    ellipse(this.x,this.y,this.width,this.height);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+0.1;
		this.y = this.y+0;
	}


}
