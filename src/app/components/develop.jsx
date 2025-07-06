"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Develop() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animation will happen only once
    });
  }, []);

  return (
    <div className=" mx-auto ">
      <main className="mt-8">
        {/* Desktop Image - visible on medium screens and up */}
        <div className="hidden md:block" data-aos="fade-up">
          <Image
            src="/assets/develop.svg"
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
            src="/assets/develop-mobile.svg"
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

export default Develop;
