import { cn } from "@/lib/utils";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export const Wrapper = ({ className, children }: WrapperProps) => {
  return (
    <div
      className={cn(
        "w-full mx-auto max-w-[1210px] px-4 md:px-6 xl:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};
