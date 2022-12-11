// Find the third minimum number from the given array 

const thirdMin = (arr) =>{
    let min1 = min2 = min3 = -Infinity
    for(let i of arr){
        if(min1 < i){
            min3=min2
            min2=min1
            min1=i
        }else if(min2<i){
            min3=min2
            min2=i
        }else if(min3<i){
            min3=i
        }
    }
    return min3
}

console.log(thirdMin([12,44,1,23,76,9,41,42,17]))

