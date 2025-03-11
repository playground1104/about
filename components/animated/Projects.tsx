"use client";
import Project from "@/components/Project";
import { Project as ProjectType } from "@/utils/types";
import ExternalLink from "@/components/ExternalLink";
import { resumeUrl } from "@/utils/constants";

interface ProjectProps {
  projectData: ProjectType[];
}

const Projects: React.FC<ProjectProps> = ({ projectData }) => (
  <div className="mx-10 min-h-[50vh] w-full">
    <h3 className="text-3xl font-semibold">프로젝트</h3>
    <p className="mb-1 text-neutral-400">
      | 전체 이력서는{" "}
      <ExternalLink url={resumeUrl} linkType="paragraph">
        이 링크
      </ExternalLink>
      에서 확인할 수 있어요.
    </p>
    <div>
      {projectData.map((project, idx) => (
        <Project project={project} key={idx} />
      ))}
    </div>
  </div>
);

export default Projects;
