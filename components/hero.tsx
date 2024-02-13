import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import { Wrapper } from "./wrapper";

export const Hero = () => {
  return (
    <section className="w-full h-full bg-primary pt-[101px] pb-[30vh]">
      <Wrapper className="flex flex-col gap-y-12 xl:py-20 py-10">
        <div className="max-w-[999px] mx-auto flex flex-col md:gap-y-8 gap-y-4 text-center">
          <h1 className="md:text-6xl text-4xl font-bold text-white leading-normal">
            Create Amazing Digital Product For Your Business
          </h1>
          <p className="text-white/60 md:text-[18px] text-sm font-normal leading-[150%]">
            We are a professional digital agency that has been established since
            2016, we present a variety of digital services that can help you
            solve problems in your business
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Button className="flex items-center gap-x-2 group">
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-all" />
          </Button>
        </div>
      </Wrapper>
    </section>
  );
};
