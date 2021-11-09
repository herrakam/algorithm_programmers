function solution (nums){
    let answer = 0
    const getNum = nums.length/2
    const set = new Set(nums)
    const sortedNums = [...set]
    for (let i = 0; i <sortedNums.length; i++) {
        if (sortedNums.length == getNum){
            answer = sortedNums.length
            break
        }
        else if (answer == getNum){
            break
        }
        else{
            // console.log(sortedNums[i])
            answer++
        }

    }


    return answer
}

const pocketMon = [3,1,2,3]
const pocketMon2 = [3,3,3,2,2,4]
const pocketMon3 = [3,3,3,2,2,2]

console.log(solution(pocketMon))
console.log(solution(pocketMon2))
console.log(solution(pocketMon3))
