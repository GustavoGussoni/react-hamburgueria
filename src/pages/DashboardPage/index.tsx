import { useContext } from "react";
import { CartList } from "../../components/Cart";
import { FoodList } from "../../components/FoodList";
import { Header } from "../../components/Header";
import { CartContext } from "../../contexts/CartContext";

export const DashboardPage = () => {
  const { showCart } = useContext(CartContext);
  return (
    <>
      <Header />
      <FoodList />
      {showCart ? <CartList /> : null}
    </>
  );
};
