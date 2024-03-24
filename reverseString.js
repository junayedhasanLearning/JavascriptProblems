// reverse a string
function reverseString(str) {
    var reverse = "";
    for(let i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    };
    return reverse;
}

var speech = 'Hello There, I am an Alien.'
var output = reverseString(speech);
console.log(output);