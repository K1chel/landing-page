import Image from "next/image";

type FeatureCardProps = {
  title: string;
  subtitle: string;
  icon: string;
};

export const FeatureCard = ({ title, subtitle, icon }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 w-full px-10 py-12 bg-white shadow-md hover:shadow-lg transition-all text-center">
      <Image src={icon} alt={title} width={48} height={48} />
      <h4 className="text-dark xl:text-[24px] text-md font-semibold leading-normal">
        {title}
      </h4>
      <p className="text-dark/75 xl:text-[18px] text-sm font-normal leading-[150%]">
        {subtitle}
      </p>
    </div>
  );
};
