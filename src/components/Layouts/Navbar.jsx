import React, { useContext, useRef, useState } from "react";
import { Hooks } from "providers";
import { Link } from "react-router-dom";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import styled from "styled-components";
import Connect from "components/Transactions";
import Discord from "assets/img/icons8-discord.svg";
import Twitter from "assets/img/icons8-twitter.svg";
function Navbar() {
  const { setScroll, scroll, barMobile, setBarMobile, wallet_, setWallet_ } =
    useContext(Hooks);
  const ConnectButton = styled(WalletDialogButton);
  const myRefname = useRef(null);
  const handleClick = () => {
    myRefname.current.focus();
  };
  return (
    <>
      <div
        // className={`navbar active`}
        className={`navbar ${scroll && "active"}`}
        style={{ zIndex: "999999" }}
      >
        <div
          style={{
            opacity: 1,
          }}
        >
          <ul className="">
            {/* <div style={{ display: "block" }} ref={myRefname}>
              {!wallet_ && <Connect />}
            </div> */}

            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <a href="#home-desc">ABOUT</a>
            </li>
            <li>
              <a
                href="https://internetkids.shop/"
                target="_blank"
                rel="noreferrer"
              >
                CLOTHING
              </a>
            </li>
            <li>
              <Link href="/thegame">THE GAME</L>
            </li>
            {/* <li>
              <a href="#home-desc">TEAM</a>
            </li> */}
            <li>
              <a>{!wallet_ && <Connect navbar={true} mobile={false} />}</a>
            </li>
            <li>
              <a href="#home-faq">FAQ</a>
            </li>
            {/* <li>
              <a href="#">
                <img src={Twitter} alt="" width="25" />
              </a>
            </li> */}
            <li>
              <a href="https://discord.gg/bkWJHedf3X">
                <img src={Discord} alt="" width="25" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
