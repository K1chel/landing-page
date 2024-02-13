import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
  onClick?: () => void;
};

export const Button = ({ children, className, ref, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      ref={ref}
      className={cn(
        "px-6 py-4 bg-white text-black rounded-sm font-semibold",
        className
      )}
    >
      {children}
    </button>
  );
};
