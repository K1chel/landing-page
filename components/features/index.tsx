import { FEUTURE_ITEMS } from "@/constants";
import { Wrapper } from "../wrapper";
import { FeatureCard } from "./feature-card";

export const Features = () => {
  return (
    <section className="py-20 bg-[#F9F9F9]">
      <Wrapper className="flex flex-col gap-y-10">
        <div className="flex flex-col items-start justify-start w-full">
          <span className="text-dark/80 md:text-[18px] text-[13px] font-normal leading-normal">
            Our Services
          </span>
          <h4 className="md:text-[36px] text-[28px] font-semibold text-dark leading-normals">
            We Provide What You Need
          </h4>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 xl:gap-x-[120px] gap-x-[50px] gap-y-10">
          {FEUTURE_ITEMS.map((item) => (
            <FeatureCard
              key={item.key}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};
