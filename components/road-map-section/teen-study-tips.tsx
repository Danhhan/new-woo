"use client";
import * as React from "react";

interface StudyTip {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export const TeenStudyTips: React.FC = () => {
  const studyTips: StudyTip[] = [
    {
      icon: "🎵",
      title: "Học qua nhạc và phim",
      description:
        "Nghe nhạc Anh, xem phim có phụ đề để cải thiện listening tự nhiên",
      color: "from-pink-100 to-rose-100",
    },
    {
      icon: "📱",
      title: "Sử dụng app học tập",
      description:
        "Duolingo, Quizlet, Cambridge Dictionary - học mọi lúc mọi nơi",
      color: "from-blue-100 to-cyan-100",
    },
    {
      icon: "👥",
      title: "Tham gia cộng đồng",
      description:
        "Discord, Reddit, Facebook groups - luyện speaking với bạn bè quốc tế",
      color: "from-purple-100 to-indigo-100",
    },
    {
      icon: "🎮",
      title: "Gamification",
      description:
        "Chơi game tiếng Anh, tham gia quiz online, thi đấu với bạn bè",
      color: "from-green-100 to-emerald-100",
    },
    {
      icon: "📚",
      title: "Đọc sách teen",
      description:
        "Harry Potter, The Hunger Games, Diary of a Wimpy Kid phù hợp lứa tuổi",
      color: "from-orange-100 to-yellow-100",
    },
    {
      icon: "✍️",
      title: "Viết diary & blog",
      description:
        "Ghi nhật ký bằng tiếng Anh, chia sẻ suy nghĩ trên social media",
      color: "from-teal-100 to-cyan-100",
    },
  ];

  return (
    <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg">
      <h3 className="text-lg sm:text-2xl font-bold text-center mb-4 sm:mb-6">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          💡 Study Tips cho Gen Z
        </span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {studyTips.map((tip, index) => (
          <div
            key={index}
            className={`
							p-3 sm:p-4 bg-gradient-to-br ${tip.color} rounded-lg border border-white/50
							hover:shadow-md transition-all duration-300 hover:-translate-y-1 group
							animate-scaleIn
						`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-xl sm:text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
              {tip.icon}
            </div>
            <h4 className="text-sm sm:text-base font-bold text-slate-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
              {tip.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {tip.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-white/60 backdrop-blur-sm rounded-lg text-center">
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-purple-600">💪 Pro Tip:</span> Học
          30 phút mỗi ngày hiệu quả hơn học 3 tiếng một lần! Consistency is key!
          🔑
        </p>
      </div>
    </div>
  );
};
