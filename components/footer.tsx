import { Globe, Phone, Mail, MapPin, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#083D77] to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFEA00] rounded-full opacity-5 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFEA00] rounded-full opacity-10 animate-float delay-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 animate-fadeInLeft">
            <div className="flex items-center space-x-2 mb-6 group">
              <Globe className="h-8 w-8 text-[#FFEA00] group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#FFEA00] to-white bg-clip-text text-transparent">
                WOOGROUP
              </span>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-[#FFEA00]">
              CÔNG TY TNHH GIÁO DỤC WOOGROUP
            </h3>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
                <MapPin className="h-5 w-5 text-[#FFEA00] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="font-medium text-white mb-1">Trụ sở chính</p>
                  <p className="hover:text-[#FFEA00] transition-colors duration-300">
                    12 Đường số 1, Cư Xá Đô Thành, Phường 4, Quận 3, Thành phố Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
                <FileText className="h-5 w-5 text-[#FFEA00] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="font-medium text-white mb-1">Giấy phép kinh doanh</p>
                  <p className="hover:text-[#FFEA00] transition-colors duration-300">
                    GPKD số 0317729987 cấp bởi Sở Kế Hoạch và Đầu Tư TP Hồ Chí Minh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInUp delay-200">
            <h3 className="text-xl font-semibold mb-6 text-[#FFEA00]">Liên hệ</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                <Phone className="h-5 w-5 text-[#FFEA00] group-hover:rotate-12 transition-transform duration-300" />
                <div>
                  <p className="font-medium text-white">Hotline</p>
                  <a href="tel:0788242879" className="hover:text-[#FFEA00] transition-colors duration-300 text-lg font-semibold">
                    0788-24-28-79
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                <Mail className="h-5 w-5 text-[#FFEA00] group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a href="mailto:hotro.woogroup@gmail.com" className="hover:text-[#FFEA00] transition-colors duration-300">
                    hotro.woogroup@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* App Download */}
          <div className="animate-fadeInRight delay-300">
            <h3 className="text-xl font-semibold mb-6 text-[#FFEA00]">Tải Để Học Tiếng Anh Miễn Phí</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-4 rounded-lg border border-gray-600 hover:border-[#FFEA00] transition-all duration-300 cursor-pointer group hover:scale-105">
                <p className="text-sm text-gray-400 group-hover:text-[#FFEA00] transition-colors duration-300">Sắp ra mắt</p>
                <p className="font-medium group-hover:text-[#FFEA00] transition-colors duration-300">Ứng dụng di động</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4 text-[#FFEA00]">Mạng Xã Hội</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full flex items-center justify-center hover:from-[#FFEA00] hover:to-[#FFD700] hover:text-[#083D77] transition-all duration-300 cursor-pointer group hover:scale-110">
                  <span className="text-sm font-bold group-hover:animate-pulse">f</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full flex items-center justify-center hover:from-[#FFEA00] hover:to-[#FFD700] hover:text-[#083D77] transition-all duration-300 cursor-pointer group hover:scale-110">
                  <span className="text-sm font-bold group-hover:animate-pulse">in</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full flex items-center justify-center hover:from-[#FFEA00] hover:to-[#FFD700] hover:text-[#083D77] transition-all duration-300 cursor-pointer group hover:scale-110">
                  <span className="text-sm font-bold group-hover:animate-pulse">@</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 animate-fadeInUp delay-500">
          <p className="hover:text-[#FFEA00] transition-colors duration-300">
            © 2023 Woo Group. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}