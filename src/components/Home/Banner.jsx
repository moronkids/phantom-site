import React from "react";
import Twitter from "assets/img/icons/twitter.png";
import Discord from "assets/img/icons/discord.png";
function Banner() {
  return (
    <>
      <div className="home-banner">
        <div className="link-ext">
          <ul>
            <li>
              <a
                href="https://discord.gg/6rgah5JmAz"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Twitter}
                  alt=""
                  srcset=""
                  width="64px"
                  height="64px"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/NFTPizzeria"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Discord}
                  alt=""
                  srcset=""
                  width="64px"
                  height="64px"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Banner;
