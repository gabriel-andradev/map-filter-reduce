function filterPair(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 !== 0;
}

const myArray = [1, 23, 44, 55, 76, 2, 6];

console.log(filterPair(myArray))