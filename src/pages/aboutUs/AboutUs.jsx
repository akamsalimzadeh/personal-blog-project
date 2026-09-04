import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styled from "./aboutus.module.css";
import iran from "../../assets/images/where-we-active.png";

function AboutUs() {

    return (
        <>
            <Navbar title="آکام بلاگ" />
            <div className={styled.aboutPage}>
                <div className="container">
                    <h3> درباره ما </h3>
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>

                    <div className={styled.mapField}>
                        <h4> فعالیت ما در کدام شهرهاست؟ </h4>
                        <div className={styled.mapWrapper}>
                            <img src={iran} alt="Iran" />
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default AboutUs;