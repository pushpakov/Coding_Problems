// Reverse the given array.
let arr = [ 0, 1, 4, 9, 16, 25 ]   // given array

function reverse(arr){
    if(arr.length<=1) return arr
    return reverse(arr.slice(1)).concat(arr[0])
}

console.log(reverse(arr))
