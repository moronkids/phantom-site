import React, { useContext } from "react";
import Roadmap from "assets/img/roadmap.jpg";
import Pizza from "assets/img/pizza.png";
import gif_pizza from "assets/img/pizzaz.gif";
import Fade from "react-reveal/Fade";
import Img2 from "assets/img/img-logo-desc-2.png";
import { Hooks } from "providers";
function Desc() {
  const { barMobile, setBarMobile } = useContext(Hooks);
  return (
    <>
      <div className="home-desc" id="home-desc">
        <div className="container">
          <h1>PROJECT SEVEN DEADLY SINS</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          placeat iusto ratione saepe reprehenderit hic cum aliquam modi nisi
          neque non expedita vitae quidem aut minima, inventore ullam, molestias
          iure.
        </div>
      </div>
    </>
  );
}

export default Desc;
