const s1= "pPoooyY"
const s2 = "Pyy"

function solution(str){
    let countP = 0
    let countY = 0
    for (let i = 0; i < str.length; i++) {
        let check = str[i]
        if(check === 'p' || check === 'P'){
            countP++
        }
        else if (check === 'y' || check === 'Y'){
            countY++
        }
    }
    if(countP=== countY){
        return true
    }
    else{
        return false
    }
    if (countY===0||countP===0){
        return true
    }
}

console.log(solution(s1))
console.log(solution(s2))