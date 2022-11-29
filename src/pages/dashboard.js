import DashboardMain from "../components/DashboardMain/Index";
import Index from "../components/Navsidebar/Index";
// import RightSideBar from "./RightSideBar";
import RightSideBar from "../components/RightSideBar/Index";
import styles from "./Styles/dashboard.module.scss";

const dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Index />
      <div className={styles.dashboard__main}>
        <div className={styles.main__top_nav}>{/* <DashboardTopNav /> */}</div>
        <div className={styles.main__content_area}>
          <DashboardMain />
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default dashboard;
