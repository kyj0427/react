// fetch 내부에서 비동기적인 작업 확인 
// 4_fetch.js

//fetch("url")
fetch("https://jsonplaceholder.typicode.com/users")
        // fetch 를 통해 결과받는 변수  
    //.then( response => { console.log(response)});
    //.then( response => { response.json() } ) // ********** 잘못된 코딩
    // => .then( response => { return response.json() } ) // 올바른 코딩 
    // json 작업으로 변환
    .then( Response => Response.json() )       // ********** 축약형  
    .then( (users) => { 

        users.forEach( user => {
            //console.log(user.name); 
            console.log(user['name'] + "/" + user['address']['city']); //address 안에 있는 city 까지 출력 
            
        })

    } );

console.log('다른 작업 중');