import React from "react";

import "./Newsletter.css";
import SubHeading from "../SubHeading/SubHeading";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Boletín" />
      <h1 className="headtext__cormorant">Suscríbete a nuestro boletín</h1>
      <p className="p__opensans">Y no te pierdas los platos del día</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Introduce tu correo electrónico" />
      <button className="custom__button">Suscribirse</button>
    </div>
  </div>
);

export default Newsletter;
