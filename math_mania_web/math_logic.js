var ans;

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
}


