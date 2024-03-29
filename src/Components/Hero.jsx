import React from "react";
import Button from "./Button";
import "@dotlottie/player-component";

const Hero = () => {
  return (
    <div className="container mx-4 lg:mx-12 lg:pt-20 py-10 grid lg:grid-cols-2 gap-16">
      <div className="flex flex-col gap-6">
        <div className="rounded-full bg-blue-300 lg:pl-8 py-2 px-3 lg:w-8/12 w-[320px] md:w-2/5">
          <p className="text-xs lg:text-sm text-gray-900">
            The safest and reliable Africa payment platform
          </p>
        </div>
        <h2 className="lg:text-6xl text-3xl leading-10 mb-3  md:text-5xl font-bold text-slate-200">
          Cabash Exchange is a Pan-African payment platform
        </h2>
        <div>
          <h4 className="text-sm text-slate-400 lg:pr-20 mb-4">
            for a fast, ,safe and convenient means for individuals and
            businesses to send and receive money across Africa and in their
            favourite currencies.
          </h4>
          <p className="text-md text-orange-400 font-medium">
            Convert your currency with ease
          </p>
        </div>
        <div>
          <Button text="Get Started" variant="primary" to="/SignUpForm" />
        </div>
      </div>
      <div className="mt-[-40px] lg:w-full w-80">
        <script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        ></script>

        <dotlottie-player
          src="https://lottie.host/4219203f-97b7-4049-bd65-e86bad112b55/IWERikJC4r.json"
          background="transparent"
          speed="1"
          style={{ height: "auto", width: "100%" }}
          class="w-full"
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </div>
  );
};

export default Hero;
