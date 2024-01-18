import React from "react";
import Button from "./Button";
import Card from "./Card";

const About = () => {
  const aboutContent = [
    {
      icon: "audience",
      title: "WIDER COVERAGE",
      content:
        "Seamlessly send and receive borderless payments across major countries in Africa. Our payment platform connects you with 7 African countries and currencies at the click of a button.",
    },
    {
      icon: "pricing",
      title: "COMPETITIVE PRICING",
      content:
        " We offer competitive pricing to help you save money on cross-border transactions. So say no to cut-throat charges and high exchange rates when you use cabash.",
    },
    {
      icon: "secure",
      title: "SECURE AND TRUSTED ",
      content:
        "Thanks to our bank-level encryption, you can send and receive money on cabash without fear. The multi-factor authentication to enjoy an extra level of security and control of your funds and data.",
    },
    {
      icon: "constant",
      title: "24/7 ACCESS",
      content: "Whether you want to transfer money online or send money to your family and friends, Our services are available 24 hours a day, seven days a week, to keep you covered.",
    },
  ];

  return (
    <div className="lg:mx-10 mx-4 lg:grid lg:grid-cols-5 lg:gap-24 lg:py-20 py-10">
      <div className="col-span-2 flex justify-center items-center">
        <div className="flex flex-col gap-2 lg:gap-4 lg:mb-0 mb-8">
          <p className="text-lg text-orange-400 font-medium">WHAT YOU GET</p>
          <h2 className="lg:text-4xl text-2xl font-bold text-gray-300">
            All Around
            <br /> Payment Solutions
          </h2>
          <div className="border-t-2 border-violet-700 w-1/3"></div>
          <h3 className="text-lg font-medium text-gray-400 ">
            the secure, easiest and fastest money transfer.
          </h3>
          <p className="text-[15px] text-gray-400 mb-4">
            send, receive, deposit, request, invest, and exchange money globally
            in multiple currencies easily, quickly with great rates and low
            fees.
          </p>
          <div>
            <Button text="Get Started" variant="primary" />
          </div>
        </div>
      </div>
      <div className="col-span-3 lg:grid grid-cols-2 gap-8">
        {aboutContent.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default About;
