// Check whether strings are rotation of each other
// Given two strings S1 & S2, write a program to say whether S2 is a rotation of S1.
// e.g. string S2=CDAB is a rotation of string S1=ABCD, whereas string S2=ACBD is not a rotation of string S1=ABCD

function checkRotation(s1,s2){
    let x = s1.indexOf(s2[0])
    if(x<1) return false
    let y = s1.substring(x)+s1.substring(0,x)
    return (s2==y)

}

let s1 = "acdab"
let s2 = "abacd"
console.log(checkRotation(s1,s2))