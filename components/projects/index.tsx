import { PROJECTS } from "@/constants";
import { Wrapper } from "../wrapper";
import { ProjectCard } from "./project-card";

export const Projects = () => {
  return (
    <section className="py-20 ">
      <Wrapper className="flex flex-col gap-y-10">
        <div className="flex flex-col items-start justify-start w-full">
          <span className="text-dark/80 md:text-[18px] text-[13px] font-normal leading-normal">
            Our Portofolio&apos;s
          </span>
          <h4 className="md:text-[36px] text-[28px] font-semibold text-dark leading-normals">
            Recent Projects
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.key}
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};
