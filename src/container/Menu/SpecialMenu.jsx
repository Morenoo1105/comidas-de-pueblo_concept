import React from "react";

import { images, data } from "../../constants";

import "./SpecialMenu.css";
import { MenuItem, SubHeading } from "../../components";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Disfruta de nuestro menú" />
      <h1 className="headtext__cormorant">Menú del día</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_primeros flex__center">
        <p className="app__specialMenu-menu_heading">Primeros</p>
        <div className="app__specialMenu-menu_items">
          {data.primeros.map((plato, index) => (
            <MenuItem
              key={plato.title + index}
              title={plato.title}
              price={plato.price}
              tags={plato.tags}
            />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu image" />
      </div>
      <div className="app__specialMenu-menu_segundos flex__center">
        <p className="app__specialMenu-menu_heading">Segundos</p>
        <div className="app__specialMenu-menu_items">
          {data.segundos.map((plato, index) => (
            <MenuItem
              key={plato.title + index}
              title={plato.title}
              price={plato.price}
              tags={plato.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        Ver más
      </button>
    </div>
  </div>
);

export default SpecialMenu;
