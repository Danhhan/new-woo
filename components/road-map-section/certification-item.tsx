"use client";
import * as React from "react";

interface CertificationItem {
	text: string;
	fontSize?: string;
}

interface CertificationRowProps {
	label: string;
	items: CertificationItem[];
}

export const CertificationRow: React.FC<CertificationRowProps> = ({
	label,
	items,
}) => {
	return (
		<div className="flex flex-wrap gap-1 items-start w-full max-md:max-w-full">
			<div className="text-sm text-sky-900 w-[69px]">{label}</div>
			<div className="flex flex-col flex-1 shrink justify-center text-xs text-center text-blue-900 basis-0 min-w-60 max-md:max-w-full">
				<div className="flex flex-col justify-center w-full max-md:max-w-full">
					<div className="flex flex-wrap gap-2 items-start w-full max-md:max-w-full">
						{items.map((item, index) => (
							<div
								key={index}
								className="overflow-hidden flex-1 shrink px-1 pt-1 pb-2 bg-cyan-400 rounded-md basis-0 border-neutral-800 shadow-[3px_3px_0px_rgba(34,34,34,1)]"
							>
								<div className="overflow-hidden gap-1.5 self-stretch px-3.5 py-1.5 w-full bg-white rounded-md border-neutral-800 shadow-[1px_1px_0px_rgba(34,34,34,1)]">
									{item.fontSize ? (
										<span style={{ fontSize: item.fontSize }}>{item.text}</span>
									) : (
										item.text
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
