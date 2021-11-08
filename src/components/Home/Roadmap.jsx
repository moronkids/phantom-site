import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Faq() {
  const [collapse, setCollapse] = useState([false, 0]);
  return (
    <>
      <div className="home-team flex-column" id="home-faq">
        {/* <hr /> */}
        <div>
          <h1>ROADMAP</h1>
        </div>
        <div>
          <VerticalTimeline>
            {/* <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(114 104 141)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(114 104 141)",
              }}
              date="2011 - present"
              iconStyle={{ background: "rgb(114 104 141)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                First and foremost, we are here to build a community of
                wonderful Sinners
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              contentStyle={{ background: "rgb(114 104 141)", color: "#fff" }}
              iconStyle={{ background: "rgb(114 104 141)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>

              <p>
                Below is our v1 roadmap. Expect a lot to be added as we get
                closer to launch
              </p>
            </VerticalTimelineElement> */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // date="2008 - 2010"
              contentStyle={{ background: "rgb(114 104 141)", color: "#fff" }}
              iconStyle={{ background: "rgb(114 104 141)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                10% of Public Mint Sold
              </h3>
              <p>
                1 Lucky Sinner will be able to order a custom made Sinner NFT
                from Jeev
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // date="2006 - 2008"
              contentStyle={{ background: "rgb(114 104 141)", color: "#fff" }}
              iconStyle={{ background: "rgb(114 104 141)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                25% of Public Mint Sold
              </h3>

              <p>
                1 Lucky Sinner will be able to order a custom made Sinner NFT
                from Jeev{" "}
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // date="2006 - 2008"
              contentStyle={{ background: "rgb(114 104 141)", color: "#fff" }}
              iconStyle={{ background: "rgb(114 104 141)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                50% of Public Mint Sold
              </h3>

              <p>2 ETH giveaway to the public minters</p>
              <p>
                Sinner Merchandise will be created and advertised for Sinner
                Holders. Lucky Sinners will win free merchandise!
              </p>
              <p>
                1 Lucky Sinner will be able to order a custom made Sinner NFT
                from Jeev{" "}
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // date="2006 - 2008"
              contentStyle={{ background: "rgb(114 104 141)", color: "#fff" }}
              iconStyle={{ background: "rgb(114 104 141)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                75% of Public Mint Sold
              </h3>

              <p>
                1 Lucky Sinner will be able to order a custom made Sinner NFT
                from Jeev
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // date="2006 - 2008"
              contentStyle={{ background: "rgb(114 104 141)", color: "#fff" }}
              iconStyle={{ background: "rgb(114 104 141)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                90% of Public Mint Sold
              </h3>

              <p>
                Floor Sinners will be repurchased and airdropped to HODLers{" "}
              </p>
              <p>Sinner discord clans will be established for all to join </p>
              <p>
                1 Lucky Sinner will be able to order a custom made Sinner NFT
                from Jeev{" "}
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // date="2006 - 2008"
              contentStyle={{ background: "rgb(114 104 141)", color: "#fff" }}
              iconStyle={{ background: "rgb(114 104 141)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                100% of Public Mint Sold
              </h3>

              <p>
                1 Lucky Sinner will be able to order a custom made Sinner NFT
                from Jeev
              </p>
              <p>Metaverse Expansion </p>
              <p>Community Wallet Votes (20 ETH)</p>
              <p>
                Sinner of the Week (SOTW) will be showcased for our most active
                Sinners{" "}
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default Faq;
