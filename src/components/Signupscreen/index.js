import React, { useState } from "react";
import style from "./signupscreen.module.scss";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

function Signupscreen() {
  const [show, setShow] = useState(false);
  const [showme, setShowme] = useState(false);

  const changeme = (event) => {
    event.preventDefault();
    setShow(!show);
  };

  const changegoogle = (event) => {
    event.preventDefault();
    setShowme(!showme);
  };

  return (
    <div className={style.signcontainer}>
      <div className={style.signwrapper}>
        <form>
          <div className={style.signheader}>
            <h3>Register your account</h3>
          </div>

          <div className={style.signfield}>
            <div className={style.signfielda}>
              <div className={style.inputwrap} onClick={changeme}>
                <input
                  type="Email"
                  placeholder="Sign up with Email"
                  id="name"
                  minLength={1}
                />
              </div>
              {!show && (
                <div>
                  <AiOutlineMail className={style.signicons} />
                </div>
              )}
            </div>

            <div className={style.signline}>
              <div className={style.signlinewid}>
                <hr />
              </div>
              <div>
                <p>or</p>
              </div>
              <div className={style.signlinewid}>
                <hr />
              </div>
            </div>

            <div className={style.signfielda}>
              <div className={style.inputwrap} onClick={changegoogle}>
                <input
                  type="Password"
                  placeholder="Sign up with Google"
                  id="name"
                  minLength={1}
                />
              </div>
              {!showme && (
                <div>
                  <FcGoogle className={style.signicons} />
                </div>
              )}
            </div>
          </div>

          <div className={style.signterms}>
            <p>
              By clicking the button above, you agree to our{" "}
              <span className={style.signchangetxt}>
                <Link>
                  Terms <br></br>of Service
                </Link>
              </span>{" "}
              and{" "}
              <span className={style.signchangetxt}>
                <Link>Privacy Policy.</Link>
              </span>
            </p>
          </div>
        </form>

        <div className={style.signfooter}>
          <div>
            <p>Already have an account?</p>
          </div>

          <div>
            <p>
              <Link to="/" className={style.signpointer}>
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
