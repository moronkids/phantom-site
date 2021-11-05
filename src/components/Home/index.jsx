import React, { useContext, useEffect, useState } from "react";
import LoadingScreen from "components/LoadingScreen";
import Banner from "components/Home/Banner";
import Desc from "components/Home/Desc";
import Team from "components/Home/Team";
import ShowCase from "components/Home/Showcase";
import Roadmap from "components/Home/Roadmap";
import Menu from "components/Menu";
import Faq from "components/Home/Faq";
import Zoom from "react-reveal/Zoom";
import { Hooks } from "providers";
function Index() {
  const { timer, setTimer } = useContext(Hooks);
  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 5000);
  }, []);
  return (
    <div>
      {timer ? (
        <LoadingScreen />
      ) : (
        <>
          <Zoom top>
            <Banner />
          </Zoom>
          <Menu />

          <div
            className=""
            style={{
              background: "#F5F5F5",
            }}
          >
            <Desc />
          </div>
          <div
            className=""
            style={{
              background: "#000000",
              paddingTop: "30px",
              paddingBottom: "70px",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            <ShowCase />
          </div>
          <div
            className=""
            style={{
              background: "rgb(18 18 18 / 0%)",
              paddingTop: "30px",
              paddingBottom: "70px",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            <Roadmap />
          </div>
          <div
            className=""
            style={{
              background: "#000000",
              paddingTop: "30px",
              paddingBottom: "70px",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            <Team />
          </div>
          <div
            className=""
            style={{
              background: "#f5f5f5",
              paddingTop: "30px",
              paddingBottom: "70px",
              // borderTopLeftRadius: "20px",
              // borderTopRightRadius: "20px",
            }}
          >
            <Faq />
          </div>
        </>
      )}
    </div>
  );
}

export default Index;
