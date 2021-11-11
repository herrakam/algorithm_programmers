function solution(n){
return n.toString(10).split('').reverse().map(num=> parseInt(num))
}

console.log(solution(12345))