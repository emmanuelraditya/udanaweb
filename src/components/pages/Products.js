import React, { useState, useEffect } from "react";
import "../../App.css";
import { Table } from "react-bootstrap";
import "./Products.css";
import { Link } from "react-router-dom";

export default function Products() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("https://api.openbrewerydb.org/breweries")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // const handleBack = () => {
  //   <Link to="/"></Link>
  // }

  return (
    <>
      <div className="product-container">
        {/* <pre>  {JSON.stringify(data,null,2)}</pre> */}
        <Link to="/">
        <button>back</button>
        </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>City</th>
              <th>State</th>
              <th>Postal Code</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>
                  {data.map((item) => (
                    <li>{item.id}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {data.map((item) => (
                    <li>{item.name}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {data.map((item) => (
                    <li>{item.city}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {data.map((item) => (
                    <li>{item.state}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {data.map((item) => (
                    <li>{item.postal_code}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {data.map((item) => (
                    <li>{item.country}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
