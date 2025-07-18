/* 
    변수 선언
        -var
        -let : 재선언 불가(한번 선언한 변수 재선언 불가)
        -const : 재설정 불가(한번 값을 선언했을경우 값 재설정 불가)
*/

let msg_a = '안녕하세요';
let msg_b = "반갑습니다";

// 예전 코드
let old_msg = msg_a + " " + msg_b; 
// 최신 코드
const new_msg = `${msg_a} ${msg_b}`;

console.log(old_msg)
console.log(new_msg)

const num1=100;
const num2=200;
// 100 * 200 = 20000 출력 

const result = num1 * num2;
console.log(`${num1} * ${num2} = ${result}`)
