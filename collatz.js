function solution(num) {
    let count = 0
    while(true){
        if(count >= 500){
            return -1
            break;
        }
        else{
            if(num === 1){
                return count
                break;
            }
        }
        if(num%2 === 1){
            num = num*3 + 1
        }
        else{
            num /= 2
        }
        count++
    }
}