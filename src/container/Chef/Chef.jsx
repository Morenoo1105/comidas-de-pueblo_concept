import React from "react";

import { images } from "../../constants";

import "./Chef.css";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Palabras del chef" />
      <h1 className="headtext__cormorant">En lo que creemos</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <p className="p__opensans">
          Voluptatibus autem doloribus eligendi, tempore, molestias quaerat
          porro labore at dolorem expedita dolores aliquid ex? Et quibusdam
          tempora, id molestias ducimus itaque?
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Juan Gutiérrez</p>
        <p className="p__opensans">Chef y Fundador</p>
      </div>
    </div>
  </div>
);

export default Chef;
