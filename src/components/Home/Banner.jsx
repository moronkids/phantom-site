import React from "react";
import IconChar from "assets/img/sevenDeadlySins/banner/banner.webp";
function Banner() {
  return (
    <>
      <div className="home-banner ">
        <div className="home-banner-wrapping">
          <div className="img">
            <img src={IconChar} alt="" srcset="" />
          </div>
          <div className="desc">
            8888 Yetis are coming down from the mountains to form the SolYetis.
            Listed on Solanart , FTX and Alpha art.
          </div>
          <div className="box">
            <div className="text">LAUNCHED ON : 13th October 9:30PM UTC</div>
            <div className="stat">CONNECT</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
