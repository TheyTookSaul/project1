blockX = 50;
blockY = 50;
blockWidth = 30;
blockHeight = 30;
blockSpeedX = 1;
blockSpeedY = 1;
keyCodeVar = 0;




function stop(){

}
  
  console.log("This is my first console log!! YIPPEEEEEEEE");

  

  class Block{
    constructor(x, y, width, height, speedX, speedY, color){
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.speedX = speedX;
      this.speedY = speedY;
      this.color = color;
    }

    display(){
      fill (this.color);
      rect(this.x, this.y, this.width, this.height)
      

      
    }

    move(){
      this.x = this.x + this.speedX;
      if (this.x > (windowWidth - this.width) || this.x <= 0){
        this.speedX = this.speedX * -1;
      }

      this.y = this.y + this.speedY;
      if (this.y > (windowHeight - this.height) || this.y <= 0){
        this.speedY = this.speedY * -1;
      }
    }

    keyCheck(){
      if (keyCodeVar == 87){
        if(this.speedY > 0){
          this.speedY = this.speedY * -1;
        }
        keyCodeVar = 0
      }
      else if(keyCodeVar == 83){
        if(this.speedY < 0){
          this.speedY = this.speedY * -1;
        }
        keyCodeVar = 0;
      }
    }

    
  }

  let Block1 = new Block(50, 50, 30, 30, 8, 7, '#976370');
  let Block2 = new Block(200, 200, 50, 50, 5, 6, '#eea990');
  let Block3 = new Block(500, 50, 50, 50, 10, 10, '#d88688');

  function setup() {
    
    createCanvas(windowWidth, windowHeight);    

    background(0)
    
  }

  function draw() 
  {

    Block1.display();
    Block1.move();
    Block1.keyCheck();
    Block2.display();
    Block2.move();
    Block2.keyCheck();
    Block3.display();
    Block3.move();
    Block3.keyCheck();

    console.log(Block2)
  }

  function keyPressed(){

    document.addEventListener('keydown', function(event) {
      if(keyCode == 87) {
          keyCodeVar = 87;
      }
      else if(keyCode == 83) {
          keyCodeVar = 83;
      }
  });

  }
