// 2_exercise.js

import { useState } from "react";
import produce from 'immer';

const App=()=>{

    let[studentMng,setStudentMng] =useState([
            {dept:'컴공',title:'자바',score:3}
            ,{dept:'소공',title:'파이썬',score:1}
            ,{dept:'소공',title:'리액트',score:2}
            ,{dept:'컴공',title:'디비',score:2}
    ])

    //목록 화면 출력
    const handleList =()=>{
       console.log('학생 과목 리스트');
        studentMng.forEach((item,idx)=>{
        console.log(`${item.dept}/${item.title}/${item.score}`);
        }) 
    }

    //전개 연산자 방식으로 세번째 과목인 '리액트'->'도커'로 변경
     const handleSpread =()=>{
       const newList = studentMng.map((item,idx)=>
        (idx===2)?{...item,title:'도커'}:item
        )
        setStudentMng(newList);
    }

    //immer 방식으로 두번째 과목인 '파이썬' ->'ES6'로 변경
    const handleImmer =()=>{
        const newList =produce(studentMng,(draft)=>{
            draft[1].title='ES6';
        })
        setStudentMng(newList);
    }



    return(
        <div>
            <button onClick={handleSpread}>전개 연산자 방식</button>
            <button onClick={handleImmer}>immer 방식</button>
            <hr/>
            <button onClick={handleList}>확인</button>

        </div>

    )


}
export default App;