import { HiOutlineExternalLink } from "react-icons/hi";
import { HiOutlineGlobeAlt, HiOutlineHashtag } from "react-icons/hi2";
import {
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiInstagram,
  SiLinkedin,
  SiNotion,
  SiDiscord,
} from "react-icons/si";
import { FaGithub, FaHome } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

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
  insta: <SiInstagram />,
  mail: <GrMail />,
  linkedin: <SiLinkedin />,
  notion: <SiNotion />,
  discord: <SiDiscord />,
};

export default icons;
