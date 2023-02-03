import React from "react";
import "./description.css";
import image1 from "../../Assets/Cocoa/cocoa seed1.webp";
import image2 from "../../Assets/Cocoa/Cocoa seed.webp";
import image3 from "../../Assets/Cocoa/cocoa seed2.jpeg";
import image4 from "../../Assets/Cocoa/cocoa seed3.jpeg";
import image5 from "../../Assets/Cocoa/cocoa seed4.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";

const Cocoa = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products", { replace: true });
  };
  return (
    <React.Fragment>
      <div className="description">
        <div className="description__content">
          <Stack direction="row" spacing={4}>
            <Button
              leftIcon={<BiArrowBack />}
              colorScheme="whatsapp"
              variant="solid"
              onClick={handleClick}
            >
              Back to Shop
            </Button>
          </Stack>
          <div className="description__head">
            <h2>Cocoa</h2>
          </div>
          <div className="description__flex">
            <div className="description__image">
              <img src={image1} alt="" />
            </div>
            <div className="description__text">
              <p>
                Cocoa beans are known to have more than 300 healthful compounds.
                Some of these include, phenylethylamine, theobromine, and many
                polyphenols, like flavonoids. Cocoa beans also contain many
                vitamins and minerals as well as healthy doses of potassium and
                copper, which support cardiovascular health, and iron, which
                transports oxygen through the body. Calcium and magnesium is
                also found in cocoa beans, which are necessary in order for all
                the major organs to function properly.
              </p>
              <p>
                <h5 style={{ fontSize: "25px" }}>Chocolate Today</h5>
                From German chocolate cake to Swiss cocoa, today, people around
                the world enjoy chocolate in thousands of different forms,
                consuming more than 3 million tons of cocoa beans annually.
                Throughout its evolution, one thing has remained
                constant—chocolate has never lacked an avid following of people
                who love the “food of the gods.”
              </p>
              <p>
                The work of the World Cocoa Foundation and its partners help to
                ensure that this valuable crop is sustained and enjoyed for many
                generations to come.
              </p>
            </div>
          </div>
          <div className="description__swipper">
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                400: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="doc">
                  <img src={image2} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="doc">
                  <img src={image3} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="doc">
                  <img src={image4} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="doc">
                  <img src={image5} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <Stack direction="row" spacing={4}>
            <Button
              leftIcon={<BiArrowBack />}
              colorScheme="whatsapp"
              variant="solid"
              onClick={handleClick}
            >
              Back to Shop
            </Button>
          </Stack>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cocoa;
