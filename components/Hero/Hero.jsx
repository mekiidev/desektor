import {CardsPart} from "@/components/Hero/CardsPart"

export const Hero = () => {
  return (
    <section id="home" className=" text-heading overflow-x-xhidden py-12">
      <div className="h-full w-full ">
        <div className="container md:flex md:justify-between lg:px-12">
          <div className="flex flex-col justify-center">
            <span className="text-2xl lg:text-5xl 2xl:text-5xl">Drive Your Vision</span>
            <span className="text-2xl lg:text-5xl 2xl:text-5xl"><span className="font-bold">Forward</span> with Bespoke Branding</span>
            <h2 className="text-7xl lg:text-9xl 2xl:text-[12rem]">Solutions</h2>
          </div>
          <CardsPart />
        </div>
      </div>
    </section>
  );
};