"use client";
import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="w-full px-10 py-12 bg-white">
  <div className="grid  grid-cols-2 md:grid-cols-4 gap-8 place-items-center mx-40">
    <Image src="/image1.jpeg" alt="Logo 1" width={130} height={100} />
    <Image src="/image2.png" alt="Logo 2" width={300} height={300} />
    <Image src="/image3.jpg" alt="Logo 3" width={150} height={100} />
    <Image src="/image4.jpeg" alt="Logo 4" width={150} height={100} />
    <Image src="/image5.jpg" alt="Logo 5" width={100} height={50} />
    <Image src="/image6.png" alt="Logo 6" width={150} height={100} />
    <Image src="/image7.jpeg" alt="Logo 7" width={200} height={100} />
    <Image src="/image8.png" alt="Logo 8" width={50} height={100} />
  </div>
</div>

  );
};

export default Gallery;
