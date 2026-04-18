import { HiOutlineExternalLink } from "react-icons/hi";
import { HiOutlineGlobeAlt, HiOutlineHashtag } from "react-icons/hi2";
import {
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiInstagram,
  SiNotion,
  SiDiscord,
  SiYoutubemusic,
  SiYoutube,
} from "react-icons/si";
import { FaGithub, FaHome, FaLinkedin } from "react-icons/fa";
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
  linkedin: <FaLinkedin />,
  notion: <SiNotion />,
  discord: <SiDiscord />,
  youtube: <SiYoutube />,
  ytmusic: <SiYoutubemusic />,
};

export default icons;
