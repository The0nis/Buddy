import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import DashboardMain from "../components/DashboardMain/Index";
import DashboardTopNav from "../components/DashboardTopNav/Index";
import Navsidebar from "../components/Navsidebar/Index";
// import RightSideBar from "./RightSideBar";
import RightSideBar from "../components/RightSideBar/Index";
import styles from "./Styles/dashboard.module.scss";

const Dashboard = () => {
  const [toggle, setToggle] = useState(true);

  const toggler = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__sidenav}>
        <div
          className={`${styles.navbar} ${toggle ? styles.hide : styles.show}`}
        >
          <Navsidebar />
        </div>
        <div
          className={`${styles.toggle} ${
            toggle ? styles.toggle_position : null
          }`}
          onClick={toggler}
        >
          <MdMenuOpen size={20} />
        </div>
      </div>
      <div className={styles.dashboard__main}>
        <div className={styles.main__top_nav}>
          <DashboardTopNav />
        </div>
        <div className={styles.main__content_area}>
          <DashboardMain />
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
