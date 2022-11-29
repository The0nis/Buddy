import React from "react";
import NewsBody from "./NewsBody";
import style from "./rightSideBar.module.css";
import newsa from '../../assets/news1.png';
import newsb from '../../assets/news2.png';
import newsc from '../../assets/news3.png';

const News = () => {
  return (
    <div className={style.revwrapper}>
      <div className={style.revheader}>
        <h2>Trending News</h2>
      </div>

      <div>
        <NewsBody image={newsa} head={"Russia & Ukraine War"} description={"Marketing is evolving. It's chang..."}/>
      </div>

      <div>
        <NewsBody image={newsb} head={"Elon Musk bought Twitter"} description={"Twitter is the most useful social pl..."}/>
      </div>

      <div>
        <NewsBody image={newsc} head={"Fuel Crisis Everywhere"} description={"Due to covid situation in 2020 the..."}/>
      </div>
    </div>
  );
};

export default News;
