import {
  Button,
  Card,
  CardBody,
  Input,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Map from "../Map/Map";
import { MdOutlineMail, MdEmail } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import "./Contact.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const toast = useToast();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nc0hxoq", // Your EmailJS service ID
        "service_paebkvm", // Your EmailJS template ID
        e.target, // The form element
        "V_D-ZcbBm9c9jNmYN" // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);

          toast({
            title: "Form submitted!",
            description: "We’ve received your message.",
            status: "success",
            duration: 4000,
            isClosable: true,
          });

          // Reset form state and form fields
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            message: "",
          });
          e.target.reset();
        },
        (error) => {
          console.error("Email sending failed:", error.text);

          toast({
            title: "Submission failed!",
            description: "Something went wrong. Please try again later.",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        }
      );
  };

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
            <form onSubmit={handleSubmit}>
              <Card maxW="md" shadow="lg" className="card">
                <CardBody>
                  <Stack spacing={5}>
                    <Input
                      name="firstName"
                      type="text"
                      variant="flushed"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      name="lastName"
                      type="text"
                      variant="flushed"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      name="email"
                      type="email"
                      variant="flushed"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      name="phone"
                      type="tel"
                      variant="flushed"
                      placeholder="Mobile Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      name="company"
                      type="text"
                      variant="flushed"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                    <Textarea
                      name="message"
                      variant="flushed"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Stack>
                  <Stack mt={5} spacing={4}>
                    <Button
                      type="submit"
                      rightIcon={<MdOutlineMail fontSize={18} />}
                      colorScheme="whatsapp"
                      variant="outline"
                    >
                      Submit
                    </Button>
                  </Stack>
                </CardBody>
              </Card>
            </form>
          </div>
          <div className="contact__map">
            <Map />
            <div className="contact__details">
              <div className="phone">
                <TbPhoneCall fontSize={35} /> <span>+34642509763</span>
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
