//removing double elements from an Array
var names = [3,4,2,5,11,3,4,2,44,21,34];

var uniqueName = [];

for(let i = 0; i < names.length; i++){
    var elements = names[i];
    var index = uniqueName.indexOf(elements)
    if (index == -1) {      
        uniqueName.push(elements)
    };
};


console.log(names.length);
console.log(uniqueName.length);