
// axios를 써야만 하는 이유 
// 4_axios / weather.js

/*
    fetch :
    axios :
*/


import axios from "axios"
import { useEffect, useState } from "react"


const App = () =>{

    const [temp, setTemp] = useState('');
    const [desc, setDesc] = useState('');
    const [humidity, setHumidity] = useState('')

    useEffect(()=>{

        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Seoul,KR&appid=1db47184ebbc18af53fd996be840d270')
        .then(jsonresult =>{
                setTemp(jsonresult.data.main.temp)
                setDesc(jsonresult.data.weather[0].description)
                setHumidity(jsonresult.data.main.humidity)
    }).catch( err => console.log(err))

},[])

    return(
        <div>
            <p> 온도: {temp }</p>
            <p> 날씨: {desc }</p>
            <p> 습도: {humidity }</p>
        </div>
    )


}

export default App;

