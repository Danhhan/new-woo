"use client";
import * as React from "react";
import { SkillItem } from "./skill-item";

interface Skill {
  iconSrc: string;
  text: string;
}

interface LevelCardProps {
  title: string;
  subtitle: string;
  skills: Skill[];
  backgroundColor: string;
}

export const LevelCard: React.FC<LevelCardProps> = ({
  title,
  subtitle,
  skills,
  backgroundColor,
}) => {
  return (
    <div
      className={`overflow-hidden flex-1 shrink pt-1 pr-1 pb-2 pl-1 ${backgroundColor} rounded-lg basis-0 border-2 border-white/50 shadow-[4px_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[6px_6px_20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1`}
    >
      <div className="overflow-hidden gap-1.5 self-stretch px-3.5 py-2 w-full text-xs font-extrabold leading-4 text-center bg-white/90 backdrop-blur-sm rounded-md border border-white/30 shadow-sm text-slate-800">
        <div className="text-indigo-600 font-black tracking-wide">{title}</div>
        <div className="text-slate-600 font-semibold text-[10px] mt-0.5">
          {subtitle}
        </div>
      </div>
      <div className="mt-2 space-y-1">
        {skills.map((skill, index) => (
          <SkillItem key={index} iconSrc={skill.iconSrc} text={skill.text} />
        ))}
      </div>
    </div>
  );
};
