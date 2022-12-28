import { useContext, useEffect } from "react";
import { CartList } from "../../components/Cart";
import { FoodList } from "../../components/FoodList";
import { Header } from "../../components/Header";
import { CartContext } from "../../contexts/CartContext";

export const DashboardPage = () => {
  const { showCart, getFood } = useContext(CartContext);

  useEffect(() => {
    getFood();
  }, []);

  return (
    <>
      <Header />
      <FoodList />
      {showCart ? <CartList /> : null}
    </>
  );
};
