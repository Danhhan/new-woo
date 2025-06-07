import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, BookOpen } from 'lucide-react';

export default function CourseRoadmap() {
  const courseTypes = [
    {
      title: "Khóa học CEFR",
      subtitle: "Dành cho trẻ em từ 5-12 tuổi",
      courses: [
        { level: "Pre A1", hours: "120 giờ", color: "bg-gradient-to-r from-red-100 to-red-200 text-red-700" },
        { level: "A1", hours: "120 giờ", color: "bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700" },
        { level: "A2", hours: "180 giờ", color: "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-700" },
        { level: "B1", hours: "180 giờ", color: "bg-gradient-to-r from-green-100 to-green-200 text-green-700" }
      ],
      gradient: "from-[#FFEA00]/20 to-[#FFD700]/20"
    },
    {
      title: "Khóa học CEFR",
      subtitle: "Dành cho trẻ em từ 12-18 tuổi",
      courses: [
        { level: "Căn bản", hours: "160 giờ", color: "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700" },
        { level: "Trung cấp", hours: "180 giờ", color: "bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-700" },
        { level: "Cao cấp", hours: "200 giờ", color: "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700" }
      ],
      gradient: "from-[#083D77]/20 to-blue-100"
    },
    {
      title: "Khóa học CEFR",
      subtitle: "Dành cho người lớn",
      courses: [
        { level: "Căn bản", hours: "160 giờ", color: "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700" },
        { level: "Trung cấp", hours: "180 giờ", color: "bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-700" },
        { level: "Cao cấp", hours: "200 giờ", color: "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700" }
      ],
      gradient: "from-[#083D77]/20 to-blue-100"
    },
    {
      title: "Khóa học CAMBRIDGE",
      subtitle: "Chứng chỉ quốc tế",
      courses: [
        { level: "KET", hours: "120 giờ", color: "bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-700" },
        { level: "PET", hours: "160 giờ", color: "bg-gradient-to-r from-teal-100 to-teal-200 text-teal-700" },
        { level: "FCE", hours: "180 giờ", color: "bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-700" }
      ],
      gradient: "from-emerald-100 to-teal-100"
    },
    {
      title: "Khóa học IELTS",
      subtitle: "Luyện thi quốc tế",
      courses: [
        { level: "GENERAL", hours: "120 giờ", color: "bg-gradient-to-r from-rose-100 to-rose-200 text-rose-700" },
        { level: "ACADEMIC", hours: "140 giờ", color: "bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700" }
      ],
      gradient: "from-rose-100 to-pink-100"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-soft"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#FFEA00] rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#083D77] rounded-full opacity-5 animate-float delay-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lộ trình các khóa học tại <span className="bg-gradient-to-r from-[#FFEA00] to-[#FFD700] bg-clip-text text-transparent">WOO GROUP</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hệ thống khóa học đa dạng và có cấu trúc, phù hợp với mọi lứa tuổi và mục tiêu học tập
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {courseTypes.map((courseType, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm group hover:-translate-y-2 animate-scaleIn" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className={`bg-gradient-to-r ${courseType.gradient} group-hover:scale-105 transition-transform duration-300`}>
                <CardTitle className="text-xl font-bold text-[#083D77] group-hover:text-[#FFEA00] transition-colors duration-300">
                  {courseType.title}
                </CardTitle>
                <p className="text-gray-600 font-medium">{courseType.subtitle}</p>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  {courseType.courses.map((course, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 group/item">
                      <div className="flex items-center space-x-3">
                        <BookOpen className="h-5 w-5 text-[#FFEA00] group-hover/item:text-[#083D77] transition-colors duration-300" />
                        <span className="font-semibold text-[#083D77] group-hover/item:text-[#FFEA00] transition-colors duration-300">
                          {course.level}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <Badge className={`${course.color} border-0 shadow-sm group-hover/item:shadow-md transition-shadow duration-300`}>
                          {course.hours}
                        </Badge>
                      </div>
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