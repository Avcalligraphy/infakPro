import { forwardRef, useEffect, useRef } from "react";
export default function TextInput({
  type = "text",
  name,
  className,
  variant = "primary",
  autoComplete,
  required,
  isFocused,
  placeholder,
  isError,
  defaultValue,
  color,
  border,
  ...props
}) {
  return (
    <input
      {...props}
      type={type}
      name={name}
      className={`rounded-[5px]  py-[13px] sm:text-[18px] text-[17px]  px-7 w-full text-gray-500 border-2 ${border} bg-transparent hover:border-[#F2B10D] `}
      autoComplete={autoComplete}
      required={required}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  );
}
