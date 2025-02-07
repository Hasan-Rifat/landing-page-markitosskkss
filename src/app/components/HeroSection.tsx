import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-green-50">
      {/* <AnimatedBackground /> */}

      <div className="container mx-auto px-4 py-12 text-center relative z-10">
        {/*  <div className="flex justify-end mb-8">
          <button className="bg-blue-500 text-white hover:bg-blue-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-300/50">
            Join the Wizards
          </button>
        </div> */}

        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-orange-400 animate-gradient">
            FIRST DATA-DRIVEN POWERED BY AI MARKETING AGENCY
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700">
            JOIN THE DATA REVOLUTION
          </h2>

          <p className="text-white max-w-3xl mx-auto text-lg leading-relaxed">
            Dive into the heart of your audience&apos;s sentiment and unlock
            powerful, data-driven actions. Together with our team of
            specialists, backed by many years of expertise, we use cutting-edge
            tools to transform complex audience insights into clear strategies
            helping you connect, engage, and grow like never before.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
