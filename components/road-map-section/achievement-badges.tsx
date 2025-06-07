"use client";
import * as React from "react";

interface Badge {
	src: string;
	aspectRatio: string;
	width: string;
}

interface AchievementBadgesProps {
	badges: Badge[];
}

export const AchievementBadges: React.FC<AchievementBadgesProps> = ({
	badges,
}) => {
	return (
		<div className="flex flex-col justify-center mt-4 w-full max-md:max-w-full">
			<div className="flex flex-wrap gap-1 w-full max-md:max-w-full">
				<div className="self-start text-sm font-extrabold leading-5 text-sky-900 w-[69px]">
					Thời lượng
				</div>
				<div className="flex flex-wrap flex-1 shrink gap-1 items-start h-full basis-0 min-w-60 max-md:max-w-full">
					{badges.map((badge, index) => (
						<div
							key={index}
							className="flex flex-col flex-1 shrink items-center basis-0"
						>
							<img
								src={badge.src}
								className={`object-contain ${badge.aspectRatio} ${badge.width}`}
								alt=""
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
