import { Card, CardContent } from '@/components/ui/card';
import { Monitor, CheckCircle, Users, Headphones, DollarSign, BookOpen } from 'lucide-react';

export default function TeachingMethods() {
  const methods = [
    {
      icon: Monitor,
      title: "Học trực tuyến 1 kèm 1",
      description: "70% thời lượng thực hành, tối ưu thời lượng tương tác",
      color: "from-[#FFEA00] to-[#FFD700]"
    },
    {
      icon: CheckCircle,
      title: "Đánh giá trực tiếp sau mỗi buổi học",
      description: "Điều chỉnh lộ trình liên tục phù hợp với tốc độ học tập của từng học viên",
      color: "from-[#083D77] to-blue-400"
    },
    {
      icon: Users,
      title: "Học đi đôi với hành",
      description: "Khuyến khích thực hành tiếng Anh mọi lúc – mọi nơi – mọi giờ học, có thể ứng dụng ngay vào công việc, học tập",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Headphones,
      title: "Đồng hành và hỗ trợ",
      description: "Các giảng viên trên toàn thế giới và đội ngũ WOO Group luôn sẵn sàng hỗ trợ học viên",
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: DollarSign,
      title: "Tối ưu về kinh tế",
      description: "Học phí thấp nhất thị trường và cam kết hiệu quả bằng văn bản",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: BookOpen,
      title: "Đa dạng khóa học",
      description: "WOO Group mang đến các khóa học về giao tiếp và luyện thi các chứng chỉ tiếng Anh chuẩn quốc tế như Cambridge, IELTS,…",
      color: "from-pink-400 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-soft"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-[#FFEA00] rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#083D77] rounded-full opacity-5 animate-float delay-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Phương pháp học tập <span className="bg-gradient-to-r from-[#FFEA00] to-[#FFD700] bg-clip-text text-transparent">thân thiện</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi áp dụng các phương pháp giảng dạy hiện đại và hiệu quả nhất
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-500 border-l-4 border-l-[#FFEA00] hover:border-l-[#083D77] group hover:-translate-y-2 animate-scaleIn" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className={`bg-gradient-to-r ${method.color} p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#083D77] mb-3 group-hover:text-[#FFEA00] transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {method.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}