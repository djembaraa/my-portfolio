import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiVuedotjs,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiFlutter,
  SiTailwindcss,
  SiBootstrap,
  SiSupabase,
  SiPostgresql,
  SiMysql,
  SiWordpress,
  SiJoomla,
  SiSanity,
  SiOdoo,
  SiGit,
  SiGithub,
  SiFigma,
  SiDbeaver,
  SiMongodb,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAffinitydesigner,
  SiBlender,
  SiUnity,
  SiLua,
  SiRoblox,
  SiPhp,
  SiLaravel,
  SiInertia,
  SiBlogger,
  SiThreedotjs,
  SiAstro,
  SiWondershare,
} from "react-icons/si";

export type SkillItem = {
  name: string;
  icon: (props: any) => JSX.Element;
};

function makeBadgeIcon(label: string) {
  const len = label.length;
  const fontSize = len <= 1 ? 10 : len === 2 ? 9 : len === 3 ? 7.5 : 6.5;

  const BadgeIcon = (props: any) => (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="6"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <text
        x="12"
        y="12.3"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
        fontSize={fontSize}
        fontWeight="800"
        fill="currentColor"
        letterSpacing="-0.2"
      >
        {label}
      </text>
    </svg>
  );

  BadgeIcon.displayName = `BadgeIcon(${label})`;
  return BadgeIcon;
}

const wrap = (Icon: any) => (props: any) => <Icon {...props} />;

const IconFilament = makeBadgeIcon("FIL");
const IconReactNative = wrap(SiReact);
const IconPhotoshop = wrap(SiAdobephotoshop);
const IconIllustrator = wrap(SiAdobeillustrator);

const IconGit = wrap(SiGit);
const IconGithub = wrap(SiGithub);

export const row1: SkillItem[] = [
  { name: "NextJS", icon: wrap(SiNextdotjs) },
  { name: "ReactJS", icon: wrap(SiReact) },
  { name: "VueJS", icon: wrap(SiVuedotjs) },
  { name: "AstroJS", icon: wrap(SiAstro) },
  { name: "ThreeJS", icon: wrap(SiThreedotjs) },

  { name: "Javascript", icon: wrap(SiJavascript) },
  { name: "Typescript", icon: wrap(SiTypescript) },

  { name: "Tailwind CSS", icon: wrap(SiTailwindcss) },
  { name: "Boostrap CSS", icon: wrap(SiBootstrap) },

  { name: "Flutter", icon: wrap(SiFlutter) },
  { name: "React Native", icon: IconReactNative },

  { name: "Figma", icon: wrap(SiFigma) },
  { name: "Photoshop", icon: IconPhotoshop },
  { name: "Illustrator", icon: IconIllustrator },
  { name: "Affinity Designer", icon: wrap(SiAffinitydesigner) },

  { name: "Blender", icon: wrap(SiBlender) },
  { name: "Unity", icon: wrap(SiUnity) },
  { name: "LUA", icon: wrap(SiLua) },
  { name: "Roblox Studio", icon: wrap(SiRoblox) },
];

export const row2: SkillItem[] = [
  { name: "ExpressJS", icon: wrap(SiExpress) },
  { name: "Golang", icon: wrap(SiGo) },

  { name: "PHP", icon: wrap(SiPhp) },
  { name: "Laravel", icon: wrap(SiLaravel) },
  { name: "Filament", icon: IconFilament }, // fallback (kalau nggak ada di simple-icons)
  { name: "InertiaJS", icon: wrap(SiInertia) },

  { name: "Supabase", icon: wrap(SiSupabase) },
  { name: "PostgreSQL", icon: wrap(SiPostgresql) },
  { name: "MySQL", icon: wrap(SiMysql) },
  { name: "MongoDB", icon: wrap(SiMongodb) },

  { name: "Wordpress", icon: wrap(SiWordpress) },
  { name: "Joomla", icon: wrap(SiJoomla) },
  { name: "Sanity", icon: wrap(SiSanity) },
  { name: "Odoo ERP", icon: wrap(SiOdoo) },

  { name: "Git", icon: IconGit },
  { name: "Github", icon: IconGithub },
  { name: "Dbeaver", icon: wrap(SiDbeaver) },

  { name: "Blogger", icon: wrap(SiBlogger) },
  { name: "Filmora", icon: wrap(SiWondershare) }, // alternatif terdekat (Wondershare)
];
