import React from "react";

import { images } from "../../constants";

import "./Header.css";
import SubHeading from "../../components/SubHeading/SubHeading";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Comida casera" />
      <h1 className="app__header-h1">Para disfrutar donde tú quieras</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa fugit,
        fugiat assumenda enim architecto iure? Veniam enim nostrum libero
        cumque.
      </p>
      <button className="custom__button">Explora el menú</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header image" />
    </div>
  </div>
);

export default Header;
