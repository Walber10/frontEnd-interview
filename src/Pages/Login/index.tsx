import Header from "../../Components/Header";
import Login from "../../Components/Login";
import "../Login/login.css";

const LoginPage = () => {
  return (
    <div className="login_wrapper">
      <Header />
      <Login />
    </div>
  );
};

export default LoginPage;
