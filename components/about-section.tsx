export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-soft"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fadeInLeft">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Đôi nét về <span className="bg-gradient-to-r from-[#FFEA00] to-[#FFD700] bg-clip-text text-transparent">WOO GROUP</span>
            </h2>
            
            <h3 className="text-2xl font-semibold text-[#083D77] mb-6 animate-fadeInLeft delay-200">
              WOO Group chào bạn!
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8 animate-fadeInLeft delay-300">
              Đội ngũ WOO Group tự hào mang đến cho học viên môi trường học tập tiếng Anh 
              chuyên nghiệp, thực tiễn, đa sắc màu và hiệu quả, giúp học viên đột phá năng 
              lực tiếng Anh trong thời gian ngắn. Đồng hành cùng với WOO Group bạn sẽ bước 
              đến thế giới tiếng Anh hoàn toàn khác biệt với thời lượng thực hành tối đa, 
              tự tin đạt được thành quả <strong className="text-[#083D77]">"From Zero to Fluent"</strong> và sẵn sàng 
              kết nối với thế giới.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-gradient-to-br from-[#FFEA00]/20 to-[#FFD700]/20 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scaleIn delay-400">
                <div className="text-3xl font-bold text-[#083D77] mb-2 animate-pulse">1000+</div>
                <div className="text-gray-700 font-medium">Học viên</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-[#083D77]/20 to-blue-400/20 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scaleIn delay-500">
                <div className="text-3xl font-bold text-[#083D77] mb-2 animate-pulse">50+</div>
                <div className="text-gray-700 font-medium">Giáo viên</div>
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