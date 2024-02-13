import Image from "next/image";

type ProjectCardProps = {
  image: string;
  title: string;
  subtitle: string;
};

export const ProjectCard = ({ image, title, subtitle }: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-y-4 w-full items-start justify-start">
      <Image
        src={image}
        alt={title}
        className="md:w-[360px] md:h-[215px] rounded shadow-md w-full h-auto"
        width={360}
        height={215}
      />
      <div className="space-y-1">
        <h4 className="text-dark text-lg font-semibold leading-normal">
          {title}
        </h4>
        <p className="text-dark/75 text-sm font-normal leading-[150%]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
