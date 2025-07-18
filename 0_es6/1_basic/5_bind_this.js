
// [1] ----------------------
//객체 안에 add라는 함수 추가 
var obj = { result: 0 }
obj.add = function(x,y){
    this.result = x + y;
}
obj.add(2,3);

console.log(obj);  
console.log(obj.result);  
console.log('1>>>>>>>>>>>>>>>>>>>>>>>>>>');  

var obj = {};
var add = function(x,y){
    this.result = x + y;
}
add = add.bind(obj);
add(2,3);

console.log(obj);  
console.log(obj.result);  
console.log('2>>>>>>>>>>>>>>>>>>>>>>>>>>');  

// [2] ---------------------
//  중첩함수인경우 
var obj = {result : 0};
obj.add = function(x,y){
    function inner(){
        this.result = x + y;
    }
    inner();
}
obj.add(2,3);
console.log(obj);
console.log(obj.result)
console.log('3>>>>>>>>>>>>>>>>>>>>>>>>>>')

var obj = {result : 0};
obj.add = function(x,y){
    function inner(){
        this.result = x + y;
    }
    inner = inner.bind(this);
    inner();
    
}
obj.add(2,3);
console.log(obj);
console.log(obj.result)
console.log('4>>>>>>>>>>>>>>>>>>>>>>>>>>')

// [3] 화살표 함수
var obj = {result : 0};
obj.add = function(x,y){
    const inner = () => {this.result = x + y;};
    inner();
}
obj.add(2,3)
console.log(obj);
console.log(obj.result)
console.log('5>>>>>>>>>>>>>>>>>>>>>>>>>>')

