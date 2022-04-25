import React, { useState } from "react";
import { useAuth } from "../../../context/authContext";
import { Link, useNavigate } from "react-router-dom";

import cross from "../../../assets/cross.svg";
import "./styles.css";

interface Props {
  isDisabled?: boolean;
  isSignin: boolean;
  onClose?: () => void;
}

const Modal: React.FC<Props> = ({
  isDisabled = true,
  isSignin = true,
  onClose,
}) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup, login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<React.ErrorInfo>();

  const handleChange = ({ target: { name, value } }: any) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmitSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(undefined);
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error: any) {
      setError(error.message);
    }
    //if (error.code === "auth/internal-error") {
    //setError("Internal error");}
  };

  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(undefined);
    try {
      await login(user.email, user.password);
      navigate("/");
      // auth on context
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <>
      {isSignin ? (
        <div
          className={`modal-component ${isDisabled ? "disabled_modal" : ""}`}
        >
          <div className="modal-container">
            <img
              src={cross}
              alt="close"
              className="modal-close"
              onClick={onClose}
            />
            <div className="modal-header">
              <h1 className="modal-title">
                Create an account to <br /> join the Figma <br /> Community
              </h1>
              <button className="modal-button">
                <h3 className="modal-text-button">Continue with Google</h3>
              </button>
              <h4 className="modal-separator">or</h4>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmitSignin} className="modal-form">
                <p className="modal-error">{error ? { error } : ""} </p>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  className="modal-input"
                />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="modal-input"
                  placeholder="Password"
                />
                <button className="modal-button modal-button-black">
                  <h3 className="modal-text-button">Create account</h3>
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <h4 className="modal-footer-haveacc">
                Already have an account? <Link to="/"> Log in</Link>
              </h4>
              <h4 className="modal-footer-text-extra">
                This site is protected by reCAPTCHA and the Google <br />
                <Link to="/">Privacy Policy </Link>
                and
                <Link to="/"> Terms of Service </Link>
                apply. <br /> By clicking "Create account", I agree to Figma's
                <Link to="/"> TOS </Link>
                and <br />
                <Link to="/">Privacy Policy.</Link>
              </h4>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`modal-component ${isDisabled ? "disabled_modal" : ""}`}
        >
          <div className="modal-container">
            <img
              src={cross}
              alt="close"
              className="modal-close"
              onClick={onClose}
            />
            <div className="modal-header">
              <h1 className="modal-title">
                USE AN account to <br /> join the Figma <br /> Community
              </h1>
              <button className="modal-button">
                <h3 className="modal-text-button">Continue with Google</h3>
              </button>
              <h4 className="modal-separator">or</h4>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmitSignin} className="modal-form">
                <p className="modal-error">{error ? { error } : ""} </p>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  className="modal-input"
                />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="modal-input"
                  placeholder="Password"
                />
                <button className="modal-button modal-button-black">
                  <h3 className="modal-text-button">Create account</h3>
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <h4 className="modal-footer-haveacc">
                Already have an account? <Link to="/"> Log in</Link>
              </h4>
              <h4 className="modal-footer-text-extra">
                This site is protected by reCAPTCHA and the Google <br />
                <Link to="/">Privacy Policy </Link>
                and
                <Link to="/"> Terms of Service </Link>
                apply. <br /> By clicking "Create account", I agree to Figma's
                <Link to="/"> TOS </Link>
                and <br />
                <Link to="/">Privacy Policy.</Link>
              </h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
