"use client";
import * as React from "react";

interface SkillItemProps {
  iconSrc: string;
  text: string;
}

export const SkillItem: React.FC<SkillItemProps> = ({ iconSrc, text }) => {
  return (
    <div className="flex items-start gap-2 p-2 bg-white/40 backdrop-blur-sm rounded-md hover:bg-white/60 transition-all duration-200 group">
      <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mt-0.5">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
      <div className="flex-1 text-xs leading-relaxed text-slate-700 font-medium group-hover:text-slate-800 transition-colors duration-200">
        {text}
      </div>
    </div>
  );
};
