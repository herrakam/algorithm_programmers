const d = [2,2,3,3]
const budget = 10

function solution(d,budget){
    const sortedD = d.sort((a,b)=>{return a-b})
    let appliedCost = 0
    let appliedBranch = 0
    for (let i = 0; i < sortedD.length; i++) {
        let check = sortedD[i]
        let checkSum = appliedCost + check
        if(checkSum <= budget){
            appliedCost += check
            // console.log(appliedCost)
            appliedBranch++
            // console.log('appliedBranch:',appliedBranch)
            }
        else{
            return appliedBranch
        }
    }
    return appliedBranch
}

console.log(solution(d,budget))