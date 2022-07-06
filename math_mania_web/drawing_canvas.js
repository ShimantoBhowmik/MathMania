const BACKGROUND_COLOR = '#000000';
const LINE_COLOR = '#FFFFFF';
const LINE_WIDTH = 14;

var currX = 0;
var currY = 0;

var prevX = 0;
var prevY = 0;

var canvas;
var context;

function prepareCanvas () {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0 , 0 , canvas.clientWidth, canvas.clientHeight)
    
    context.strokeStyle = LINE_COLOR;
    context.lineWidth = LINE_WIDTH;
    context.lineJoin = 'round';

    var isPainting = false;

    document.addEventListener('mousedown', function(event){
        console.log('Mouse Pressed');
        isPainting = true;  
        currX = event.clientX - canvas.offsetLeft;
        currY = event.clientY - canvas.offsetTop;   
    });

    document.addEventListener('mouseup', function(event){
        console.log('Mouse Released');
        isPainting = false;  
    });

    document.addEventListener('mousemove', function(event){
        if (isPainting){
        prevX = currX;
        currX = event.clientX - canvas.offsetLeft;

        prevY = currY;
        currY = event.clientY - canvas.offsetTop;

        context.beginPath();
        context.moveTo(prevX, prevY);
        context.lineTo(currX, currY);
        context.closePath();
        context.stroke();
        }

    });

    canvas.addEventListener('mouseleave', function(event){
        isPainting = false;  
    });

    

};

function clearCanvas() {
    currX = 0;
    currY = 0;

    prevX = 0;
    prevY = 0;

    context.fillRect(0 , 0 , canvas.clientWidth, canvas.clientHeight);

};
