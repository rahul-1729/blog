// API call for dashboard
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PenSquare, FileText, BarChart3, Settings, Plus, Edit, Trash2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import { toast } from "sonner";

const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handlePublish = () => {
    if (title && content && category) {
      toast.success("Blog post published successfully!");
      setTitle("");
      setContent("");
      setCategory("");
    } else {
      toast.error("Please fill in all fields");
    }
  };

  const mockPosts = [
    { id: 1, title: "The Future of Campus Culture", status: "Published", views: 1203, likes: 234 },
    { id: 2, title: "Breaking Down the Digital Divide", status: "Draft", views: 0, likes: 0 },
    { id: 3, title: "Coffee, Code, and Deadlines", status: "Published", views: 743, likes: 156 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your content and track performance</p>
          </div>

          <Tabs defaultValue="create" className="space-y-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="create">
                <PenSquare className="h-4 w-4 mr-2" />
                Create
              </TabsTrigger>
              <TabsTrigger value="posts">
                <FileText className="h-4 w-4 mr-2" />
                Posts
              </TabsTrigger>
              <TabsTrigger value="analytics">
                <BarChart3 className="h-4 w-4 mr-2" />
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="create" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5" />
                    Create New Post
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter post title..."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      placeholder="e.g., Culture, Technology, Opinion"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      placeholder="Write your blog post content..."
                      rows={12}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={handlePublish} className="flex-1">
                      Publish Now
                    </Button>
                    <Button variant="outline">Save Draft</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="posts" className="space-y-4">
              {mockPosts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1 flex-1">
                        <h3 className="text-lg font-semibold">{post.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <Badge variant={post.status === "Published" ? "default" : "secondary"}>
                            {post.status}
                          </Badge>
                          <span>{post.views} views</span>
                          <span>{post.likes} likes</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center space-y-2">
                      <p className="text-sm text-muted-foreground">Total Views</p>
                      <p className="text-4xl font-bold">15.2K</p>
                      <p className="text-sm text-primary">↑ 12% from last month</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-center space-y-2">
                      <p className="text-sm text-muted-foreground">Total Likes</p>
                      <p className="text-4xl font-bold">3.4K</p>
                      <p className="text-sm text-primary">↑ 8% from last month</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-center space-y-2">
                      <p className="text-sm text-muted-foreground">Published Posts</p>
                      <p className="text-4xl font-bold">47</p>
                      <p className="text-sm text-primary">↑ 5 this month</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockPosts.map((post) => (
                      <div key={post.id} className="flex items-center justify-between py-2 border-b last:border-0">
                        <span className="font-medium">{post.title}</span>
                        <span className="text-muted-foreground">{post.views} views</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
