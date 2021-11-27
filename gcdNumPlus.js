function solution(left, right) {
    let answer = 0;
    let gcd = 0
    for(let i =left;i<=right;i++){
        for (let j = 1; j <=i; j++) {
            if(i%j === 0){
                gcd += 1
            }
        }
        console.log(i,gcd)
        if(gcd%2===0){
            answer += i
        }
        else{
            answer -= i
        }
        gcd =0
    }
    return answer;
}

console.log(solution(13,17))