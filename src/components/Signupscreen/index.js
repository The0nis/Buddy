import React from "react";
import style from "./signupscreen.module.scss";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

function Signupscreen() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <form>
          <div className={style.header}>
            <h3>Register your account</h3>
          </div>

          <div className={style.field}>
            <div className={style.fielda}>
              <div>
                <input
                  type="Email"
                  placeholder=" Sign up with Email"
                  id="name"
                  minLength={1}
                />
              </div>
              <div>
                <AiOutlineMail className={style.icons} />
              </div>
            </div>

            <div className={style.line}>
              <div className={style.linewid}>
                <hr />
              </div>
              <div>
                <p>or</p>
              </div>
              <div className={style.linewid}>
                <hr />
              </div>
            </div>

            <div className={style.fielda}>
              <div>
                <input
                  type="Password"
                  placeholder="Sign up with Google"
                  id="name"
                  minLength={1}
                />
              </div>
              <div>
                <FcGoogle className={style.icons} />
              </div>
            </div>
          </div>

          <div className={style.terms}>
            <p>
              By clicking the button above, you agree to our{" "}
              <span className={style.changetxt}>
                <Link>
                  Terms <br></br>of Service
                </Link>
              </span>{" "}
              and{" "}
              <span className={style.changetxt}>
                <Link>Privacy Policy.</Link>
              </span>
            </p>
          </div>
        </form>

        <div className={style.footer}>
          <div>
            <p>Already have an account?</p>
          </div>

          <div>
            <p>
              <Link to="/" className={style.pointer}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signupscreen;
