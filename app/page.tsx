import { ContactUs } from "@/components/contact-us";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { ImageConrainer } from "@/components/image-conrainer";
import { Projects } from "@/components/projects";
import { Rating } from "@/components/rating";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ImageConrainer />
      <Rating />
      <Features />
      <Projects />
      <Testimonials />
      <ContactUs />
    </>
  );
}
