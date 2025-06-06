
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EditLink = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    title: "",
    originalUrl: "",
    shortUrl: "",
    description: ""
  });

  // Mock data - trong thực tế sẽ fetch từ API theo ID
  useEffect(() => {
    // Giả lập load data từ ID
    const mockLinks = [
      {
        id: "1",
        title: "Example Website",
        originalUrl: "https://example.com/very-long-url-that-needs-shortening",
        shortUrl: "https://short.ly/abc123",
        description: "Website mẫu để demo"
      },
      {
        id: "2", 
        title: "Google Search",
        originalUrl: "https://google.com",
        shortUrl: "https://short.ly/xyz789",
        description: "Tìm kiếm Google"
      },
      {
        id: "3",
        title: "GitHub Repository", 
        originalUrl: "https://github.com/user/repository",
        shortUrl: "https://short.ly/def456",
        description: "Repository GitHub của tôi"
      }
    ];

    const link = mockLinks.find(l => l.id === id);
    if (link) {
      setFormData(link);
    }
  }, [id]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.originalUrl.trim()) {
      toast({
        title: "Lỗi",
        description: "Vui lòng nhập URL gốc",
        variant: "destructive"
      });
      return;
    }

    if (!formData.title.trim()) {
      toast({
        title: "Lỗi", 
        description: "Vui lòng nhập tiêu đề",
        variant: "destructive"
      });
      return;
    }

    // Giả lập update
    console.log("Updating link:", formData);
    
    toast({
      title: "Thành công",
      description: "Liên kết đã được cập nhật",
    });

    // Quay về trang manager
    navigate("/dashboard/manager-link");
  };

  const handleCancel = () => {
    navigate("/dashboard/manager-link");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={handleCancel}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Quay lại
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Chỉnh sửa liên kết</h1>
          <p className="text-muted-foreground mt-1">
            Cập nhật thông tin liên kết rút gọn
          </p>
        </div>
      </div>

      <div className="max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Thông tin liên kết</CardTitle>
            <CardDescription>
              Chỉnh sửa URL gốc và thông tin liên kết
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Tiêu đề *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="Nhập tiêu đề cho liên kết"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="originalUrl">URL gốc *</Label>
                <Input
                  id="originalUrl"
                  type="url"
                  value={formData.originalUrl}
                  onChange={(e) => handleInputChange("originalUrl", e.target.value)}
                  placeholder="https://example.com/your-long-url"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="shortUrl">URL rút gọn</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="shortUrl"
                    value={formData.shortUrl}
                    readOnly
                    className="bg-muted"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(formData.shortUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  URL rút gọn không thể thay đổi
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Mô tả</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Mô tả ngắn về liên kết này (tùy chọn)"
                  rows={3}
                />
              </div>

              <div className="flex items-center gap-3 pt-4">
                <Button type="submit">
                  <Save className="h-4 w-4 mr-2" />
                  Lưu thay đổi
                </Button>
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Hủy
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EditLink;
