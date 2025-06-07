"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-yellow-50 pt-16 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFD700] rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-[#083D77] rounded-full opacity-5 animate-float delay-300"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-[#FFD700] rounded-full opacity-15 animate-float delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fadeInLeft">
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FFD700] bg-clip-text text-transparent">
                From Zero to Fluent
              </span>
              <br />
              <span className="text-[#083D77]">English Made Easy!</span>
            </h1>

            <div className="mb-6 sm:mb-8 animate-fadeInLeft delay-200">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#083D77] mb-3 sm:mb-4">
                HỌC TIẾNG ANH ONLINE 1 KÈM 1
              </h2>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-medium mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-[#083D77] to-[#FFD700] bg-clip-text text-transparent">
                  DÀNH CHO MỌI LỨA TUỔI - ĐẶC BIỆT CHO TEENS
                </span>
              </h3>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
                Mở khóa kỹ năng giao tiếp tiếng Anh - Từ Zero đến Hero cùng
                chúng tôi
              </p>

              {/* Key Features */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                <span className="px-3 py-1 bg-[#FFD700]/20 text-[#083D77] rounded-full text-sm font-semibold">
                  1 kèm 1 Online
                </span>
                <span className="px-3 py-1 bg-[#083D77]/20 text-[#083D77] rounded-full text-sm font-semibold">
                  Chuyên cho Teens
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                  Cam kết đầu ra
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fadeInLeft delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FFD700] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFD700] text-[#083D77] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl text-base sm:text-lg transform group"
              >
                Đăng ký học thử MIỄN PHÍ
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#083D77] hover:border-[#FFD700] text-[#083D77] hover:text-white hover:bg-[#083D77] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 text-base sm:text-lg group"
              >
                <Play className="mr-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform duration-300 group-hover:scale-110" />
                Xem demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 sm:mt-8 animate-fadeInLeft delay-500">
              <p className="text-sm text-gray-500 mb-3">
                Được tin tưởng bởi 10,000+ học viên
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFD700] border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#083D77] to-[#083D77] border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFD700] to-[#083D77] border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    +2K
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <span className="text-[#FFD700]">★★★★★</span>
                    <span className="font-semibold">4.9/5</span>
                    <span>(2,847 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fadeInRight delay-300">
            <div className="relative z-10 group">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="English Learning"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#083D77]/20 to-[#FFD700]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#FFD700] to-[#FFD700] rounded-full opacity-80 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#083D77] to-[#083D77] rounded-full opacity-60 animate-float delay-200"></div>

            {/* Floating badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg animate-scaleIn delay-500">
              <span className="text-[#083D77] font-semibold text-sm">
                Chất lượng cao
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
