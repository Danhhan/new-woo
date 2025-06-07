"use client";
import * as React from "react";

export const TeenCTA: React.FC = () => {
  return (
    <div className="mt-8 p-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-2xl text-white text-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

      <div className="relative z-10">
        <h3 className="text-3xl font-black mb-4">
          🚀 Sẵn sàng bắt đầu hành trình?
        </h3>
        <p className="text-xl mb-6 opacity-90">
          Tham gia cộng đồng <span className="font-bold">10,000+ teens</span>{" "}
          đang học tiếng Anh cùng WOO Group!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:bg-yellow-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            📞 Đăng ký học thử MIỄN PHÍ
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:-translate-y-1">
            💬 Tư vấn 1-1 với chuyên gia
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <div className="text-2xl mb-2">⚡</div>
            <div className="font-semibold">Lịch học linh hoạt</div>
            <div className="opacity-80">Phù hợp lịch trường</div>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <div className="text-2xl mb-2">🎯</div>
            <div className="font-semibold">1 kèm 1 cá nhân hóa</div>
            <div className="opacity-80">Tập trung 100%</div>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <div className="text-2xl mb-2">🏆</div>
            <div className="font-semibold">Cam kết đầu ra</div>
            <div className="opacity-80">Hoàn tiền 100%</div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white/20 backdrop-blur-sm rounded-lg">
          <p className="text-sm">
            <span className="font-bold">🎁 Ưu đãi đặc biệt:</span> Đăng ký trong
            tháng này nhận ngay:
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-2 text-xs">
            <span className="px-3 py-1 bg-yellow-400 text-purple-800 rounded-full font-semibold">
              📖 Tài liệu độc quyền
            </span>
            <span className="px-3 py-1 bg-yellow-400 text-purple-800 rounded-full font-semibold">
              🎮 Game học tập
            </span>
            <span className="px-3 py-1 bg-yellow-400 text-purple-800 rounded-full font-semibold">
              👥 Cộng đồng VIP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
