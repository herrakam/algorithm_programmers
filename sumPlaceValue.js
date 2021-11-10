function solution(n){
    let answer = 0
    let checkPlaceValue = 1
    let downNum = n

    while(n/checkPlaceValue >=1){
        checkPlaceValue*=10
    }
    checkPlaceValue /= 10
    while(checkPlaceValue>=1){
        let placeValue = parseInt(downNum / checkPlaceValue)
        downNum -= placeValue*checkPlaceValue
        console.log("downNum:",downNum)
        console.log("placeValue:",placeValue)
        answer += placeValue
        checkPlaceValue /= 10
    }
    return parseInt(answer)
}

console.log(solution(1024))