import React from "react";
import coins from "../../asset/img/coins/Coins.png";
import logo from "../../asset/img/coins/logo.png";
import "./FreeCoins.css";

const FreeCoins = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={coins} alt="" />
        </div>
        <div className="col-6 coinsContent">
          <img src={logo} alt=""  className="logo"/>
          <p className="freeCoinText">
            Install the free app and get <br />
            <span className="yellow">500 coins</span> as reward to take a step forward
          </p>
        </div>
      </div>
    </div>
  );
};

export default FreeCoins;
