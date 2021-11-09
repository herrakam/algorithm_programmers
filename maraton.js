const participant = ["mislav", "stanko", "mislav", "ana"]
const completion =["stanko", "ana", "mislav"]

// function solution(participant, completion){
//     let answer = ''
//     for (let i = 0; i < participant.length; i++) {
//         let checkName = participant[i]
//         if( completion.includes(checkName)=== true) {
//             completion.splice(completion.indexOf(checkName),1)
//         }
//         else{
//             answer = checkName
//             return answer
//         }
//     }
//     answer = toString(participant)
//     return answer
// }
//// 정확성은 통과하였지만, 효율성에서 통과하지 못함. 해시테이블을 써야할듯

function solution(participant, completion){
    const dict = {}
    let num = 1
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] in dict == false){
            dict[participant[i]] = num
        }
        else{
            dict[participant[i]]+=1
        }
        console.log(dict)
    }
    for (let i = 0; i < completion.length; i++) {
        dict[completion[i]]-=1
    }
    console.log(dict)
    for (let key in dict){
        if (dict[key] != 0){
            return key
        }
    }
}


console.log(solution(participant,completion))