import { RATINGS } from "@/constants";
import { Wrapper } from "./wrapper";

export const Rating = () => {
  return (
    <div className="2xl:mt-[45vh] lg:mt-[40vh] md:mt-[30vh] sm:mt-[20vh] py-20">
      <Wrapper>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2">
          {RATINGS.map((rating) => (
            <div key={rating.key} className="flex flex-col text-center">
              <p className="text-dark md:text-[32px] text-[26px] font-semibold leading-normal">
                {rating.title}
              </p>
              <p className="text-dark/75 md:text-[18px] text-[14px] font-normal leading-normal">
                {rating.subtitle}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};
