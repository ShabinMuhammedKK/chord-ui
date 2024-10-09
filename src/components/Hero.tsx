import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import HeroContent from "./HeroContent";
import Brands from "./Brands";

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useGSAP(() => {
    gsap.fromTo(
      ".blink",
      { opacity: 0, x: -160 },
      {
        opacity: 10,
        x: windowWidth,
        duration: 5,
        ease: "power4.inOut",
        repeat: -1,
        stagger: {
          each: 4,
          from: "random",
        },
      }
    );
  }, [windowWidth]);
  return (
    <div className="h-screen w-full">
      <section className="relative">
        {new Array(6).fill(null).map((_, i) => (
          <ul key={i} className="bg-neutral-800 h-px my-28 relative">
            <div className="blink absolute bg-radial-custom from-[#ff17ff98] via-[#270727] to-transparent w-32 h-1 mx-0 top-[-1px] shadow-sm border-none"></div>
          </ul>
        ))}
      </section>
      <section className="absolute top-[20%] w-full h-[50vh] flex justify-center items-center">
        <HeroContent />
      </section>
      <Brands />
    </div>
  );
};

export default Hero;
