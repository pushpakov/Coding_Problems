// filter out duplicate element and give unique elements in an array.

let arr = [1,1,2,2,2,3,5,11,22]
let res = []

let map = new Map()
for(let i of arr){
    map.get(i)? map.set(i,map.get(i)+1) : map.set(i,1)
}

for(let ele of map){
    if(ele[1]==1){
        res.push(ele[0])
    }
}

console.log(res)