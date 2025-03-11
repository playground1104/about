import { Project as ProjectType } from "@/utils/types";
import ExternalLink from "@/components/ExternalLink";
import icons from "@/utils/icons";
import { stackNames } from "@/utils/constants";

interface ProjectInterface {
  project: ProjectType;
}

const Project: React.FC<ProjectInterface> = ({ project }) => {
  return (
    <div className="w-fit h-fit rounded border p-3 bg-neutral-700">
      <div className="flex flex-row justify-start items-center gap-x-1.5">
        <h4 className="text-xl font-semibold">{project.name}</h4>
        <div className="grid grid-flow-col justify-start w-fit gap-x-1">
          {project.links?.map((link, idx) => (
            <ExternalLink
              url={link.url}
              icon={icons[link.type || "home"] || icons.home}
              key={idx}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-flow-col justify-start gap-x-1">
        {project.stack?.map((stack, idx) => (
          <div
            className="inline-flex justify-center items-baseline gap-x-0.5"
            key={idx}
          >
            <span className="relative top-[2px]">{icons[stack]}</span>
            {stackNames[stack]}
          </div>
        ))}
      </div>
      <h5 className="font-light text-neutral-400">{project.role}</h5>
      <p>{project.brief}</p>
    </div>
  );
};

export default Project;
