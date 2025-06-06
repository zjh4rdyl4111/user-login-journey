
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Đăng nhập hệ thống
            </h1>
            <p className="text-muted-foreground mt-2">
              Vui lòng đăng nhập để tiếp tục
            </p>
          </div>
          
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
