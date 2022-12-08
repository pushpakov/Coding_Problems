// Method 1 using while loop 
function insertion_sort(A) {
    var len = A.length;
    var i = 1;
    while (i < len) {
        var x = A[i];
        var j = i - 1;
        while (j >= 0 && A[j] > x) {
            A[j + 1] = A[j];
            j = j - 1;
        }
        A[j+1] = x;
        i = i + 1;
    }
    return A
}

console.log(insertion_sort([7,5,1,2,0,45,12,11,66]))



// Method 2 using for loop
function iinsertions(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j>=0;j--){
            if(arr[j+1] <arr[j] ){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}

let arr = [22,11,4,25,87,111,32,4]
console.log(iinsertions(arr))
