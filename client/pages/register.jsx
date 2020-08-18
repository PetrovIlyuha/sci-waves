import { useState } from "react";
import Layout from "../components/Layout";

const Register = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: "",
    buttonText: "Register",
  });

  const { name, email, password, error, success, buttonText } = formState;

  const handleFormInputChange = (name) => (e) => {
    setFormState({
      ...formState,
      [name]: e.target.value,
      error: "",
      success: "",
      buttonText: "Register",
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/api/register")
      .then((data) => data.json())
      .then((data) => console.log(data));
    console.log(name, email, password);
  };

  console.log(formState);
  const registerForm = () => (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="name">Username</label>
        <input
          onChange={handleFormInputChange("name")}
          type="text"
          value={name}
          id="name"
          className="form-control"
          placeholder="Ironman..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          onChange={handleFormInputChange("email")}
          type="email"
          value={email}
          id="email"
          className="form-control"
          placeholder="warrior@galaxy.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          id="password"
          className="form-control"
          onChange={handleFormInputChange("password")}
        />
      </div>
      <div className="form-group">
        <button className="btn mx-auto btn-outline-warning">
          {buttonText}
        </button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="register__page_layout">
        <div className="shapes__register"></div>
        <div className="cloud__register"></div>
        {/* <div className="register-page-person col-md-6 mt-5"></div> */}
        <div className="register-overlay col-md-6 offset-3 mt-5">
          {registerForm()}
        </div>
      </div>
    </Layout>
  );
};

export default Register;
