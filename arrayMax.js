var marks = [76,45,42,87,98,67];

// finding maximum from an array

var max = marks[0]; // imagining that it is the maximum.
for(var i = 0; i <= marks.length; i ++){
    var elements = marks[i];
    if (elements > max){
        max = elements
    }
};

console.log(`Highest value is : ${max}`);