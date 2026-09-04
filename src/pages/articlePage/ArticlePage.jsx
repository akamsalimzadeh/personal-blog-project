import { useParams } from "react-router";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styled from "./articlePage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/loading/Loading";


function ArticlePage() {
    const [articleValue, setArticleValue] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()

    useEffect(() => {
        setIsLoading(true)

        axios.get(`http://localhost:8000/articles/${params.id}`)
            .then((res) => {
                setArticleValue(res.data)
                setIsLoading(false)
            }).catch((error) => {
                console.log(error)
                setIsLoading(false)
            })

    }, [])

    return (
        <>
            <Navbar title="آکام بلاگ" />
            <div className="container">

                {
                    isLoading ? <Loading /> : (
                        <div className={styled.articlePageWrapper}>
                            <h3> {articleValue.title} </h3>
                            <div className={styled.InfoWrapper}>
                                <span> تاریخ : {articleValue.date} </span>
                                <span> نویسنده : {articleValue.author} </span>
                                <span> مدت زمان خواندن : {articleValue.readingTime} </span>
                            </div>
                            <div className={styled.imgControler}>
                                <div className={styled.imgWrapper}>
                                    <img src={articleValue.imageUrl} />
                                </div>
                            </div>
                            <p>
                                {articleValue.content}
                            </p>
                        </div>
                    )
                }

            </div>
            <Footer />
        </>
    )
}

export default ArticlePage;