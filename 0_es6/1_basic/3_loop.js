
//[0] 기존 자바스크립트
/*
var queryString = 'kind=it&title=python&cnt=3'
var chunks = queryString.split('&');
//console.log(chunks);
var result = {};

for(var i=0; i<chunks.length; i++){
    var parts = chunks[i].split('=');
    //console.log(parts);
    //객체로 만들어서 쪼개준다 
    var key = parts[0];
    var value = parts[1];
    result[key]=value;
}

console.log(result);
*/

//[1] forEach()  => 최신 자바스크립트 
/*
var queryString = 'kind=it&title=python&cnt=3'
var chunks = queryString.split('&');
var result = {};
//배열을 하나씩 뽑아서 ()=> 안에 담음 
//복수와 단수 처리 확실하게해야함
chunks.forEach((chunk)=> {
    // const [key,value] 객체 배열로 만들고나서 쪼개준다 
    const [key,value] = chunk.split('=');
    result[key]=value;
} )

console.log(result);
*/

// [2] map() : 리턴값을 받을 수 있음
// foreach 와 가장 큰 차이점은 리턴값 있음 여부이다
var queryString = 'kind=it&title=python&cnt=3'
var chunks = queryString.split('&');
var result = chunks.map((chunk)=>{
    const [key,value] = chunk.split('=');
    return {key,value};
});

console.log(result);

