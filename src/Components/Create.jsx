// src/components/FeatureComponent.js
import React from "react";

const FeatureComponent = () => {
  return (
    <div className="flex py-20 items-center justify-center mt-8">
      {/* Feature 2 */}
      <div className="relative mt-8">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 bg-green-500 text-white flex items-center justify-center rounded-full">
              2
            </div>
          </div>
          <div className="ml-4">
            <div className="text-lg font-medium text-gray-800">Feature 2</div>
            <div className="text-sm text-gray-600">
              Description for feature 2
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -mt-1">
          <div className="h-5 w-5 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Dotted Line between Feature 2 and Feature 1 */}
      <div className="flex-1 border-t-2 border-dotted border-gray-400 mx-4 mt-8"></div>

      {/* Feature 1 */}
      <div className="relative">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded-full">
              1
            </div>
          </div>
          <div className="ml-4">
            <div className="text-lg font-medium text-gray-800">Feature 1</div>
            <div className="text-sm text-gray-600">
              Description for feature 1
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -mt-1">
          <div className="h-5 w-5 bg-blue-500 rounded-full"></div>
        </div>
      </div>

      {/* Dotted Line between Feature 1 and Feature 3 */}
      <div className="flex-1 border-t-2 border-dotted border-gray-400 mx-4"></div>

      {/* Feature 3 */}
      <div className="relative">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 bg-yellow-500 text-white flex items-center justify-center rounded-full">
              3
            </div>
          </div>
          <div className="ml-4">
            <div className="text-lg font-medium text-gray-800">Feature 3</div>
            <div className="text-sm text-gray-600">
              Description for feature 3
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -mt-1">
          <div className="h-5 w-5 bg-yellow-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
