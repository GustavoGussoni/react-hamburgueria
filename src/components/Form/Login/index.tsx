import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { TitleBody, TitleHeadThree } from "../../../styles/typography";
import { BttPrimary } from "../../Button/style";
import { FormLogin } from "./style";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaSpinner } from "react-icons/fa";

interface iLoginFormValues {
  email: string;
  password: string;
}

export const CompFormLogin = () => {
  const { loading, loginSubmit, handleRegister } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Email deve ser válido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Deve ter no mínimo 6 dígitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormValues>({ resolver: yupResolver(formSchema) });

  const submit: SubmitHandler<iLoginFormValues> = async (data) => {
    loginSubmit(data);
  };

  return (
    <FormLogin onSubmit={handleSubmit(submit)}>
      <TitleHeadThree color="--gray100">Login</TitleHeadThree>

      <input {...register("email")} placeholder="Email"></input>
      {errors.email?.message && <span>{errors.email.message}</span>}

      <input
        type="password"
        {...register("password")}
        placeholder="Senha"
      ></input>
      {errors.password?.message && <span>{errors.password.message}</span>}

      <BttPrimary
        type="submit"
        color="--green1"
        fontColor="--white"
        colorBg="--green-50"
      >
        {loading ? <FaSpinner className="spinner-icon" /> : "Logar"}
      </BttPrimary>

      <TitleBody color="--gray5">
        Crie sua conta para saborear muitas delícias e matar sua fome!
      </TitleBody>

      <BttPrimary
        type="button"
        color="--gray0"
        fontColor="--gray5"
        colorBg="--gray50"
        fontColorHover="--gray20"
        onClick={() => handleRegister()}
      >
        Cadastrar
      </BttPrimary>
    </FormLogin>
  );
};
