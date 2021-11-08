import React, { useState } from "react";

function Faq() {
  const [collapse, setCollapse] = useState([false, 0]);
  return (
    <>
      <div
        className="home-project d-flex flex-column m-auto w-sm-50 w-100"
        id="home-project"
      >
        {/* <hr /> */}
        <div className="text-center">
          <h1>PROJECT SEVEN DEADLY SINS</h1>
        </div>
        <div className="wrap  mx-au">
          <div className="desc text-center pb-4">
            8 Yetis will go back to the legendary Himalayans mountains in real
            life. <br /> Your Yeti will give you a chance to win a trip straight
            back to the Himalayas. <br /> The winners can either choose to
            receive $10k or the full adventure trip to Himalayas.
          </div>
          <div className="img"></div>
        </div>
      </div>
    </>
  );
}

export default Faq;
