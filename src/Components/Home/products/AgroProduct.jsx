import React from "react";
import data from "./dataProduct";
import { Card, CardBody, Image } from "@chakra-ui/react";
import "../products/AgroProduct.css";
import { Link } from "react-router-dom";

const AgroProduct = () => {
  return (
    <React.Fragment>
      <div className="agroProduct">
        <div className="agroProduct__content">
          <div className="agroProducr__text">
            <h2>Finbarn Agro Commodities</h2>
            <div className="border"></div>
          </div>
          <div className="agroProduct__grid">
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
      </div>
    </React.Fragment>
  );
};

export default AgroProduct;
