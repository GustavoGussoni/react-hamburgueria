import { CompFormRegister } from "../../components/Form/Register";
import { CompLogo } from "../../components/Logo";
import { DivReg } from "./style";

export const RegisterPage = () => {
  return (
    <DivReg>
      <CompLogo />
      <CompFormRegister />
    </DivReg>
  );
};
