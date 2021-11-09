const a = 6
const b = 2
function solution(month, day){
    const week = ['FRI','SAT','SUN','MON','TUE','WED','THU']
    let countDay = 0
    let i = 1
    while ( i <= month) {
        if(month === i){
            break
        }
        if(i === 2){
            countDay += 29
            i++
        }
        else if((i%2===1&&i <=7)||(i%2===0 && i>7)){
            countDay += 31
            i++
        }
        else {
            countDay += 30
            i++
        }
    }
    countDay += day
    let idx = countDay%week.length-1
    if(idx < 0){
        idx = week.length-1
    }
    const answer = week[idx]
    return answer
}

console.log(solution(a,b))