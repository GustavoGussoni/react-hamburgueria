import { createContext, useState } from "react";
import { api } from "../services/api";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

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
  HandleDecrementCount: (prodId: string) => void;
  HandleIncrementCount: (prodId: string) => void;
  getFood: () => Promise<void>;
  filteredFoods: iFood[];
  setFilteredFoods: React.Dispatch<React.SetStateAction<iFood[]>>;
}

export const CartContext = createContext<iCartContext>({} as iCartContext);

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iFilteredProducts {
  id: string;
  name: string;
  category: string;
  price: string | number | bigint | any;
  img: string;
  count: string | number | bigint | any;
  toLowerCase(): string;
}

interface iFood {
  id: string;
  name: string;
  category: string;
  price: string | number | bigint | any;
  img: string;
  count: string | number | bigint | any;
  toLowerCase(): string;
}

interface iError {
  error: string;
}

export const CartProvider = ({ children }: iUserProviderProps) => {
  const localStorageToken = localStorage.getItem("authToken");

  const [filteredProducts, setFilteredProducts] = useState<
    iFilteredProducts | []
  >([]);
  const [food, setFood] = useState([] as iFood[]);
  const [cartList, setCartList] = useState([] as iFilteredProducts[]);
  const [showCart, setShowCart] = useState(false);
  const [filteredFoods, setFilteredFoods] = useState([] as iFood[]);

  const navigate = useNavigate();

  const token = {
    headers: {
      Authorization: "Bearer " + localStorageToken,
    },
  };

  const getFood = async () => {
    try {
      const response = await api.get("/products", token);
      setFood(response.data);
      setFilteredFoods(response.data);
    } catch (error) {
      const currentError = error as AxiosError<iError>;
      if (currentError.response?.data) {
        setTimeout(() => {
          window.localStorage.clear();
          navigate("/");
        }, 2000);
      }
    }
  };

  const AddToCart = (ProductData: iFood) => {
    const productAlreadyExists = cartList.find(
      (el) => el.id === ProductData.id
    );
    if (productAlreadyExists) {
      const updateCart = cartList.map((el) =>
        el.id === ProductData.id ? { ...el, count: el.count + 1 } : el
      );
      setCartList(updateCart);
    } else {
      setCartList([...cartList, { ...ProductData, count: 1 }]);
    }
  };

  const HandleIncrementCount = (prodId: string) => {
    const updateCart = cartList.map((el) =>
      el.id === prodId ? { ...el, count: el.count + 1 } : el
    );
    setCartList(updateCart);
  };

  const HandleDecrementCount = (prodId: string) => {
    const product: undefined | number | any = cartList.find(
      (el) => el.id === prodId
    );

    if (product.count <= 1) {
      const updateCart = cartList.filter((el) => el.id !== prodId);
      setCartList(updateCart);
    } else {
      const updateCart = cartList.map((el) =>
        el.id === prodId ? { ...el, count: el.count - 1 } : el
      );
      setCartList(updateCart);
    }
  };

  const RemoveFromCart = (ProductId: string) => {
    const newList = cartList.filter((product) => product.id !== ProductId);
    setCartList(newList);
  };

  const RemoveAll = () => {
    const emptyList: [] = [];
    setCartList(emptyList);
  };

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
        HandleIncrementCount,
        HandleDecrementCount,
        getFood,
        filteredFoods,
        setFilteredFoods,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
