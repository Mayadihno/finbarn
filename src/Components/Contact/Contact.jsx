import { Button, Card, CardBody, Input, Stack } from "@chakra-ui/react";
import React from "react";
import Map from "../Map/Map";
import { MdOutlineMail, MdEmail } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import "./Contact.css";
const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact">
        <div className="contact__background">
          <div className="contact__text">
            <h2>Contact Us</h2>
            <p>
              We’d love to learn more about how we can partner with your
              organization. Tell us a bit about yourself,and we’ll get in touch
              as soon as we can.
            </p>
          </div>
        </div>
        <div className="contact__flex">
          <div className="contact__message">
            <h4>Send Us a Message</h4>
            <Card maxW="md" shadow={"lg"} className="card">
              <CardBody>
                <Stack spacing={5}>
                  <Input
                    type={"text"}
                    colorScheme="whatsapp"
                    variant="flushed"
                    placeholder="First Name"
                    required
                  />
                  <Input
                    type={"text"}
                    variant="flushed"
                    placeholder="Last Name"
                    required
                  />
                  <Input
                    type={"email"}
                    variant="flushed"
                    placeholder="Email"
                    required
                  />
                  <Input
                    type={"tel"}
                    variant="flushed"
                    placeholder="Mobile Phone Number"
                    required
                  />
                  <Input
                    type={"text"}
                    variant="flushed"
                    placeholder="Company Name"
                    required
                  />
                </Stack>
                <Stack mt={5} spacing={4}>
                  <Button
                    rightIcon={<MdOutlineMail fontSize={18} />}
                    colorScheme="whatsapp"
                    variant="outline"
                  >
                    Submit
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </div>
          <div className="contact__map">
            <Map />
            <div className="contact__details">
              <div className="phone">
                <TbPhoneCall fontSize={35} /> <span>+34642583766</span>
              </div>
              <div className="email">
                <MdEmail fontSize={35} /> <span>info@finbarn.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
