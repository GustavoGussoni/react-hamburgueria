import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

interface iCartContext {
  food: iFood | [];
  filteredProducts: iFilteredProducts | [];
}

export const CartContext = createContext<iCartContext>({} as iCartContext);

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iEvent {
  preventDefault: () => void;
}

interface iFilteredProducts {
  id: string;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface iFood {
  id: string;
  name: string;
  category: string;
  price: number;
  img: string;
}
export const CartProvider = ({ children }: iUserProviderProps) => {
  const localStorageToken = localStorage.getItem("authToken");
  const [input, setInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<
    iFilteredProducts | []
  >([]);
  const [food, setFood] = useState<iFood | []>([]);

  const token = {
    headers: {
      Authorization: "Bearer " + localStorageToken,
    },
  };

  const getFood = async () => {
    try {
      const response = await api.get("/products", token);
      console.log(response);
      setFood(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  console.log(food);

  //   const submitFind = (event: iEvent) => {
  //     event.preventDefault();
  //     setInput("hamburguer");
  //     setFilteredProducts(
  //       food.filter(
  //         (el) =>
  //           el.name.toLowerCase().includes(input.toLowerCase()) ||
  //           el.category.toLowerCase().includes(input.toLowerCase())
  //       )
  //     );
  //   };

  return (
    <CartContext.Provider value={{ food, filteredProducts }}>
      {children}
    </CartContext.Provider>
  );
};
