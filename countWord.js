var count = 0;

function wordCount(speech){
    for(let i = 0; i < speech.length; i++) {
        var element = speech[i];
        if (element == " " && speech[i-1] != " "){
            count++
        }
    }
    return count;    
}

var speech = "I  am Junayed Hasan Sakib. I am here to learn programming. Let's Begin then."
var counting = wordCount(speech);

console.log(`The total word is : ${counting}`);