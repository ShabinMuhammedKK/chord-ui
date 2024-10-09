import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import BrandItems from "./BrandItems";

const Brands = () => {
  useGSAP(() => {
    const container = document.querySelector<HTMLElement>(".scroll-container");
    const elements = gsap.utils.toArray(".scroll-item"); 

    if (container && elements.length > 0) {
      const totalWidth = container.scrollWidth;

      gsap.to(elements, {
        x: -container.scrollWidth,
        duration: 20,
        ease:"none",
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % totalWidth}px`,
        },
      });
    }
  }, []);

  return (
    <section className="scroll-container max-sm:pt-32 h-[16vh] w-full flex  items-center overflow-x-hidden">
      <BrandItems imgStr="/assets/655c8df46f05caded08e715f_omorpho-logo-white.svg" />
      <BrandItems imgStr="/assets/655c8df4d420afca151b85bf_caraway-logo-white.svg" />
      <BrandItems imgStr="/assets/655c8df4de5826ea705fa03a_Itsaugust-logo-white.svg" />
      <BrandItems imgStr="/assets/6569fc97708a18de8de59ed9_Thesis-logo-white.svg" />
      <BrandItems imgStr="/assets/6577455d334008035811f654_Goodles-logo-white.svg" />
      <BrandItems imgStr="/assets/6577455d3fd3ecaa9b09a8aa_CatchCo-logo-white.svg" />
      <BrandItems imgStr="/assets/65b91a4e3b2369397ffdad7e_Sakara-logo-white.svg" />
      <BrandItems imgStr="/assets/66f401003b5b094385e7dbcb_Ruggable-logo-white.svg" />
    </section>
  );
};

export default Brands;
