//자바스크립트는 인자는 필요없을때 안받아도된다
//3_Promise.js

const likeCoffee = true;

const coffee = () => {
    return new Promise((resolve,reject)=>{
        if(likeCoffee) resolve('커피를 주문한다');
        else reject('주문하지 않는다')
    });
};

function order(message){
    console.log(message);

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('커피를 포장한다')
        }, 2000);
    });
}

coffee()
    //인자가 하나일때 () 굳이 안써도된다 
    .then( result => order(result));

console.log('다른 작업 가능')

/*
    function(coffee){
    }
*/
//비동기