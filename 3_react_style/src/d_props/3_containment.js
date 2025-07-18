
import './temp.css'

const FancyBorder = props =>{

}

const TextPart = props =>{
    return(
        <FancyBorder>
            <h1>{props.title}</h1>
            <hr/>
            <p>{props.message}</p>
        </FancyBorder>
    )
}

const WelcomDialog = props =>{
    return <TextPart title="환영합니다" message="오늘도 행운"/>
}

const MorningDialog = props =>{
    return <TextPart title="좋은아침" message="행복하세요"/>
}

const App = ()=>{
    return(
        <div>
            <WelcomDialog/>
            <hr/>
            <MorningDialog/>
        </div>
    )
}

export default App
