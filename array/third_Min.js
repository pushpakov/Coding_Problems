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

// console.log(thirdMin([12,44,1,23,76,9,41,42,44,17]))



function findthird(arr){
    let a1 = a2 = a3 = -Infinity
    for(let i of arr){
        if(a1 < i){
            a3 = a2
            a2 = a1
            a1 = i;
        }else if(a2 < i){
            a3 = a2
            a2 = i
        }else if(a3 < i){
            a3 = i
        }
    }
    return {a3,a2,a1}
}

console.log(findthird([12,44,1,23,76,9,41,42,17]))


