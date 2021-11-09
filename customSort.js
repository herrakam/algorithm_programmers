    let arr1 = ["sun", "bed", "car"]
    let arr2 = ["abce", "abcd", "cdx"]

    function solution(arr,n){
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length-i - 1; j++) {
                let check = arr[j][n]
                let anotherCheck = arr[j+1][n]
                if(check > anotherCheck){
                        [arr[j], arr[j+1]] = [arr[j+1],arr[j]]
                }
                else if( check === anotherCheck){
                    if(arr[j] > arr[j+1]){
                        [arr[j], arr[j+1]] = [arr[j+1],arr[j]]
                    }
                }
            }
        }
        return arr
    }

    console.log(solution(arr2,2))
//     let arr1 = ["sun", "bed", "car"]
// let arr2 = ["abce", "abcd", "cdx"]
//
// function solution(arr,n){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length-i - 1; j++) {
//             let check = arr[j][n]
//             let anotherCheck = arr[j+1][n]
//             console.log(check, anotherCheck)
//             if(check > anotherCheck){
//                   console.log(arr[j], arr[j+1]);
//                     [arr[j], arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }
//
// console.log(solution(arr1,1));

