// let str = "https://media-exp1.licdn.com/dms/document/C4D1FAQGD_Z3_3xBBQA/feedshare-document-pdf-analyzed/0/1670692396082?e=1671667200&v=beta&t=xeFvy3yJjxdSKcKgITt8cII3WwIte-GfNUl_x2FdEUU"
let str = "anilMahto"


let vowel = "aeiouAEIOU"
vowel = vowel.split("")
let vCount = 0
let cCount = 0

function counterFreq(str){
    for(let i of str){
        if((/^[a-zA-z]+$/.test(i))){
            if(vowel.indexOf(i) !== -1){
                vCount++
            }else{
                cCount++
            }
        }
    }
    return [vCount,cCount]
}

console.log(counterFreq(str))

