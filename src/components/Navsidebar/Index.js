import React, { useState } from "react";
import style from "./Navsidebar.module.scss";
import logo from "../../assets/logo.svg";
import myportfolio from "../../assets/myportfolio.svg";
import mygroup from "../../assets/mygroup.svg";
import pack from "../../assets/pack.svg";
import settings from "../../assets/settings.svg";
import analytics from "../../assets/analytics.svg";
import milly from "..//../assets/milly.svg";
import logout from "..//../assets/logout.svg";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const Navsidebar = () => {
  const [active, setActive] = useState(false);

  //ROUTER
  const url = useLocation().pathname;

  console.log(url);

  return (
    <div className={style.sidenav_container}>
      <div className={style.topnav}>
        <div className={style.buddylogo}>
          <center>
            {" "}
            <img src={logo} alt="logo" />{" "}
          </center>
        </div>
        <div className={style.navlinks}>
          <br></br>
          <br></br>
          <nav className={style.nav1}>
            <ul className={style.nav}>
              <NavLink
                to="/dashboard"
                className={url == "/dashboard" ? `${style.active}` : ""}
              >
                <li>
                  <img src={myportfolio} alt="my portfolio" />
                  <p> My Portfolio</p>
                </li>
              </NavLink>
              <NavLink
                to="mygroup"
                className={(navData) =>
                  navData.isActive ? `${style.active}` : ""
                }
              >
                <li>
                  <img src={mygroup} alt="my group" />
                  <p> My Group</p>
                </li>
              </NavLink>
              <NavLink
                to="analytics"
                className={(navData) =>
                  navData.isActive ? `${style.active}` : ""
                }
              >
                <li>
                  <img src={analytics} alt="analytics" />
                  <p> My Analytics</p>
                </li>
              </NavLink>
              <NavLink
                to="pack"
                className={(navData) =>
                  navData.isActive ? `${style.active}` : ""
                }
              >
                <li>
                  <img src={pack} alt="pack" />
                  <p> Pack</p>
                </li>
              </NavLink>
              <NavLink
                to="settings"
                className={(navData) =>
                  navData.isActive ? `${style.active}` : ""
                }
              >
                <li>
                  <img src={settings} alt="settings" />
                  <p> Settings</p>
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>
        <Outlet />
      </div>
      <footer>
        <div className={style.navsidefooter}>
          <div className={style.navwrapper}>
            <center>
              <img src={milly} alt="logo" className={style.navimage} />{" "}
            </center>

            <h3>Theresa milly</h3>
            <p>Influencer</p>
            <center>
              <button className={style.navbtn}>
                <img src={logout} alt="alt" />
                <p>Logout</p>
              </button>
            </center>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Navsidebar;
