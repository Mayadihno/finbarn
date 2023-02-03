import React from "react";
import "./description.css";
import image1 from "../../Assets/Other-product/ginger.jpeg";
import image2 from "../../Assets/Other-product/ginger.jpeg";
import image3 from "../../Assets/Other-product/ginger.jpeg";
import image4 from "../../Assets/Other-product/ginger.jpeg";
import image5 from "../../Assets/Other-product/ginger.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Button, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

// import required modules
import { Autoplay } from "swiper";

const Ginger = () => {
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
            <h2>Ginger</h2>
          </div>
          <div className="description__flex">
            <div className="description__image">
              <img src={image1} alt="" />
            </div>
            <div className="description__text">
              <p>
                Ginger has been shown to improve blood pressure (in conjunction
                with medication) by acting as a vasodilator—it expands your
                blood vessels. This is helpful for increasing circulation in the
                body, which reduces the overall blood pressure throughout the
                body. Ginger also contains potassium, a mineral that studies
                have shown that can help lower blood pressure. According to the
                United States Department of Agriculture (USDA), ginger contains
                415 mg of potassium per 100 g. That’s more than a banana (a food
                known for being high in potassium), which only contains 358 mg
                pser 100 g.
              </p>
              <p>
                Ginger supports digestive health. Functional dyspepsia is the
                clinical term used to describe upper abdominal discomfort like
                acid reflux that is thought to be related to slowing of the
                digestive system. Ginger has been shown to remedy this
                situation.
              </p>
              <p>
                Ginger helps increase the body’s ability to empty food from the
                stomach more quickly, with this increased motility in the
                digestive system, it’s less likely that heartburn or indigestion
                will occur.
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

export default Ginger;
