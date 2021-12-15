import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="cards">
      <h1>Siap Memulai Berbisnis? </h1>
      <h3>Tentukan bisnis waralaba pilihan Anda sekarang</h3>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/rindu.png"
              text="Rindu Candu Milk Bar"
              path="/products"
            />
            <CardItem src="images/mrbig.png" text="Mr Big" path="/products" />
            <CardItem
              src="images/nasiBalap.png"
              text="Nasi Balap"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/nyoklat.png"
              text="Nyoklat Teen"
              path="/products"
            />
            <CardItem src="images/haba.png" text="Haba Haus" path="/products" />
            <CardItem
              src="images/hello.png"
              text="Hello Sugar"
              path="/products"
            />
          </ul>
          <div className="semua">
            <Link to="/products">
              <p>Lihat Semua</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
