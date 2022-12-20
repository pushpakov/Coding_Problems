/*Remove duplicate characters
Given a words S, remove the repeated characters in the string
Input:
    Hello World
    where:
First line represents the input string
Output:
    Helo Wrd
Assumptions:
Length of the string S can be 0 to 10000
Character comparisons will be case-sensitive.*/
// JavaScript code for the above Approach
function removeDuplicates(s){
    let temp = "" + s[0]
    if(s.length == 0){
        return null
    }
    
    for(let i=1;i<s.length;i++){
        if (temp.indexOf(s[i]) == -1)
            temp = temp + s[i]
    }
    return temp
}

let s = "Hello World"
console.log(removeDuplicates(s))