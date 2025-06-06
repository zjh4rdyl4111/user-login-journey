
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation cơ bản
    if (!username || !password) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Kiểm tra thông tin đăng nhập
    if (username !== "administrator" || password !== "admin") {
      toast({
        title: "Lỗi đăng nhập",
        description: "Tên đăng nhập hoặc mật khẩu không đúng",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Giả lập đăng nhập thành công
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Đăng nhập thành công!",
        description: "Chào mừng Administrator",
      });
      console.log("Đăng nhập thành công với:", { username, password });
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="username" className="text-sm font-medium text-gray-700">
          Tên đăng nhập
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            id="username"
            type="text"
            placeholder="administrator"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium text-gray-700">
          Mật khẩu
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 pr-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <input
            id="remember"
            type="checkbox"
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <Label htmlFor="remember" className="text-sm text-gray-600">
            Ghi nhớ đăng nhập
          </Label>
        </div>
        <a
          href="#"
          className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors"
        >
          Quên mật khẩu?
        </a>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Đang đăng nhập...</span>
          </div>
        ) : (
          "Đăng nhập"
        )}
      </Button>
    </form>
  );
};

export default LoginForm;
