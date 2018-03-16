//gameloop - init,draw,update
function init()
{
    canvas=document.getElementById('mycanvas');
    pen = canvas.getContext('2d');
    W=canvas.width;
    H=canvas.height;
    
    box ={
        x : 10,
        y : 20,
        w : 20,
        h : 20,
        speed : 5,
    }
    
}
function draw()
{
    pen.clearRect(0,0,W,H);
    pen.fillStyle = "yellow";
    pen.fillRect(box.x,box.y,box.w,box.h);
    
}
function update()
{
    box.x=box.x+box.speed;
    box.y+=3;
    if(box.x>=W)
        box.speed*=-1;
}
function gameloop()
{
    draw();
    update();
}
init();
setInterval(gameloop,100);