import React from "react";
import Icon from "assets/img/pizzaria.png";
import Discord from "assets/img/icons8-discord.svg";
import Twitter from "assets/img/icons8-twitter.svg";
function Footer() {
  return (
    <>
      <div className="footer ">
        <div className="footer-wrap m-sm-0 m-2">
          <div className="content1 ">
            <p class="title">7 Deadly Sins</p>
            <p>
              Copyright © 7 Deadly Sins powered by{" "}
              <span style={{ color: "#6aff6a" }}>Solana</span>
            </p>
          </div>
          <div className="content2">
            {/* <img src={Icon} alt="" srcset="" width="180" height="auto" /> */}
          </div>
          <div className="content3 p-sm-0 py-2">
            <a href="https://discord.gg/6rgah5JmAz">
              <img src={Discord} alt="" width="30" />
            </a>
            <a href="https://twitter.com/NFTPizzeria">
              <img src={Twitter} alt="" width="30" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
