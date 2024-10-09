import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="flex flex-col w-full items-center ">
      <div className="flex flex-col md:w-[60vw] max-sm:px-10 sm:w-[100vw] justify-center items-center h-[20vh]">
        <h1 className="uppercase font-bold text-[#f52ff5]">features</h1>
        <h1 className="text-4xl text-center leading-10 md:mt-10 mt-4">
          Harness the full potential of your data with Chord
        </h1>
        <p className="md:mt-10 mt-4 text-center font-light text-neutral-400 ">
          Dive into a seamless integration of commerce intelligence and unified
          data, all within a single platform. Our state-of-the-art CDP, coupled
          with advanced analytics, empowers you with…
        </p>
      </div>
      <div className="h-fit w-full mt-4 md:mt-10 mb-4 flex justify-center">
        <div className="grid grid-cols-3 grid-rows-2 mt-10 max-md:grid-cols-1 max-md:grid-rows-6 gap-4 p-4">
          <FeatureCard
            img="/assets/6564e2c76b65ef6388d3bc7b_Advanced-Analytics.svg"
            title="AI-Powered Personal Insights"
            desc="Dive deep into individualized data points, unveiling patterns and behaviors unique to each customer segment."
          />
          <FeatureCard
            img="/assets/6564e2c72506bf696ee2c02e_Auto-Grouping.svg"
            title="Automated Marketing Grouping"
            desc="Intelligent algorithms segment your audience for precision targeting."
          />
          <FeatureCard
            img="/assets/6564e2c8f2e1b6501aadf95a_Optimized-Product-Affinities.svg"
            title="Optimized Product Affinities"
            desc="Elevate your product strategy with smart recommendations, driven by genuine user preferences."
          />
          <FeatureCard
            img="/assets/6564e2c783fc53131dde42a4_Customer-Likeness-1.svg"
            title="Discover & Engage Likeness"
            desc="Identify and connect with potential customers mirroring your existing loyal base."
          />
          <FeatureCard
            img="/assets/6564e2c74f64a387443d4a48_Predictive-Revenue-1.svg"
            title="Revenue Projections"
            desc="Anticipate the customer lifecycle, understanding value and forecasting potential."
          />
          <FeatureCard
            img="/assets/6564e2c73b03ccfcdb267174_Integrations-2.svg"
            title="Integrations"
            desc="Seamless connectivity: unifying your favorite tools with Chord"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
