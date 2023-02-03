import React from "react";
import "./description.css";
import image1 from "../../Assets/Seasame/Black-Sesame-Seed.jpeg";
import image2 from "../../Assets/Seasame/sesame seed1.jpeg";
import image3 from "../../Assets/Seasame/sesame seed2.jpeg";
import image4 from "../../Assets/Seasame/sesame seed3.jpeg";
import image5 from "../../Assets/Seasame/sesame-seeds-.jpg";
import image6 from "../../Assets/Seasame/White Sesame seed.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";

const Seasame = () => {
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
            <h2>Sesame seed</h2>
          </div>
          <div className="description__flex">
            <div className="description__image">
              <img src={image1} alt="" />
            </div>
            <div className="description__text">
              <p>
                Sesame is a flowering plant in the genus Sesamum, also called
                benne. Numerous wild relatives occur in Africa and a smaller
                number in India. It is widely naturalized in tropical regions
                around the world and is cultivated for its edible seeds, which
                grow in pods or &quot;buns&quot;. The world harvested 4.2
                million metric tonnes of sesame seeds in 2013, with India and
                China as the largest producers.
              </p>
              <p>
                Sesame seed is one of the oldest oilseed crops known,
                domesticated well over 3000 years ago. Sesame has many species,
                most being wild and native to sub-Saharan Africa. Sesame
                indicum, the cultivated type, originated in India and is
                tolerant to drought-like conditions, growing where other crops
                fail.
              </p>
              <p>
                Sesame has one of the highest oil contents of any seed. With a
                rich, nutty flavor, it is a common ingredient in cuisines across
                the world. Like other nuts and foods, it can trigger allergic
                reactions in some people. Sometimes sold with its seed coat
                removed (decorticated), this variety is often present on top of
                baked goods in many countries.
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

export default Seasame;
