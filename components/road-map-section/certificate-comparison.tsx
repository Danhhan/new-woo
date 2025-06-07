"use client";
import * as React from "react";

interface CertificateInfo {
  name: string;
  level: string;
  duration: string;
  cost: string;
  recognition: string;
  icon: string;
  color: string;
  popular: boolean;
}

export const CertificateComparison: React.FC = () => {
  const certificates: CertificateInfo[] = [
    {
      name: "IELTS for Schools",
      level: "4.0 - 9.0",
      duration: "2h 45m",
      cost: "5.6M VNĐ",
      recognition: "Toàn cầu",
      icon: "🎓",
      color: "from-blue-500 to-cyan-500",
      popular: true,
    },
    {
      name: "Cambridge B2 First",
      level: "B2 (Upper-Inter)",
      duration: "3h 30m",
      cost: "5.2M VNĐ",
      recognition: "Châu Âu + Úc",
      icon: "📜",
      color: "from-purple-500 to-pink-500",
      popular: false,
    },
    {
      name: "TOEFL iBT",
      level: "0 - 120 pts",
      duration: "3h",
      cost: "5.7M VNĐ",
      recognition: "Mỹ + Canada",
      icon: "🏆",
      color: "from-orange-500 to-red-500",
      popular: false,
    },
  ];

  return (
    <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
      <h3 className="text-lg sm:text-xl font-bold text-center text-slate-800 mb-6">
        📊 So sánh chứng chỉ phổ biến cho Teens
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200">
              <th className="text-left py-3 px-2 font-bold text-slate-800">
                Chứng chỉ
              </th>
              <th className="text-center py-3 px-2 font-bold text-slate-800">
                Trình độ
              </th>
              <th className="text-center py-3 px-2 font-bold text-slate-800">
                Thời gian thi
              </th>
              <th className="text-center py-3 px-2 font-bold text-slate-800">
                Chi phí
              </th>
              <th className="text-center py-3 px-2 font-bold text-slate-800">
                Công nhận
              </th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((cert, index) => (
              <tr
                key={index}
                className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200"
              >
                <td className="py-4 px-2">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`
											w-10 h-10 rounded-full bg-gradient-to-br ${cert.color} 
											flex items-center justify-center text-white text-lg
										`}
                    >
                      {cert.icon}
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 flex items-center gap-2">
                        {cert.name}
                        {cert.popular && (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-semibold">
                            🔥 Phổ biến
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center py-4 px-2 font-semibold text-slate-700">
                  {cert.level}
                </td>
                <td className="text-center py-4 px-2 text-slate-600">
                  {cert.duration}
                </td>
                <td className="text-center py-4 px-2 text-slate-600">
                  {cert.cost}
                </td>
                <td className="text-center py-4 px-2 text-slate-600">
                  {cert.recognition}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
        <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
          <h4 className="font-bold text-emerald-600 mb-2">
            💡 Lời khuyên cho Teens
          </h4>
          <ul className="space-y-1 text-slate-600">
            <li>
              • <strong>IELTS:</strong> Phù hợp nhất cho du học
            </li>
            <li>
              • <strong>Cambridge:</strong> Chứng chỉ trọng đời
            </li>
            <li>
              • <strong>TOEFL:</strong> Bắt buộc cho Mỹ/Canada
            </li>
          </ul>
        </div>

        <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
          <h4 className="font-bold text-indigo-600 mb-2">
            🎯 Chuẩn bị tại WOO
          </h4>
          <div className="text-slate-600">
            <p>✅ Luyện thi chuyên sâu 1-1</p>
            <p>✅ Mock test hàng tuần</p>
            <p>✅ Cam kết đầu ra hoặc học lại FREE</p>
          </div>
        </div>
      </div>
    </div>
  );
};
