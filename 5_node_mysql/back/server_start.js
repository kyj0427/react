
// server_start.js
// npm install express , mysql <=(드라이버) cors  설치한 패키지를 가져와서 변수에 담음

//패키지 가져옴
const express = require('express') 
const app = express()

const mysql = require('mysql')
const dbconfig = require('./config/database.js') 
const conn = mysql.createConnection(dbconfig) //해당하는 mysql connection 주기

const cors = require('cors')
const e = require('express')

//웹서버 구동하기 
const PORT = 8000; //포트번호 변경 필수 

//서버 요청 기다림 => 콘솔 출력 
app.listen( PORT, ()=>{
    console.log('EXPRESS 서버 시작:' + PORT)
});

//DB 연결
conn.connect((err)=>{
    if(err) console.log('연결실패:', err)
    else console.log('연결성공');
})

//데이터를 주고받기 위해서 cors 지정 (corssorigin 해결)
app.use(cors())

// [1] 전체 검색
//웹은 request 객체와 response객체가 들어온다
app.get('/api/get',(req,res)=>{
    // sql문장 (만들었던 테이블과 똑같이 만들어야합니다 )
    const sql ="select bnum, btitle, bname, mid "
                        + " FROM node_board "; //문자열 잘라서 적을때는 반드시 공백 추가해야함 

    conn.query(sql,function(err, result, fields){
        if(err) throw err;
        console.log(result) //콘솔에 띄우기
        res.send(result) // 화면에 띄우기 
    } )
});

// [2] 입력
//jason 구조로 받음 (postman 이용시 POST방식에 body , raw 설정해주고 JSON 설정해야함)
app.use(express.json())

app.post('/api/insert',(req, res)=>{
    console.log(req.body);  
    const btitle = req.body.btitle;
    const bname = req.body.bname;
    const bcontent = req.body.bcontent;
    const mid = req.body.mid;
    const bpw = req.body.bpw

    const param = [btitle,bname,bcontent,mid,bpw]

    // mysql 은 sysdate 사용할때 함수표시 해줘야한다
    const sql = "INSERT INTO node_board(btitle, bname, bcontent, mid, bpw, insertdate, updatedate) "
                + " VALUES(?,?,?,?,?, now(), sysdate()) ";

    //sql에 param을 보내고 함수호출
    conn.query(sql, param, function(err,result, fields){
        if(err) throw err;
        console.log('입력성공', result)
        res.send('success')
    });
});

// [3] 상세보기
app.get('/api/edit/:bnum',(req, res)=>{
    const bnum = req.params.bnum;
    console.log('bnum>>>', bnum)

    const sql = "SELECT bnum, btitle, bname, bcontent, mid, bpw,     "
                +" date_format(insertdate, '%Y-%m-%d')  insertdate,  "
                +" date_format(updatedate, '%Y-%m-%d')  updatedate   "
                +" FROM node_board                                   "
                +" WHERE bnum=?                                      ";
    conn.query(sql, [bnum], function(err, result, fields){
        if(err) throw err;
        console.log('상세보기성공',result)
        res.send(result)
    });
})


//[4] 삭제
app.delete('/api/delete/:bnum',(req,res)=>{
    const bnum = req.params.bnum;
    console.log('bnum>>>>', bnum)

    const sql =   " DELETE          "
                + " FROM node_board "
                + " WHERE bnum=?    ";

    conn.query(sql, [bnum], function(err, result, fields){
        if(err) throw err;
        console.log('삭제성공',result)
        res.send(result)
    });
})


//[5] 수정
app.post('/api/update/:bnum',(req,res)=>{
    const bnum = req.params.bnum;
    console.log('bnum>>>>', bnum)

    const {btitle, bcontent,bname} = req.body

    const sql = " UPDATE node_board             "
                + "SET btitle =? , bcontent=?      "
                + "WHERE bnum=?                 ";
    conn.query(sql, [btitle, bcontent , bnum], function(err, result, fields){
        if(err) throw err;
        console.log('수정완료',result)
        res.send(result)
    });
})

