import {
  RiArrowRightUpLine,
  RiGithubFill,
  RiLinkedinBoxLine,
} from "@remixicon/react";

const Footer = () => {
  return (
    <div className="md:h-32 border-t flex justify-around items-center border-neutral-700 max-sm:h-20 sm:h-20 mt-16 w-full">
      <div>
        <div className="flex h-full justify-center items-center gap-3">
          <h1 className="text-xs max-sm:font-light sm:font-light">
            © 2024 Chord
          </h1>
          <p className="text-xs max-sm:font-thin sm:font-thin max-md:hidden">
            Terms of Service
          </p>
          <p className="text-xs max-sm:font-thin sm:font-thin max-md:hidden">
            Data Processing Addendum
          </p>
          <p className="text-xs max-sm:font-thin sm:font-thin max-md:hidden">
            Privacy Policy
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 xl:gap-8">
        <a href="https://github.com/ShabinMuhammedKK/chord-ui" target="_blank">
        <div className="flex text-xs justify-center items-center font-thin">
          <RiGithubFill className="text-neutral-400"/>
          <span className="pl-1">Github</span>{" "}
          <RiArrowRightUpLine className="w-5 text-neutral-400" />
        </div>
        </a>
        <a href="https://www.linkedin.com/in/shabin-muhammed-kk-1b119a294/" target="_blank">
        <div className="flex text-xs justify-center items-center font-thin">
          <RiLinkedinBoxLine className="text-neutral-400" />
          <span className="pl-1">LinkedIn</span>{" "}
          <RiArrowRightUpLine className="w-5 text-neutral-400" />
        </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
