import React from "react";

function Input({ type, value, placeholder, icon: Icon, onChange, onClick }) {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <Icon className=" size-5 text-base-content/40" onClick={onClick} />
      <input
        type={type}
        className="grow"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
}

export default Input;
