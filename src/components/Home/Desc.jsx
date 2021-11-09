import React, { useContext } from "react";
import Roadmap from "assets/img/roadmap.jpg";
import Pizza from "assets/img/pizza.png";
import gif_pizza from "assets/img/pizzaz.gif";
import Fade from "react-reveal/Fade";
import Img2 from "assets/img/img-logo-desc-2.png";
import { Hooks } from "providers";
import url3 from "assets/img/sevenDeadlySins/icons/GREED.webp";
function Desc() {
  const { barMobile, setBarMobile } = useContext(Hooks);
  return (
    <>
      <div className="home-desc" id="home-desc">
        <div className="container d-flex flex-column-reverse flex-md-row mx-auto justify-content-center align-items-center">
          <div className="col-md-6 col-12 text-md-left text-center">
            <h1 className="text-left super mb-md-4 mb-0 text-md-left text-center">
              7DEADLY SINS
            </h1>
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
          <div className="p-0 m-0 col-md-6 col-12 d-flex mx-auto w-100 justify-content-center align-items-center">
            <img src={url3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Desc;
