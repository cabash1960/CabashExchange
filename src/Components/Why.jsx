// Why.jsx
import React from "react";
import Card from "./Card";

const Why = () => {
  const whyContent = [
    {
      icon: "pricing",
      title: "Low Cost",
      content:
        "A built-in system with the lowest possible cost that energizes customers to grab it.",
    },
    {
      icon: "process",
      title: "Easy Process",
      content:
        "Easily processable and maintainable system that allows you to process and track records.",
    },
    {
      icon: "fast",
      title: "Faster Payments",
      content:
        "Make payments from one corner of the world to another in just a few seconds. Making payments is very easy and fast.",
    },
    {
      icon: "secure",
      title: "Secure & Safe",
      content:
        "Customer data security is the first priority. Make your transactions safe, sound, and secure.",
    },
  ];

  return (
    <div className="lg:mx-40 mx-4 lg:py-20 py-10">
      <div className="text-center">
        <p className="text-lg text-orange-500 font-medium">Our Benefits</p>
        <h2 className="lg:text-3xl text-xl font-bold lg:leading-tight text-slate-900">
          REASONS TO CHOOSE US
        </h2>
      </div>

      <div className="grid lg:grid-cols-4 gap-4 lg:gap-8 lg:mt-10 mt-4">
        {whyContent.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Why;
