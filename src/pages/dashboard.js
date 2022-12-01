import DashboardMain from "../components/DashboardMain/Index";
import DashboardTopNav from "../components/DashboardTopNav/Index";
import Navsidebar from "../components/Navsidebar/Index";
// import RightSideBar from "./RightSideBar";
import RightSideBar from "../components/RightSideBar/Index";
import styles from "./Styles/dashboard.module.scss";

const dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Navsidebar />
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

export default dashboard;
