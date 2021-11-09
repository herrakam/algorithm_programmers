const answers = [1,2,3,4,5]
const answers2 = [1,3,2,4,2]
const answers3 = [1,2,3,4,5,1,2,3,4,5]

function pre_solution(answers){
    let stu1 = 0
    let stu2 = 0
    let stu3 = 0
    for (let i = 0; i < answers.length; i++) {
        let answer = answers[i]
        if ((answer === (i+1)%5)||((i+1)%5===0&&answer===5)){
            stu1+=1
        }
        if((i+1)%2===0){
            if(((i+1)%8===2)&&(answer===1)){
                stu2+=1
            }
            else if((i+1)%8===4&&(answer ===3)){
                stu2+=1
            }
            else if((i+1)%8===6&&(answer ===4)){
                stu2+=1
            }
            else if((i+1)%8===0&&(answer ===5)){
                stu2+=1
            }
        }
        else {
            if(answer ===2){
                stu2 += 1
            }
        }


        let check3 = (i+1)%10
        // if()
        switch (check3){
            case 1:
            case 2:
                if (answer === 3) {
                    // console.log(answer, i + 1)
                    stu3 += 1
                }break
            case 3:
            case 4:
                if (answer === 1){
                    // console.log(answer,i+1)
                    stu3+=1
                }break
            case 5:
            case 6:
                if (answer === 2){
                    // console.log(answer,i+1)
                    stu3+=1
                }break
            case 7:
            case 8:
                if (answer === 4){
                    // console.log(answer,i+1)
                    stu3+=1
                }break
            case 9:
            case 0:
                if (answer === 5){
                    // console.log(answer,i+1)
                    stu3+=1
                }break
        }
    }
    let scoreArray = [stu1,stu2,stu3]
    let max = Math.max(stu1,stu2,stu3)
    let finalAns = []
    for (let i = 0; i <scoreArray.length; i++) {
        let check = scoreArray[i]
        if(check === max){
            finalAns.push(i+1)
        }

    }

    return finalAns
}//너무 어거지로 풀었음 다시풀어야 함
function solution(answers){
    const stu1Ans = [1,2,3,4,5]
    const stu2Ans = [2,1,2,3,2,4,2,5]
    const stu3Ans = [3,3,1,1,2,2,4,4,5,5]
    let stu1 = 0
    let stu2 = 0
    let stu3 = 0
    for (let i = 0; i < answers.length; i++) {
        let answer = answers[i]
        if(answer === stu1Ans[i%stu1Ans.length]){
            stu1+=1
        }
        if(answer === stu2Ans[i%stu2Ans.length]){
            stu2+=1
        }
        if(answer === stu3Ans[i%stu3Ans.length]){
            stu3+=1
        }

    }
    const  maxScore = Math.max(stu1,stu2,stu3)
    const scoreArray = [stu1,stu2,stu3]
    // console.log(scoreArray)
    let bestStu = []
    for (let i = 0; i < scoreArray.length; i++) {
        let checkScore = scoreArray[i]
        if(checkScore === maxScore){
            bestStu.push(i+1)
        }
    }
    return bestStu
}
console.log(solution(answers2))