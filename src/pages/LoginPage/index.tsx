import { CompFormLogin } from "../../components/Form/Login";
import { CompLogo } from "../../components/Logo";
import { DivLogin } from "./style";

export const LoginPage = () => {
  return (
    <DivLogin>
      <CompFormLogin />
      <CompLogo />
    </DivLogin>
  );
};
