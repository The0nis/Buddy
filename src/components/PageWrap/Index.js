import style from "./Pagewrap.module.scss";
import logo from "../../assets/logo.svg";
import checkbox from "../../assets/Checkbox.svg";
import quote from "../../assets/comment.svg";

const PageWrap = ({ children }) => {
  const type = children.props.type;

  return (
    <div className={`${style.pagecontainer} container`}>
      <div className={style.onboarding_left}>
        <img src={logo} alt="logo" />
        <div className={style.onboarding_left__list}>
          <ul>
            <li>
              <img src={checkbox} alt="checkbox" />
              <p>
                Track real-time overview of company’s financial performance.
              </p>
            </li>
            <li>
              <img src={checkbox} alt="checkbox" />
              <p>
                Track created projects budget against actual revenue and
                expenses.
              </p>
            </li>
            <li>
              <img src={checkbox} alt="checkbox" />
              <p>
                Highlighted reports on budget deficit and surplus, accounting
                dimensions, balance sheets and real-time sales margin
                estimation.
              </p>
            </li>
          </ul>
        </div>
        <div className={style.copyright}>
          <p>© 2022 Revvex. All rights reserved</p>
        </div>
      </div>
      <div className={style.onboarding_right}>
        <div className={style.onboarding_right__content}>
          {children}
          {type !== "no help" && (
            <button className={style.btn}>
              Get Help
              <img src={quote} alt="quote" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageWrap;
