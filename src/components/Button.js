import React from 'react'

export default function Button({
  color = "bg-[#F2B10D]",
  width = "w-[179px]",
  height = "h-[54px]",
  text,
  borderWidth = "0",
  borderColor,
  image,
  onClick,
  gap,
  textColor
}) {
  return (
    <button
      onClick={onClick}
      className={`${width} ${height} ${color} border-${borderWidth} ${borderColor} rounded-[50px]`}
    >
      <div
        className={`flex justify-center items-center text-[#041F4A] h-full font-semibold  ${gap}`}
      >
        {text}
        {image}
      </div>
    </button>
  );
}
