import { Card, CardContent } from '@/components/ui/card';
import { Monitor, Laptop, Gamepad2, User, RotateCcw, Zap } from 'lucide-react';

export default function LearningApproaches() {
  const approaches = [
    {
      icon: Monitor,
      title: "Học trực tuyến 1 kèm 1",
      subtitle: "70% thực hành",
      description: "Tối ưu hóa thời gian tương tác và thực hành với giáo viên",
      gradient: "from-[#FFEA00] to-[#FFD700]"
    },
    {
      icon: Laptop,
      title: "Phương pháp dạy học theo dự án",
      subtitle: "Project-based learning",
      description: "Học thông qua các dự án thực tế, ứng dụng ngay vào cuộc sống",
      gradient: "from-[#083D77] to-blue-400"
    },
    {
      icon: Gamepad2,
      title: "Phương pháp học từ trò chơi",
      subtitle: "Game-Based Learning",
      description: "Kết hợp giải trí và học tập để tăng hứng thú và hiệu quả",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: User,
      title: "Phương pháp cá nhân hoá",
      subtitle: "Personalized Education",
      description: "Điều chỉnh chương trình học phù hợp với từng học viên",
      gradient: "from-purple-400 to-indigo-500"
    },
    {
      icon: RotateCcw,
      title: "Lớp học đảo ngược",
      subtitle: "Flipped classrooms",
      description: "Học lý thuyết tại nhà, thực hành và tương tác trên lớp",
      gradient: "from-orange-400 to-red-500"
    },
    {
      icon: Zap,
      title: "Đào tạo tăng cường sử dụng công nghệ",
      subtitle: "Technology-enhanced learning",
      description: "Ứng dụng công nghệ hiện đại để nâng cao trải nghiệm học tập",
      gradient: "from-pink-400 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-yellow-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-soft"></div>
      <div className="absolute top-10 right-10 w-36 h-36 bg-[#FFEA00] rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-28 h-28 bg-[#083D77] rounded-full opacity-5 animate-float delay-500"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#FFEA00] rounded-full opacity-5 animate-float delay-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Phương pháp học tập <span className="bg-gradient-to-r from-[#FFEA00] to-[#FFD700] bg-clip-text text-transparent">thân thiện</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi áp dụng những phương pháp giảng dạy tiên tiến và hiệu quả nhất hiện nay
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group border-t-4 border-t-[#FFEA00] hover:border-t-[#083D77] bg-white/90 backdrop-blur-sm animate-scaleIn" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-0 text-center">
                <div className={`bg-gradient-to-r ${approach.gradient} w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-125 transition-all duration-500 shadow-lg group-hover:shadow-xl animate-pulse-glow`}>
                  <approach.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#083D77] mb-2 group-hover:text-[#FFEA00] transition-colors duration-300">
                  {approach.title}
                </h3>
                <p className="text-[#FFEA00] font-medium mb-4 group-hover:text-[#083D77] transition-colors duration-300">
                  {approach.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {approach.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}