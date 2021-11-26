function solution(phone_number) {
    let answer = [];
    const numberArray = phone_number.split('')
    if(numberArray.length === 4){
        return numberArray.join('')
    }
    for(let i = 0; i<phone_number.length;i++){
        answer.push('*')
        numberArray.splice(0,1)
        if(phone_number.length - i === 5){
            break;
        }
    }
    answer = answer.concat(numberArray).join('')
    return answer
}