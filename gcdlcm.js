function solution(m,n){
    let answer = []
    let gcd = 0
    let lcm = 0
    const min = Math.min(m,n)
    const max = Math.max(m,n)

    if(max%min === 0){
        answer.push(min,max)
        return answer
    }
    for (let i = 1; i < min; i++) {
        if(min%i === 0 && max%i===0){
            gcd = i
        }
    }
    lcm = min * max / gcd //최소공배수는 두 수의 곱에 최대공약수를 나눈 값이다.
    answer.push(gcd,lcm)

    return answer
}
