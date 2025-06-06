
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Edit, Trash2, BarChart3, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ManagerLink = () => {
  const navigate = useNavigate();

  // Mock data for demonstration
  const links = [
    {
      id: 1,
      shortUrl: "https://short.ly/abc123",
      originalUrl: "https://example.com/very-long-url-that-needs-shortening",
      title: "Example Website",
      clicks: 145,
      status: "active",
      createdAt: "2024-01-15"
    },
    {
      id: 2,
      shortUrl: "https://short.ly/xyz789",
      originalUrl: "https://google.com",
      title: "Google Search",
      clicks: 89,
      status: "active",
      createdAt: "2024-01-14"
    },
    {
      id: 3,
      shortUrl: "https://short.ly/def456",
      originalUrl: "https://github.com/user/repository",
      title: "GitHub Repository",
      clicks: 234,
      status: "paused",
      createdAt: "2024-01-10"
    }
  ];

  const handleEdit = (linkId: number) => {
    navigate(`/dashboard/edit-link/${linkId}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản lý liên kết</h1>
          <p className="text-muted-foreground mt-2">
            Theo dõi và quản lý tất cả liên kết rút gọn của bạn
          </p>
        </div>
        <Button>
          Tạo liên kết mới
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <Input
          placeholder="Tìm kiếm liên kết..."
          className="max-w-sm"
        />
        <Button variant="outline">
          Lọc
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Danh sách liên kết</CardTitle>
          <CardDescription>
            Tổng cộng {links.length} liên kết
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {links.map((link) => (
              <div
                key={link.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-sm truncate">
                      {link.title}
                    </h3>
                    <Badge 
                      variant={link.status === "active" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {link.status === "active" ? "Hoạt động" : "Tạm dừng"}
                    </Badge>
                  </div>
                  <p className="text-sm text-blue-600 truncate mb-1">
                    {link.shortUrl}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {link.originalUrl}
                  </p>
                </div>

                <div className="flex items-center gap-4 ml-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">{link.clicks}</p>
                    <p className="text-xs text-muted-foreground">clicks</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{link.createdAt}</p>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Mở liên kết
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Xem thống kê
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleEdit(link.id)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Chỉnh sửa
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Xóa
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManagerLink;
