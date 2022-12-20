function quickSort(arr){
    if(arr.length<=1) return arr
    let left = []
    let right = []
    let pivot = arr[arr.length-1]
    for(let k of arr.slice(0,arr.length-1)){
        k<pivot?left.push(k):right.push(k)
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

let arr = [45,12,11,2,78,99,12,41,65,02,32,4]
// console.log(quickSort(arr))



function quick(arr){
    if(arr.length<=1) return arr
    let left = []
    let right = []
    let pivot = arr[arr.length-1]
    for(let k of arr.slice(0,arr.length-1)){
        k<pivot?left.push(k):right.push(k)
    }
    return [...quick(left),pivot,...quick(right)]
}
console.log(quick(arr))
