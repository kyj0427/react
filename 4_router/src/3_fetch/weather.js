
// weather.js

import { useEffect, useState } from 'react';
import '../App.css'

function App(){

    const [temp, setTemp] = useState('');
    const [desc, setDesc] = useState('');
    const [humidity, setHumidity] = useState('')

    const [isReady, setIsReady] = useState(false);

    const getData = async()=>{
        await fetch('http://api.openweathermap.org/data/2.5/weather?q=Seoul,KR&appid=1db47184ebbc18af53fd996be840d270')
            .then( result =>  result.json() )
            .then( jsonresult => { 
                //console.log(jsonresult) 
                // console.log(jsonresult.weather[0].main);
                // console.log(jsonresult.main.temp);
                // 1-1 변수에 값을 지정
                setTemp(jsonresult.main.temp)
                setDesc(jsonresult.weather[0].description)
                setHumidity(jsonresult.main.humidity)

                setIsReady(true)
            }).catch( err => console.log(err))
    }

    useEffect(()=>{
        getData()    
    }, [])

    if( isReady ){
        return(
                <div className='App'>
                    {/* 1-2 변수값을 화면 출력 */}
                    <p> 온도: {temp }</p>
                    <p> 날씨: {desc }</p>
                    <p> 습도: {humidity }</p>
                </div>
            )
    }else{
        return(
            <div className='App-header'>
                로딩중....
            </div>
        )
    }
}

export default App;
