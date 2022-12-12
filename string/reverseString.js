// Method 1 using recursion:
let str = "PushpakKumar"

function reverseStr(str){
    if(str.length<=1) return str
    return reverseStr(str.substring(1)) +str[0]
}

console.log(reverseStr(str))




