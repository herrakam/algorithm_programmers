const s1 = 'a124'
const s2 = '1234'

function solution (str){
    let checkType = true
    let stringArray = str.split('')
    if(str.length ===4 || str.length === 6){
        for (let i = 0; i < stringArray .length; i++) {
            let check = stringArray[i]
            if (isNaN(check) === true){
                checkType = false
                return false
            }
        }
        if(checkType === true){
            return true
        }
    }
    else{
        return false
    }
}

console.log(solution(s1))
console.log(solution(s2))
