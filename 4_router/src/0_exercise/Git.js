

const Git = (props) => {

    return(
        <div>
            <div>{props.id} : {props.fullname} ({props.html_url})</div>
            <hr/>
        </div>
    )
}

export default Git;