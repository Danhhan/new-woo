import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, CheckCircle, Monitor, BookOpen, Users, GraduationCap } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: DollarSign,
      title: "Tối ưu về kinh tế",
      description: "Học phí thấp nhất thị trường và cam kết hiệu quả bằng văn bản",
      color: "bg-gradient-to-br from-green-100 to-emerald-100 text-green-600"
    },
    {
      icon: CheckCircle,
      title: "Đánh giá trực tiếp sau mỗi buổi học",
      description: "Điều chỉnh lộ trình liên tục phù hợp với tốc độ học tập của từng học viên",
      color: "bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600"
    },
    {
      icon: Monitor,
      title: "Học trực tuyến 1 kèm 1",
      description: "70% thời lượng thực hành, tối ưu thời lượng tương tác",
      color: "bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-600"
    },
    {
      icon: BookOpen,
      title: "Học đi đôi với hành",
      description: "Khuyến khích thực hành tiếng Anh mọi lúc – mọi nơi – mọi giờ học, có thể ứng dụng ngay vào công việc, học tập",
      color: "bg-gradient-to-br from-orange-100 to-yellow-100 text-orange-600"
    },
    {
      icon: Users,
      title: "Đồng hành và hỗ trợ",
      description: "Các giảng viên trên toàn thế giới và đội ngũ WOO Group luôn sẵn sàng hỗ trợ học viên",
      color: "bg-gradient-to-br from-pink-100 to-rose-100 text-pink-600"
    },
    {
      icon: GraduationCap,
      title: "Đa dạng hoá các khoá học",
      description: "WOO Group mang đến các khóa học về giao tiếp và luyện thi các chứng chỉ tiếng Anh chuẩn quốc tế như Cambridge, IELTS,…",
      color: "bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-blue-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-soft"></div>
      <div className="absolute top-10 right-10 w-40 h-40 bg-[#FFEA00] rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#083D77] rounded-full opacity-5 animate-float delay-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Vì sao nên học tập cùng <span className="bg-gradient-to-r from-[#FFEA00] to-[#FFD700] bg-clip-text text-transparent">WOO GROUP</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những lý do thuyết phục để bạn chọn WOO Group làm đối tác học tập
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group border-0 bg-white/80 backdrop-blur-sm animate-scaleIn" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-0 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${reason.color} group-hover:scale-125 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                  <reason.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-[#083D77] mb-4 group-hover:text-[#FFEA00] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}