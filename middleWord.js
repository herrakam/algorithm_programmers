const s = 'abcde'
const s2 = 'qwer'

function solution(string){
    let answer = ''
    if(string.length % 2 === 1){
        answer =  string[(parseInt(string.length/2))]
    }
    else{
        answer = string[string.length/2-1] + string[string.length/2]
    }
    return answer
}

console.log(solution(s))
console.log(solution(s2))