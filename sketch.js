blockX = 50;
blockY = 50;
blockWidth = 30;
blockHeight = 30;
blockSpeedX = 1;
blockSpeedY = 1;
keyCodeVar = 0;
numBirds = 25;

var colorPalette = ["#eeede9", "#d5d2cb", "#953232", "#511f20", "#fce2a5"];

followX = 600;
followY = 600;

var birds =[];


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

      document.addEventListener('keydown', function(event) {
        if(keyCode == 87) {
            keyCodeVar = 87;
        }
        else if(keyCode == 83) {
            keyCodeVar = 83;
        }
      })

      this.x = this.x + this.speedX;

      if (this.x > (windowWidth - this.width) || this.x <= 0){
        this.speedX = this.speedX * -1;
      }

      this.y = this.y + this.speedY;
      if (this.y > (windowHeight - this.height) || this.y <= 0){
        this.speedY = this.speedY * -1;
      }

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
      else if(keyCodeVar == 65){
        if(this.speedX < 0){
          this.speedX = this.speedX * -1;
        }
        keyCodeVar = 0;
      }
      else if(keyCodeVar == 68){
        if(this.speedX < 0){
          this.speedX = this.speedX * -1;
        }
        keyCodeVar = 0;
      }

    }

    }

let Block1 = new Block(followX, followY, 30, 30, 8, 7, '#976370');

  function setup() {
    
    createCanvas(windowWidth, windowHeight);    

    background(0)
    for (var i = 0; i < numBirds; i++){
      birds[i] = {
        x : 100 + (40 * i),
        y : 100,
        width : 25,
        height : 25,
        speedX : 0,
        speedY : 0,
        value : i,
        color : "#000000",
        dX : -0.0005,
        dY : -0.0005,
        display: function(){
          stroke(255);
          fill(this.color);
          rect(this.x, this.y, this.width, this.height);
        },
        move: function(){

          

          tempXY = [this.x, this.y]

          this.x = (1-this.dX)*this.x-this.dX*(followX+this.x);
          this.y = (1-this.dY)*this.y-this.dY*(followY+this.y);

          if (followX < this.x){
            if (this.dX < 0){
              this.dX *= -1;
              this.color = colorPalette[0];
            }
          }
          if (followX > this.x){
            if (this.dX > 0){
              this.dX *= -1;
              this.color = colorPalette[1];
            }
          }
          if (followY < this.y){
            if (this.dY < 0){
              this.dY *= -1;
              this.color = colorPalette[2];
            }
          }
          if (followY > this.y){
            if (this.dY > 0){
              this.dY *= -1;
              this.color = colorPalette[3];
            }
          }

          if (this.x > (windowWidth - 25) || this.x <= 0){
            this.dX *= -1;
          }
          if(this.y > (windowHeight - 25) || this.y <= 0){
            this.dY *= -1;
          }

          for (var i = 0; i < numBirds; i++){
            if (birds[i].value != this.value){
              if((this.x && this.y) == (birds[i].x && birds[i].y)){
                this.x -= 500
                this.y -= 100
                birds[i].x += 500
                birds[i].y += 100
              }
            }
          }
        },

        collisionDetection : function(){
          for (var i = 0; i < numBirds; i++){
            console.log(this.x );
            if (birds[i].value != this.value){
              if(birds[i].x >= (this.x + this.width) || (birds[i].x + birds[i].width) <= this.x || birds[i].y >= (this.y + this.height) || (birds[i].y + birds[i].height) <= this.y){
                console.log("IOHAOWHIOIHADOIIOHAIOHSD");
                this.color = colorPalette[4];
                birds[i].x += 6;
                birds[i].y += 6;
                this.x -= 6;
                this.y -= 6;
                }
              }
            }
          },
        }
      }
    }

    followSquare = {
      x : followX,
      y : followY,
      width : 50,
      height : 50,
      speedX : 2.5,
      speedY : 2.5,
      display : function(){
        fill(255);
        rect(this.x, this.y, this.width, this.height);
      },
      move : function(){
        document.addEventListener('keydown', function(event) {
          if(keyCode == 87) {
            keyCodeVar = 87;
        }
        else if(keyCode == 83) {
            keyCodeVar = 83;
        }
        else if(keyCode == 65){
            keyCodeVar = 65;
        }
        else if (keyCode == 68){
            keyCodeVar = 68;
        }
        })
  
        this.x = this.x + this.speedX;

        this.y = this.y + this.speedY;
  
        if (this.x > (windowWidth - this.width) || this.x <= 0){
          this.speedX = this.speedX * -1
        }
  
        if (this.y > (windowHeight - this.height) || this.y <= 0){
          this.speedY = this.speedY * -1;
        }
  
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
        else if(keyCodeVar == 65){
          if(this.speedX > 0){
            this.speedX = this.speedX * -1;
          }
          keyCodeVar = 0;
        }
        else if(keyCodeVar == 68){
          if(this.speedX < 0){
            this.speedX = this.speedX * -1;
          }
          keyCodeVar = 0;
        }
        followX = this.x;
        followY = this.y;
      } 
    }
    
  

  function draw() 
  {

    background(0);

    followSquare.display();
    followSquare.move();

    

    for (var i = 0; i < birds.length; i++){
      birds[i].display();
      birds[i].move();
      birds[i].collisionDetection();
    }

    

  }

function mouseMovement(){
  document.addEventListener('mousemove', (event) => {
    const {
      clientX,
      clientY
    } = event
    console.log(clientX, clientY)
  })
}   

