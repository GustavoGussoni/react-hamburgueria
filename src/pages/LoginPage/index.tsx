import { Navigate } from "react-router-dom";
import { CompFormLogin } from "../../components/Form/Login";
import { CompLogo } from "../../components/Logo";
import { DivLogin } from "./style";

export const LoginPage = () => {
  const token = localStorage.getItem("authToken");
  if (token) return <Navigate to="/dashboard" replace />;

  return (
    <DivLogin>
      <CompFormLogin />
      <CompLogo />
    </DivLogin>
  );
};
