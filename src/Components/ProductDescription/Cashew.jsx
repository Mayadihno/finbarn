import React from "react";
import "./description.css";
import { BiArrowBack } from "react-icons/bi";
import image1 from "../../Assets/cashew/cashew Kernel1.jpeg";
import image2 from "../../Assets/cashew/cashew kernel 4.jpeg";
import image3 from "../../Assets/cashew/Cashew kernel.jpeg";
import image4 from "../../Assets/cashew/cashew kernel3.webp";
import image5 from "../../Assets/cashew/cashewkernel2.webp";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";
import { Button, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Cashew = () => {
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
            <h2>Cashew kernel</h2>
          </div>
          <div className="description__flex">
            <div className="description__image">
              <img src={image1} alt="" />
            </div>
            <div className="description__text">
              <p>
                Cashew nut contains 16.9 per cent of fat, 22.3 per cent of
                carbohydrate and 21.2% protein. It also contains calcium, iron,
                vitamin B12, and vitamin C and stands nutritionally at par with
                milk, eggs and meat. Besides being a good appetiser and an
                excellent nerve tonic it is a steady stimulant used for
                manufacturing wine.
              </p>
              <p>
                Cashew requires average temperature between 16°C and 25°C and
                average annual rainfall between 50 cm to 400 cm. It grows well
                on poor and rocky soils. Cashew is grown on late rite (west
                coast), and sandy soils (east coast). The fruits ripen from
                March to May. Plants generally start yielding fruits after 3
                years and the average yield is 865 kg. Of raw cashew per hectare
                per year.
              </p>
              <p>
                The cashew kernel is extracted from the nut by roasting,
                shelling and peeling. The oil substance is oozing out from the
                hard outer coat if the nut is used for making paints and
                varnishes. Similarly juice from the cashew apple is used for the
                manufacture of syrup, squash, jam and wines.
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
          <Stack direction="row" spacing={4} mb={5}>
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

export default Cashew;
