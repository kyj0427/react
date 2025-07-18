import { useState } from 'react';
import '../App.css';

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

function MyNav(props) {
    var lists = [];
    var datas = props.data;

    // 상위 컴포넌트에서 넘겨받은 데이터로 <li> 구성
    datas.forEach((data) => {
        lists.push(
            <li key={data.id}>
                <a href={data.site}>{data.name}</a>
            </li>
        );
    });

    return <ul>{lists}</ul>;
  }
function App(){

  let [links, setLinks] = useState(
    [
      { id: 'daum', name: '다음3',  site : 'http://www.daum.net'},
      { id: 'naver', name: '네이버3',  site : 'http://www.naver.com'},
      { id: 'nate', name: '네이트3',  site : 'http://www.nate.com'}
    ]
  )  

    return (
      <div className='App-header'>
          <MyNav data={links}></MyNav>
      </div>
    )
}

export default App;

//