import { Open_Sans } from "next/font/google";

import { cn } from "@/lib/utils";

type NavItemProps = {
  label: string;
  className?: string;
};

const font = Open_Sans({ subsets: ["latin"] });

export const NavItem = ({ label, className }: NavItemProps) => {
  return (
    <div>
      <p
        className={cn(
          "text-md font-normal cursor-pointer hover:text-white/75 transition-all shrink-0",
          className,
          font.className
        )}
      >
        {label}
      </p>
    </div>
  );
};
