// let a = "computer" 
// let b =[1, 3, 5 , 6 , 7, 4, 2, 8]   and output = c1r8o3e2m5t4p6u7



let a = "computer" 
let b =[1, 3, 5 , 6 , 7, 4, 2, 8]  
a = a.split("")
let output = ""
function mergeab(a,b){
    if(a.length <=1) return 
    output += a[0]+b[0]+a[a.length-1]+b[b.length-1]
    return mergeab(a.slice(1,-1),b.slice(1,-1))
}
mergeab(a,b)
console.log(output)


