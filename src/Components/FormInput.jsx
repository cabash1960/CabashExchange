import React from "react";

const FormInput = ({ label, type, id, name, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-[15px] font-medium text-slate-600">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`mt-1 p-2 w-full border border-solid bg-gray-700 border-violet-400 rounded-md text-slate-100 ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
