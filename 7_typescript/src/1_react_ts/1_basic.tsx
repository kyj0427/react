
// 1_basic.tsx

const App = () =>{

    let msg = '헬로우';

    const addData = (x:number, y:number)=>{
        return(
            <div>
                {x} + {y} = {x+y}
            </div>
        )
    }


    return(
        <div>
            <h2>안녕, {msg}</h2>
            <hr/>
            {addData(3,4)}

        </div>
    )

}

export default App;