import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Course, Article, Consultation } from '@shared/schema';
import { PlusIcon, EditIcon, TrashIcon, EyeIcon } from 'lucide-react';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('courses');
  const queryClient = useQueryClient();

  // Queries
  const { data: courses } = useQuery<Course[]>({
    queryKey: ['/api/courses'],
  });

  const { data: articles } = useQuery<Article[]>({
    queryKey: ['/api/articles'],
  });

  const { data: consultations } = useQuery<Consultation[]>({
    queryKey: ['/api/consultations'],
  });

  // Course form state
  const [courseForm, setCourseForm] = useState({
    title: '',
    description: '',
    instructor: '',
    imageUrl: '',
    duration: 0,
    sessions: 0,
  });

  // Article form state
  const [articleForm, setArticleForm] = useState({
    title: '',
    content: '',
    author: '',
    imageUrl: '',
    category: '',
  });

  // Create course mutation
  const createCourseMutation = useMutation({
    mutationFn: async (data: typeof courseForm) => {
      const response = await apiRequest('POST', '/api/courses', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/courses'] });
      setCourseForm({
        title: '',
        description: '',
        instructor: '',
        imageUrl: '',
        duration: 0,
        sessions: 0,
      });
    },
  });

  // Create article mutation
  const createArticleMutation = useMutation({
    mutationFn: async (data: typeof articleForm) => {
      const response = await apiRequest('POST', '/api/articles', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/articles'] });
      setArticleForm({
        title: '',
        content: '',
        author: '',
        imageUrl: '',
        category: '',
      });
    },
  });

  const handleCreateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    createCourseMutation.mutate(courseForm);
  };

  const handleCreateArticle = (e: React.FormEvent) => {
    e.preventDefault();
    createArticleMutation.mutate(articleForm);
  };

  return (
    <>
      <Helmet>
        <title>پنل مدیریت | آکادمی دکتر نوید کلانی</title>
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow bg-background">
          <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">پنل مدیریت آکادمی</h1>
              <p className="text-muted-foreground">مدیریت دوره‌ها، مقالات و درخواست‌های مشاوره</p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="courses">دوره‌ها</TabsTrigger>
                <TabsTrigger value="articles">مقالات</TabsTrigger>
                <TabsTrigger value="consultations">مشاوره‌ها</TabsTrigger>
              </TabsList>

              {/* دوره‌ها */}
              <TabsContent value="courses" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* فرم ایجاد دوره جدید */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <PlusIcon className="w-5 h-5" />
                        افزودن دوره جدید
                      </CardTitle>
                      <CardDescription>
                        دوره آموزشی جدید به آکادمی اضافه کنید
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleCreateCourse} className="space-y-4">
                        <div>
                          <Label htmlFor="course-title">عنوان دوره</Label>
                          <Input
                            id="course-title"
                            value={courseForm.title}
                            onChange={(e) => setCourseForm({ ...courseForm, title: e.target.value })}
                            placeholder="مثال: اصول پایه حرکات اصلاحی"
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="course-description">توضیحات</Label>
                          <Textarea
                            id="course-description"
                            value={courseForm.description}
                            onChange={(e) => setCourseForm({ ...courseForm, description: e.target.value })}
                            placeholder="توضیح کاملی از دوره ارائه دهید..."
                            rows={3}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="course-instructor">مدرس</Label>
                          <Input
                            id="course-instructor"
                            value={courseForm.instructor}
                            onChange={(e) => setCourseForm({ ...courseForm, instructor: e.target.value })}
                            placeholder="دکتر نوید کلانی"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="course-image">تصویر دوره (URL)</Label>
                          <Input
                            id="course-image"
                            value={courseForm.imageUrl}
                            onChange={(e) => setCourseForm({ ...courseForm, imageUrl: e.target.value })}
                            placeholder="https://example.com/image.jpg"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="course-duration">مدت زمان (دقیقه)</Label>
                            <Input
                              id="course-duration"
                              type="number"
                              value={courseForm.duration}
                              onChange={(e) => setCourseForm({ ...courseForm, duration: parseInt(e.target.value) })}
                              placeholder="60"
                              required
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="course-sessions">تعداد جلسات</Label>
                            <Input
                              id="course-sessions"
                              type="number"
                              value={courseForm.sessions}
                              onChange={(e) => setCourseForm({ ...courseForm, sessions: parseInt(e.target.value) })}
                              placeholder="10"
                              required
                            />
                          </div>
                        </div>

                        <Button type="submit" className="w-full" disabled={createCourseMutation.isPending}>
                          {createCourseMutation.isPending ? 'در حال ایجاد...' : 'ایجاد دوره'}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>

                  {/* لیست دوره‌های موجود */}
                  <Card>
                    <CardHeader>
                      <CardTitle>دوره‌های موجود</CardTitle>
                      <CardDescription>
                        مدیریت دوره‌های آموزشی آکادمی
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {courses?.map((course) => (
                          <div key={course.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <h4 className="font-medium">{course.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                {course.sessions} جلسه • {course.duration} دقیقه
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <EditIcon className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <TrashIcon className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* مقالات */}
              <TabsContent value="articles" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* فرم ایجاد مقاله جدید */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <PlusIcon className="w-5 h-5" />
                        افزودن مقاله جدید
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleCreateArticle} className="space-y-4">
                        <div>
                          <Label htmlFor="article-title">عنوان مقاله</Label>
                          <Input
                            id="article-title"
                            value={articleForm.title}
                            onChange={(e) => setArticleForm({ ...articleForm, title: e.target.value })}
                            placeholder="عنوان مقاله..."
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="article-category">دسته‌بندی</Label>
                          <Input
                            id="article-category"
                            value={articleForm.category}
                            onChange={(e) => setArticleForm({ ...articleForm, category: e.target.value })}
                            placeholder="حرکات اصلاحی، آسیب‌شناسی، ..."
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="article-author">نویسنده</Label>
                          <Input
                            id="article-author"
                            value={articleForm.author}
                            onChange={(e) => setArticleForm({ ...articleForm, author: e.target.value })}
                            placeholder="دکتر نوید کلانی"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="article-image">تصویر مقاله (URL)</Label>
                          <Input
                            id="article-image"
                            value={articleForm.imageUrl}
                            onChange={(e) => setArticleForm({ ...articleForm, imageUrl: e.target.value })}
                            placeholder="https://example.com/image.jpg"
                          />
                        </div>

                        <div>
                          <Label htmlFor="article-content">محتوای مقاله</Label>
                          <Textarea
                            id="article-content"
                            value={articleForm.content}
                            onChange={(e) => setArticleForm({ ...articleForm, content: e.target.value })}
                            placeholder="محتوای کامل مقاله..."
                            rows={6}
                            required
                          />
                        </div>

                        <Button type="submit" className="w-full" disabled={createArticleMutation.isPending}>
                          {createArticleMutation.isPending ? 'در حال ایجاد...' : 'ایجاد مقاله'}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>

                  {/* لیست مقالات موجود */}
                  <Card>
                    <CardHeader>
                      <CardTitle>مقالات موجود</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {articles?.map((article) => (
                          <div key={article.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <h4 className="font-medium">{article.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                نویسنده: {article.author} • دسته: {article.category}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <EyeIcon className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <EditIcon className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <TrashIcon className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* درخواست‌های مشاوره */}
              <TabsContent value="consultations" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>درخواست‌های مشاوره</CardTitle>
                    <CardDescription>
                      مدیریت درخواست‌های مشاوره از کاربران
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {consultations?.map((consultation) => (
                        <div key={consultation.id} className="p-4 border rounded-lg">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-medium">{consultation.fullName}</h4>
                              <p className="text-sm text-muted-foreground">
                                تلفن: {consultation.phone} • سن: {consultation.age}
                              </p>
                            </div>
                            <Badge variant={consultation.status === 'pending' ? 'destructive' : 'default'}>
                              {consultation.status === 'pending' ? 'در انتظار بررسی' : 'بررسی شده'}
                            </Badge>
                          </div>
                          <p className="text-sm mb-3">{consultation.description}</p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              تماس با مراجع
                            </Button>
                            <Button variant="outline" size="sm">
                              علامت‌گذاری به عنوان بررسی شده
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}