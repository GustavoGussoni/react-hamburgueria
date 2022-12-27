import { Navigate } from "react-router-dom";
import { CompFormRegister } from "../../components/Form/Register";
import { CompLogo } from "../../components/Logo";
import { DivReg } from "./style";

export const RegisterPage = () => {
  const token = localStorage.getItem("authToken");
  if (token) return <Navigate to="/dashboard" replace />;
  return (
    <DivReg>
      <CompLogo />
      <CompFormRegister />
    </DivReg>
  );
};
