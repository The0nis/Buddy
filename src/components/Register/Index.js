import React, { useRef, useState } from "react";
import style from "./Register.module.css";
import { MdPerson, MdEmail, MdLockOpen } from "react-icons/md";
import { Link } from "react-router-dom";

const Register = () => {
  const [show, setShow] = useState(true);
  const [showlastName, setShowLastName] = useState(true);
  const [showEmail, setShowEmail] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [showSubmit, setShowSubmit] = useState(false);

  const enteredName = useRef();
  const enteredLastname = useRef();
  const enteredEmail = useRef();
  const enteredPassword = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const name = enteredName.current.value;
    const lastname = enteredLastname.current.value;
    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;

    if (name.trim().length > 0) {
      if (lastname.trim().length > 0) {
        if (email) {
          if (password.trim().length > 0) {
            setShowSubmit(!showSubmit);
            //pass to api using fetch
          }
          setShowSubmit(false);
        }
        setShowSubmit(false);
      }
      setShowSubmit(false);
    }
    setShowSubmit(false);
  };

  const keyHandler = (event) => {
    event.preventDefault();
    setShow(!show);
  };

  const lastNameHandler = (event) => {
    event.preventDefault();
    setShowLastName(!showlastName);
  };

  const emailHandler = (event) => {
    event.preventDefault();
    setShowEmail(!showEmail);
  };

  const passwordHandler = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className={style.wrapper}>
      <form onSubmit={submitHandler}>
        <div className={style.header}>
          <h3>Register your account</h3>
          <p>Proceed to create account and setup your organization</p>
        </div>

        <div className={style.field}>
          <div className={style.fielda}>
            {!show && <label className={style.firstname}>First Name</label>}
            <div className={style.namefield}>
            <div>
                <MdPerson className={style.icona} />
              </div>
              <input
                type="text"
                placeholder="First Name"
                id="name"
                minLength={1}
                onClick={keyHandler}
                ref={enteredName}
              />
            </div>
            {!showlastName && (
              <label className={style.lastname}>Last Name</label>
            )}
            <div className={style.namefield}>
            <div>
                <MdPerson className={style.icona} />
              </div>
              <input
                type="text"
                placeholder="Last Name"
                id="name"
                minLength={1}
                onClick={lastNameHandler}
                ref={enteredLastname}
              />
            </div>
          </div>

          {!showEmail && <label className={style.email}>Email</label>}
          <div className={style.fieldb}>
          <div>
              <MdEmail className={style.icons} />
            </div>
            <div>
              <input
                type="Email"
                placeholder="Email"
                id="name"
                minLength={1}
                onClick={emailHandler}
                ref={enteredEmail}
              />
            </div>

            
          </div>

          {!showPassword && <label className={style.password}>Password</label>}
          <div className={style.fieldb}>
          <div>
              <MdLockOpen className={style.icons} />
            </div>
            <div>
              <input
                type="Password"
                placeholder="Password"
                id="name"
                minLength={1}
                onClick={passwordHandler}
                ref={enteredPassword}
              />
            </div>
            
          </div>
        </div>

        <div className={style.create}>
          <button type="submit" className={style.btn}>
            Create account
          </button>
        </div>

        <div className={style.terms}>
          <p>
            By clicking the button above, you agree to our{" "}
            <span className={style.changetxt}>
              <Link>Terms of Service</Link>
            </span>{" "}
            and{" "}
            <span className={style.changetxt}>
              <Link>Privacy Policy.</Link>
            </span>
          </p>
        </div>
      </form>

      <div className={style.footer}>
        <div className={style.pointer}>
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
