"use client";
import * as React from "react";

interface Stat {
  number: string;
  label: string;
  color: string;
}

export const TeenStats: React.FC = () => {
  const stats: Stat[] = [
    {
      number: "95%",
      label: "Học sinh đạt mục tiêu",
      color: "from-[#FFD700] to-[#FFD700]",
    },
    {
      number: "2,000+",
      label: "Teens đã thành công",
      color: "from-[#083D77] to-[#083D77]",
    },
    {
      number: "15+",
      label: "Quốc gia du học",
      color: "from-[#FFD700] to-[#FFD700]",
    },
    {
      number: "8.5/10",
      label: "Điểm IELTS trung bình",
      color: "from-[#083D77] to-[#083D77]",
    },
  ];

  return (
    <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
      <h3 className="text-lg sm:text-2xl font-bold text-center mb-6 sm:mb-8">
        <span className="bg-gradient-to-r from-[#083D77] to-[#FFD700] bg-clip-text text-transparent">
          Thành tích của các Teen WOO
        </span>
      </h3>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center group cursor-pointer">
            <div
              className={`
							inline-flex items-center justify-center w-16 h-16 rounded-full mb-4
							bg-gradient-to-br ${stat.color} text-white shadow-lg
							group-hover:shadow-xl group-hover:scale-110 transition-all duration-300
						`}
            >
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div
              className={`
							text-3xl font-black mb-2 
							bg-gradient-to-br ${stat.color} bg-clip-text text-transparent
							group-hover:scale-105 transition-transform duration-300
						`}
            >
              {stat.number}
            </div>
            <div className="text-sm font-semibold text-gray-600 group-hover:text-[#083D77] transition-colors duration-300">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6 text-sm">
        <div className="p-4 bg-gradient-to-br from-[#FFD700]/10 to-[#FFD700]/5 rounded-lg">
          <h4 className="font-bold text-[#083D77] mb-2">Giải thưởng gần đây</h4>
          <ul className="space-y-1 text-gray-600">
            <li>• Nguyễn An - IELTS 8.0, nhận học bổng Oxford</li>
            <li>• Trần Minh - Cambridge FCE, vào ĐH Quốc gia Singapore</li>
            <li>• Lê Hương - TOEFL 110, du học Mỹ</li>
          </ul>
        </div>

        <div className="p-4 bg-gradient-to-br from-[#083D77]/10 to-[#083D77]/5 rounded-lg">
          <h4 className="font-bold text-[#083D77] mb-2">
            Phản hồi từ phụ huynh
          </h4>
          <div className="text-gray-600">
            <p className="italic">
              "Con em từ ngại nói tiếng Anh đến tự tin thuyết trình trước lớp
              chỉ sau 6 tháng học."
            </p>
            <p className="text-xs mt-2 font-semibold">
              - Cô Lan, phụ huynh học sinh Minh Châu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
