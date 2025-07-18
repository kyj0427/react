//[1] 논리연산자 결합

let arr = ['one','two'];
let first = arr[0];
let third = arr[2];

console.log(first);     //'one'
//console.log(second);    // ??
console.log(third);     // ??

//논리연산자 결합 (or 연산자는 둘다 false 일 때만 false)
console.log(first||'empty');
console.log(third||'empty');

//[2] 삼항연산자와 truthy, falsy
// * ? 를 기준으로 앞에있는게 true 면 true 출력 false 면 뒤에 출력 *
// * true 값 취급

// let truthy = true;
// let truthy = 1; //0 제외 모든숫자는 true 로 취급한다
// let truthy = -1;
// let truthy = '0';
// 자료형 (문자열) (숫자) 판단 해줘야한다
// let truthy = 'false';
// let truthy = []; //js 에서 빈 배열은 true 다 
// let truthy = {}; //js 에서 {} 는 객체이다 (빈 객체도 true) 

// let samhang = truthy?"참" : "거짓";
// console.log("Truthy:" + samhang);

// * false 값 취급 
// let falsy = false;
// let falsy = 0;
// let falsy = '';
// let falsy = null;
// let falsy = undefined;
// let falsy = NaN;

// let samhang = falsy?'참' : '거짓' ;
// console.log('falsy:' + samhang);

//[3] 요소분해
//[] 안에 값을 default 값으로 임의로 정해줄수있다 
let list = [100,200, 300];
let [item1, item2, item3=1004] = list;
console.log(item1);
console.log(item2);
console.log(item3);

[item2, item1] =[item1, item2];
console.log(item1);
console.log(item2);

// [4] 전개연산자(...)
let objOne = {hana:1,dul:2,gita:0};
let objTow = {sam:3,sa:4,gita:-1};
let old_combined = {
    hana : objOne.hana,
    dul  : objOne.dul,
    gita : objOne.gita,
    sam  : objTow.sam,
    sa   : objTow.sa,
    gita : objTow.gita
}
console.log(old_combined);

// 요즘 방식
let new_combined = {...objOne, ...objTow};
console.log(new_combined);

// 한객체만 뽑아서 분류할때 사용하는 코드
let {gita, ...others} = new_combined;
console.log(gita);
console.log(others);

// 같은 주소값 을 복사했기떄문에 원본도 변경
let origin = {name:'홍길동', age:22, dept:'IT'}
let temp = origin;
temp.name = '이순신';
console.log(temp);
console.log(origin);

//전개연산자를 활용하여 원본데이터를 유지 
let origin2 = {name:'홍길동', age:22, dept:'IT'}
let temp2 = {...origin, name:'이순신'}
console.log(temp2);
console.log(origin2);

