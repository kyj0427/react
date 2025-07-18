//5_async_await.js

async function init(){
    //안에 함수 통체로 비동기 처리하기위해서 await 사용 
    const response = await fetch("https://jsonplaceholder.typicode.com/users") // response 변수에 바로담음
    const users = await response.json();
    users.forEach( user => {
            console.log(user['name'] + "/" + user['address']['city'] ); 
        })    
}

//init 함수 호출
init();

console.log('다른 작업중');