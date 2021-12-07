import React, { useContext } from "react";
import Roadmap from "assets/img/roadmap.jpg";
import Pizza from "assets/img/pizza.png";
import gif_pizza from "assets/img/pizzaz.gif";
import Fade from "react-reveal/Fade";
import Img2 from "assets/img/img-logo-desc-2.png";
import { Hooks } from "providers";
import Dot from "assets/img/sevenDeadlySins/icons/plus.gif";
import url3 from "assets/img/img_hero.png";
function Desc() {
  const { barMobile, setBarMobile } = useContext(Hooks);
  return (
    <>
      <div className="home-desc" id="home-desc">
        <div className="container d-flex flex-column-reverse flex-md-row mx-auto justify-content-center align-items-center">
          <div className="col-md-6 col-12 text-md-left text-left">
            <h3 className="text-left super mb-md-4 mb-0 text-md-left text-center"></h3>
            {/* <div className="d-flex ">
              <div className="col-auto pl-0 ml-0">
                <img src={Dot} alt="" height="34px" width="34px" />
              </div>
              <div className="col">
                <h2 className="pt-0 mt-0 mb-0 pb-0">
                  Access to Every Clothing Drop & Discounts (Early Access to
                  Public Drops)
                </h2>
              </div>
            </div>
            <div className="d-flex pt-4 ">
              <div className="col-auto pl-0 ml-0">
                <img src={Dot} alt="" height="34px" width="34px" />
              </div>
              <div className="col">
                <h2 className="pt-0 mt-0 mb-0 pb-0">
                  Access to Internet Kids Events
                </h2>
              </div>
            </div>
            <div className="d-flex  pt-4">
              <div className="col-auto pl-0 ml-0">
                <img src={Dot} alt="" height="34px" width="34px" />
              </div>
              <div className="col">
                <h2 className="pt-0 mt-0 mb-0 pb-0">
                  Access to Exclusive Internet Kids Podcast Episodes
                </h2>
              </div>
            </div>
            <div className="d-flex  pt-4">
              <div className="col-auto pl-0 ml-0">
                <img src={Dot} alt="" height="34px" width="34px" />
              </div>
              <div className="col">
                <h2 className="pt-0 mt-0 mb-0 pb-0">
                  Access to Private Discord Channels
                </h2>
              </div>
            </div>
            <div className="d-flex  pt-4">
              <div className="col-auto pl-0 ml-0">
                <img src={Dot} alt="" height="34px" width="34px" />
              </div>
              <div className="col">
                <h2 className="pt-0 mt-0 mb-0 pb-0">Giveaways and Airdrops</h2>
              </div>
            </div>
            <div className="d-flex  pt-4">
              <div className="col-auto pl-0 ml-0">
                <img src={Dot} alt="" height="34px" width="34px" />
              </div>
              <div className="col">
                <h2 className="pt-0 mt-0 mb-0 pb-0">Access to play The Game</h2>
              </div>
            </div> */}
            <div className="d-flex ">
              {/* <div className="col-auto pl-0 ml-0">
                <img src={Dot} alt="" height="34px" width="34px" />
              </div> */}
              <div className="col">
                <h1 className="pt-0 mt-0 mb-0 pb-0 text-left pb-3">
                  BIG TIME BIKERS
                </h1>
                <p
                  className="pt-0 mt-0"
                  style={{ fontSize: "16px", color: "#8E8E8E" }}
                >
                  The year is 2099. After a nuclear apocalypse, the United
                  States and most of the world is a desolate wasteland. All
                  struggle to survive against the dangers of the
                  post-apocalyptic world including bandits and radioactive
                  species. One group is aiming to change the horrible quality of
                  life: the bikers. <br /> The bikers, or Big Time Bikers as
                  called by the rest of the wasteland, have came together in
                  order to build a strong community. They hope that together,
                  they will be able to make the world a sustainable place to
                  live once again.
                </p>
              </div>
            </div>
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
