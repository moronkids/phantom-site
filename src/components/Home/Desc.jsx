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
        <div className="container d-md-flex d-block">
          <div className="col-md-6 col-12">
            <h1 className="text-left super">7DEADLY SINS</h1>
            We are all controlled by the Seven Deadly Sins - Envy, Sloth, Lust,
            Pride, Wrath, Gluttony, and Greed. Only the selfless have the
            potential to earn redemption from these sins that have forever been
            part of human history.
            <br />
            Seven Deadly Sins NFT is a collection of 5,555 handcrafted works of
            art; one of a kind. Each NFT will be assigned and can not be
            duplicated or cloned. The very first and only NFT that represents
            human sins, and also has physical manifestation as a stylish
            collectible item. The NFTs serve as an important piece for your
            crypto collection while spreading awareness about the seven sins of
            humanity through this radical new form of art.
          </div>
          <div className="col-md-6 col-12">
            <img src="https://solyetis.io/assets/images/solyetis.gif" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Desc;
