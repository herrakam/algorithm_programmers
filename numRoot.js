function solution(n) {
    let answer = 0;
    let check = false
    for(let i =1; i*i<=n;i++){
        if(i*i === n){
            answer = (i+1)*(i+1)
            check = true
            break
        }
    }
    if(check === true){
        return answer
    }
    else{
        return -1
    }
}