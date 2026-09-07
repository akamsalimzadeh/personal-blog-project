import Footer from "../../components/footer/Footer";
import Input from "../../components/input/Input";
import Navbar from "../../components/navbar/Navbar";
import styled from "./createArticle.module.css";
import Textarea from "../../components/textarea/Textarea";
import { useState } from "react";
import Button from "../../components/button/Button";
import axios from "axios";

function CreateArticle() {
    const [articleValues, setArticleValues] = useState({
        title: "",
        date: "",
        author: "",
        readingTime: 0,
        imageUrl: "",
        message: ""
    })

    const changeInputValue = (e) => {
        setArticleValues((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const changeTextareaValue = (e) => {
        setArticleValues((prevState) => ({
            ...prevState,
            message: e.target.value
        }))
    }

    const submitButton = () => {
        axios.post("http://localhost:8000/articles", {
            id: 9,
            imageUrl: articleValues.imageUrl,
            title: articleValues.title,
            readingTime: articleValues.readingTime,
            date: articleValues.date,
            author: articleValues.author,
            content: articleValues.message
        })
    }


    return (
        <>
            <Navbar title="آکام بلاگ"/>
            <div className={styled.creatorWrapper}>
                <div className="container">
                    <h2>ساخت مقاله</h2>

                    <Input type="text" label="عنوان" name="title" handleChange={changeInputValue} />
                    <Input type="text" label="تاریخ" name="date" handleChange={changeInputValue} />
                    <Input type="text" label="نویسنده" name="author" handleChange={changeInputValue} />
                    <Input type="text" label="مدت زمان خواندن" name="readingTime" handleChange={changeInputValue} />
                    <Input type="text" label="بارگزاری عکس" name="imageUrl" handleChange={changeInputValue} />
                    <Textarea label="متن" name="message" handleChange={changeTextareaValue} />
                    <Button type="submit" textContent="ساخت مقاله" handleClick={submitButton} />

                </div>
            </div>
            <Footer />
        </>
    )
}

export default CreateArticle;