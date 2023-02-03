import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "swiper/css/bundle";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <ScrollTop>
          <App />
        </ScrollTop>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
