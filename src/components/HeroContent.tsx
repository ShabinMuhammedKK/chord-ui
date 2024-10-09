import { RiArrowRightUpLine, RiArrowDownLine } from "@remixicon/react";
import imgageGraph from "/assets/Screenshot from 2024-10-08 09-12-31.png";
import imageCurve from "/assets/Screenshot from 2024-10-07 23-08-13.png";
import imageBlock from "/assets/Screenshot from 2024-10-08 08-49-32.png";

const HeroContent = () => {
  return (
    <div className="flex z-20 flex-row max-md:flex-col justify-center items-start h-full w-[70vw] max-md:pt-36">
      <section className="h-full w-1/2 flex flex-col justify-start items-start max-md:w-full max-md:items-center max-md:justify-center">
        <h1 className="text-5xl font-normal leading-snug max-md:text-center max-md:text-4xl max-md:leading-snug">
          Take control of your commerce data and drive revenue
        </h1>
        <p className="pt-8 max-w-[80%] font-normal text-sm max-md:text-center max-md:pt-4">
          Chord unlocks unified and AI-ready commerce data so brands can take
          command,drive redical decisions, and maximize growth
        </p>
        <button className="mt-5 text-black bg-[#ff33ff] p-3 flex rounded-full">
          Book a Demo{" "}
          <span>
            {" "}
            <RiArrowRightUpLine />
          </span>
        </button>
      </section>
      <section className="h-full w-1/2 flex gap-4 xl:px-[5%] max-md:mt-10 max-md:w-full">
        <div className="w-1/2 flex justify-center flex-col gap-4 max-md:h-[400px]">
          <div className="w-full h-3/4 border border-neutral-700 p-1 rounded-2xl  max-md:h-3/6">
            <video
              className="w-full h-[100%] object-cover rounded-xl"
              autoPlay
              muted
              loop
            >
              <source
                src="assets/3129595-uhd_3840_2160_30fps.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="w-full h-1/4 bg-neutral-950 border border-neutral-700 p-4 rounded-2xl max-md:h-1/6">
            <div
              className="flex justify-between w-full h-full object-cover object-center"
              style={{ backgroundImage: `url(${imgageGraph})` }}
            >
              <p className="text-sm">CAC by Quarter</p>
              <RiArrowDownLine />
            </div>
          </div>
        </div>
        <div className="w-1/2 flex bg-neutral-950 justify-center flex-col gap-4 max-md:mt-14">
          <div className="w-full h-2/4 border border-neutral-700 p-4 rounded-2xl">
            <div
              className="flex justify-between w-[90%] h-full object-cover object-right-bottom"
              style={{ backgroundImage: `url(${imageBlock})` }}
            >
              <p className="text-sm">LTV</p>
              <p className="text-green-500">+28%</p>
            </div>
          </div>
          <div className="w-full h-2/4 bg-neutral-950 border border-neutral-700 p-4 rounded-2xl">
            <div
              className="flex justify-between w-full h-full object-cover "
              style={{ backgroundImage: `url(${imageCurve})` }}
            >
              <div>
                <p className="text-sm">Revenue</p>
                <h1 className="">$1,250,460</h1>
              </div>
              <div>
                <p className="text-green-500">+268%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroContent;
