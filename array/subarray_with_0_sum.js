/*Given an array of positive and negative numbers. Find if there is a subarray (of size at-least one) with 0 sum.
Example 1:

Input:   
5
4 2 -3 1 6

Output:   
Yes

Explanation: 
2, -3, 1 is the subarray 
with sum 0.
Example 2:

Input:
5
4 2 0 1 6

Output: 
Yes

Explanation: 
0 is one of the element 
in the array so there exist a 
subarray with sum 0.
*/


function checkSum0(n, arr){
    let sum = 0
    let map = new Set()
    for(let i of arr){
        sum+=i
        if(sum==0) return true
        if (map.has(sum)) return true 
        map.add(sum)
    }
    return false

}
let arr = [4, 2, -3, 1, 6]
console.log(checkSum0(5,arr,0))

