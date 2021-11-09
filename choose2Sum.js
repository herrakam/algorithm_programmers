const numbers = [2,1,3,4,1]
function solution(numbers){
    let answer = []
    for (let i = 0; i < numbers.length; i++) {
        let num1 = numbers[i]
        for (let j = i; j < numbers.length; j++) {
            let num2 = numbers[j]
            if(i === j){
                continue
            }
            else{
               answer.push(num1+num2)
            }

        }
    }
    const set = new Set(answer)
    answer = [...set].sort((a,b)=>{return a-b})
    return answer
}

console.log(solution(numbers))