/*Given a set of strings, find the longest common prefix.
Input: {"geeksforgeeks", "geeks", "geek", "geezer"}
Output: "gee"

Input: {"apple", "ape", "april"}
Output: "ap"
*/

let str = ["apple", "ape", "april"]
let output = ""
function commonPrefix(str){
    str.sort((a, b) => a.localeCompare(b))
//    console.log(str)
    for(let i=0;i<str[0].length;i++){
        if(str[0][i] == str[str.length-1][i]){
            output += str[0][i]
        }else{
            break; 
        }
    }
    return output
}

console.log(commonPrefix(str))

