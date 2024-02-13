import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import { Wrapper } from "./wrapper";

export const ContactUs = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <Wrapper>
        <div className="max-w-[757px] mx-auto flex flex-col gap-y-[32px]">
          <div className="flex flex-col text-center gap-y-4">
            <h2 className="text-5xl font-bold leading-normal">
              Have a project idea and want to make it come true?
            </h2>
            <p className="text-sm text-white/75 font-normal leading-normal">
              Please contact us and we will discuss about your project,
              don&apos;t forget we are always here for you
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Button className="flex items-center gap-x-2 group font-semibold">
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-all" />
            </Button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
