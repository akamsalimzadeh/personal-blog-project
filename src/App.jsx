import Home from "./pages/home/Home";
import { Route, Routes } from "react-router";
import AboutUs from "./pages/aboutUs/AboutUs";
import ArticlePage from "./pages/articlePage/ArticlePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
