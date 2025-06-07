"use client";
import * as React from "react";

interface Badge {
  src: string;
  aspectRatio: string;
  width: string;
  title?: string;
}

interface AchievementBadgesProps {
  badges: Badge[];
}

export const AchievementBadges: React.FC<AchievementBadgesProps> = ({
  badges,
}) => {
  return (
    <div className="flex flex-col justify-center mt-6 w-full">
      <div className="flex flex-wrap gap-4 w-full">
        <div className="self-start text-sm font-extrabold leading-5 text-sky-900 w-[69px]">
          Chứng chỉ
        </div>
        <div className="flex flex-wrap flex-1 shrink gap-4 items-start h-full basis-0 min-w-60">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col flex-1 shrink items-center basis-0 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative">
                <img
                  src={badge.src}
                  className={`object-contain ${badge.aspectRatio} ${badge.width} group-hover:scale-110 transition-transform duration-300`}
                  alt={badge.title || "Certificate"}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {badge.title && (
                <div className="mt-2 text-xs font-semibold text-slate-700 text-center group-hover:text-indigo-600 transition-colors duration-300">
                  {badge.title}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
