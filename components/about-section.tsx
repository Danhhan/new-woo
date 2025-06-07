export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fadeInLeft">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Về{" "}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FFD700] bg-clip-text text-transparent">
                chúng tôi
              </span>
            </h2>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#083D77] mb-4 sm:mb-6 animate-fadeInLeft delay-200">
              Nơi mơ ước tiếng Anh thành hiện thực
            </h3>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 animate-fadeInLeft delay-300">
              WOO Group chuyên đào tạo tiếng Anh 1 kèm 1 online, đặc biệt tập
              trung vào <strong>teens (12-18 tuổi)</strong>. Với phương pháp học
              hiện đại và giáo viên kinh nghiệm, chúng tôi cam kết giúp bạn
              <strong className="text-[#083D77]">
                {" "}
                "From Zero to Fluent"
              </strong>{" "}
              trong thời gian ngắn nhất.
            </p>

            {/* Key Highlights */}
            <div className="mb-6 sm:mb-8 animate-fadeInLeft delay-350">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center gap-3 p-3 bg-[#FFD700]/10 rounded-lg">
                  <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    Chuyên biệt cho teens
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#083D77]/10 rounded-lg">
                  <div className="w-2 h-2 bg-[#083D77] rounded-full"></div>
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    1 kèm 1 cá nhân hóa
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    Lịch học linh hoạt
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#FFD700]/10 rounded-lg">
                  <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    Cam kết đầu ra
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/10 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scaleIn delay-400">
                <div className="text-2xl sm:text-3xl font-bold text-[#083D77] mb-1 sm:mb-2">
                  10K+
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-medium">
                  Học viên
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-[#083D77]/20 to-[#083D77]/10 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scaleIn delay-450">
                <div className="text-2xl sm:text-3xl font-bold text-[#083D77] mb-1 sm:mb-2">
                  95%
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-medium">
                  Thành công
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-gray-200 to-gray-100 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scaleIn delay-500">
                <div className="text-2xl sm:text-3xl font-bold text-[#083D77] mb-1 sm:mb-2">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-medium">
                  Giáo viên
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/10 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scaleIn delay-550">
                <div className="text-2xl sm:text-3xl font-bold text-[#083D77] mb-1 sm:mb-2">
                  4.9
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-medium">
                  Đánh giá
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-fadeInRight delay-300">
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/5212319/pexels-photo-5212319.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About WOO Group"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#083D77]/10 to-[#FFD700]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#FFD700] to-[#FFD700] rounded-full opacity-80 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#083D77] to-[#083D77] rounded-full opacity-60 animate-float delay-200"></div>

            {/* Floating badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg animate-scaleIn delay-500">
              <span className="text-[#083D77] font-semibold text-sm">
                Uy tín 5 năm
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
