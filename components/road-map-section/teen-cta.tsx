"use client";
import * as React from "react";

export const TeenCTA: React.FC = () => {
  return (
    <div className="mt-6 sm:mt-8 p-6 sm:p-8 bg-gradient-to-br from-[#083D77] via-[#083D77] to-[#FFD700] rounded-2xl text-white text-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-4 left-4 w-12 sm:w-20 h-12 sm:h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 right-4 w-20 sm:w-32 h-20 sm:h-32 bg-white/10 rounded-full blur-2xl"></div>

      <div className="relative z-10">
        <h3 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4">
          Sẵn sàng bắt đầu hành trình?
        </h3>
        <p className="text-lg sm:text-xl mb-4 sm:mb-6 opacity-90">
          Tham gia cộng đồng <span className="font-bold">10,000+ teens</span>{" "}
          đang học tiếng Anh cùng chúng tôi
        </p>

        <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mb-4 sm:mb-6">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#083D77] font-bold rounded-full hover:bg-[#FFD700] hover:text-[#083D77] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-sm sm:text-base">
            Đăng ký học thử MIỄN PHÍ
          </button>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#083D77] transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base">
            Tư vấn 1-1 với chuyên gia
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
          <div className="flex flex-col items-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <div className="text-xl sm:text-2xl mb-2">⚡</div>
            <div className="font-semibold text-center">Lịch học linh hoạt</div>
            <div className="opacity-80 text-center">Phù hợp lịch trường</div>
          </div>
          <div className="flex flex-col items-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <div className="text-xl sm:text-2xl mb-2">🎯</div>
            <div className="font-semibold text-center">1 kèm 1 cá nhân hóa</div>
            <div className="opacity-80 text-center">Tập trung 100%</div>
          </div>
          <div className="flex flex-col items-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <div className="text-xl sm:text-2xl mb-2">🏆</div>
            <div className="font-semibold text-center">Cam kết đầu ra</div>
            <div className="opacity-80 text-center">Hoàn tiền 100%</div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white/20 backdrop-blur-sm rounded-lg">
          <p className="text-sm">
            <span className="font-bold">Ưu đãi đặc biệt:</span> Đăng ký trong
            tháng này nhận ngay:
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-2 text-xs">
            <span className="px-3 py-1 bg-[#FFD700] text-[#083D77] rounded-full font-semibold">
              Tài liệu độc quyền
            </span>
            <span className="px-3 py-1 bg-[#FFD700] text-[#083D77] rounded-full font-semibold">
              Game học tập
            </span>
            <span className="px-3 py-1 bg-[#FFD700] text-[#083D77] rounded-full font-semibold">
              Cộng đồng VIP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
