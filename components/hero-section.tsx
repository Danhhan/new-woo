"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-yellow-50 pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFEA00] rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-[#083D77] rounded-full opacity-5 animate-float delay-300"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-[#FFEA00] rounded-full opacity-15 animate-float delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fadeInLeft">
              <span className="bg-gradient-to-r from-[#FFEA00] to-[#FFD700] bg-clip-text text-transparent animate-pulse-glow">
                From Zero to Fluent:
              </span>
              <br />
              <span className="text-[#083D77]">English Conversation Made Easy!</span>
            </h1>
            
            <div className="mb-8 animate-fadeInLeft delay-200">
              <h2 className="text-2xl lg:text-3xl font-semibold text-[#083D77] mb-4">
                HỌC TIẾNG ANH ONLINE
              </h2>
              <h3 className="text-xl lg:text-2xl font-medium text-gray-700 mb-6">
                <span className="bg-gradient-to-r from-[#083D77] to-[#FFEA00] bg-clip-text text-transparent">
                  1 KÈM 1 CHO MỌI LỨA TUỔI
                </span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl">
                Mở khóa kỹ năng giao tiếp tiếng Anh cùng WOO Group
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInLeft delay-400">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#FFEA00] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFEA00] text-[#083D77] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg transform"
              >
                Khám phá khóa học
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-[#083D77] hover:border-[#FFEA00] text-[#083D77] hover:text-[#FFEA00] hover:bg-[#FFEA00]/10 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg group"
              >
                <Play className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Xem video
              </Button>
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
              <div className="absolute inset-0 bg-gradient-to-tr from-[#083D77]/20 to-[#FFEA00]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#FFEA00] to-[#FFD700] rounded-full opacity-80 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#083D77] to-blue-400 rounded-full opacity-60 animate-float delay-200"></div>
            
            {/* Floating badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg animate-scaleIn delay-500">
              <span className="text-[#083D77] font-semibold text-sm">✨ Chất lượng cao</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}