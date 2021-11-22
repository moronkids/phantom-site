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
              to="/"
              target="_blank"
              // onClick={() => setBarMobile(!barMobile)}
            >
              HOME
            </Link>
          </li>
          <li>
            <a href="#" onClick={() => setBarMobile(!barMobile)}>
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="https://internetkids.shop/"
              onClick={() => setBarMobile(!barMobile)}
            >
              CLOTHING
            </a>
          </li>
          <li>
            <Link to="/thegame" onClick={() => setBarMobile(!barMobile)}>
              THE GAME
            </Link>
          </li>
          <li>
            <a href="#home-faq" onClick={() => setBarMobile(!barMobile)}>
              FAQ
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
