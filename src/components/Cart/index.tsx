import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import {
  FontHeadingThree,
  FontHeadingFour,
  FontCapition,
  FontBody,
  FontHeadline,
  FontRemove,
} from "../../styles/typography";

import {
  Card,
  DivCart,
  DivInfo,
  DivMain,
  DivName,
  DivNoItem,
  DivTotal,
  DivTotalInfo,
  List,
  Image,
  DivModal,
} from "./style";

export const CartList = () => {
  const {
    RemoveAll,
    RemoveFromCart,
    cartList,
    setShowCart,
    HandleDecrementCount,
    HandleIncrementCount,
  } = useContext(CartContext);

  const sumPrice = cartList.reduce(
    (total, product) => total + Math.round(product.price * product.count),
    0
  );

  return (
    <DivModal>
      <DivCart>
        <List>
          <DivInfo>
            <FontHeadingThree color="--white">
              Carrinho de compras
            </FontHeadingThree>
            <button onClick={() => setShowCart(false)}>X</button>
          </DivInfo>
          {cartList.length > 0 ? (
            <>
              <div className="divCards">
                {cartList.map((el) => (
                  <Card key={el.id}>
                    <DivMain>
                      <Image src={el.img} />
                      <DivName>
                        <FontHeadingFour>{el.name}</FontHeadingFour>
                        <div className="divIncrement">
                          <button onClick={() => HandleDecrementCount(el.id)}>
                            -
                          </button>
                          <p>{el.count}</p>
                          <button onClick={() => HandleIncrementCount(el.id)}>
                            +
                          </button>
                        </div>
                      </DivName>
                    </DivMain>
                    <FontRemove
                      color="--gray4"
                      onClick={() => RemoveFromCart(el.id)}
                    >
                      Remover
                    </FontRemove>
                  </Card>
                ))}
              </div>
              <DivTotal>
                <DivTotalInfo>
                  <FontHeadline color="--gray100">Total</FontHeadline>
                  <FontBody color="--gray50">R${sumPrice}</FontBody>
                </DivTotalInfo>
                <button onClick={() => RemoveAll()}>Remover todos</button>
              </DivTotal>
            </>
          ) : (
            <DivNoItem>
              <FontHeadingThree>Sua sacola está vazia</FontHeadingThree>
              <FontBody color="--gray50">Adicione itens</FontBody>
            </DivNoItem>
          )}
        </List>
      </DivCart>
    </DivModal>
  );
};
