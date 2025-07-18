// App.js

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../App.css'
import GitList from './GitList'
import GitDetail from './GitDetail'
import { useEffect, useState } from 'react'
import axios from 'axios'

const App= ()=>{

    const [isLoading, setIsLoading] = useState(true)

    const [git, setGit] = useState([])

    const getgits = async() => {
        await axios.get('https://api.github.com/search/repositories?q=react')
                .then(result => {
                    const git_temp =  result.data.items;
                    setGit([...git_temp])
                    setIsLoading(false)
                })
    }

    useEffect(()=>{        
        getgits();
    },[])

    return(
        <div>
            {isLoading? 
            // true일때
            <div className='App-header'>로딩중</div> : 
            // false일때
            <div>
                <BrowserRouter>
                <Routes>
                    <Route path='/'             element={<GitList   gits={git}/>}/>
                    <Route path='/detail/:idx'  element={<GitDetail gits={git}/>}/>
                </Routes>
                </BrowserRouter>
            </div> 
            }
        </div>
    )
}

export default App;