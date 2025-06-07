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
    <div className="space-y-2">
      <div className="text-sm font-bold text-sky-900">Chứng chỉ</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-2 sm:p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="relative">
              <img
                src={badge.src}
                className={`object-contain ${badge.aspectRatio} ${badge.width} group-hover:scale-110 transition-transform duration-300 max-w-[40px] sm:max-w-[50px] lg:max-w-none`}
                alt={badge.title || "Certificate"}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {badge.title && (
              <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs font-semibold text-slate-700 text-center group-hover:text-indigo-600 transition-colors duration-300 leading-tight">
                {badge.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
