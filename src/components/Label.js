import React from "react";

export default function Label({ forInput, value, text, children }) {
  return (
    <label
      htmlFor={forInput}
      className={`text-base block mb-2  ${text} sm:text-[18px] text-[10px]`}
    >
      {value ? value : children}
    </label>
  );
}
