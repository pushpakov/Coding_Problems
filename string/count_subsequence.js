// without using dp
let x = "abcdghklr"
let y = "abedfhr"
let i = x.length, j = y.length

function subseqq(x,y,i,j){

    if(i==0 || j==0) return 0
    if(x[i-1]==y[j-1]){
        return 1+ subseqq(x,y,i-1,j-1)
    }else{
        return Math.max(subseqq(x,y,i,j-1),subseqq(x,y,i-1,j))
    }
}

console.log(subseqq(x,y,i,j))

// with dp 

function subseq(x,y,i,j,dp){

    if(i==0 || j==0) return 0

    if(x[i-1]==y[j-1]){
        return dp[i][j] = 1 + subseq(x,y,i-1,j-1,dp)
    }
    if(dp[i][j] !== -1) {
        return dp[i][j]
    }
    return dp[i][j] = Math.max(subseq(x,y,i,j-1,dp),subseq(x,y,i-1,j,dp))
}


let dp = new Array(i+1).fill(new Array(j+1).fill(-1))

console.log(subseq(x,y,i,j,dp))