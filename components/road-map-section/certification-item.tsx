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
    <div className="space-y-2">
      <div className="text-sm text-sky-900 px-2 sm:px-0">{label}</div>
      <div className="px-2 sm:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5 sm:gap-2 text-xs text-center text-blue-900">
          {items.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden px-1 pt-1 pb-2 bg-cyan-400 rounded-md border-neutral-800 shadow-[3px_3px_0px_rgba(34,34,34,1)]"
            >
              <div className="overflow-hidden gap-1.5 px-1.5 sm:px-2 py-1.5 w-full bg-white rounded-md border-neutral-800 shadow-[1px_1px_0px_rgba(34,34,34,1)] text-[10px] sm:text-xs">
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
  );
};
