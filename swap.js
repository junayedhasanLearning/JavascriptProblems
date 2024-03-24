// Swapping values of variables with help of temporary variable

var a,b,temp;
// giving values to variables
a = 5
b = 7;

console.log(`Before swapping , a equals ${a} and b equals ${b}`);

// swapping
temp = a;
a = b;
b = a;

console.log(`After swapping , a equals ${a} and b equals ${b}`);


// Swapping without temporary variable

var x = 6;
var y = 9;

console.log(`Before swapping , x equals ${x} and y equals ${y}`);
// swapping
x = x + y;
y = x - y;
x = x - y;

console.log(`After swapping , x equals ${x} and y equals ${y}`);

// Swapping using destruction

var p = 7;
var q = 8;

console.log(`Before swapping , p equals ${p} and q equals ${q}`);
// Swapping
[p,q] = [q,p];

console.log(`After swapping , p equals ${p} and y equals ${q}`);