function solution(sizes) {
    let answer = 0
    let maxWidth = sizes[0][0]
    let maxHeight = sizes[0][1]
    let heightArray = []
    let widthArray = []
    for(let i =0; i<sizes.length; i++){
        let checkWidth = sizes[i][0]
        let checkHeight = sizes[i][1]
        if(checkHeight >checkWidth){
            [checkWidth,checkHeight] = [checkHeight,checkWidth]
        }
        heightArray.push(checkHeight)
        widthArray.push(checkWidth)
    }
    maxHeight = Math.max(...heightArray)
    maxWidth = Math.max(...widthArray)
    answer = maxHeight * maxWidth
    return answer;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]))