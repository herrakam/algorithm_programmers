const n = 7
const lost = [2,3,4,5,6,7]
const reserve = [1,3,4,5,6,7]
function solution(n, lost, reserve) {
    let answer = n - lost.length;
    if(lost.length === n){
        answer = reserve.length
        return answer
    }

    for (let i = 0; i < lost.length; i++) {
        let lostStudent = lost[i]
        if (reserve.includes(lostStudent)){
            answer += 1
            // console.log(lostStudent)
            reserve.splice(reserve.indexOf(lostStudent),1)
            lost.splice(lost.indexOf(lostStudent),1)
            i -=1
            continue
        }
    if(reserve.length===0){
        return answer
    }
}
for (let i = 0; i < lost.length; i++) {
    let lostStudent = lost[i]
    // console.log('아래꺼:',lostStudent)
    const upperLostStudent = lostStudent + 1
    const lowerLostStudent = lostStudent - 1
    if((reserve.includes(upperLostStudent))||(reserve.includes(lowerLostStudent))){
        answer += 1
        if(reserve.includes(upperLostStudent)){
            reserve.splice(reserve.indexOf(upperLostStudent),1)
            // console.log('upper')
            continue
        }
        else{
            reserve.splice(reserve.indexOf(lowerLostStudent),1)
            // console.log('lower')
        }
    }

}
return answer
}

console.log(solution(n,lost,reserve))
