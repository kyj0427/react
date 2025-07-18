
//[1] function 명령어
function func1(first, second){
    return first + second;
}

//[2] function literal(변수값)
let func2 = function(first, second){
    return first + second;
};
//[3] arrow function
//react 에서는 arrow함수를 사용많이한다 => bind를 사용하지않기떄문에 
let func3 = (first , second) => {
    return first + second;
};
//[3-1] arrow function 생략형 => return값만 있을경우 중괄호 까지 생략 가능 
let func4 = (first, second) => first+second;

console.log(func1(1,2));
console.log(func2(1,2));
console.log(func3(1,2));
console.log(func4(1,2));

//es6 문법 
//멤버변수 를 정확하게 지칭하는 this
class MyClass{
    value = 10;
    //생성자 함수 
    //리터럴함수 (js 에서는 함수안에 함수사용가능)
    constructor(){
        var func2_add = function(first, second){
            return this.value + first + second;
        }.bind(this); //함수와 연결하는 bind 지정 

        console.log('확인2:' + func2_add(1,2)) //(1,2) 는 인자에 해당함 
        //arrow 함수 
        var func3_add = (first,second) => this.value + first + second;
        console.log('확인3:' + func3_add(3,4));
    }
}
//myclass 객체 생성
var my = new MyClass();
