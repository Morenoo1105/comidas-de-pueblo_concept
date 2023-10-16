import React from "react";

import "./Footer.css";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiInstagram, FiMapPin } from "react-icons/fi";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contacto</h1>
        <p className="p__opensans">
          C/ De Francisco De Quevedo, 11, 50013 Zaragoza
        </p>
        <p className="p__opensans">+34 976 59 73 60</p>
        <p className="p__opensans">+34 644 662 400</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          Comida casera para disfrutarla donde tu quieras
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: "15px" }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiMapPin />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horario</h1>
        <p className="p__opensans">Todos los días</p>
        <p className="p__opensans">10:00 - 15:30</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
        2023 Comidas de Pueblo. Todos los derechos reservados.
      </p>
    </div>
  </div>
);

export default Footer;
