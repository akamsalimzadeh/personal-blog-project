import styled from "./loading.module.css";

function Loading() {

    return (
        <div className={styled.spinnerWrapper}>
            <div className={styled.spinner}>
                <div className={styled.bounce1}></div>
                <div className={styled.bounce2}></div>
                <div className={styled.bounce3}></div>
            </div>
        </div>
    )
}

export default Loading;