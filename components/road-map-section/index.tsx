"use client";
import * as React from "react";
import { LevelCard } from "./level-card";
import { CertificationRow } from "./certification-item";
import { AchievementBadges } from "./achievement-badges";

export const RoadmapSection: React.FC = () => {
	const levelData = [
		{
			title: "CẤP ĐỘ 1",
			subtitle: "(English Explorer)",
			backgroundColor: "bg-amber-100",
			skills: [
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/674959b8217f0b4ba591d160cdd2c928ab1a314b?placeholderIfAbsent=true",
					text: "Hiểu và làm theo lệnh đơn giản không cần dịch",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/b454e0e35a7af75e9da84b714ed1744817100729?placeholderIfAbsent=true",
					text: "Nói được câu đơn có ngữ điệu khi có hướng dẫn",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/800bf997e8a477dc609795e62c4021883642b8cb?placeholderIfAbsent=true",
					text: "Lặp lại đúng mẫu câu và phản xạ khi được hỏi",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/4302d94cd775fa7d6866578688bf726cf2336206?placeholderIfAbsent=true",
					text: "Giao tiếp 30–40% tiếng Anh trong lớp",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/4e3464f97a2e59f15806c54ef21acfb9ea72bc6c?placeholderIfAbsent=true",
					text: "Tự tin giới thiệu bản thân bằng tiếng Anh",
				},
			],
		},
		{
			title: "CẤP ĐỘ 2",
			subtitle: "(Everyday Communicator)",
			backgroundColor: "bg-amber-200",
			skills: [
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/27067db0a81de8db63cdf26be8456cbc5d355612?placeholderIfAbsent=true",
					text: "Giao tiếp 100% tiếng Anh trong lớp",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/1f2600b948923e7c90157d6119cf0ac51696bd08?placeholderIfAbsent=true",
					text: "Nói đoạn 3–5 câu theo chủ đề quen thuộc",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/33837eeb0c01799338499c0a87d1eb9ede92a02b?placeholderIfAbsent=true",
					text: "Diễn đạt cảm xúc và lý do đơn giản",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/f1dd410ba561c45e6c1c06244cd3f98931b5f681?placeholderIfAbsent=true",
					text: "Hỏi – đáp tự nhiên, phản hồi nhanh",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/ca501de2c0aaf3780f4cdaa7b9d13704cfe9362e?placeholderIfAbsent=true",
					text: "Bắt đầu mô tả tranh và kể chuyện ngắn",
				},
			],
		},
		{
			title: "CẤP ĐỘ 3",
			subtitle: "(Confident Speaker)",
			backgroundColor: "bg-amber-300",
			skills: [
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/8a589a89e4808f5180cdec372a75dbba6d850198?placeholderIfAbsent=true",
					text: "Nói đoạn 6–8 câu có dẫn dắt – ví dụ – lý do",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/76815c865f75a4cdc28d9c6207116248abf4b493?placeholderIfAbsent=true",
					text: "Giao tiếp linh hoạt trong tình huống đời thực",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/57bc17d1139c3cca9dbc7c3c4e0ca162ebf3c5d8?placeholderIfAbsent=true",
					text: "Kể chuyện đầy đủ mở – thân – kết",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/e5e91761ea6b28bfe77bd0ffa573b476431ca1b5?placeholderIfAbsent=true",
					text: "Mô tả tranh chi tiết, có nhận xét – so sánh",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/dc91b180516717ed973f8105f752229e9b5bf623?placeholderIfAbsent=true",
					text: "Diễn đạt quan điểm cá nhân rõ ràng",
				},
			],
		},
		{
			title: "CẤP ĐỘ 4",
			subtitle: "(Academic Communicator)",
			backgroundColor: "bg-yellow-300",
			skills: [
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/924a98ac0a94d612a471a0433f192c6df415fdda?placeholderIfAbsent=true",
					text: "Thuyết trình cá nhân 2–3 phút theo cấu trúc",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/246da3b41049f168cfac5f9ba4d70a27f9fb2826?placeholderIfAbsent=true",
					text: "Đưa quan điểm – phản biện nhẹ – mở rộng ý",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/69d07c2a7346034e518f31c162e86a053843dd0f?placeholderIfAbsent=true",
					text: "Tư duy trình bày mạch lạc, logic",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/cd46fe32fee7a7401169cff3bfd64e5f17ad1d60?placeholderIfAbsent=true",
					text: "Sử dụng từ nối – ví dụ – so sánh linh hoạt",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/41505fe1d25e807866fc0e8f2dbc18ade8841570?placeholderIfAbsent=true",
					text: "Giao tiếp học thuật cơ bản trong lớp",
				},
			],
		},
		{
			title: "CẤP ĐỘ 5",
			subtitle: "(Confident Debater)",
			backgroundColor: "bg-yellow-400",
			skills: [
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/624b1b2764bda20d5222e17d64db6d4d775d33bc?placeholderIfAbsent=true",
					text: "Giao tiếp trôi chảy, không cần dịch trong đầu",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/f2c197c2b66fb0c23e3d1decee7000a37c104ee3?placeholderIfAbsent=true",
					text: "Trình bày rõ ràng với dẫn chứng và cảm xúc",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/784c9d6c19380ccb026019d93ea0ca4d63c0c801?placeholderIfAbsent=true",
					text: "Phản biện sâu, dùng idioms – phrasal verbs",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/8602b9203ea5266189adc405f1275c44bafc2c0d?placeholderIfAbsent=true",
					text: "Làm chủ các format thuyết trình & tranh luận",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/625a2a5976803e5cd22ed6d1b7254edaf5ef0c1f?placeholderIfAbsent=true",
					text: "Sẵn sàng thi PET hoặc IELTS Speaking 5.5–6.5",
				},
			],
		},
	];

	const cambridgeData = {
		label: "Cambridge",
		items: [
			{ text: "STARTERS", fontSize: "11px" },
			{ text: "MOVERS" },
			{ text: "FLYERS/KET" },
			{ text: "PET" },
			{ text: "FCE" },
		],
	};

	const cefrData = {
		label: "CEFR",
		items: [
			{ text: "🟤 Level A0" },
			{ text: "🟢 Level A1" },
			{ text: "🔵 Level A2" },
			{ text: "🟡 Level B1" },
			{ text: "🔴 Level B2" },
		],
	};

	const durationData = {
		label: "Thời lượng",
		items: [
			{ text: "60 buổi" },
			{ text: "60 buổi" },
			{ text: "120 bu���i" },
			{ text: "120 buổi" },
			{ text: "180 buổi" },
		],
	};

	const achievementBadges = [
		{
			src: "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/625af75d4bb3d1bd91db9dc3178aba0afba8958b?placeholderIfAbsent=true",
			aspectRatio: "aspect-[0.73]",
			width: "w-[57px]",
		},
		{
			src: "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/b85b725901e0cd78d5659f22647bc4740b4b5829?placeholderIfAbsent=true",
			aspectRatio: "aspect-[0.73]",
			width: "w-[57px]",
		},
		{
			src: "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/fcdcc224056a76314ed3c045f2859f9fa5e2b283?placeholderIfAbsent=true",
			aspectRatio: "aspect-[0.82]",
			width: "w-16",
		},
		{
			src: "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/c9ff47b0e5d720847da5730af6e0290621303654?placeholderIfAbsent=true",
			aspectRatio: "aspect-[0.85]",
			width: "w-[66px]",
		},
		{
			src: "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/ab4be5ccc16276ad4f5fb05f5a742e71b956574d?placeholderIfAbsent=true",
			aspectRatio: "aspect-square",
			width: "w-[78px]",
		},
	];

	return (
		<section className="flex overflow-hidden relative items-start py-10">
			<img
				src="https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/908b52567c05761a61c0979fd65758b228ed742f?placeholderIfAbsent=true"
				className="object-contain absolute bottom-0 left-2/4 z-0 -translate-x-2/4 aspect-[1.14] h-[840px] translate-y-[0%] w-[800px] max-md:max-w-full"
				alt=""
			/>
			<div className="z-0 self-stretch my-auto w-[800px] max-md:max-w-full">
				<header className="flex flex-wrap justify-between items-center px-10 w-full max-md:px-5 max-md:max-w-full">
					<div className="flex-1 shrink self-stretch my-auto text-3xl font-extrabold text-sky-900 basis-0 min-w-60 max-md:max-w-full">
						<div className="flex flex-col items-start w-full max-md:max-w-full">
							<h1 className="gap-2.5 max-md:max-w-full">
								LỘ TRÌNH HỌC DÀNH CHO TEENS
							</h1>
							<img
								src="https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/a3f10b8b79a0235821fc9aca96b22509a2168b13?placeholderIfAbsent=true"
								className="object-contain aspect-[5.32] w-[85px]"
								alt=""
							/>
						</div>
					</div>
					<div className="flex gap-3.5 items-center self-stretch my-auto">
						<div className="flex gap-2.5 items-center self-stretch my-auto">
							<div className="flex overflow-hidden flex-col justify-center items-center self-stretch pr-2 pl-2 my-auto bg-yellow-400 h-[58px] min-h-[58px] rounded-[34.091px] w-[58px]">
								<img
									src="https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/7fe39650d3675ad48497574ab2254dab7be7286e?placeholderIfAbsent=true"
									className="object-contain aspect-[1.43] w-[43px]"
									alt=""
								/>
							</div>
							<div className="self-stretch my-auto text-sm text-sky-900 border-indigo-900">
								Wings of
								<br />
								Opportunity
							</div>
						</div>
					</div>
				</header>

				<main className="flex flex-col justify-center px-10 mt-6 w-full max-md:px-5 max-md:max-w-full">
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
