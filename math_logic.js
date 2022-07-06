var ans;

var points = 0;

var bg_images = [];

function generateRandom(min , max) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}


function QuestionNext(){

    symbol = Math.round(Math.random());
    if(symbol ==1){
        document.getElementById('operation').innerHTML = "+";
        const number1 = Math.floor(Math.random() *5);
        document.getElementById('n1').innerHTML = number1;
        const number2 = Math.floor(Math.random() *6);
        document.getElementById('n2').innerHTML = number2;
        ans = number1 + number2;
    }
    else{
        document.getElementById('operation').innerHTML = "-";
        const number1 = generateRandom(5,11);
        document.getElementById('n1').innerHTML = number1;
        const number2 = generateRandom(0,5);
        document.getElementById('n2').innerHTML = number2;
        ans = number1 - number2;
    }
    
}   

function checkAnswer(){
    prediction = predictImage();
    console.log(`Prediction ${prediction} and Answer ${ans}`)

    if(prediction == ans){
        points +=1;
        console.log(`Correct answer! Points ${points}`);
        if(points <=6 ){
        bg_images.push(`url('images/background${points}.svg')`);
        document.body.style.backgroundImage = bg_images;
        }
        else{
            alert("Well done! You have done great! Want to start again?");
            points = 0;
            bg_images = [];
            document.body.style.backgroundImage = bg_images;
        }
    }
    else{
        if(points != 0) points -=1;
        console.log(`Wrong answer. Points ${points}`);
        alert("Oops wrong answer! Try to write the number clearly next time! ");
        setTimeout(function(){
            bg_images.pop();
            document.body.style.backgroundImage = bg_images;
        }, 10);
    }
}


