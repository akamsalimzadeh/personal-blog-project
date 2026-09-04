import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Article from "../../components/article/Article";
import styled from "./home.module.css";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import Loading from "../../components/loading/Loading";

/* I import images here for test */
// import p1 from "../../assets/images/WavyTech-js.jpg"
// import p2 from "../../assets/images/altum-js.jpg"
// import p3 from "../../assets/images/growtika-javascript.jpg"
// import p4 from "../../assets/images/growtika-js.jpg"
// import p5 from "../../assets/images/jackson-js.jpg"
// import p6 from "../../assets/images/js-banner.png"
// import p7 from "../../assets/images/learn-js.jpg"
// import p8 from "../../assets/images/var-js.jpg"


function Home() {

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        axios.get("http://localhost:8000/articles")
            .then((res) => {
                setArticles(res.data)
                setIsLoading(false)
            }).catch((error) => {
                console.log(error)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className={styled.homeWrapper}>
            <Navbar title="آکام بلاگ" />
            
            <div className="container">
                <h2>مقالات جدید</h2>

                {
                    isLoading ? <Loading /> : (
                        <div className={styled.articles}>
                            {
                                articles.map(article => (<Article key={article.id} article={article} />))
                            }

                        </div>
                    )
                }

            </div>
            <Footer />
        </div>
    );
}

export default Home;