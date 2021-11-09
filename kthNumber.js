const array = [1,5,2,6,3,7,4]
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
function solution(array,commands){
    let answer = []
    for (let i = 0; i < commands.length; i++) {
        let commandArray = commands[i]
        let sortedArray = array.slice(commandArray[0]-1,commandArray[1]).sort((a,b)=>{ return a-b; })
        let answeridx = sortedArray[commandArray[2]-1]
        answer.push(answeridx)
        sortedArray = []

    }
    return answer
}

console.log(solution(array,commands))