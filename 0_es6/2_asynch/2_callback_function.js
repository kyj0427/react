
//2_callback_function.js

//함수선언
function order(coffee,callback){
    console.log(`${coffee} 주문`)
    //=> 지정한 시간에 단한번
    setTimeout( ()=>{
        //특정 순간에 불려내는의미로 callback 자주사용
        callback(coffee);
    } , 2000); 
    
}
//pickup 이라는 함수를 callback 에 넣음 
function pickup(result){
    console.log(`${result} 준비 완료`)
}

//함수가 또다른 인자로 들어갈수있음 (함수를 변수의 값으로 취급)
order('카페라떼', pickup);

console.log('다른 작업가능')