import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { TitleHeadThree } from "../../../styles/typography";
import { BttPrimary } from "../../Button/style";
import { FormRegister } from "./style";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

interface iRegisterFormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const CompFormRegister = () => {
  const { loading, registerSubmit } = useContext(UserContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Digite o nome").min(3, "Mínimo 3 letras"),
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Email deve ser válido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Deve ter no mínimo 6 dígitos"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormValues>({ resolver: yupResolver(formSchema) });

  const submit: SubmitHandler<iRegisterFormValues> = async (data) => {
    registerSubmit(data);
  };

  return (
    <FormRegister onSubmit={handleSubmit(submit)}>
      <div className="divHeadReg">
        <TitleHeadThree color="--gray100">Cadastro</TitleHeadThree>
        <Link to={"/"}> Retornar para o login</Link>
      </div>

      <input {...register("name")} placeholder="Nome"></input>
      {errors.name?.message && <span>{errors.name.message}</span>}

      <input {...register("email")} placeholder="Email"></input>
      {errors.email?.message && <span>{errors.email.message}</span>}

      <input
        type="password"
        {...register("password")}
        placeholder="Senha"
      ></input>
      {errors.password?.message && <span>{errors.password.message}</span>}

      <input
        type="password"
        {...register("passwordConfirmation")}
        placeholder="Confirmar senha"
      ></input>
      {errors.passwordConfirmation?.message && (
        <span>{errors.passwordConfirmation.message}</span>
      )}

      <BttPrimary
        type="submit"
        color="--green1"
        fontColor="--white"
        colorBg="--green-50"
      >
        {loading ? <FaSpinner className="spinner-icon" /> : "Cadastrar"}
      </BttPrimary>
    </FormRegister>
  );
};
