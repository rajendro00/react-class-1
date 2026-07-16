// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Hero1 from "../assets/image/slick_img/Illustration1.png";
import Hero2 from "../assets/image/slick_img/Illustration2.png";
import Hero3 from "../assets/image/slick_img/Illustration3.png";

const slides = [
  {
    id: 1,
    title: "Lessons and insights",
    highlight: "from 8 years",
    desc: "Where to grow your business as a photographer: site or social media?",
    image: Hero1,
  },
  {
    id: 2,
    title: "Grow your business",
    highlight: "with Nexcent",
    desc: "Powerful community management software.",
    image: Hero2,
  },
  {
    id: 3,
    title: "Build your community",
    highlight: "easily",
    desc: "Everything you need in one place.",
    image: Hero3,
  },
];


export default function Hero(){
  return(
    <section className="bg-[#F5F7FA]">
      <div className="mx-auto max-w-[1152px] py-24">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {slides.map(slide => (
            <SwiperSlide key={slide.id}>
              <div className="flex items-center justify-between">

                {/* left */}
                <div className="max-w-[657px]">
                  <h1 className="text-6xl font-semibold leading-tight text-[#4D4D4D]">
                    {slide.title}
                    <br />
                    <span className="text-[#4CAF4F]">
                      {slide.highlight}
                    </span>
                  </h1>

                  <p className="mt-4 text-[#717171]">
                    {slide.desc}
                  </p>

                  <button className="mt-8 rounded bg-[#4CAF4F] px-8 py-3 text-white hover:bg-green-600">
                    Register
                  </button>
                </div>

                {/* right */}
                <div>
                  <img
                    src={slide.image}
                    alt=""
                    className="w-[390px]"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

