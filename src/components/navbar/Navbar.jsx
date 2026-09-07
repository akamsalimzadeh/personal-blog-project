import styled from "./navbar.module.css";
import { Link } from "react-router";

function Navbar(props) {

  return (
    <div className={styled.headerWrapper}>
      <div className="container">
        <div className={styled.header}>
          <h3> {props.title} </h3>
          <ul>
            <li>
              <Link to="/">  لیست مقالات  </Link>
            </li>
            <li> 
              <Link to="/create-article"> مقاله جدید  </Link>
            </li>
            <li>
              <Link to="/aboutus"> درباره </Link>
            </li>
          </ul>
        </div>
      </div>
    </div >
  );
}

export default Navbar;