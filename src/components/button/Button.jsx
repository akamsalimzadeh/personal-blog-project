import styled from "./button.module.css";

function Button (props) {

    return (
        <div className={styled.buttonWrapper}>
            <button type={props.type} onClick={props.handleClick}> {props.textContent} </button>
        </div>
    )
}

export default Button;