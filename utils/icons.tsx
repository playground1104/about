import { HiOutlineExternalLink } from "react-icons/hi";
import { HiOutlineGlobeAlt, HiOutlineHashtag } from "react-icons/hi2";
import { SiNextdotjs, SiTypescript, SiPython } from "react-icons/si";
import { FaGithub, FaHome } from "react-icons/fa";

const icons: { [key: string]: React.JSX.Element } = {
  // Programming Language Logo
  py: <SiPython />,
  ts: <SiTypescript />,
  // Tech Stack Logo
  nextjs: <SiNextdotjs />,
  github: <FaGithub />,
  // Misc
  externalLink: <HiOutlineExternalLink />,
  tag: <HiOutlineHashtag />,
  backend: <HiOutlineGlobeAlt />,
  home: <FaHome />,
};

export default icons;
