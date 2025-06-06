
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Chào mừng trở lại
            </h1>
            <p className="text-muted-foreground mt-2">
              Đăng nhập vào tài khoản của bạn
            </p>
          </div>
          
          <LoginForm />
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Chưa có tài khoản?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Đăng ký ngay
              </a>
            </p>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-xs text-muted-foreground">
            Bằng cách đăng nhập, bạn đồng ý với{" "}
            <a href="#" className="text-blue-600 hover:underline">Điều khoản dịch vụ</a>
            {" "}và{" "}
            <a href="#" className="text-blue-600 hover:underline">Chính sách bảo mật</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
