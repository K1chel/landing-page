import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  title: string;
  subtitle: string;
  avatar: string;
  occupation: string;
};

export const TestimonialCard = ({
  name,
  title,
  subtitle,
  avatar,
  occupation,
}: TestimonialCardProps) => {
  return (
    <div className="w-full h-full border-2 border-dark">
      <div className="p-6 flex flex-col justify-start gap-y-[21px]">
        <div className="min-h-[95px]">
          <h4 className="text-dark text-md font-semibold leading-normal">
            {title}
          </h4>
          <span className="text-dark/75 text-sm font-normal leading-[150%]">
            {subtitle}
          </span>
        </div>
        <div className="flex gap-x-[17px]">
          <Image
            src={avatar}
            alt={name}
            width={60}
            height={60}
            className="rounded-full w-14 h-14 object-cover"
          />
          <div>
            <p className="text-md text-dark font-bold">{name}</p>
            <p className="text-dark/75 text-sm font-normal">{occupation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
