"use client";
import * as React from "react";
import { SkillItem } from "./skill-item";

interface Skill {
	iconSrc: string;
	text: string;
}

interface LevelCardProps {
	title: string;
	subtitle: string;
	skills: Skill[];
	backgroundColor: string;
}

export const LevelCard: React.FC<LevelCardProps> = ({
	title,
	subtitle,
	skills,
	backgroundColor,
}) => {
	return (
		<div
			className={`overflow-hidden flex-1 shrink pt-1 pr-1 pb-2 pl-1 ${backgroundColor} rounded-md basis-0 border-neutral-800 shadow-[3px_3px_0px_rgba(34,34,34,1)]`}
		>
			<div className="overflow-hidden gap-1.5 self-stretch px-3.5 py-1.5 w-full text-xs font-extrabold leading-4 text-center bg-white rounded-md border-neutral-800 shadow-[1px_1px_0px_rgba(34,34,34,1)] text-neutral-800">
				{title}
				<br />
				{subtitle}
			</div>
			{skills.map((skill, index) => (
				<SkillItem key={index} iconSrc={skill.iconSrc} text={skill.text} />
			))}
		</div>
	);
};
