// in a sorted array return a sorted array that has a square of all element of given array.

let array = [-4,-2,0,1,3,5]

function square(arr){
    let i = 0, j= arr.length-1
    let res = new Array(arr.length)
    for(let k = j;k>=0;k--){
        if(Math.abs(arr[i])>Math.abs(arr[j])){
            res[k]=(arr[i]*arr[i])
            i++
        }else{
            res[k]=(arr[j]*arr[j])
            j--
        }
    }
    return res
}

console.log(square(array))