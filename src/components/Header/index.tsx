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

export const Header = () => {
  const { setShowCart } = useContext(CartContext);
  const { logOut } = useContext(UserContext);
  return (
    <DivHead>
      <DivLogo>
        <FontHeadingOne color="--gray100">Burguer</FontHeadingOne>
        <FontHeadingFour color="--red-secondary">Kenzie</FontHeadingFour>
      </DivLogo>
      <DivBtts>
        <Form /*onSubmit={submit}*/>
          <InputDefault
            /*onChange={(event) => setInput(event.target.value)}*/
            id="filter"
            type="text"
            placeholder="Digitar Pesquisa"
          ></InputDefault>
          <ButtonHead>
            <HiOutlineSearch></HiOutlineSearch>
          </ButtonHead>
        </Form>
        <button>
          <FaShoppingCart
            onClick={() => setShowCart(true)}
            className="cartBtt"
          />
        </button>
        <button>
          <FiLogOut onClick={() => logOut()} className="logOutBtt" />
        </button>
      </DivBtts>
    </DivHead>
  );
};
