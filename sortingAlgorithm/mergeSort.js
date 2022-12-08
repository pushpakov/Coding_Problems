// Method 1 with extra array 
function mergSort(arr){
    if(arr.length<=1) return arr
    let mid = Math.floor(arr.length/2)

    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    return merg(mergSort(left),mergSort(right))
}

function merg(left,right){
    let result= []
    let lefti = 0
    let righti = 0
    while(lefti<left.length && righti<right.length){
        let lele = left[lefti]
        let rele = right[righti]
        if(lele<rele){
           result.push(lele)
            lefti++
        }else{
            result.push(rele)
            righti++
        }
    }
    return [...result,...left.slice(lefti),...right.slice(righti)]
}

console.log(mergSort([5,8,7,9,1,2,3,8,4]))








//Method 2 without extra array 
function mergeSort(arr){
    if(arr.length<=1) return arr
    let mid = Math.floor(arr.length/2)

    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    return merge(mergeSort(left),mergeSort(right),arr)
}

function merge(left,right,arr){
    let lefti = 0
    let righti = 0
    let i = 0
    while(lefti<left.length && righti<right.length){
        let lele = left[lefti]
        let rele = right[righti]
        if(lele<rele){
           // result.push(lele)
           arr[i] = lele
            lefti++
            i++
        }else{
            //result.push(rele)
            arr[i] = rele
            righti++
            i++
        }
        
    }

    while(lefti<left.length){
        let lele = left[lefti]
           arr[i] = lele
            lefti++
            i++
    }

    while(righti<right.length){
        let rele = right[righti]
            arr[i] = rele
            righti++
            i++
        }

        return arr
        
    }
    



console.log(mergeSort([5,8,7,9,1,2,3,8,4]))













