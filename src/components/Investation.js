import React from "react";
import { Card } from "react-bootstrap";
import invest from "./investor.png";
import "./Investation.css";


function Investation() {
  return (
    <>
    <div className="investation-card">
    <Card>
       <img src={invest} alt="investation" />
      </Card>
    </div>
     
    </>
  );
}

export default Investation;
