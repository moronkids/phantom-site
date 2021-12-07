import React, { useContext, useEffect } from "react";
import IconChar from "assets/img/sevenDeadlySins/icons/771.webp";
import Icon from "assets/img/sevenDeadlySins/icons/iconBanner.png";
import Menu from "components/Menu";
import Connect from "components/Transactions";
import { Hooks } from "providers";
import ReactPlayer from "react-player/youtube";
function Banner() {
  const {
    setScroll,
    scroll,
    barMobile,
    setBarMobile,
    wallet_,
    setWallet_,
    datas,
  } = useContext(Hooks);
  useEffect(() => {}, [datas, wallet_]);
  return (
    <>
      <div id="banner" className="home-banner ">
        <div className="home-banner-wrapping">
          {/* <div className="img">
            <img src={Icon} alt="" srcset="" />
          </div> */}
          <div className="desc">
            The year is 2099. After a nuclear apocalypse, the United States and
            most of the world is a desolate wasteland. All struggle to survive
            against the dangers of the post-apocalyptic world including bandits
            and radioactive species. One group is aiming to change the horrible
            quality of life: the bikers. <br /> The bikers, or Big Time Bikers
            as called by the rest of the wasteland, have came together in order
            to build a strong community. They hope that together, they will be
            able to make the world a sustainable place to live once again.
          </div>
          <div className="box">
            <div className="text">LAUNCHED ON : 1st January 2022 UTC</div>
            {wallet_ && (
              <div className="text">{datas?.[0] + "/" + datas?.[1]}</div>
            )}
            <div className="stat">
              {!wallet_ && <Connect />}
              {wallet_ && <Connect />}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mx-auto d-flex py-3 justify-content-center align-items-center">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=KT_9aMPMMfU"
          // playing={true}
          controls={true}
        />
      </div> */}
      {/* <Connect /> */}
      {/* <Menu /> */}
      {/* <Menu /> */}
    </>
  );
}

export default Banner;
