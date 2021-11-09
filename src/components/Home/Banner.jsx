import React, { useContext, useEffect } from "react";
import IconChar from "assets/img/sevenDeadlySins/banner/banner.webp";
import Menu from "components/Menu";
import Connect from "components/Transactions";
import { Hooks } from "providers";
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
      <div className="home-banner ">
        <div className="home-banner-wrapping">
          <div className="img">
            <img src={IconChar} alt="" srcset="" />
          </div>
          {/* <div className="desc">
            8888 Yetis are coming down from the mountains to form the SolYetis.
            Listed on Solanart , FTX and Alpha art.
          </div> */}
          <div className="box">
            <div className="text">LAUNCHED ON : 13th October 9:30PM UTC</div>
            <div className="text">
              {wallet_ && datas?.[0] + "/" + datas?.[1]}
            </div>
            <div className="stat">
              {!wallet_ && <Connect />}
              {wallet_ && <Connect />}
            </div>
          </div>
        </div>
      </div>
      {/* <Connect /> */}
      {/* <Menu /> */}
      {/* <Menu /> */}
    </>
  );
}

export default Banner;
