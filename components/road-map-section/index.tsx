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
    label: "Cambridge",
    items: [
      { text: "A2 KEY", fontSize: "11px" },
      { text: "B1 PET" },
      { text: "B2 FIRST" },
      { text: "C1 ADVANCED" },
      { text: "C2 PROFICIENCY" },
    ],
  };

  const cefrData = {
    label: "CEFR",
    items: [
      { text: "🟢 Level A2" },
      { text: "🔵 Level B1" },
      { text: "🟡 Level B2" },
      { text: "🟠 Level C1" },
      { text: "🔴 Level C2" },
    ],
  };

  const durationData = {
    label: "Thời lượng",
    items: [
      { text: "80 buổi" },
      { text: "100 buổi" },
      { text: "120 buổi" },
      { text: "140 buổi" },
      { text: "160 buổi" },
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
      src: "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/625af75d4bb3d1bd91db9dc3178aba0afba8958b?placeholderIfAbsent=true",
      aspectRatio: "aspect-[0.73]",
      width: "w-[57px]",
      title: "IELTS for Schools",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/b85b725901e0cd78d5659f22647bc4740b4b5829?placeholderIfAbsent=true",
      aspectRatio: "aspect-[0.73]",
      width: "w-[57px]",
      title: "Cambridge B2 First",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/fcdcc224056a76314ed3c045f2859f9fa5e2b283?placeholderIfAbsent=true",
      aspectRatio: "aspect-[0.82]",
      width: "w-16",
      title: "TOEFL Junior",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/c9ff47b0e5d720847da5730af6e0290621303654?placeholderIfAbsent=true",
      aspectRatio: "aspect-[0.85]",
      width: "w-[66px]",
      title: "SAT/ACT Prep",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/ab4be5ccc16276ad4f5fb05f5a742e71b956574d?placeholderIfAbsent=true",
      aspectRatio: "aspect-square",
      width: "w-[78px]",
      title: "Du học - Học bổng",
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/908b52567c05761a61c0979fd65758b228ed742f?placeholderIfAbsent=true"
        className="object-contain absolute bottom-0 left-2/4 z-0 -translate-x-2/4 aspect-[1.14] h-[840px] translate-y-[0%] w-[800px] max-md:max-w-full opacity-10"
        alt=""
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="flex flex-wrap justify-between items-center w-full mb-8">
          <div className="flex-1 shrink self-stretch my-auto basis-0 min-w-60">
            <div className="flex flex-col items-start w-full">
              <h1 className="text-4xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent max-md:max-w-full max-md:text-3xl">
                LỘ TRÌNH HỌC DÀNH CHO TEENS
              </h1>
              <p className="text-lg text-slate-600 font-medium mt-2 max-md:text-base">
                🚀 Từ Zero đến Hero - Chinh phục tiếng Anh cùng thế hệ Gen Z!
              </p>
              <div className="flex gap-3 mt-4">
                <div className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-semibold text-purple-700">
                  📚 Lớp 6-12
                </div>
                <div className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-sm font-semibold text-blue-700">
                  🎯 Du học - Chứng chỉ
                </div>
                <div className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-semibold text-green-700">
                  ⚡ 1 kèm 1 Online
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3.5 items-center self-stretch my-auto">
            <div className="flex gap-2.5 items-center self-stretch my-auto">
              <div className="flex overflow-hidden flex-col justify-center items-center self-stretch pr-2 pl-2 my-auto bg-gradient-to-br from-yellow-400 to-orange-400 h-[58px] min-h-[58px] rounded-full w-[58px] shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/7fe39650d3675ad48497574ab2254dab7be7286e?placeholderIfAbsent=true"
                  className="object-contain aspect-[1.43] w-[43px]"
                  alt=""
                />
              </div>
              <div className="self-stretch my-auto text-sm font-bold text-slate-700">
                Wings of
                <br />
                <span className="text-indigo-600">Opportunity</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex flex-col justify-center mt-6 w-full">
          <div className="flex flex-wrap gap-3 w-full text-xs font-bold leading-4 text-blue-900 max-md:max-w-full">
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

          <div className="mt-4 w-full font-extrabold max-md:max-w-full">
            <div className="flex flex-wrap gap-1 items-start w-full max-md:max-w-full">
              <CertificationRow
                label={cambridgeData.label}
                items={cambridgeData.items}
              />
            </div>

            <div className="flex flex-wrap gap-1 items-start mt-8 w-full max-md:max-w-full">
              <div className="text-sm text-sky-900 w-[69px]">CEFR</div>
              <div className="flex flex-1 shrink gap-4 justify-center items-center text-xs text-center text-blue-900 basis-0 min-w-60 max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto w-full basis-0 min-w-60 max-md:max-w-full">
                  <div className="flex flex-wrap gap-2 items-start w-full max-md:max-w-full">
                    {cefrData.items.map((item, index) => (
                      <div
                        key={index}
                        className="overflow-hidden flex-1 shrink px-1 pt-1 pb-2 bg-cyan-400 rounded-md basis-0 border-neutral-800 shadow-[3px_3px_0px_rgba(34,34,34,1)]"
                      >
                        <div className="overflow-hidden gap-1.5 self-stretch px-3.5 py-1.5 w-full bg-white rounded-md border-neutral-800 shadow-[1px_1px_0px_rgba(34,34,34,1)]">
                          {item.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1 items-start mt-8 w-full max-md:max-w-full">
              <div className="text-sm text-sky-900 w-[69px]">Thời lượng</div>
              <div className="flex flex-1 shrink gap-4 justify-center items-center text-xs text-center text-blue-900 basis-0 min-w-60 max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto w-full basis-0 min-w-60 max-md:max-w-full">
                  <div className="flex flex-wrap gap-2 items-start w-full max-md:max-w-full">
                    {durationData.items.map((item, index) => (
                      <div
                        key={index}
                        className="overflow-hidden flex-1 shrink px-1 pt-1 pb-2 bg-cyan-400 rounded-md basis-0 border-neutral-800 shadow-[3px_3px_0px_rgba(34,34,34,1)]"
                      >
                        <div className="overflow-hidden gap-1.5 self-stretch px-3.5 py-1.5 w-full bg-white rounded-md border-neutral-800 shadow-[1px_1px_0px_rgba(34,34,34,1)]">
                          {item.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <AchievementBadges badges={achievementBadges} />

          {/* Teen-specific features */}
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
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
        className="object-contain absolute z-0 shrink-0 aspect-[1.21] bottom-[321px] h-[34px] left-[98px] w-[41px]"
        alt=""
      />
    </section>
  );
};

export default RoadmapSection;
