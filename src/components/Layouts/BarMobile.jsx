import React, { useContext, useEffect } from "react";
import { Hooks } from "providers";
import Connect from "components/Transactions";
import { Link } from "react-router-dom";
function BarMobile() {
  const { setScroll, scroll, barMobile, setBarMobile, wallet_, setWallet_ } =
    useContext(Hooks);
  useEffect(() => {}, [barMobile]);
  return (
    <>
      <div className={`bar-mobile ${barMobile && "active"}`}>
        <ul>
          <li>
            <Link
              to="/menu"
              target="_blank"
              // onClick={() => setBarMobile(!barMobile)}
            >
              HOME
            </Link>
          </li>
          <li>
            <a href="#home-desc" onClick={() => setBarMobile(!barMobile)}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#home-faq" onClick={() => setBarMobile(!barMobile)}>
              MERCH SHOPE
            </a>
          </li>
          <li>
            <a href="#home-faq" onClick={() => setBarMobile(!barMobile)}>
              THE GAME
            </a>
          </li>
          <li>
            <a>{!wallet_ && <Connect navbar={false} mobile={true} />}</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BarMobile;
