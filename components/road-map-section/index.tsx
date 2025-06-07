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
			subtitle: "Teen Foundation",
			backgroundColor: "bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/10",
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
			subtitle: "Teen Explorer",
			backgroundColor: "bg-gradient-to-br from-[#083D77]/20 to-[#083D77]/10",
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
			subtitle: "Teen Leader",
			backgroundColor: "bg-gradient-to-br from-[#FFD700]/30 to-[#FFD700]/20",
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
			subtitle: "Pre-University",
			backgroundColor: "bg-gradient-to-br from-[#083D77]/30 to-[#083D77]/20",
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
			subtitle: "Global Citizen",
			backgroundColor: "bg-gradient-to-br from-gray-200 to-gray-100",
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
			{ text: "Level A2" },
			{ text: "Level B1" },
			{ text: "Level B2" },
			{ text: "Level C1" },
			{ text: "Level C2" },
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
		<section
			id="roadmap"
			className="relative py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 overflow-hidden"
		>
			{/* Animated background elements */}
			<div className="absolute inset-0">
				<div className="absolute top-10 sm:top-20 left-2 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 bg-[#FFD700] rounded-full opacity-10 animate-float"></div>
				<div className="absolute top-20 sm:top-40 right-4 sm:right-32 w-12 sm:w-24 h-12 sm:h-24 bg-[#083D77] rounded-full opacity-10 animate-float delay-1000"></div>
				<div className="absolute bottom-16 sm:bottom-32 left-1/3 w-20 sm:w-40 h-20 sm:h-40 bg-[#FFD700] rounded-full opacity-5 animate-float delay-2000"></div>
			</div>

			<div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
				{/* Mobile-First Header */}
				<header className="text-center mb-6 sm:mb-8">
					<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#083D77] via-[#083D77] to-[#FFD700] bg-clip-text text-transparent leading-tight mb-3 sm:mb-4">
						LỘ TRÌNH HỌC DÀNH CHO TEENS
					</h1>
					<p className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium mb-4">
						Từ Zero đến Hero - Chinh phục tiếng Anh cùng thế hệ Gen Z
					</p>

					{/* Compact Badge Section */}
					<div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-4">
						<div className="flex flex-wrap justify-center gap-2">
							<span className="px-2 py-1 bg-[#FFD700]/20 text-[#083D77] rounded-full text-xs font-semibold">
								Lớp 6-12
							</span>
							<span className="px-2 py-1 bg-[#083D77]/20 text-[#083D77] rounded-full text-xs font-semibold">
								Du học - Chứng chỉ
							</span>
							<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
								1 kèm 1 Online
							</span>
						</div>

						{/* Logo */}
						{/* <div className="flex gap-2 items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/7fe39650d3675ad48497574ab2254dab7be7286e?placeholderIfAbsent=true"
                alt="WOO GROUP Logo"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div> */}
						<div className="flex gap-2 items-center">
							<div className="flex overflow-hidden flex-col justify-center items-center bg-gradient-to-br from-yellow-400 to-orange-400 h-[36px] sm:h-[40px] lg:h-[48px] rounded-full w-[36px] sm:w-[40px] lg:w-[48px] shadow-lg">
								<img
									src="https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/7fe39650d3675ad48497574ab2254dab7be7286e?placeholderIfAbsent=true"
									className="object-contain aspect-[1.43] w-[24px] sm:w-[28px] lg:w-[32px]"
									alt=""
								/>
							</div>
							<div className="text-xs font-bold text-slate-700 text-center">
								<div>Wings of</div>
								<div className="text-indigo-600">Opportunity</div>
							</div>
						</div>
					</div>
				</header>

				<main className="space-y-6 sm:space-y-8">
					{/* Level Cards - Mobile Responsive */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
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

					{/* Certification Section - Mobile Friendly */}
					<div className="space-y-4 sm:space-y-6">
						<CertificationRow
							label={cambridgeData.label}
							items={cambridgeData.items}
						/>

						<div className="space-y-2">
							<div className="text-sm font-bold text-[#083D77]">CEFR</div>
							<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
								{cefrData.items.map((item, index) => (
									<div
										key={index}
										className="overflow-hidden px-1 pt-1 pb-2 bg-[#FFD700] rounded-md border-neutral-800 shadow-[3px_3px_0px_rgba(34,34,34,1)]"
									>
										<div className="overflow-hidden gap-1.5 px-2 py-1.5 w-full bg-white rounded-md border-neutral-800 shadow-[1px_1px_0px_rgba(34,34,34,1)] text-[10px] sm:text-xs text-center text-[#083D77]">
											{item.text}
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="space-y-2">
							<div className="text-sm font-bold text-[#083D77]">Thời lượng</div>
							<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
								{durationData.items.map((item, index) => (
									<div
										key={index}
										className="overflow-hidden px-1 pt-1 pb-2 bg-[#083D77] rounded-md border-neutral-800 shadow-[3px_3px_0px_rgba(34,34,34,1)]"
									>
										<div className="overflow-hidden gap-1.5 px-2 py-1.5 w-full bg-white rounded-md border-neutral-800 shadow-[1px_1px_0px_rgba(34,34,34,1)] text-[10px] sm:text-xs text-center text-[#083D77]">
											{item.text}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					<AchievementBadges badges={achievementBadges} />

					{/* Teen Features - Mobile Stack */}
					<div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
						<TeenProgressTracker steps={progressSteps} />
						<TeenStudyTips />
					</div>

					<TeenStats />
					<TeenCTA />
				</main>
			</div>
		</section>
	);
};

export default RoadmapSection;
