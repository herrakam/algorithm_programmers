function solution(s, n){
    return s.split("").map(value => {
        if (value === " ") return value;
        return value.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(value.charCodeAt() + n - 26)
        : String.fromCharCode(value.charCodeAt() + n)
    }).join("");
}
const s1 = 'AB'
const s2 = 'Z'
const s3 = 'a B z'

const n1 = 1
const n2 = 1
const n3 = 4
// console.log(solution(s1,n1))
// console.log(solution(s2,n2))
console.log(solution(s3,n3))
