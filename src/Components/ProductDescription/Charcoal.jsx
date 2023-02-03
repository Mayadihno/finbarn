import React from "react";
import "./description.css";
import image1 from "../../Assets/Charcoal/charcoal6.jpg";
import image2 from "../../Assets/Charcoal/charcoal1.jpg";
import image3 from "../../Assets/Charcoal/charcoal2.jpg";
import image4 from "../../Assets/Charcoal/charcoal3.jpg";
import image5 from "../../Assets/Charcoal/charcoal4.jpg";
import image6 from "../../Assets/Charcoal/charcoal5.jpg";
import image7 from "../../Assets/Charcoal/charcoal7.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

// import required modules
import { Autoplay } from "swiper";
import { Button, Stack } from "@chakra-ui/react";

const Charcoal = () => {
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
            <h2>Hardwood Charcoal</h2>
          </div>
          <div className="description__flex">
            <div className="description__image">
              <img src={image1} alt="" />
            </div>
            <div className="description__text">
              <p>
                Hardwood Charcoal. Charcoal is a lightweight, black residue,
                consisting of carbon and any remaining ash, obtained by removing
                water and other volatile constituents from animal and vegetation
                substances. Charcoal is usually produced by slow pyrolysis, the
                heating of wood or other substances in the absence of oxygen .
              </p>
              <p>
                Today, the process of making lump charcoal typically begins by
                stacking wood logs in underground pits and covering them with
                sheet metal and dirt. The logs are lit at one end of the pile
                and the wood smolders for a few days. During this time, the
                oxygen-starved fire burns off water, sap and other volatile
                substances in the wood. What&#39;s left is almost pure carbon,
                also known as char or lump charcoal.
              </p>
              <p>
                Grilling over a lump charcoal fire is a dynamic experience. Lump
                charcoal gets broiling hot pretty quickly, usually in 10 or 15
                minutes. Its intense heat can sear food in seconds, browning the
                surface and scenting it with pure wood smoke aromas. In many
                cases the smokiness emanates from one kind of wood only, such as
                mesquite or oak. Quite often though, a bag of lump charcoal will
                hold a mix of hardwoods, including oak, hickory, maple, Ayin
                etc.
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
              <SwiperSlide>
                <div className="doc">
                  <img src={image6} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="doc">
                  <img src={image7} alt="" />
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

export default Charcoal;
