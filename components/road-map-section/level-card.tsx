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
      className={`overflow-hidden w-full ${backgroundColor} rounded-lg border-2 border-white/50 shadow-[4px_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[6px_6px_20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 p-1`}
    >
      <div className="overflow-hidden gap-1.5 px-2 sm:px-3.5 py-2 w-full text-xs font-extrabold leading-4 text-center bg-white/90 backdrop-blur-sm rounded-md border border-white/30 shadow-sm text-slate-800">
        <div className="text-indigo-600 font-black tracking-wide text-[10px] sm:text-xs">
          {title}
        </div>
        <div className="text-slate-600 font-semibold text-[8px] sm:text-[10px] mt-0.5">
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
