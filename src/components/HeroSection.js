import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <img src='/images/background.png' alt="logo" /> */}
      <h1>Jadilah Investor </h1>
      <h2>UMKM & Waralaba </h2>
      <p>
        Temukan bisnis UMKM & Waralaba yang anda sukai dan mulai menjadi
        investor untuk kemajuan perekonomian bangsa tanpa perlu pusing dengan
        operasional sehari-hari
      </p>
      <div className="hero-btns">
     <Link to='/products'>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
         Investasi Sekarang <i className="fas fa-arrow-right" />
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
