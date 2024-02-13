import { TESTIMONIALS } from "@/constants";
import { Wrapper } from "../wrapper";
import { TestimonialCard } from "./testimonial-card";

export const Testimonials = () => {
  return (
    <section className="py-20 bg-[#F9F9F9]">
      <Wrapper className="flex flex-col gap-y-10">
        <div className="flex flex-col items-start justify-start w-full">
          <span className="text-dark/80 md:text-[18px] text-[13px] font-normal leading-normal">
            Client Reviews
          </span>
          <h4 className="md:text-[36px] text-[28px] font-semibold text-dark leading-normals">
            What Our Happy Client Say About Us
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5">
          {TESTIMONIALS.map((item) => (
            <TestimonialCard
              key={item.key}
              avatar={item.avatar}
              title={item.title}
              subtitle={item.subtitle}
              name={item.name}
              occupation={item.occupation}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};
