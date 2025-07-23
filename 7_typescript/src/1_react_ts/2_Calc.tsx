//2_Calc.tsx

type CalcPropsType = {
    x: number,
    y: number,
    op : string
}

const Calc = (props:CalcPropsType)=>{

    let result:number = 0;
    switch(props.op){
        case "+" : result = props.x + props.y; break;
        case "-" : result = props.x - props.y; break;
        default : result = -1;
    }

    return(
        <div>
            <h2> 연산결과 </h2>
                <div>
                    {props.x} {props.op} + {props.y} = {result}
                </div>
        </div>
    )
}

Calc.defaultProps = {
    x  : 100,
    y  : 55,
    op : "+"
}

export default Calc;