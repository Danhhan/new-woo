export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-soft"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fadeInLeft">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Về{" "}
              <span className="bg-gradient-to-r from-[#FFEA00] to-[#FFD700] bg-clip-text text-transparent">
                WOO GROUP
              </span>
            </h2>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#083D77] mb-4 sm:mb-6 animate-fadeInLeft delay-200">
              🌟 Nơi mơ ước tiếng Anh thành hiện thực!
            </h3>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 animate-fadeInLeft delay-300">
              WOO Group chuyên đào tạo tiếng Anh 1 kèm 1 online, đặc biệt tập
              trung vào **teens (12-18 tuổi)**. Với phương pháp học hiện đại và
              giáo viên kinh nghiệm, chúng tôi cam kết giúp bạn
              <strong className="text-[#083D77]">
                {" "}
                "From Zero to Fluent"
              </strong>{" "}
              trong thời gian ngắn nhất.
            </p>

            {/* Key Highlights */}
            <div className="mb-6 sm:mb-8 animate-fadeInLeft delay-350">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-green-600 text-xl">✅</span>
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    Chuyên biệt cho teens
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600 text-xl">🎯</span>
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    1 kèm 1 cá nhân hóa
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                  <span className="text-yellow-600 text-xl">⚡</span>
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    Lịch học linh hoạt
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <span className="text-purple-600 text-xl">🏆</span>
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    Cam kết đầu ra
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-[#FFEA00]/20 to-[#FFD700]/20 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scaleIn delay-400">
                <div className="text-2xl sm:text-3xl font-bold text-[#083D77] mb-1 sm:mb-2">
                  10K+
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-medium">
                  Học viên
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-[#083D77]/20 to-blue-400/20 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scaleIn delay-450">
                <div className="text-2xl sm:text-3xl font-bold text-[#083D77] mb-1 sm:mb-2">
                  95%
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-medium">
                  Thành công
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scaleIn delay-500">
                <div className="text-2xl sm:text-3xl font-bold text-[#083D77] mb-1 sm:mb-2">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-medium">
                  Giáo viên
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scaleIn delay-550">
                <div className="text-2xl sm:text-3xl font-bold text-[#083D77] mb-1 sm:mb-2">
                  5⭐
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
              <div className="absolute inset-0 bg-gradient-to-tr from-[#083D77]/10 to-[#FFEA00]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Decorative Badge */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#FFEA00] to-[#FFD700] text-[#083D77] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-scaleIn delay-600">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm font-medium">Năm kinh nghiệm</div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#083D77] rounded-full opacity-20 animate-float"></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-[#FFEA00] rounded-full opacity-30 animate-float delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
