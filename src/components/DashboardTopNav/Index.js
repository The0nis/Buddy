import styles from "./DashboardTopNav.module.scss";
import { RiSearchLine } from "react-icons/ri";
import { HiOutlinePlus } from "react-icons/hi";
import { FiBell } from "react-icons/fi";

const DashboardTopNav = () => {
  return (
    <div className={styles.dashboardtopnav}>
      <h1>My Portfolio</h1>
      <div className={styles.dashboardtopnav__right}>
        <div className={styles.search}>
          <div className={styles.searchicon}>
            <RiSearchLine size={18} />
          </div>
          <input type="text" placeholder="Search" />
        </div>
        <div className={styles.plus}>
          <HiOutlinePlus size={14} />
        </div>
        <div className={styles.bell}>
          <FiBell size={14} />
        </div>
      </div>
    </div>
  );
};

export default DashboardTopNav;
