import { Link } from "react-router";
import styled from "./article.module.css"

function Article(props) {
    return (
        <div className={styled.articleWrapper}>
            <div className={styled.imageWrapper}>
                <Link to={`/article/${props.article.id}`}>
                    <img src={props.article.imageUrl}/>
                </Link>
            </div>
            <h4>
                <Link to={`/article/${props.article.id}`}>
                    {props.article.title}
                </Link>
            </h4>
            <span>
                خواندن {props.article.readingTime} دقیقه ای
            </span>
        </div>
    );
}

export default Article