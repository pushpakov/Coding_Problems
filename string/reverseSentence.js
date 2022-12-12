let str = "i love programming very much";
str = str.split(' ');
function reverseWord(str) {
    if (str.length <= 1) return str;
    return reverseWord(str.slice(1)) + ' ' + str[0]
}
console.log(reverseWord(str));
