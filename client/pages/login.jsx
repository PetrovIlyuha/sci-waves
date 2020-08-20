import Layout from "../components/Layout";
import LoginBack from "../components/backgrounds/LoginBack";
import classes from "./login.module.css";

const Login = () => {
  return (
    <Layout>
      <LoginBack className={classes.loginBG} />
      <div className={classes.loginLayout}>
        <h2>Login Here</h2>
        <form className={classes.loginForm}>
          <input type="email" name="email" />
          <input type="password" name="password" />
        </form>
      </div>
    </Layout>
  );
};

export default Login;
