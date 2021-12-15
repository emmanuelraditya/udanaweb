import React from 'react';
import membantu from './membantu.png';
import './Membantu.css';
import { Card } from 'react-bootstrap';

function Membantu() {
    return (
        <>
          <div className="membantu-card">
           <Card>
       <img src={membantu} alt="membantu" />
      </Card>
    </div>
        </>
    )
}

export default Membantu
