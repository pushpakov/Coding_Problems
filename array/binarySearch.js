let arr = [ 0, 1, 4,7, 9, 16, 25 ]

let target = 1

function findtarget(arr,target){
    mid=Math.floor(arr.length/2)
    
    if(arr.length<=1)  return (arr[0] == target)
    if(arr[mid]==target) return true
    if(arr[mid]>target){
        findtarget(arr.slice(0,mid),target)
    }else{
        findtarget(arr.slice(mid),target)
    }

    return false
}

console.log(findtarget(arr,target,))

