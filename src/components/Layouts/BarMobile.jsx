import React, { useContext, useEffect } from "react";
import { Hooks } from "providers";
import Connect from "components/Transactions";
import { Link, useLocation } from "react-router-dom";
function BarMobile() {
  const { pathname } = useLocation();
  const { setScroll, scroll, barMobile, setBarMobile, wallet_, setWallet_ } =
    useContext(Hooks);
  useEffect(() => {}, [barMobile]);
  return (
    <>
      <div className={`bar-mobile ${barMobile && "active"}`}>
        <ul>
          <li>
            {pathname === "/" ? (
              <a href="#banner">HOME</a>
            ) : (
              <a href="/#banner">HOME</a>
            )}
          </li>
          <li>
            {pathname === "/" ? (
              <a href="#home-desc">ABOUT</a>
            ) : (
              <a href="/#home-desc">ABOUT</a>
            )}
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
            {pathname === "/" ? (
              <a href="#home-faq">FAQ</a>
            ) : (
              <a href="/#home-faq">FAQ</a>
            )}
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
