"use client";
import * as React from "react";
import { LevelCard } from "./level-card";
import { CertificationRow } from "./certification-item";
import { AchievementBadges } from "./achievement-badges";
import { TeenProgressTracker } from "./teen-progress-tracker";
import { TeenStudyTips } from "./teen-study-tips";
import { TeenCTA } from "./teen-cta";
import { TeenStats } from "./teen-stats";

export const RoadmapSection: React.FC = () => {
  const levelData = [
    {
      title: "CẤP ĐỘ 1",
      subtitle: "(Teen Foundation)",
      backgroundColor: "bg-gradient-to-br from-purple-100 to-pink-100",
      skills: [
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/674959b8217f0b4ba591d160cdd2c928ab1a314b?placeholderIfAbsent=true",
          text: "Giao tiếp cơ bản về sở thích, học tập và gia đình",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/b454e0e35a7af75e9da84b714ed1744817100729?placeholderIfAbsent=true",
          text: "Hiểu được nội dung bài giảng đơn giản bằng tiếng Anh",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/800bf997e8a477dc609795e62c4021883642b8cb?placeholderIfAbsent=true",
          text: "Viết paragraph ngắn về chủ đề quen thuộc",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/4302d94cd775fa7d6866578688bf726cf2336206?placeholderIfAbsent=true",
          text: "Tự tin thảo luận về trend và văn hóa teen",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/4e3464f97a2e59f15806c54ef21acfb9ea72bc6c?placeholderIfAbsent=true",
          text: "Chuẩn bị tốt cho kỳ thi THPT môn tiếng Anh",
        },
      ],
    },
    {
      title: "CẤP ĐỘ 2",
      subtitle: "(Teen Explorer)",
      backgroundColor: "bg-gradient-to-br from-blue-100 to-cyan-100",
      skills: [
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/27067db0a81de8db63cdf26be8456cbc5d355612?placeholderIfAbsent=true",
          text: "Thảo luận về các vấn đề xã hội và môi trường",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/1f2600b948923e7c90157d6119cf0ac51696bd08?placeholderIfAbsent=true",
          text: "Viết essay cơ bản với cấu trúc rõ ràng",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/33837eeb0c01799338499c0a87d1eb9ede92a02b?placeholderIfAbsent=true",
          text: "Hiểu được phim, nhạc và podcast bằng tiếng Anh",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/f1dd410ba561c45e6c1c06244cd3f98931b5f681?placeholderIfAbsent=true",
          text: "Giao tiếp với bạn bè quốc tế qua mạng xã hội",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/ca501de2c0aaf3780f4cdaa7b9d13704cfe9362e?placeholderIfAbsent=true",
          text: "Đạt điểm cao trong các bài kiểm tra tiếng Anh ở trường",
        },
      ],
    },
    {
      title: "CẤP ĐỘ 3",
      subtitle: "(Teen Leader)",
      backgroundColor: "bg-gradient-to-br from-green-100 to-emerald-100",
      skills: [
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/8a589a89e4808f5180cdec372a75dbba6d850198?placeholderIfAbsent=true",
          text: "Thuyết trình tự tin trước đám đông về các chủ đề phức tạp",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/76815c865f75a4cdc28d9c6207116248abf4b493?placeholderIfAbsent=true",
          text: "Tham gia debate và cuộc thi hùng biện tiếng Anh",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/57bc17d1139c3cca9dbc7c3c4e0ca162ebf3c5d8?placeholderIfAbsent=true",
          text: "Viết essay academic và creative writing",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/e5e91761ea6b28bfe77bd0ffa573b476431ca1b5?placeholderIfAbsent=true",
          text: "Sẵn sàng cho các kỳ thi Cambridge KET/PET",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/dc91b180516717ed973f8105f752229e9b5bf623?placeholderIfAbsent=true",
          text: "Hiểu và phân tích văn học tiếng Anh cơ bản",
        },
      ],
    },
    {
      title: "CẤP ĐỘ 4",
      subtitle: "(Pre-University)",
      backgroundColor: "bg-gradient-to-br from-orange-100 to-yellow-100",
      skills: [
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/924a98ac0a94d612a471a0433f192c6df415fdda?placeholderIfAbsent=true",
          text: "Tự tin tham gia các hoạt động Model UN và Youth Leadership",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/246da3b41049f168cfac5f9ba4d70a27f9fb2826?placeholderIfAbsent=true",
          text: "Viết personal statement cho hồ sơ đại học",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/69d07c2a7346034e518f31c162e86a053843dd0f?placeholderIfAbsent=true",
          text: "Chuẩn bị cho IELTS 6.0-7.0 hoặc TOEFL",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/cd46fe32fee7a7401169cff3bfd64e5f17ad1d60?placeholderIfAbsent=true",
          text: "Nghiên cứu và làm project về các chủ đề academic",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/41505fe1d25e807866fc0e8f2dbc18ade8841570?placeholderIfAbsent=true",
          text: "Sẵn sàng học tập tại môi trường đại học quốc tế",
        },
      ],
    },
    {
      title: "CẤP ĐỘ 5",
      subtitle: "(Global Citizen)",
      backgroundColor: "bg-gradient-to-br from-indigo-100 to-purple-100",
      skills: [
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/624b1b2764bda20d5222e17d64db6d4d775d33bc?placeholderIfAbsent=true",
          text: "Thành thạo 4 kỹ năng như người bản ngữ",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/f2c197c2b66fb0c23e3d1decee7000a37c104ee3?placeholderIfAbsent=true",
          text: "Đạt IELTS 7.5+ hoặc Cambridge FCE/CAE",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/784c9d6c19380ccb026019d93ea0ca4d63c0c801?placeholderIfAbsent=true",
          text: "Tự tin interview cho du học và học bổng",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/8602b9203ea5266189adc405f1275c44bafc2c0d?placeholderIfAbsent=true",
          text: "Làm việc với các dự án quốc tế và startup",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/625a2a5976803e5cd22ed6d1b7254edaf5ef0c1f?placeholderIfAbsent=true",
          text: "Trở thành mentor cho các teen khác",
        },
      ],
    },
  ];

  const cambridgeData = {
    label: "🎓 Cambridge",
    items: [
      {
        text: "A2 Key for Schools",
        icon: "🟢",
        color: "from-green-400 to-emerald-500",
      },
      {
        text: "B1 PET for Schools",
        icon: "🔵",
        color: "from-blue-400 to-cyan-500",
      },
      {
        text: "B2 First for Schools",
        icon: "🟡",
        color: "from-yellow-400 to-orange-500",
      },
      { text: "C1 Advanced", icon: "🟠", color: "from-orange-400 to-red-500" },
      { text: "C2 Proficiency", icon: "🔴", color: "from-red-400 to-pink-500" },
    ],
  };

  const cefrData = {
    label: "🌟 CEFR Level",
    items: [
      {
        text: "A2 Elementary",
        subtitle: "Pre-intermediate",
        icon: "🟢",
        color: "from-green-400 to-emerald-500",
        description: "Giao tiếp cơ bản",
      },
      {
        text: "B1 Intermediate",
        subtitle: "Threshold",
        icon: "🔵",
        color: "from-blue-400 to-cyan-500",
        description: "Thảo luận tự tin",
      },
      {
        text: "B2 Upper-Inter",
        subtitle: "Vantage",
        icon: "🟡",
        color: "from-yellow-400 to-orange-500",
        description: "Thành thạo học thuật",
      },
      {
        text: "C1 Advanced",
        subtitle: "Proficiency",
        icon: "🟠",
        color: "from-orange-400 to-red-500",
        description: "Gần như native",
      },
      {
        text: "C2 Mastery",
        subtitle: "Near-native",
        icon: "🔴",
        color: "from-red-400 to-pink-500",
        description: "Thành thạo hoàn toàn",
      },
    ],
  };

  const durationData = {
    label: "⏱️ Thời lượng học",
    items: [
      {
        text: "80 buổi",
        subtitle: "4-5 tháng",
        icon: "⚡",
        color: "from-green-400 to-emerald-500",
        description: "Nền tảng vững chắc",
      },
      {
        text: "100 buổi",
        subtitle: "5-6 tháng",
        icon: "🚀",
        color: "from-blue-400 to-cyan-500",
        description: "Phát triển toàn diện",
      },
      {
        text: "120 buổi",
        subtitle: "6-7 tháng",
        icon: "💪",
        color: "from-yellow-400 to-orange-500",
        description: "Thành thạo giao tiếp",
      },
      {
        text: "140 buổi",
        subtitle: "7-8 tháng",
        icon: "🎯",
        color: "from-orange-400 to-red-500",
        description: "Chuẩn bị đại học",
      },
      {
        text: "160 buổi",
        subtitle: "8-9 tháng",
        icon: "👑",
        color: "from-red-400 to-pink-500",
        description: "Trình độ cao cấp",
      },
    ],
  };

  const progressSteps = [
    {
      step: 1,
      title: "Foundation Level",
      description: "Làm quen với tiếng Anh cơ bản, xây dựng nền tảng vững chắc",
      isCompleted: true,
      isActive: false,
    },
    {
      step: 2,
      title: "Explorer Level",
      description: "Khám phá thế giới qua tiếng Anh, giao tiếp tự tin hơn",
      isCompleted: true,
      isActive: false,
    },
    {
      step: 3,
      title: "Leader Level",
      description: "Phát triển kỹ năng thuyết trình và tranh luận",
      isCompleted: false,
      isActive: true,
    },
    {
      step: 4,
      title: "Pre-University",
      description: "Chuẩn bị cho đại học và các kỳ thi quốc tế",
      isCompleted: false,
      isActive: false,
    },
    {
      step: 5,
      title: "Global Citizen",
      description: "Thành thạo tiếng Anh như người bản ngữ",
      isCompleted: false,
      isActive: false,
    },
  ];

  const achievementBadges = [
    {
      icon: "🎓",
      title: "IELTS for Schools",
      subtitle: "6.0 - 8.5+",
      color: "from-blue-500 to-cyan-500",
      description: "Chứng chỉ du học phổ biến nhất",
    },
    {
      icon: "📜",
      title: "Cambridge First",
      subtitle: "B2 Level",
      color: "from-purple-500 to-pink-500",
      description: "Chứng chỉ quốc tế uy tín",
    },
    {
      icon: "🏆",
      title: "TOEFL iBT",
      subtitle: "80-120 pts",
      color: "from-orange-500 to-red-500",
      description: "Tiêu chuẩn Mỹ - Canada",
    },
    {
      icon: "✨",
      title: "SAT English",
      subtitle: "600-800 pts",
      color: "from-green-500 to-emerald-500",
      description: "Thi vào đại học Mỹ",
    },
    {
      icon: "🌟",
      title: "Học bổng",
      subtitle: "Up to 100%",
      color: "from-yellow-500 to-orange-500",
      description: "Du học với học bổng toàn phần",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-8 sm:right-32 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/908b52567c05761a61c0979fd65758b228ed742f?placeholderIfAbsent=true"
        className="object-contain absolute bottom-0 left-2/4 z-0 -translate-x-2/4 aspect-[1.14] h-[400px] sm:h-[600px] lg:h-[840px] translate-y-[0%] w-[400px] sm:w-[600px] lg:w-[800px] opacity-10"
        alt=""
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full mb-6 sm:mb-8 space-y-4 lg:space-y-0">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                LỘ TRÌNH HỌC DÀNH CHO TEENS
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium mt-2 max-w-md lg:max-w-none">
                🚀 Từ Zero đến Hero - Chinh phục tiếng Anh cùng thế hệ Gen Z!
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-3 sm:mt-4">
                <div className="px-2 sm:px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-xs font-semibold text-purple-700">
                  📚 Lớp 6-12
                </div>
                <div className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-xs font-semibold text-blue-700">
                  🎯 Du học - Chứng chỉ
                </div>
                <div className="px-2 sm:px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-xs font-semibold text-green-700">
                  ⚡ 1 kèm 1 Online
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end items-center">
            <div className="flex gap-2 sm:gap-2.5 items-center">
              <div className="flex overflow-hidden flex-col justify-center items-center bg-gradient-to-br from-yellow-400 to-orange-400 h-[40px] sm:h-[48px] lg:h-[58px] rounded-full w-[40px] sm:w-[48px] lg:w-[58px] shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/7fe39650d3675ad48497574ab2254dab7be7286e?placeholderIfAbsent=true"
                  className="object-contain aspect-[1.43] w-[28px] sm:w-[35px] lg:w-[43px]"
                  alt=""
                />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-700 text-center lg:text-left">
                Wings of
                <br />
                <span className="text-indigo-600">Opportunity</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex flex-col justify-center mt-4 sm:mt-6 w-full">
          {/* Level Cards - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 w-full text-xs font-bold leading-4 text-blue-900">
            {levelData.map((level, index) => (
              <LevelCard
                key={index}
                title={level.title}
                subtitle={level.subtitle}
                skills={level.skills}
                backgroundColor={level.backgroundColor}
              />
            ))}
          </div>

          {/* Modern Certification Section */}
          <div className="mt-6 sm:mt-8 w-full space-y-6 sm:space-y-8">
            {/* Cambridge Certificates */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-center text-slate-800">
                {cambridgeData.label}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                {cambridgeData.items.map((item, index) => (
                  <div
                    key={index}
                    className={`
											p-4 bg-gradient-to-br ${item.color} rounded-xl text-white
											shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1
											group cursor-pointer relative overflow-hidden
										`}
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="font-bold text-sm mb-1">{item.text}</div>
                      <div className="text-xs opacity-90">Teens Certified</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CEFR Levels */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-center text-slate-800">
                {cefrData.label}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                {cefrData.items.map((item, index) => (
                  <div
                    key={index}
                    className={`
											p-4 bg-gradient-to-br ${item.color} rounded-xl text-white
											shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1
											group cursor-pointer relative overflow-hidden
										`}
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="font-bold text-sm mb-1">{item.text}</div>
                      <div className="text-xs opacity-90 mb-1">
                        {item.subtitle}
                      </div>
                      <div className="text-[10px] opacity-80">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Study Duration */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-center text-slate-800">
                {durationData.label}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                {durationData.items.map((item, index) => (
                  <div
                    key={index}
                    className={`
											p-4 bg-gradient-to-br ${item.color} rounded-xl text-white
											shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1
											group cursor-pointer relative overflow-hidden
										`}
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="font-bold text-sm mb-1">{item.text}</div>
                      <div className="text-xs opacity-90 mb-1">
                        {item.subtitle}
                      </div>
                      <div className="text-[10px] opacity-80">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <AchievementBadges badges={achievementBadges} />

          {/* Teen-specific features - Mobile Optimized */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
            <TeenProgressTracker steps={progressSteps} />
            <TeenStudyTips />
          </div>

          {/* Teen Statistics */}
          <TeenStats />

          {/* Call to Action for Teens */}
          <TeenCTA />
        </main>
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/7c7df2b82b9b6f495a354806f8b5fe612a2ce08d?placeholderIfAbsent=true"
        className="object-contain absolute z-0 shrink-0 aspect-[1.21] bottom-[321px] h-[34px] left-[98px] w-[41px] hidden sm:block"
        alt=""
      />
    </section>
  );
};

export default RoadmapSection;
