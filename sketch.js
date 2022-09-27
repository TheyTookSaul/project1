blockX = 50;
blockY = 50;
blockWidth = 30;
blockHeight = 30;
blockSpeedX = 1;
blockSpeedY = 1;
keyCodeVar = 0;
numBirds = 100;

var colorPalette = ["#eeede9", "#d5d2cb", "#953232", "#511f20", "#fce2a5", "#ffcaab", "#ffd0a0", "#76a1ea", "#f8a966", "#2d5856", "#df8f90", "#ef2922"];

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
        x : 100 + (50 * i),
        y : 100 + (50 * i),
        width : 25,
        height : 25,
        speedX : 0,
        speedY : 0,
        value : i,
        color : "#000000",
        dX : -0.0005,
        dY : -0.0005,
        display: function(){
          stroke(this.color);
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
              this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            }
          }
          if (followX > this.x){
            if (this.dX > 0){
              this.dX *= -1;
              this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            }
          }
          if (followY < this.y){
            if (this.dY < 0){
              this.dY *= -1;
              this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            }
          }
          if (followY > this.y){
            if (this.dY > 0){
              this.dY *= -1;
              this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            }
          }

          if (this.x > (windowWidth - 25) || this.x <= 0){
            this.dX *= -1;
          }
          if(this.y > (windowHeight - 25) || this.y <= 0){
            this.dY *= -1;
          }

        },

        collisionDetection : function(){
          for (var i = 0; i < numBirds; i++){
            if(this.value != birds[i].value){
              var distance = dist(this.x, this.y, birds[i].x, birds[i].y);

              if (distance < this.width + birds[i].width){
                console.log("COLIDE")
                if(this.x > birds[i].x){
                  this.x += 1
                  birds[i].x -= 1
                }
                else{
                  this.x -= 1
                  birds[i].x += 1
                }
                if(this.y > birds[i].y){
                  this.y += 1
                  birds[i].y -= 1
                }
                else{
                  this.y -= 1
                  birds[i].y += 1
                }
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
        else if (keyCode == 32){
          keyCodeVar = 32;
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
        if(keyCodeVar == 32){
          background(0);
          keyCodeVar = 0;
        }
        followX = this.x;
        followY = this.y;
      } 
    }
    
  

  function draw() 
  {

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

