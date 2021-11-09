const seoul = ['jane', 'Kim']
function solution(arr){
    for (let i = 0; i < arr.length; i++) {
        let check = arr[i]
        if(check === 'Kim'){
            const answer = (`김서방은 ${i}에 있다`)
            return answer
        }
    }
}


console.log(solution(seoul))