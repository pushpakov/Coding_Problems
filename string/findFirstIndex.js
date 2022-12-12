// Find the Index of the First Occurrence in a String
let  haystack = "sadbutsad", needle = "sad"

function firstIndex(haystack,needle){
    if(haystack.length===needle.length){
        return 0
    }
    for(let i=0;i<=haystack.length-needle.length;i++){
            if(needle===haystack.substring(i,i+needle.length)){
                return i
            }
    }
    return -1
}

console.log(firstIndex(haystack,needle))
