// It Is Used to filter out arrays. it only works with an array

const arr = [2,3,4,5,6,7,8,9]

var result = arr.filter((items)=> {
    return items > 2
    // return items === 2
    // return items < 2
});

console.log(result)