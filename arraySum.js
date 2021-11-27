function solution(arr1, arr2) {
    let answer = [[]];
    let needArr = arr1.length - answer.length
    if(answer.length<arr1.length){
        for (let k = 0; k <needArr; k++) {
            answer.push([])
        }
    }
    for(let i =0;i<arr1.length;i++){
        let arr1Arr = arr1[i]
        let arr2Arr = arr2[i]
        for(let j = 0;j<arr1Arr.length;j++){
            let arr1Num = arr1Arr[j]
            let arr2Num = arr2Arr[j]
            let sumNum = arr1Num + arr2Num
            answer[i].push(sumNum)
        }

    }
    return answer
}

