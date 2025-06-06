
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Chào mừng đến với ứng dụng
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Khám phá những tính năng tuyệt vời và bắt đầu hành trình của bạn ngay hôm nay!
          </p>
        </div>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link to="/login">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium h-12 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Đăng nhập
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto h-12 px-8 border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Tìm hiểu thêm
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Dễ sử dụng</h3>
            <p className="text-muted-foreground text-sm">
              Giao diện trực quan và thân thiện với người dùng
            </p>
          </div>
          
          <div className="p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 bg-purple-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Bảo mật cao</h3>
            <p className="text-muted-foreground text-sm">
              Dữ liệu của bạn được bảo vệ với công nghệ mã hóa tiên tiến
            </p>
          </div>
          
          <div className="p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 bg-green-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Hiệu suất cao</h3>
            <p className="text-muted-foreground text-sm">
              Tối ưu hóa cho tốc độ và hiệu suất tốt nhất
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
