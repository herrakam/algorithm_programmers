function solution(arr) {
    let answer = arr;
    let minNum = arr[0]
    if(arr.length <= 1){
        answer = [-1]
        return answer
    }
    for(let i = 0; i< arr.length;i++){
        if(arr[i]<minNum){
        minNum = arr[i]
    }
    }
    const removeNum = arr.splice(arr.indexOf(minNum), 1)
    return answer
}