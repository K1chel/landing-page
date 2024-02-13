import Image from "next/image";
import React from "react";

export const ImageConrainer = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Image
        src="/hero-image.jpg"
        alt="hero-image"
        width={1210}
        height={631}
        className="absolute 2xl:-top-[35vh] lg:-top-[28vh] md:-top-[24vh] -top-[25vh]  rounded-md"
      />
    </div>
  );
};
