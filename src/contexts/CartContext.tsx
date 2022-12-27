import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface iCartContext {
  food: iFood[];
  filteredProducts: [] | iFilteredProducts;
  RemoveFromCart: (ProductId: string) => void;
  RemoveAll: () => void;
  AddToCart: (ProductData: iFood) => void;
  cartList: iFilteredProducts[];
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  setFilteredProducts: React.Dispatch<
    React.SetStateAction<iFilteredProducts | []>
  >;
  setFood: React.Dispatch<React.SetStateAction<iFood[]>>;
}

export const CartContext = createContext<iCartContext>({} as iCartContext);

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iFilteredProducts {
  id: string;
  name: string;
  category: string;
  price: string;
  img: string;
}

interface iFood {
  id: string;
  name: string;
  category: string;
  price: string;
  img: string;
}
export const CartProvider = ({ children }: iUserProviderProps) => {
  const localStorageToken = localStorage.getItem("authToken");
  // const [input, setInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<
    iFilteredProducts | []
  >([]);
  const [food, setFood] = useState([] as iFood[]);
  const [cartList, setCartList] = useState([] as iFilteredProducts[]);
  const [showCart, setShowCart] = useState(false);

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

  const AddToCart = (ProductData: iFood) => {
    console.log("adicionou");
    cartList.find((el) => ProductData.id === el.id)
      ? toast.error("Esse produto já foi adicionado!")
      : setCartList([...cartList, ProductData]);
  };
  console.log(cartList);

  const RemoveFromCart = (ProductId: string) => {
    const newList = cartList.filter((product) => product.id !== ProductId);
    setCartList(newList);
  };

  const RemoveAll = () => {
    const emptyList: [] = [];
    setCartList(emptyList);
  };

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
    <CartContext.Provider
      value={{
        food,
        filteredProducts,
        RemoveFromCart,
        RemoveAll,
        AddToCart,
        cartList,
        showCart,
        setShowCart,
        setFilteredProducts,
        setFood,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
