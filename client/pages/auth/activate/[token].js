import React, { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";
import ActivateBg from "../../../components/backgrounds/activationBg";
import { API } from "../../../config";
import styles from "./activate.module.css";

import { ToastContainer, toast } from "react-toastify";
import Layout from "../../../components/Layout";
import { withRouter } from "next/router";

const ActivateAccount = ({ router }) => {
  const [userState, setUserState] = useState({
    name: "",
    token: "",
    success: "",
    buttonText: "Activate Account",
    success: "",
    error: "",
  });
  const { name, token, buttonText, success, error } = userState;

  useEffect(() => {
    let token = router.query.token;
    if (token) {
      const { name } = jwt.decode(token);
      setUserState({ ...userState, name, token });
    }
  }, [router]);

  const submitActivation = async (e) => {
    e.preventDefault();
    setUserState({ ...userState, buttonText: "Activation" });
    try {
      const response = await axios.post(`${API}/register/activate`, {
        token,
      });
      console.log("token was sent");
      setUserState({
        ...userState,
        name: "",
        token: "",
        success: response.data.message,
        buttonText: "Activated",
      });
    } catch (err) {
      setUserState({
        ...userState,
        buttonText: "Something is wrong...",
        error: error.response.data.error,
        error: err,
      });
    }
  };
  console.log(userState);
  return (
    <Layout>
      <ActivateBg className={styles.activateBackground} />
      <div className="row">
        <div className={styles.activatePageLayout}>
          <div className={`col-md-8 offset-md-2 ${styles.activationForm}`}>
            <h3>Hello, {name}. Activate Your Account:</h3>
            {success &&
              toast.success(`${success}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })}
            {error &&
              toast.error(`${error}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              })}
            <button
              onClick={submitActivation}
              className={`btn btn-block ${styles.activationBtn}`}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default withRouter(ActivateAccount);
