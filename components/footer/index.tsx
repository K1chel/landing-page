import Image from "next/image";
import { Wrapper } from "../wrapper";
import { FOOTER_LINKS, FOOTER_SOCIAL_MEDIA } from "@/constants";

export const Footer = () => {
  return (
    <section className="py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-y-10 gap-x-5">
          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-y-5 flex-1">
            <div className="flex items-center gap-x-1.5">
              <Image src="/logo.svg" alt="Logo" width={49} height={49} />
              <p className="text-md font-semibold">Bubble Bash</p>
            </div>
            <p className="text-sm font-normal text-dark/75">
              Introducing, We are Bubble Bash digital agency company with more
              than 6 years of experience. We are committed to serve with all our
              heart
            </p>
            <div className="flex items-center gap-x-3">
              {FOOTER_SOCIAL_MEDIA.map((socialMedia) => (
                <Image
                  key={socialMedia.key}
                  src={socialMedia.icon}
                  alt={socialMedia.alt}
                  width={32}
                  height={32}
                />
              ))}
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="flex flex-1">
            <div className="grid grid-cols-3 gap-x-5 items-end w-full">
              {FOOTER_LINKS.map((item) => (
                <div key={item.key} className="flex w-full flex-col">
                  <p className="text-md text-dark font-semibold">
                    {item.title}
                  </p>
                  <div className="flex flex-col gap-y-3 mt-2">
                    {item.links.map((link) => (
                      <div key={link.key}>
                        <p className="text-sm text-dark/75 font-normal">
                          {link.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
