"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animation will happen only once
    });
  }, []);

  return (
    <div className=" mx-auto mb-6 ">
      <main className="">
        {/* Desktop Image - visible on medium screens and up */}
        <div className="hidden md:block" data-aos="fade-up">
          <Image
            src="/assets/hero.png"
            alt="Problem Definition"
            width={1440}
            height={600}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Mobile Image - visible on small screens only */}
        <div className="block md:hidden" data-aos="fade-up">
          <Image
            src="/assets/hero-image.png"
            alt="Problem Definition"
            width={1440}
            height={600}
            priority
            className="w-full h-auto"
          />
        </div>
      </main>
    </div>
  );
}

export default Hero;
