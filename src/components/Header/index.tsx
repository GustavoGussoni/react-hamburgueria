import { FontHeadingOne, FontHeadingFour } from "../../styles/typography";
import {
  Form,
  DivHead,
  DivLogo,
  ButtonHead,
  InputDefault,
  DivBtts,
} from "./style";
import { HiOutlineSearch } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { UserContext } from "../../contexts/UserContext";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ThemeButton } from "../Button/style";

interface iFormHead {
  toLowerCase(): string;
  name: string;
  category: string;
}

export const Header = () => {
  const { setShowCart, cartList, food, filteredFoods, setFilteredFoods } =
    useContext(CartContext);
  const { logOut } = useContext(UserContext);
  const formSchema = yup.object().shape({
    name: yup.string(),
  });

  const { register, handleSubmit } = useForm<iFormHead>({
    resolver: yupResolver(formSchema),
  });

  const submit: SubmitHandler<iFormHead> = (data) => {
    const foodsFiltered = food.filter((el) => {
      return (
        el.name.toLowerCase().includes(data.name.toString().toLowerCase()) ||
        el.category.toLowerCase().includes(data.name.toString().toLowerCase())
      );
    });

    setFilteredFoods(foodsFiltered);
  };

  return (
    <DivHead>
      <DivLogo>
        <FontHeadingOne color="--gray100">Burguer</FontHeadingOne>
        <FontHeadingFour color="--red-secondary">Kenzie</FontHeadingFour>
      </DivLogo>
      <DivBtts>
        {filteredFoods.length < 6 ? (
          <ThemeButton
            onClick={() => setFilteredFoods(food)}
            type="button"
            buttonSize="sm"
          >
            Limpar
          </ThemeButton>
        ) : null}
        <Form onSubmit={handleSubmit(submit)}>
          <InputDefault
            {...register("name")}
            id="filter"
            type="text"
            placeholder="Digitar Pesquisa"
          ></InputDefault>
          <ButtonHead type="submit">
            <HiOutlineSearch></HiOutlineSearch>
          </ButtonHead>
        </Form>
        <div className="divBttCart">
          <button>
            <FaShoppingCart
              onClick={() => setShowCart(true)}
              className="cartBtt"
            />
          </button>
          {cartList ? <p>{cartList.length}</p> : null}
        </div>

        <button>
          <FiLogOut onClick={() => logOut()} className="logOutBtt" />
        </button>
      </DivBtts>
    </DivHead>
  );
};
