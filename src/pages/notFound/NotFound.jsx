import styled from "./notFound.module.css";

function NotFound () {

    return (
        <div className={styled.errorPageWrapper}>
            <div className={styled.errorMessageWrapper}>
                <h1> خطای ۴۰۴ </h1>
                <p>
                    صفحه مورد نظر یافت نشد !
                </p>
            </div>
        </div>
    )
}

export default NotFound;