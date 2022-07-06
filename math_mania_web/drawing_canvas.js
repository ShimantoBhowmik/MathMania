const BACKGROUND_COLOR = '#000000';
const LINE_COLOR = '#FFFFFF';
const LINE_WIDTH = 14;

var currX = 0;
var currY = 0;

var prevX = 0;
var prevY = 0;

function prepareCanvas () {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0 , 0 , canvas.clientWidth, canvas.clientHeight)
    
    context.strokeStyle = LINE_COLOR;
    context.lineWidth = LINE_WIDTH;
    context.lineJoin = 'round';

    document.addEventListener('mousemove', function(event){
        prevX = currX;
        currX = event.clientX - canvas.offsetLeft;

        prevY = currY;
        currY = event.clientY - canvas.offsetTop;

        context.beginPath();
        context.moveTo(prevX, prevY);
        context.lineTo(currX, currY);
        context.closePath();
        context.stroke();

    });
};
