// sum of all elements of an Array
// for making it reusable, we use functions.
function getArraySum(array) {
    var totalMark  = 0;

    for(let i = 0; i < array.length; i++){
        var elements = array[i];
        totalMark = elements + totalMark;
    };

    return(`The total of Array is : ${totalMark}`);
};

var marks = [34,56,76,45,35,97,54,25];

var sum = getArraySum(marks);
console.log(sum);