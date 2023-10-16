import React from "react";

import { images, data } from "../../constants";

import "./Laurels.css";
import { SubHeading } from "../../components";

const PostreCard = ({ postre: { imgUrl, title, subtitle } }) => (
  <div className="app__postres_postre-card">
    <img src={imgUrl} alt="postre" />
    <div className="app_postres_postre-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="postres">
    <div className="app__wrapper_info">
      <SubHeading title="Todo casero" />
      <h1 className="headtext__cormorant">Postres</h1>
      <div className="app__postres_postres">
        {data.postres.map((postre) => (
          <PostreCard postre={postre} key={postre.title} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="postres" />
    </div>
  </div>
);

export default Laurels;
