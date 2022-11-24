import React from "react";
import style from "./Register.module.css";
import { MdPerson, MdEmail, MdLockOpen } from "react-icons/md";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className={style.wrapper}>
      <form>
        <div className={style.header}>
          <h3>Register your account</h3>
          <p>Proceed to create account and setup your organization</p>
        </div>

        <div className={style.field}>
          <div className={style.fielda}>
            <div className={style.namefield}>
              <input
                type="text"
                placeholder="First Name"
                id="name"
                minLength={1}
              />
              <div>
                <MdPerson className={style.icona} />
              </div>
            </div>

            <div className={style.namefield}>
              <input
                type="text"
                placeholder="Last Name"
                id="name"
                minLength={1}
              />
              <div>
                <MdPerson className={style.icona} />
              </div>
            </div>
          </div>

          <div className={style.fieldb}>
            <div>
              <input type="Email" placeholder="Email" id="name" minLength={1} />
            </div>

            <div>
              <MdEmail className={style.icons} />
            </div>
          </div>

          <div className={style.fieldb}>
            <div>
              <input
                type="Password"
                placeholder="Password"
                id="name"
                minLength={1}
              />
            </div>
            <div>
              <MdLockOpen className={style.icons} />
            </div>
          </div>
        </div>

        <div className={style.create}>
          <button type="submit" className={style.btn}>Create account</button>
        </div>

        <div className={style.terms}>
          <p>
            By clicking the button above, you agree to our{" "}
            <span className={style.changetxt}><Link>Terms of Service</Link></span> and{" "}
            <span className={style.changetxt}><Link>Privacy Policy.</Link></span>
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
  );
};

export default Register;
