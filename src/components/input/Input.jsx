import styled from "./input.module.css";

function Input(props) {

    return (
        <div className={styled.inputWrapper}>
            <label > {props.label} </label>
            <input name={props.name} type={props.type} onChange={props.handleChange} />
        </div>
    )
}

export default Input;