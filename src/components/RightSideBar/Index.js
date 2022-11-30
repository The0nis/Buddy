import React from "react";
import { Link } from "react-router-dom";
import style from "./rightSideBar.module.css";
import Watchlist from "./Watchlist";
import arrowup from "../../assets/Vectorup.png";
import arrowdown from "../../assets/Vectordown.png";
import Revenue from "./Revenue";
import News from "./News";

const RightSideBar = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.secone}>
        <div className={style.header}>
          <div>
            <h3>Wacthlist</h3>
          </div>

          <div>
            <Link to="./" className={style.viewtxt}>
              View all
            </Link>
          </div>
        </div>

        <div className={style.watchtab}>
          <Watchlist
            title={"AAPL"}
            image={arrowup}
            price={142.9}
            percent={+0.47}
          />
        </div>

        <div>
          <Watchlist
            title={"BPL"}
            image={arrowdown}
            price={142.9}
            percent={-0.78}
          />
        </div>
      </div>

      <div className={style.revsection}>
        <Revenue />
      </div>

      <div className={style.newsection}>
        <News />
      </div>
    </div>
  );
};

export default RightSideBar;
