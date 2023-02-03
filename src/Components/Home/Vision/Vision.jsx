import { Avatar, Card, CardBody } from "@chakra-ui/react";
import React from "react";
import "./Vision.css";
import image from "../../../Assets/image/Environment-bro.png";
import image2 from "../../../Assets/image/Business Plan-bro.png";
const Vision = () => {
  return (
    <React.Fragment>
      <div className="vision">
        <div className="vision__content">
          <div className="vision__text">
            <h2>Finbarn Mission and Vision</h2>
          </div>
          <div className="vision__flex">
            <div className="vision__vision">
              <Card maxW="sm" shadow={"lg"}>
                <CardBody className="card-body">
                  <div className="head">
                    <h1>Our Mission</h1>
                    <Avatar size="2xl" name="vision" src={image2} />
                  </div>

                  <p>
                    The mission of Finbarn Limited is to provide world class
                    quality Agro-commodities and Services to our clients and to
                    ensure we incorporate a transparent business approach. We
                    aim at continually improving our business processes thereby
                    delivering value and trust to stakeholders both internal and
                    external.
                  </p>
                </CardBody>
              </Card>
            </div>
            <div className="vision__mision">
              <Card maxW="sm" shadow={"lg"}>
                <CardBody className="card-body">
                  <div className="head">
                    <h1>Our Vision</h1>
                    <Avatar size="2xl" name="mission" src={image} />
                  </div>
                  <p>
                    To become a globally recognized and sought after exports
                    company for agricultural commodities and minerals. To put
                    quality, service, and value as priority to satisfy
                    stakeholders and customers and to provide a motivating
                    workplace that will attract,develop and keep the right
                    employees.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Vision;
