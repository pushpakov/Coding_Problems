// let arr = [1, 2, 3,4,5,6,7,8]
// function bubbleSort(arr) {
//     for (let i=0;i<arr.length-1;i++) {
//         let swap = false
//         for (let j=0;j<arr.length-1;j++) {
//             if (arr[j] > arr[j + 1]) {
//                 arr[j] = arr[j] + arr[j + 1]
//                 arr[j + 1] = arr[j] - arr[j + 1]
//                 arr[j] = arr[j] - arr[j + 1]

//                 swap = true
//             }
//         }
//         if(swap == false){
//             break
//         }
//     }
//     return arr

// }
// console.log(bubbleSort(arr))



// swap using ES6 
function bubbles(arr){
    for(let i =0;i<arr.length-1;i++){
        let swap = false
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                swap = true
            }
        }
        if(swap==false) break
    }
    return arr
}

let arr = [ 12, 44, 54, 85, 124,122,56,14,11]


console.log(bubbles(arr))



















