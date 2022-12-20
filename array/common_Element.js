let a = [1,5,3,7,9,2]
let b = [1,2,3,4,5,6]
let res = ""


let set = new Set(a)
for(let i of b){
   if(set.has(i)) {
    res+= " "+i
   }
}
console.log(res)
