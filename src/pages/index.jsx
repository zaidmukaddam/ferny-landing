import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Footer from "../components/core/Footer";
import Navbar from "../components/core/Navbar";
import Feature from "../components/index/Feature";
import FeatureSquare from "../components/index/FeatureSquare";

const Index = (props) => {
  const featureSquareList = [
    {
      icon: "fas fa-lock",
      label: "Secure",
      description:
        "Ferny uses modern technology and is 100% opensource. You know exactly what is going on behind the scenes.",
      className: "rounded-t-md md:rounded-t-none md:rounded-tl-md",
    },
    {
      icon: "fas fa-bolt",
      label: "Efficient",
      description:
        "Ferny uses significantly less memory and CPU compared to other leading web browsers like Chrome and Edge.",
      className: "md:rounded-tr-md lg:rounded-tr-none",
    },
    {
      icon: "fas fa-sparkles",
      label: "Intuitive",
      description:
        "Ferny is fully keyboard navigationable. You can also create group tabs.",
      className: "lg:rounded-tr-md",
    },
    {
      icon: "fas fa-badge-dollar",
      label: "Freemium",
      description:
        "Ferny is completely free to use, with no ads or interruptions! We also plan on adding a premium subscription.",
      className: "lg:rounded-bl-md",
    },
    {
      icon: "fas fa-code-branch",
      label: "Opensource",
      description:
        "Ferny is completely opensource. Anyone can contribute and add features they would like to see in their browser.",
      className: "md:rounded-bl-md lg:rounded-bl-none",
    },
    {
      icon: "fas fa-box-full",
      label: "Powerful",
      description:
        "Packed with features, Ferny is constantly updated to make your development process more productive!",
      className: "rounded-b-md md:rounded-b-none md:rounded-br-md",
    },
  ];

  const featureList = [
    "integrated api client",
    "localhost -> public tunneling",
    "fully keyboard navigationable",
    "custom themes",
    "rapid responsive web development",
    "limit ram/cpu usage",
    "and more...",
  ];

  return (
    <div className="flex flex-col min-h-screen h-full bg-night-mare-2 overflow-x-hidden">
      <Navbar />
      <motion.div
        className="flex flex-col items-center justify-center py-16 md:py-32 lg:py-48 w-full bg-night-mare-2"
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            scale: 0.6,
            y: 100,
          },
          animate: {
            scale: 1,
            y: 0,
            transition: { duration: 0.4 },
          },
        }}
      >
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex flex-col items-center justify-center max-w-xs md:max-w-2xl xl:max-w-3xl space-y-4 text-center">
            <h1 className="title-shadow font-inter font-extrabold text-4xl md:text-7xl xl:text-8xl text-gray-200">
              The browser
              <br />
              for everyone
            </h1>
            <h6 className="font-inter font-medium text-lg md:text-2xl xl:text-3xl text-gray-400 tracking-[-0.01em]">
              Ferny streamlines your productivity by prioritizing
              user-friendly software. Keep scrolling 👇
            </h6>
          </div>
          <a
            href="https://forms.gle/Tx692rzdgbTNW3Lc8"
            className="waitlist-button flex flex-row items-center justify-center px-6 py-4 bg-mist-2 rounded-md transform hover:scale-[1.03] duration-700"
            target="_blank"
          >
            <h1 className="font-inter font-medium text-xl md:text-2xl text-gray-50">
              Join the waitlist <i className="far fa-external-link-alt ml-1" />
            </h1>
          </a>
        </div>
      </motion.div>
      <div className="flex flex-col items-center justify-center py-16 md:py-24 lg:py-32 w-full bg-night-mare">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {featureSquareList.map((feature, index) => (
            <FeatureSquare
              key={index}
              icon={feature.icon}
              label={feature.label}
              description={feature.description}
              className={feature.className}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center py-16 md:py-24 lg:py-32 space-y-16 lg:space-y-0 w-full bg-night-mare-2">
        {/* <img
          src="/images/steroids.svg"
          className="w-min self-start lg:self-auto w-10/12 lg:w-1/2 3xl:w-auto rounded-r-2xl"
          draggable="false"
        /> */}
        <div className="flex flex-col items-start lg:items-center justify-center w-full pl-10/12 lg:pl-0">
          <div className="flex flex-col items-start lg:items-start justify-center space-y-4 max-w-xxs md:max-w-md">
            <h1 className="font-inter font-extrabold text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl text-gray-50 tracking-tight leading-[1.1em]">
              Chrome,
              <br />
              on steroids
            </h1>
            <p className="font-inter font-medium md:text-xl xl:text-2xl 2xl:text-3xl text-gray-300">
              <span className="font-semibold text-gray-100">Light.</span>{" "}
              Doesn’t use 90% of your memory for one tab. Unless you’ve got 25mb
              of RAM.
            </p>
            <p className="font-inter font-medium tmd:ext-xl xl:text-2xl 2xl:text-3xl text-gray-300">
              <span className="font-semibold text-gray-100">Private.</span> No
              one but you and your pet cat can see your suspicious browser
              history 👀
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center py-16 md:py-24 lg:py-32 w-full bg-night-mare">
        <div className="flex flex-col items-start lg:items-center justify-center order-2 lg:order-none mt-8 lg:mt-0 pl-10/12 lg:pl-0 w-full">
          <div className="flex flex-col items-start justify-center space-y-4 max-w-xxs md:max-w-md">
            <h1 className="font-inter font-extrabold text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl text-gray-50 tracking-tight leading-[1.1em]">
              Customizable,
              <br />
              for everyone
            </h1>
            <p className="font-inter font-medium md:text-xl xl:text-2xl 2xl:text-3xl text-gray-300">
              <span className="font-semibold text-gray-100">Themes.</span>{" "}
              Personalize your browser with custom colors and icons! 🎨
            </p>
            <p className="font-inter font-medium md:text-xl xl:text-2xl 2xl:text-3xl text-gray-300">
              <span className="font-semibold text-gray-100">Share.</span> Easily
              share your favorite themes with short strings ;)
            </p>
          </div>
        </div>
        {/* <img
          src="/images/themes.svg"
          className="w-min order-1 lg:order-none self-end lg:self-auto mb-8 lg:mb-0 w-10/12 lg:w-1/2 3xl:w-auto rounded-l-2xl"
          draggable="false"
        /> */}
      </div>
      <div className="flex flex-col items-center justify-center py-16 md:py-24 lg:py-24 space-y-6 w-full bg-night-mare-2">
        <div className="flex flex-col items-center justify-center space-y-2 max-w-xxs md:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl text-center">
          <h1 className="font-inter font-extrabold text-5xl text-gray-50">
            Planned Features ;)
          </h1>
          <p className="font-inter font-medium md:text-xl text-gray-400">
            This list is an addition to the basic features you find on an
            ordinary browser! And some of these features are only concepts and
            might not ever appear in Ferny :(
          </p>
        </div>
        <div className="flex flex-row items-center justify-center flex-wrap max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-[88rem]">
          {featureList.map((feature, index) => (
            <Feature key={index} label={feature} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
