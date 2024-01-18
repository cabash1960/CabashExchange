import React from "react";

const Create = () => {
  return (
    <div className="flex flex-col items-center lg:py-20 py-10 lg:px-0 px-5">
      <h2 className="text-3xl font-semibold mb-8 text-gray-300">
        START SENDING MONEY IN THREE SIMPLE WAYS
      </h2>

      {/* Step 1: Create Account */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-orange-400">1. Create Account</h3>
        <p className="text-slate-400">
          Provide your credentials, create your own account, and explore.
          Creating an account is so easy.
        </p>
      </div>

      {/* Step 2: Fund Your Wallet */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-orange-400">2. Fund Your Wallet</h3>
        <p className="text-slate-400">
          Send or request any amount to your preferred one within seconds. Just
          search the desired one and send or request for money.
        </p>
      </div>

      {/* Step 3: Input the Receiver's Details */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-orange-400">
          3. Input the Receiver's Details
        </h3>
        <p className="text-slate-400">
          Providing the details of the receipt. Select the payment channel -
          mobile wallet or local bank account. Click on SEND and wait for us to
          do our magic.
        </p>
      </div>
    </div>
  );
};

export default Create;
