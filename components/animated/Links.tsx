"use client";

import { motion } from "motion/react";

import ExternalLink from "@/components/ExternalLink";
import icons from "@/utils/icons";

const Links = () => (
  <motion.div
    initial={{ opacity: 0, y: -15 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 2 } }}
    className="flex flex-col items-start justify-start text-lg xs:text-xl"
  >
    <ExternalLink url="mailto:choi@eunwoo.dev" icon={icons.mail}>
      choi@eunwoo.dev (Primary)
    </ExternalLink>
    <ExternalLink url="mailto:sions0411@konkuk.ac.kr" icon={icons.mail}>
      sions0411@konkuk.ac.kr (School)
    </ExternalLink>
    <ExternalLink url="https://github.com/eunwoo1104" icon={icons.github}>
      eunwoo1104
    </ExternalLink>
    <ExternalLink
      url="https://www.linkedin.com/in/eunwoo-choi-66a2b4326/"
      icon={icons.linkedin}
    >
      in/eunwoo-choi-66a2b4326
    </ExternalLink>
    <ExternalLink
      url="https://eunwoo1104.notion.site/R-sum-7b57411059be49169cfb3ca530693cf3?pvs=4"
      icon={icons.notion}
    >
      Résumé (Unfinished)
    </ExternalLink>
    <ExternalLink
      url="https://www.instagram.com/silvercow1104/"
      icon={icons.insta}
    >
      silvercow1104
    </ExternalLink>
    <ExternalLink
      url="https://discord.com/users/288302173912170497"
      icon={icons.discord}
    >
      eunwoo1104
    </ExternalLink>
  </motion.div>
);

export default Links;
