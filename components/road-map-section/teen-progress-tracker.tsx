"use client";
import * as React from "react";

interface ProgressStep {
  step: number;
  title: string;
  description: string;
  isCompleted: boolean;
  isActive: boolean;
}

interface TeenProgressTrackerProps {
  steps: ProgressStep[];
}

export const TeenProgressTracker: React.FC<TeenProgressTrackerProps> = ({
  steps,
}) => {
  return (
    <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
      <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 sm:mb-6 text-center">
        🎯 Theo dõi hành trình học tập của bạn
      </h3>

      <div className="relative">
        {/* Progress line */}
        <div className="absolute left-6 top-8 w-0.5 h-full bg-slate-200"></div>
        <div
          className="absolute left-6 top-8 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 transition-all duration-1000 ease-out"
          style={{
            height: `${(steps.filter((s) => s.isCompleted).length / steps.length) * 100}%`,
          }}
        ></div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-start space-x-4">
              {/* Step indicator */}
              <div
                className={`
								relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm
								transition-all duration-300 transform
								${
                  step.isCompleted
                    ? "bg-gradient-to-br from-green-400 to-emerald-500 text-white scale-110 shadow-lg"
                    : step.isActive
                      ? "bg-gradient-to-br from-purple-400 to-pink-500 text-white scale-105 shadow-md animate-pulse"
                      : "bg-slate-200 text-slate-500 hover:bg-slate-300"
                }
							`}
              >
                {step.isCompleted ? (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  step.step
                )}
              </div>

              {/* Step content */}
              <div
                className={`
								flex-1 pb-6 transition-all duration-300
								${step.isActive ? "transform translate-x-1" : ""}
							`}
              >
                <h4
                  className={`
									font-bold mb-1 transition-colors duration-300
									${
                    step.isCompleted
                      ? "text-green-600"
                      : step.isActive
                        ? "text-purple-600"
                        : "text-slate-600"
                  }
								`}
                >
                  {step.title}
                </h4>
                <p
                  className={`
									text-sm transition-colors duration-300
									${step.isActive ? "text-slate-700" : "text-slate-500"}
								`}
                >
                  {step.description}
                </p>

                {/* Progress indicator for active step */}
                {step.isActive && (
                  <div className="mt-2">
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-purple-600 mt-1 font-medium">
                      Đang học - 60% hoàn thành
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
