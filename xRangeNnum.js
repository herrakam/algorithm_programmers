function solution(x, n) {
    let answer = [];
    let pushNum = 0
    for(let i =0;i<n;i++){
        pushNum += x
        answer.push(pushNum)
    }
    return answer;
}