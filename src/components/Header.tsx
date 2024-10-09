import { RiBarChartFill } from "@remixicon/react";

const Header = () => {
  return (
    <div className="flex justify-center mt-2">
      <header className="fixed w-full md:w-9/12 bg-gray-300 bg-opacity-5 rounded-full ">
        <main className="px-4 py-4 flex justify-between items-center">
          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <RiBarChartFill size={32} color="white" />
            <h1 className="font-medium text-xl">Chord</h1>
          </div>
          <nav className="max-sm:hidden  flex flex-1 justify-center gap-3 xl:gap-10 text-sm  font-light text-neutral-300">
            <ul className="hover:text-white transition-all cursor-pointer">
              Features
            </ul>
            <ul className="hover:text-white transition-all cursor-pointer">
              Resources
            </ul>
            <ul className="hover:text-white transition-all cursor-pointer">
              Company
            </ul>
          </nav>
          <div className="flex gap-3 max-sm:gap-1">
            <button className="text-sm max-sm:text-xs">Login</button>
            <button className="text-black text-sm max-sm:text-xs bg-[#ff33ff] px-3 py-1.5 rounded-full">
              Book a Demo
            </button>
          </div>
        </main>
      </header>
    </div>
  );
};

export default Header;
