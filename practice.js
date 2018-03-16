//variable declarations

var a = 10;
var b = 5.5;
var c = "hello world";
var d = b+a;
console.log(d);
console.log(c);

// output-documnent/console

document.write("hello");
document.write("world");
console.log("hello");

//prompt
//var name=prompt("enter your name");

//alert box
//alert("game over"+name);

//functions

f(); //hoisting
function f()
{
    console.log("having fun");
}
// fun(); hoisting not possible
var fun=function(){
    console.log("fun");
    return 4;
}
// arrays and loops
ap = ["apple","guava",40,30];
console.log(ap);
for(var i=0;i<ap.length;i++)
    console.log(ap[i])
ap.forEach(function(fruit,i)
{
    console.log(i+" = "+fruit);    
 });
bs = document.getElementById('first');
console.log(bs);
bs.addEventListener('mousedown',mousepressed);
function mousepressed(someinfo)
{
    console.log("you pressed the mouse !");
    console.log(someinfo.clientX,someinfo.clientY);
}

//JSON : javascript object

var bird = {
    x : 10,
    y : 30,
    color : "green",
    eggs : [1,2,3,4,5],
    fly : function(){
    console.log("bird is flying");
        console.log(this.x);
        console.log(this.color);
    }
};
    