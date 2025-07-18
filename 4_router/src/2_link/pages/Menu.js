import { Link } from "react-router-dom";

const styles = {
    navStyle : {
        color : 'red',
        backgroundColor : 'yellow',
        textDecoration : 'none',
        border : '2px dashed blue'
    },

    lineStyles : {
        display : 'inline',
        padding : '20px'  //여백
    }
}

const Menu = () => {
    return(
        <div style={styles.navStyle}>
            <ul>
                {/* 내용만 갈아끼우고싶을 때는 a태그를 사용하지않고 Link로 처리한다 */}
                <li style={styles.lineStyles}>
                    {/* <a href="/">홈</a> */}
                    <Link to='/'>홈</Link>
                </li>
                <li style={styles.lineStyles}>
                    {/* <a href="/first">첫번째</a> */}
                    <Link to='/first'>첫번째</Link>
                </li>
                <li style={styles.lineStyles}>
                    {/* <a href="/second">두번째</a> */}
                    <Link to='/Second'>두번째</Link>
                </li>
                <li style={styles.lineStyles}>
                    {/* <a href="/second">두번째</a> */}
                    <Link to='/Third'>세번째</Link>
                </li>
            </ul>
        </div>
    )

}

export default Menu;