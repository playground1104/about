import { HiOutlineExternalLink } from "react-icons/hi";
import { HiOutlineGlobeAlt, HiOutlineHashtag } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

const icons: { [key: string]: React.JSX.Element } = {
  // Programming Language Logo
  // Tech Stack Logo
  github: <FaGithub />,
  // Misc
  externalLink: <HiOutlineExternalLink />,
  tag: <HiOutlineHashtag />,
  backend: <HiOutlineGlobeAlt />,
};

export default icons;
