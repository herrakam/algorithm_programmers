function solution(x) {
    let answer = true;
    const splittedNum = (x+'').split('')
    let checkHashard = 0
    for(let i = 0; i<splittedNum.length; i++){
        let check = splittedNum[i]
        checkHashard += parseInt(check)
    }
    if (x%checkHashard !== 0) {
        answer = false
    }
    return answer;
}

