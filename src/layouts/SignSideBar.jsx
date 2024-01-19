import React from "react";
import logoC from "../assets/logoC.png";

const SignSideBar = () => {
  return (
    <div className="bg-gray-800 h-screen pt-10">
      <img src={logoC} alt="logo" className="w-44 px-4" />
      <div className="flex justify-center mt-[-40px] lg:w-full w-80">
        <script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        ></script>

        <dotlottie-player
          src="https://lottie.host/ecef937c-e4df-4a3a-9db7-4eeffab9d8d6/MJsclmleDT.json"
          background="transparent"
          speed="1"
          style={{ height: "auto", width: "85%" }}
          class="w-full"
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </div>
  );
};

export default SignSideBar;
