import Image from "next/image"
import infinityLine from "@/assets/infinty-scroll-line.png"
import TTT from "@/assets/glowing-triangle.png"

export const LineScrollPart = () => {
  return (
    <div className="container relative overflow-hidden">
      <Image
        alt=""
        className="h-24 object-cover -translate-y-1/2 absolute top-1/2 w-full animate-infinity-scroll-first z-0"
        src={infinityLine}
      />
      <Image
        alt=""
        className="h-24 object-cover -translate-y-1/2 absolute top-1/2 w-full animate-infinity-scroll-second  z-0"
        src={infinityLine}
      />
      <Image
        alt=""
        src={TTT}
        className="block   relative w-full md:w-2/5 mx-auto z-10"
      />
    </div>
  );
};
