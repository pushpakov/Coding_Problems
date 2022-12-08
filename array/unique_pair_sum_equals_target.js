// Find unique pairs of elements inside an array whoz sum is equal to the target;

let arr = [2,55,3,12,6,-7,3,9,-1]
let target = 5
let res = []
let nemap= new Set() 

let map = new Set(arr)
for(let i of arr){
    if(map.has(target-i) && !(nemap.has(target-i) || nemap.has(i)))  {
        res.push([target-i,i])
        nemap.add(i)
    }
}


console.log(res)