// Generating Random using javascript

var randomNumber = Math.random() * 6;
var dice = Math.ceil(randomNumber);
console.log(dice);

// generating random number in loops

for(let i = 0; i <= 6; i++){
    var randomNumber = Math.random() * 6;
    var dice = Math.ceil(randomNumber);
    console.log(dice);
}


// Generating nth time random number using Functions

function generateRandomNumber(n){
    for(let a = 0; a <= n; a++){
        let randNum = Math.random() * n;
        let output = Math.ceil(randNum);
        console.log(output);
    };
}

generateRandomNumber(12);