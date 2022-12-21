import React from "react";
import { DivLogo } from "./style";
import Logo from "../../img/shopping-bag.png";
import Balls from "../../img/Group 135.png";

export const CompLogo = () => {
  return (
    <DivLogo>
      <div className="logoName">
        <h1>Burguer</h1>
        <h2>Kenzie</h2>
      </div>
      <div className="logoInfo">
        <div className="divLogo">
          <img src={Logo} alt="" />
        </div>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os melhores
          ingredientes
        </p>
      </div>
      <img
        className="imgBalls"
        alt="Imagem ilustrativa de circulos"
        src={Balls}
      ></img>
    </DivLogo>
  );
};
