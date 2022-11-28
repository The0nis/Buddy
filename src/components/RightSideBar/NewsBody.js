import React from "react";
import style from "./rightSideBar.module.css";

const NewsBody = (props) => {
  return (
    <div className={style.newscont}>
    <div className={style.newslogo}>
        <img src={props.image} />
      </div>
      
      
      <div className={style.revbody}>
        <div>
          <h3 className={style.newshead}>${props.head}</h3>
        </div>
        <div className={style.newsdesc}>
          <h6 className={style.description}>{props.description}</h6>
        </div>
      </div>

      
    </div>
  )
}

export default NewsBody