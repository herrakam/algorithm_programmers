const arr1 = [3,2,6]
const divisor = 5
function solution (arr,divisor){
    let answer = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%divisor===0){
            answer.push(arr[i])
        }
    }
    if(answer.length===0){
        answer.push(-1)
        return answer
    }
    else{
        const sortedAnswer =  answer.sort((a,b)=>{return a-b})
        return sortedAnswer
    }
}

console.log(solution(arr1,divisor))