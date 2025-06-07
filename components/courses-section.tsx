import { Card, CardContent } from "@/components/ui/card";
import { Users, User, Award, BookOpen } from "lucide-react";

export default function CoursesSection() {
  const courses = [
    {
      title: "Tiếng Anh cho Teens",
      subtitle: "Chuyên biệt 12-18 tuổi",
      description:
        "Lộ trình học tiếng Anh toàn diện dành riêng cho học sinh THCS-THPT",
      icon: Users,
      image:
        "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Chuẩn bị THPT",
        "Cambridge/IELTS",
        "Giao tiếp thực tế",
        "Chuẩn bị du học",
      ],
      gradient: "from-[#083D77] to-[#083D77]",
      popular: true,
    },
    {
      title: "Tiếng Anh cho Trẻ em",
      subtitle: "Từ 5-12 tuổi",
      description:
        "Khóa học vui nhộn giúp trẻ yêu thích tiếng Anh từ những bước đầu",
      icon: Users,
      image:
        "https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Học qua trò chơi",
        "Tương tác cao",
        "Giáo viên kinh nghiệm",
        "Theo dõi tiến độ",
      ],
      gradient: "from-[#FFD700] to-[#FFD700]",
    },
    {
      title: "Tiếng Anh cho Người lớn",
      subtitle: "Đi làm & Gia đình",
      description:
        "Khóa học linh hoạt cho người lớn muốn nâng cao tiếng Anh giao tiếp",
      icon: User,
      image:
        "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Lịch linh hoạt",
        "Tiếng Anh công sở",
        "Giao tiếp quốc tế",
        "Chứng chỉ quốc tế",
      ],
      gradient: "from-[#083D77] to-[#083D77]",
    },
    {
      title: "Luyện thi Chứng chỉ",
      subtitle: "IELTS/TOEFL/Cambridge",
      description:
        "Luyện thi chuyên sâu các chứng chỉ quốc tế với tỷ lệ đỗ cao",
      icon: Award,
      image:
        "https://images.pexels.com/photos/5427673/pexels-photo-5427673.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Mock test định kỳ",
        "Cam kết điểm số",
        "Bài tập chuyên sâu",
        "Giáo viên chuyên gia",
      ],
      gradient: "from-[#FFD700] to-[#FFD700]",
    },
  ];

  return (
    <section
      id="courses"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#FFD700] rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#083D77] rounded-full opacity-5 animate-float delay-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFD700] bg-clip-text text-transparent">
              Khóa học
            </span>{" "}
            của chúng tôi
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Đa dạng lứa tuổi - Đặc biệt tập trung <strong>TEENS</strong> - Cam
            kết chất lượng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 animate-scaleIn relative ${course.popular ? "ring-2 ring-[#FFD700] ring-offset-2" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {course.popular && (
                <div className="absolute -top-2 -right-2 z-10 bg-[#FFD700] text-[#083D77] px-3 py-1 rounded-full text-xs font-bold">
                  PHỔ BIẾN
                </div>
              )}

              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div
                  className={`absolute top-3 left-3 bg-gradient-to-r ${course.gradient} p-2 sm:p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <course.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                </div>
              </div>

              <CardContent className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#083D77] mb-2 group-hover:text-[#FFD700] transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-sm sm:text-base text-[#FFD700] font-semibold mb-3 sm:mb-4">
                  {course.subtitle}
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="space-y-2 sm:space-y-3">
                  {course.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 sm:space-x-3 group/item hover:translate-x-1 sm:hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className="w-2 h-2 bg-[#FFD700] rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-gray-700 group-hover/item:text-[#083D77] transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-4 sm:mt-6">
                  <button
                    className={`w-full bg-gradient-to-r ${course.gradient} text-white py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl`}
                  >
                    Tìm hiểu thêm
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 animate-fadeInUp">
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Không chắc khóa học nào phù hợp? Hãy để chúng tôi tư vấn!
          </p>
          <button className="bg-gradient-to-r from-[#FFD700] to-[#FFD700] text-[#083D77] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
            Tư vấn miễn phí ngay
          </button>
        </div>
      </div>
    </section>
  );
}
