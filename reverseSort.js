let str = "Zbcdefg"

function solution(str){
    return str.split('').sort().reverse().join('')
}

console.log(solution(str))