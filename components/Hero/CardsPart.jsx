"use client"
import Image from "next/image";
import cards from "@/assets/cards.png";
import card1 from "@/assets/card-1.png";
import card2 from "@/assets/card-2.png";
import card3 from "@/assets/card-3.png";
import { useEffect, useState } from "react";

export const CardsPart = () => {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll(".image-container img");
    let imagesLoaded = 0;

    images.forEach((img) => {
      img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
          setAllImagesLoaded(true);
        }
      };

      // For cached images
      if (img.complete) {
        img.onload();
      }
    });
  }, []);
  return (
    <div className="image-container flex relative justify-end items-center w-full py-9 md:max-w-xl xl:max-w-4xl">
      <Image
        className={`w-2/5 origin-bottom absolute -rotate-90 ${allImagesLoaded ? 'animate-rotate-in' : ''}`}
        src={card1}
        alt="cards"
      />
      <Image
        className={`w-2/5 origin-bottom -rotate-90`}
        src={card3}
        alt="cards"
      />
      <Image
        className={`w-2/5 origin-bottom absolute -rotate-90 ${allImagesLoaded ? 'animate-rotate-in-half' : ''}`}
        src={card2}
        alt="cards"
      />
    </div>
  );
};
