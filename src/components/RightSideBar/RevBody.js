import React from "react";
import style from "./rightSideBar.module.css";
import { MdFacebook } from "react-icons/md";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";

const RevBody = (props) => {
  return (
    <div className={style.revcont}>
      <div className={style.revbody}>
        <div>
          <h3 className={style.price}>${props.price}</h3>
        </div>
        <div>
          <h3 className={style.description}>{props.description}</h3>
        </div>
      </div>

      <div className={style.revlogo}>
        <img src={props.image} />
      </div>
    </div>
  );
};

export default RevBody;
