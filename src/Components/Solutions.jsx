import React from 'react'
import Card from './Card';

const Solutions = () => {
    const solContent = [
      {
        icon: "crypto",
        title: "Crypto Payment",
        content:
          "A powerful solution that allows your customers to make payment using crypto coins including Bitcoin, Litecoin, Dogecoin and many more.",
          isColumnLayout: "true",
        },
        {
            icon: "mobile",
            title: "Mobile Recharge",
            content:
            "Easily top-up airtime and data on the worlds leading mobile operators and makes payments using any of their wallets on the system.",
            isColumnLayout: "true",
        },
        {
            icon: "mangt",
            title: "Event Management",
            content:
            "Do not hesitate to compete with a lot of events. A beautiful and easily trackable event management is provided for making your tasks get done easier.",
            isColumnLayout: "true",
      },
    ];
  return (
    <div className="lg:mx-64 mx-4 lg:py-20 py-10">
      <div className="text-center">
        <p className="text-lg text-orange-500 font-medium">Solutions </p>
        <h2 className="lg:text-3xl text-xl font-bold lg:leading-tight text-slate-900">
          SERVICES WE PROVIDE
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 lg:gap-8 lg:mt-10 mt-4">
        {solContent.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Solutions
