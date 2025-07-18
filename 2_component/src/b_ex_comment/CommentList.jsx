import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "홍순이",
        comment: "안녕하세요",
        imgname : "imgs/img1.PNG",
    },
    {
        name: "홍길동",
        comment: "오늘도 행복~!",
        imgname : "imgs/img2.PNG",
    },
    {
        name: "박길동",
        comment: "리액트~ 화이팅!!!!!",
        imgname : "imgs/img3.PNG",
    },
];

function CommentList() {
    return(
        <div>
            {/* 코딩할때 중괄호 안에 */}
            {
                // comments 안에 배열을 하나씩 뺀다
                comments.map((comment, idx)=>{
                    //return 사용을 위해 map 함수를 사용함
                    return(
                        <Comment key={idx}
                                name={comment.name}
                                comment={comment.comment}
                                imgname={comment.imgname}
                            />
                    )
                })
            }
        </div>
    )
    
}

export default CommentList;
