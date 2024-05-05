import React from "react";
import {
  RiDownloadLine,
  RiShareForwardLine,
  RiRefreshLine,
} from "react-icons/ri";

const WalletBalance = () => {
  return (
    <div className="flex flex-col gap-4 bg-blue-200 p-8 w-[50%]">
      <h2 className="text-xl font-semibold mb-4 text-left">Wallet Balance</h2>
      <div className="bg-blue-50 p-4 rounded-md flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAMFBMVEX80RboES0Ah1H7yhjpLCwAhFOmrzgAilL/0xLtACufXECmqzn/zBSgY0DuJyqeW0EAu65MAAAAU0lEQVRoge3MyRGAIBAAMBAPFI/+u/XjSAP70qSApOExzTWFk8vlcrlcLpfL5XK5XP6TvO0l2psvxzlG6/m15mg93+RyuVwul8vlcrlcLpd/ML8BbqEeYVz08JMAAAAASUVORK5CYII="
            alt="Benin"
            className="h-10 w-10 rounded-full "
          />
          <div className="flex flex-col gap-1 ">
            <h2 className="text-xl font-semibold">0.00 XOF-BJ</h2>
            <p className="text-[13px] text-gray-500">
              West African CFA franc Benin
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="text-blue-500">
            <RiDownloadLine />
          </button>
          <button className="text-blue-500">
            <RiShareForwardLine />
          </button>
          <button className="text-blue-500">
            <RiRefreshLine />
          </button>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-md flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlemB_euia1JuK3FeF0N2mrykEOkEKDVSjh0EQsRkoYhOTlxnfQFdF&usqp=CAE&s"
            alt="ivoire"
            className="h-10 w-10 rounded-full"
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold">0.00 XOF-CI</h2>
            <p className="text-[13px] text-gray-500">
              West African CFA franc Cote D'Ivoire
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="text-blue-500">
            <RiDownloadLine />
          </button>
          <button className="text-blue-500">
            <RiShareForwardLine />
          </button>
          <button className="text-blue-500">
            <RiRefreshLine />
          </button>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-md flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACCCAMAAACXSEZJAAAAElBMVEUAh1H///8AgUauz75UoHoAhU11cxuFAAAA8klEQVR4nO3QwQmEUADFwLhq/y0vvB7+QZhUEKZO9LuvIz3vkd0zQQjCghCEBSEIC0IQFoQgLAhBWBCCsCAEYUEIwoIQhAUhCAtCEBaEICwIQVgQgrAgBGFBCMKCEIQFIQgLQhAWhCAsCEFYEIKwIARhQQjCghCEBSEIC0IQFoQgLAhBWBCCsCAEYUEIwoIQhAUhCAtCEBaEICwIQVgQgrAgBGFBCMKCEIQFIQgLQhAWhCAsCEFYEIKwIARhQQjCghCEBSEIC0IQFoQgLAhBWBCCsCAEYUEIwoIQhAUhCAtCEBaEICwIQVgQgrAgBGF9DOEPL8oyyaN6ak4AAAAASUVORK5CYII="
            alt="Nigeria"
            className="h-10 w-10 rounded-s-full"
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold">0.00 NGN</h2>
            <p className="text-[13px] text-gray-500">Nigerian Naira</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="text-blue-500">
            <RiDownloadLine />
          </button>
          <button className="text-blue-500">
            <RiShareForwardLine />
          </button>
          <button className="text-blue-500">
            <RiRefreshLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletBalance;
