import React from "react";

function Input({ onChange, type, placeholder, value, clicked }) {
  return (
    <form className="form">
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        value={value}
      />
      <button onClick={clicked}>
        <span>Add</span>
      </button>
    </form>
  );
}

export default Input;
