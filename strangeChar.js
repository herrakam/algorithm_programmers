function solution(n){
    let Array = n.split(' ')
    let answer = ''
    for (let i = 0; i < Array.length; i++) {
        let checkWord = Array[i]
        for (let j = 0; j < checkWord.length; j++) {
             if(j%2===1){
                answer+= checkWord[j].toLowerCase()
                console.log(checkWord[j].toLowerCase(),'odd')
            }
            else{
                answer+= checkWord[j].toUpperCase()
                console.log(checkWord[j].toUpperCase(),'even')
            }
            }
        answer += ' '

        }
  return answer.slice(0,answer.length -1)

    }


// 위에꺼는 25점밖에 안나옴 왜지? ==> 마지막 빈칸 추가 하는 로직 때문임
// function solution(n){
//     let Array = n.split(' ')
//     let answer = ''
//     for (let i = 0; i < Array.length; i++) {
//         let checkWord = Array[i]
//         for (let j = 0; j < checkWord.length; j++) {
//
//             if(j%2===1){
//                 answer+= checkWord[j].toLowerCase()
//             }
//             else{
//                 answer += checkWord[j].toUpperCase()
//                 continue
//             }
//
//
//         }
//         answer = answer + ' '
//
//     }
//     return answer.slice(0,answer.length -1)
// }

console.log(solution('try hello world'))
console.log(solution("ab ab ab ab"))
