count=0;
//gameloop - init,draw,update
function init()
{
    canvas=document.getElementById('mycanvas');
    pen = canvas.getContext('2d');
    W=canvas.width;
    H=canvas.height;
    food = getRandomFood();
    score=5;
    game_over=false;
    snake ={
        init_length : 5,
        color : "yellow",
        cells :[],
        direction : "right",
        createSnake:function(){
            for(var i=this.init_length-1;i>=0;i--){
                this.cells.push({x:i,y:0});
            }    
        },
         drawSnake:function(){
             for(var i =0;i<this.cells.length;i++)
                 {
                     pen.fillStyle=this.color;
                     pen.strokeStyle="black"
                     //to increase stroke width
                     pen.lineWidth="5";
                     pen.strokeRect(this.cells[i].x*10,this.cells[i].y*10,10,10);
                     pen.fillRect(this.cells[i].x*10,this.cells[i].y*10,10,10);
                 }
    },
        updateSnake:function()
        {
            var headX = this.cells[0].x;
            var headY = this.cells[0].y;
            //assuming snake is moving right
            //insertion at right
        //    nextheadX = headX+1;
        //   this.cells.pop();
        //    this.cells.unshift({x:nextheadX,y:headY});
            if(headX==food.x && headY==food.y)
                {
                    food=getRandomFood();
                    score++;
                }
            else
                 this.cells.pop();
            if(this.direction =="right")
            {
                nextheadX = headX+1;
                nextheadY = headY;
            }
            else if(this.direction =="left")
            {
                nextheadX = headX-1;
                nextheadY = headY;
            }
            else if(this.direction =="down")
                {
                    nextheadX=headX;
                    nextheadY=headY+1;
                }
            else if(this.direction =="up")
            {
                    nextheadX=headX;
                    nextheadY=headY-1;
            }
            this.cells.unshift({x:nextheadX,y:nextheadY});
        
            // find out last coordinate(boundaries)
            var last_x = Math.round(W/10);
            var last_y = Math.round(H/10);
            
            if(this.cells[0].x<0 || this.cells[0].y<0 || this.cells[0].y>last_y || this.cells[0].x>last_x)
                {
                    alert("GameOver");
                    alert("your score is :"+score);
                    game_over=true;
                }
        }
    },
    snake.createSnake();
    function keypressed(e)
    {
        console.log("you pressed the key!");
        if(e.key=="ArrowRight"){
            snake.direction = "right";
        }
        else if(e.key=="ArrowLeft"){
            snake.direction = "left";
        }
        else if(e.key=="ArrowDown"){
            snake.direction = "down";
        }
        else if(e.key=="ArrowUp")
        {snake.direction = "up";
        }
    }
    document.addEventListener('keydown',keypressed);
    function getRandomFood(){
        var foodX = Math.round(Math.random()*(W-10)/10);
        var foodY = Math.round(Math.random()*(H-10)/10);
    
        foodColors = ["aqua","orchid","green","red"];
        var i = Math.round(Math.random()*foodColors.length);
        var food = {
            x:foodX,
            y:foodY,
            color:foodColors[i],
        };
        return food;
    }
}
function draw()
{
    pen.clearRect(0,0,W,H);
    snake.drawSnake();
    pen.fillStyle = food.color; 
    pen.fillRect(food.x*10,food.y*10,10,10);
    pen.fillStyle = "white";
    pen.font = "14px Roboto";
    pen.fillText("Score : "+score,10,10);
    
}
function update()
{
    snake.updateSnake();
}
function gameloop()
{
    draw();
    update();
    if(game_over==true)
    {    //clearInterval(f);
     var a = prompt("do you want to play again press 'y' for yes and 'n' for no"," ");
     if(a=="y")
         {
             init();
         var f = setInterval(gameloop,1000);
             count=1;
         }
     else
         clearInterval(f);
    }
}
if(count==0)
    {
init();
var f = setInterval(gameloop,100);
    }