import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import SwiperCore, { EffectCreative, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-creative';
import Hero from './Hero';
import Hero2 from './Hero2';

SwiperCore.use([EffectCreative, Autoplay]);

const HeroContainer = () => {
  return (
    <section className=''>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        className='mySwiper5'
        loop={true}
        autoplay={{
          delay: 3000, // Change delay to 3000 milliseconds (3 seconds)
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Hero />
        </SwiperSlide>
        <SwiperSlide>
          <Hero2 />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroContainer;
