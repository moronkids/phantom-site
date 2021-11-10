import React, { useContext, useState } from "react";
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
            <div style={{ display: "none" }}>{/* <Connect /> */}</div>
            {/* {!wallet_ && <Connect />} */}
            <li>
              <a href="#home-desc">SEVEN DEADLY SINS</a>
            </li>
            <li>
              <a href="#home-project">PROJECT 7DEADLY SINS</a>
            </li>
            <li>
              <a href="#home-showcase">SHOWCASE</a>
            </li>
            <li>
              <a href="#home-roadmap">ROADMAP</a>
            </li>
            {/* <li>
              <a href="#home-desc">TEAM</a>
            </li> */}
            <li>
              <a href="#home-faq">FAQ</a>
            </li>
            <li>
              <a href="#">
                <img src={Twitter} alt="" width="25" />
              </a>
            </li>
            <li>
              <a href="#">
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
