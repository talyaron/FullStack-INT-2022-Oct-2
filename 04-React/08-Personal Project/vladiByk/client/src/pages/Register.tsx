import "../styles/Register.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserType } from "../app/userSlice";
import { login } from "../app/userSlice";
import { useAppDispatch } from "../hooks/reduxHook";

const Register = () => {
  const [newUser, setNewUser] = useState<UserType | null>(null);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleRegister = async () => {
    const { data } = await axios.post("api/v1/users", newUser);

    const user = await data.user;

    if (!user) return;

    dispatch(login(user));

    setTimeout(() => {
      navigate(`/profile`);
    }, 2000);
  };

  return (
    <div className="registerPage">
      <input className="c-checkbox" type="checkbox" id="start" />
      <input className="c-checkbox" type="checkbox" id="progress2" />
      <input className="c-checkbox" type="checkbox" id="progress3" />
      <input
        className="c-checkbox"
        type="checkbox"
        id="finish"
        onChange={handleRegister}
      />

      <div className="c-formContainer">
        <div className="c-welcome">Welcome aboard!</div>
        <form className="c-form">
          <div className="c-form__group">
            <label className="c-form__label" htmlFor="username">
              <input
                type="text"
                id="username"
                className="c-form__input"
                placeholder=" "
                pattern="[^\s]+"
                onChange={(e) =>
                  setNewUser((prev) => {
                    if (!prev) return null;
                    prev.userName = e.target.value;
                    return prev;
                  })
                }
                required
              />

              <label className="c-form__next" htmlFor="progress2" role="button">
                <span className="c-form__nextIcon"></span>
              </label>

              <span className="c-form__groupLabel">Create your username.</span>
              <b className="c-form__border"></b>
            </label>
          </div>

          <div className="c-form__group">
            <label className="c-form__label" htmlFor="femail">
              <input
                type="email"
                id="femail"
                className="c-form__input"
                placeholder=" "
                // pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                onChange={(e) =>
                  setNewUser((prev) => {
                    if (!prev) return null;
                    prev.email = e.target.value;
                    return prev;
                  })
                }
                required
              />

              <label className="c-form__next" htmlFor="progress3" role="button">
                <span className="c-form__nextIcon"></span>
              </label>

              <span className="c-form__groupLabel">What's your email?</span>
              <b className="c-form__border"></b>
            </label>
          </div>

          <div className="c-form__group">
            <label className="c-form__label" htmlFor="fpass">
              <input
                type="password"
                id="fpass"
                className="c-form__input"
                placeholder=" "
                onChange={(e) =>
                  setNewUser((prev) => {
                    if (!prev) return null;
                    prev.password = e.target.value;
                    return prev;
                  })
                }
                required
              />

              <label className="c-form__next" htmlFor="finish" role="button">
                <span className="c-form__nextIcon"></span>
              </label>

              <span className="c-form__groupLabel">Create your password.</span>
              <b className="c-form__border"></b>
            </label>
          </div>

          <label className="c-form__toggle" htmlFor="start">
            Register<span className="c-form__toggleIcon"></span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Register;
