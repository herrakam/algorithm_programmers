const n1 = 3
const n2 = 4

function solution(num){
    let answer = ''
    for (let i = 1; i <= num; i++) {
        if(i%2!==0){
            answer +='수'
        }
        else{
            answer +='박'
        }
    }
    return answer
}

console.log(solution(n1))