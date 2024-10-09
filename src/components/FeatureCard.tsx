interface CardData {
  img: string;
  title: string;
  desc: string;
}

const FeatureCard = ({ img, title, desc }: CardData) => {
  return (
    <div className="h-60 w-full md:w-72 max-md:w-[16rem] max-md:h-[16rem] rounded-2xl border border-neutral-700 ">
      <div className="w-full p-4 pt-6 flex md:justify-start items-center max-sm:justify-center">
        <img className="h-10" src={img} alt="img" />
      </div>

      <h1 className="text-xl px-3 max-sm:text-center">{title}</h1>
      <p className="font-light text-sm text-neutral-500 p-3 max-sm:pt-6 max-sm:text-center">
        {desc}
      </p>
    </div>
  );
};

export default FeatureCard;
