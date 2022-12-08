// Reverse the given array.
let arr = [ 0, 1, 4, 9, 16, 25 ]   // given array

//Method 1 using while loop
function swapReverse(arr){
    let i=0
    let j = arr.length-1
    while(i<j){
        [arr[i],arr[j]] = [arr[j],arr[i]]
        i++
        j--
    }
    return arr
}

console.log(swapReverse(arr))



//Method 2 using reccursion
function reverse(arr){
    if(arr.length<=1) return arr
    return reverse(arr.slice(1)).concat(arr[0])
}

console.log(reverse(arr))
