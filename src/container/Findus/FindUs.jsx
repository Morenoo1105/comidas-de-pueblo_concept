import React from "react";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contacto">
    <div className="app__wrapper_info">
      <SubHeading title="Contacto" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Encuéntranos
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          C/ de Francisco de Quevedo, 11, 50013 Zaragoza
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#dcca87", margin: "2rem 0" }}
        >
          Horario
        </p>
        <p className="p__opensans">Todos los días</p>
        <p className="p__opensans">10:00 - 15:30</p>
      </div>
      <button className="custom__button" style={{ marginTop: "2rem" }}>
        Visítanos
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="contacto" />
    </div>
  </div>
);

export default FindUs;
