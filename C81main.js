canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");



ctx.beginPath();
ctx.strokeStyle = red;
ctx.lineWidth = 2;
ctx.arc(250, 210, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = black;
ctx.lineWidth = 2;
ctx.arc(350, 210, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = blue;
ctx.lineWidth = 2;
ctx.arc(450, 210, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = green;
ctx.lineWidth = 2;
ctx.arc(250,250, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = yellow;
ctx.lineWidth = 2;
ctx.arc(350, 350, 40 ,0 , 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value; console.log(color);
     mouse_x = e.clientX ;
     mouse_y = e.clientY ;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);    
}

function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
ctx.stroke();
}

//additional activity

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

	