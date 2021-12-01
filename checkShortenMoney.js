function solution(price, money, count) {
    let i = 1
    let answer = 0
    let sumPrice = 0
    while(count>=i){
        sumPrice += price*i
        i++
    }
    if(sumPrice <= money){
        return 0
    }
    else{
        answer = sumPrice - money
    }

    return answer;
}