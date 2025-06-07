import { Card, CardContent } from '@/components/ui/card';
import { Users, User, Award, BookOpen } from 'lucide-react';

export default function CoursesSection() {
  const courses = [
    {
      title: "Tiếng Anh cho Trẻ em",
      subtitle: "CEFR - Cambridge - IELTS",
      description: "Chương trình học được thiết kế đặc biệt cho trẻ em từ 5-18 tuổi",
      icon: Users,
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Học qua trò chơi", "Tương tác cao", "Giáo viên bản ngữ"],
      gradient: "from-[#FFEA00] to-[#FFD700]"
    },
    {
      title: "Tiếng Anh cho Người lớn",
      subtitle: "CEFR - Cambridge",
      description: "Khóa học dành cho người lớn muốn nâng cao khả năng giao tiếp",
      icon: User,
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Lịch học linh hoạt", "Thực hành thực tế", "Chứng chỉ quốc tế"],
      gradient: "from-[#083D77] to-blue-400"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#FFEA00] rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#083D77] rounded-full opacity-5 animate-float delay-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Khóa học tiếng Anh tại <span className="bg-gradient-to-r from-[#FFEA00] to-[#FFD700] bg-clip-text text-transparent">WOO GROUP</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cung cấp các khóa học đa dạng phù hợp với mọi lứa tuổi và nhu cầu học tập
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 animate-scaleIn" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative h-64 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${course.gradient} p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <course.icon className="h-6 w-6 text-white" />
                </div>
                
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#083D77] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Phổ biến
                </div>
              </div>
              
              <CardContent className="p-8 bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-2xl font-bold text-[#083D77] mb-2 group-hover:text-[#FFEA00] transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-[#FFEA00] font-semibold mb-4">{course.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                
                <div className="space-y-3">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <Award className="h-5 w-5 text-[#FFEA00] group-hover/item:text-[#083D77] transition-colors duration-300" />
                      <span className="text-gray-700 group-hover/item:text-[#083D77] transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}