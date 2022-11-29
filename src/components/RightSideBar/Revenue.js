import React from "react";
import style from "./rightSideBar.module.css";
import { MdFacebook } from "react-icons/md";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import RevBody from "./RevBody";

const Revenue = () => {
    let facebook = <MdFacebook />;

  return (
    <div className={style.revwrapper}>
      <div className={style.revheader}>
        <h2>Revenue</h2>
      </div>

      <div>
        <RevBody price={"4,000"} description={"Recently Added Pages"} image={instagram}/>
      </div>

      <div>
        <RevBody price={"2,100"} description={"Video Monetization"} image={instagram}/>
      </div>

      <div>
        <RevBody price={"1,725"} description={"Community Buildup"} image={linkedin}/>
      </div>
    </div>
  );
};

export default Revenue;
