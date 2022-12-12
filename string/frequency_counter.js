/*You need to create a javascript function which will accept a string and count the frequency of each alphabets. then print them in descending order like below -
a: 20
k: 9
d: 4
l: 3
g: 1
*/


function freqInDesc(str){
    let map = new Map()
    for(let i=0;i<str.length;i++){
        if(!str[i].match(/^[a-zA-Z]$/)) continue
        if(map.get(str[i])==undefined){
            map.set(str[i],1)
        }
        else {
            map.set(str[i],map.get(str[i])+1)
        }
    }
    let arr = []
    for(let key of map){
        arr.push(key)   
    }
    for(let i=0;i<arr.length;i++){
        for(let j=i;j>0;j--){
            if(arr[j][1]>arr[j-1][1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
            else{
                break
            }
        }
    }
    let arr1 =  ((arr.join(" ")).split(" "))
    for(let k=0;k<arr1.length;k++){
        let res = arr1[k].replace(","," - ")
        console.log(res) 
    }
}


(freqInDesc("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"))
