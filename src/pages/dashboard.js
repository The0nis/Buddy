import RightSideBar from "../components/RightSideBar/Index";
//import styles from "./Styles/dashboard.module.scss";

const dashboard = () => {
  return (
<<<<<<< HEAD
    <div>
      {/* <SideNav />
      <Main />
      <RightSideBar /> */}
        <RightSideBar />
=======
    <div className={styles.dashboard}>
      {/* <SideNav /> */}
      <div className={styles.dashboard__main}>
        <div className={styles.main__top_nav}>{/* <DashboardTopNav /> */}</div>
        <div className={styles.main__content_area}>
          <Main />
          <RightSideBar />
        </div>
      </div>
>>>>>>> 488d34da8debb28d544bba30467e8d3802272001
    </div>
  );
};

export default dashboard;
