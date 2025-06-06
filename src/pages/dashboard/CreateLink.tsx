
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Link, Copy, CheckCircle } from "lucide-react";

const CreateLink = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [description, setDescription] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCreateLink = () => {
    // Simulate creating a shortened link
    const alias = customAlias || Math.random().toString(36).substring(7);
    setGeneratedLink(`https://short.ly/${alias}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Tạo liên kết mới</h1>
        <p className="text-muted-foreground mt-2">
          Rút gọn URL dài thành liên kết ngắn gọn và dễ chia sẻ
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Thông tin liên kết</CardTitle>
          <CardDescription>
            Nhập URL gốc và tùy chỉnh liên kết của bạn
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="original-url">URL gốc *</Label>
            <Input
              id="original-url"
              type="url"
              placeholder="https://example.com/very-long-url"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom-alias">Tên tùy chỉnh (tùy chọn)</Label>
            <Input
              id="custom-alias"
              placeholder="my-custom-link"
              value={customAlias}
              onChange={(e) => setCustomAlias(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Để trống để tự động tạo tên ngẫu nhiên
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Mô tả (tùy chọn)</Label>
            <Textarea
              id="description"
              placeholder="Mô tả ngắn về liên kết này..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <Button 
            onClick={handleCreateLink} 
            className="w-full"
            disabled={!originalUrl}
          >
            <Link className="mr-2 h-4 w-4" />
            Tạo liên kết
          </Button>
        </CardContent>
      </Card>

      {generatedLink && (
        <Card>
          <CardHeader>
            <CardTitle>Liên kết đã tạo</CardTitle>
            <CardDescription>
              Liên kết rút gọn của bạn đã sẵn sàng để sử dụng
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Input
                value={generatedLink}
                readOnly
                className="bg-gray-50"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="shrink-0"
              >
                {copied ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            {copied && (
              <p className="text-sm text-green-600">Đã sao chép vào clipboard!</p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CreateLink;
