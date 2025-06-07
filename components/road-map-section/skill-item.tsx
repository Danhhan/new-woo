"use client";
import * as React from "react";

interface SkillItemProps {
	iconSrc: string;
	text: string;
}

export const SkillItem: React.FC<SkillItemProps> = ({ iconSrc, text }) => {
	return (
		<div className="flex overflow-hidden gap-0.5 items-start mt-1.5 w-full">
			<img
				src={iconSrc}
				className="object-contain shrink-0 w-3.5 aspect-square"
				alt=""
			/>
			<div className="flex-1 shrink basis-0">{text}</div>
		</div>
	);
};
