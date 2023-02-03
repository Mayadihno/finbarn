import { Card, CardBody, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Expoil from "../Home/Expoil/Expoil";
import "./Products.css";
import data from "./productsData";

const Products = () => {
  return (
    <React.Fragment>
      <div className="product">
        <div className="product__content">
          <div className="product__text">
            <h2>Finbarn Agro Commodities</h2>
          </div>
          <div className="product__grid">
            {data.map((data) => {
              return (
                <div className="card card__hover" key={data.id}>
                  <Link to={data.link}>
                    <Card maxW="sm" shadow={"lg"}>
                      <Image
                        src={data.Image}
                        alt={data.name}
                        objectFit="cover"
                      />
                      <CardBody className="card-body">
                        <div className="text">
                          <h3>{data.name}</h3>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <Expoil />
      </div>
    </React.Fragment>
  );
};

export default Products;
