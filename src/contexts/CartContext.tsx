import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { string } from "yup";

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
}

interface iFood {
  id: string;
  name: string;
  category: string;
  price: string | number | bigint | any;
  img: string;
  count: string | number | bigint | any;
}

interface iError {
  error: string;
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

  useEffect(() => {
    getFood();
  }, []);

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
        HandleIncrementCount,
        HandleDecrementCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
