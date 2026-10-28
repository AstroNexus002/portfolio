import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiCss,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaAws, FaSlack } from "react-icons/fa";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";

const icons: Record<string, IconType> = {
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  redux: SiRedux,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  node: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  mongoose: SiMongoose,
  mysql: SiMysql,
  jwt: SiJsonwebtokens,
  git: SiGit,
  gitlab: SiGitlab,
  vscode: VscVscode,
  aws: FaAws,
  docker: SiDocker,
  figma: SiFigma,
  trello: SiTrello,
  slack: FaSlack,
  teams: PiMicrosoftTeamsLogo,
};

export default function TechIcon({
  icon,
  color,
  size = 25,
}: {
  icon: string;
  color: string;
  size?: number;
}) {
  const Icon = icons[icon];
  if (!Icon) return null;
  return <Icon size={size} color={color} aria-hidden />;
}
