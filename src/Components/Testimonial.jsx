import React, { useState } from "react";

const Testimonial = () => {
  const [testimonialActive, setTestimonialActive] = useState(2);

  const handlePrevTestimonial = () => {
    setTestimonialActive((prev) => (prev === 1 ? 3 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setTestimonialActive((prev) => (prev >= 3 ? 1 : prev + 1));
  };

  return (
    <div className="lg:py-20 py-10  container mx-auto flex flex-col md:flex-row shadow-sm overflow-hidden">
      <div className="relative w-full py-2 md:py-24 bg-slate-800 md:w-1/2 flex flex-col items-center justify-center">
        <div className="absolute top-0 left-0 z-10 grid-indigo w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24"></div>
        <div className="relative text-2xl lg:text-5xl py-2 px-6 md:py-6 md:px-1 md:w-64 md:mx-auto text-slate-100 font-semibold leading-16 tracking-10 mb-0 z-20 text-center">
          <span className="md:block pb-1">What Our</span>
          <span className="md:block pb-1">Customers</span>
          <span className="block">Are Saying!</span>
        </div>
        <div className="absolute right-0 bottom-0 mr-4 mb-4 hidden md:block">
          <button
            onClick={handlePrevTestimonial}
            className="rounded-l-full border-r bg-slate-300 text-gray-700 focus:outline-none hover:text-indigo-500 font-bold w-12 h-10"
          >
            &#8592;
          </button>
          <button
            onClick={handleNextTestimonial}
            className="rounded-r-full bg-slate-300 text-gray-700 focus:outline-none hover:text-indigo-500 font-bold w-12 h-10"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="bg-slate-950 md:w-1/2">
        <div className="flex flex-col h-full relative">
          <div className="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-orange-100 fill-current w-12 h-12 md:w-16 md:h-16"
              viewBox="0 0 24 24"
            >
              <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
            </svg>
          </div>

          <div className="h-full relative z-10">
            <div
              style={{ display: testimonialActive === 1 ? "block" : "none" }}
            >
              <p className="text-slate-500 serif font-normal italic px-6 py-6 lg:px-20 lg:pt-20 text-xl md:text-xl text-center">
                Thrilled with the exceptional features and robust security of
                this payment gateway! The commitment to innovation and a
                seamless user experience is impressive. With such dedication,
                I'm confident it will soon compete with industry leaders. Cheers
                to an outstanding journey ahead!
              </p>
            </div>
            <div
              style={{ display: testimonialActive === 2 ? "block" : "none" }}
            >
              <p className="text-slate-500 serif font-normal italic px-6 py-6 lg:px-20 lg:pt-20 text-xl md:text-xl text-center">
                One of the best money transfering plaform, period! We used
                SwiftWave for our business and our customers are using it
                everyday and haven’t faced any problems so far. Besides, the
                techvillage team is pretty talented.
              </p>
            </div>
            <div
              style={{ display: testimonialActive === 3 ? "block" : "none" }}
            >
              <p className="text-slate-500 serif font-normal italic px-6 py-6 lg:px-20 lg:pt-20 text-xl md:text-xl text-center">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat
              </p>
            </div>
          </div>

          <div className="flex my-4 justify-center items-center">
            <button
              onClick={() => setTestimonialActive(1)}
              className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline inline-block rounded-full mx-2 ${
                testimonialActive !== 1
                  ? "h-12 w-12 opacity-25 bg-violet-100 text-gray-900"
                  : "h-16 w-16 opacity-100 bg-violet-700 text-white"
              }`}
            >
              RG
            </button>
            <button
              onClick={() => setTestimonialActive(2)}
              className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-16 w-16 inline-block bg-violet-600 rounded-full mx-2 ${
                testimonialActive !== 2
                  ? "h-12 w-12 opacity-25 bg-violet-100 text-gray-900"
                  : "h-16 w-16 opacity-100 bg-violet-600 text-white"
              }`}
            >
              MC
            </button>
            <button
              onClick={() => setTestimonialActive(3)}
              className={`text-center font-bold shadow-xs  focus:outline-none focus:shadow-outline h-12 w-12 inline-block bg-indigo-600 rounded-full mx-2 ${
                testimonialActive !== 3
                  ? "h-12 w-12 opacity-25 bg-violet-300 text-gray-900"
                  : "h-16 w-16 opacity-100 bg-violet-600 text-white"
              }`}
            >
              MB
            </button>
          </div>

          <div className="flex justify-center px-6 pt-2 pb-6 md:py-6">
            <div
              style={{ display: testimonialActive === 1 ? "block" : "none" }}
              className="text-center"
            >
              <h2 className="text-sm md:text-base font-bold text-slate-300 leading-tight">
                Ronne Galle
              </h2>
              <small className="text-slate-500 text-xs md:text-sm truncate">
                CEO, Baribazaar.com
              </small>
            </div>
            <div
              style={{ display: testimonialActive === 2 ? "block" : "none" }}
              className="text-center"
            >
              <h2 className="text-sm md:text-base font-bold text-slate-300 leading-tight">
                Mike Cakuloo
              </h2>
              <small className="text-slate-400 text-xs md:text-sm truncate">
                Technical Lead, Cuber Drive.
              </small>
            </div>
            <div
              style={{ display: testimonialActive === 3 ? "block" : "none" }}
              className="text-center"
            >
              <h2 className="text-sm md:text-base font-bold text-slate-300 leading-tight">
                Martha Brown
              </h2>
              <small className="text-slate-400 text-xs md:text-sm truncate">
                Product Manager.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
