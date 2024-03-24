var a,b,c;
a = 4501111;
b = 3450;
c = 41501111;


// Finding Maximum
if (a > b && a > c) {
    console.log(`a is the maximum.`);
} else if ( b > a && b > c){
    console.log(`b is the maximum.`);
}else{
    console.log(`c is the maximum.`);
}

// finding max with Math function

var result = Math.max(a,b,c);
console.log(result);