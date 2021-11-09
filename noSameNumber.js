const array1 = [1,1,3,3,0,1,1]
const array2 = [4,4,4,3,3]

function solution(arr){
    let answer = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]!=arr[i+1]){
            answer.push(arr[i])
        }
    }
    return answer
}

console.log(solution(array1))
console.log(solution(array2))