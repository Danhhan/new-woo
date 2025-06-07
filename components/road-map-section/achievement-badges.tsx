"use client";
import * as React from "react";

interface Badge {
  icon: string;
  title: string;
  subtitle: string;
  color: string;
  description: string;
}

interface AchievementBadgesProps {
  badges: Badge[];
}

export const AchievementBadges: React.FC<AchievementBadgesProps> = ({
  badges,
}) => {
  return (
    <div className="flex flex-col justify-center mt-6 sm:mt-8 w-full">
      <h3 className="text-lg sm:text-xl font-bold text-center text-slate-800 mb-6">
        🏆 Chứng chỉ & Cơ hội cho Teens
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`
							p-4 sm:p-6 bg-gradient-to-br ${badge.color} rounded-xl text-white
							shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2
							group cursor-pointer relative overflow-hidden
						`}
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-white/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 text-center">
              <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {badge.icon}
              </div>
              <div className="font-black text-sm sm:text-base mb-1">
                {badge.title}
              </div>
              <div className="text-xs sm:text-sm opacity-90 font-semibold mb-2">
                {badge.subtitle}
              </div>
              <div className="text-xs opacity-80 leading-relaxed">
                {badge.description}
              </div>
            </div>

            {/* Progress indicator */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div
                className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(index + 1) * 20}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl text-center border border-indigo-100">
        <p className="text-sm text-slate-700">
          <span className="font-bold text-indigo-600">💫 Mục tiêu 2024:</span>{" "}
          500+ teens WOO đạt chứng chỉ quốc tế và nhận học bổng du học!
        </p>
      </div>
    </div>
  );
};
