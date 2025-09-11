import { Helmet } from 'react-helmet';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useRoute } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Course } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toPersianNumbers } from '@/lib/utils';
import { Link } from 'wouter';

export default function CourseDetail() {
  const [match, params] = useRoute('/courses/:id');
  const courseId = params?.id;

  const { data: courses, isLoading } = useQuery<Course[]>({
    queryKey: ['/api/courses'],
  });

  const course = courses?.find(c => c.id === Number(courseId));

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>در حال بارگذاری... | آکادمی دکتر نوید کلانی</title>
        </Helmet>
        
        <div className="flex flex-col min-h-screen">
          <Header />
          
          <main className="flex-grow py-12">
            <div className="container mx-auto px-4 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">در حال بارگذاری اطلاعات دوره...</p>
            </div>
          </main>
          
          <Footer />
        </div>
      </>
    );
  }

  if (!course) {
    return (
      <>
        <Helmet>
          <title>دوره یافت نشد | آکادمی دکتر نوید کلانی</title>
        </Helmet>
        
        <div className="flex flex-col min-h-screen">
          <Header />
          
          <main className="flex-grow py-12">
            <div className="container mx-auto px-4 text-center">
              <div className="text-6xl mb-4">😕</div>
              <h1 className="text-2xl font-bold mb-4">دوره مورد نظر یافت نشد</h1>
              <p className="text-muted-foreground mb-6">ممکن است این دوره حذف شده باشد یا آدرس اشتباه باشد</p>
              <Link href="/courses">
                <Button>بازگشت به لیست دوره‌ها</Button>
              </Link>
            </div>
          </main>
          
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{course.title} | آکادمی دکتر نوید کلانی</title>
        <meta name="description" content={course.description} />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Course Content */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                  <div className="h-1 w-20 bg-primary mb-6"></div>
                </div>
                
                <div className="mb-8">
                  <img 
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                </div>
                
                <div className="prose prose-slate max-w-none">
                  <h2>درباره این دوره</h2>
                  <p>{course.description}</p>
                  
                  <h3>مدت زمان دوره</h3>
                  <p>این دوره شامل {toPersianNumbers(course.sessions)} جلسه به مجموع {toPersianNumbers(course.duration)} دقیقه محتوای آموزشی است.</p>
                  
                  <h3>امتیاز دوره</h3>
                  <p>این دوره از سوی {toPersianNumbers(course.ratingCount)} نفر امتیاز {toPersianNumbers(course.rating)} از ۵ را کسب کرده است.</p>
                </div>
              </div>
              
              {/* Course Info Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">اطلاعات دوره</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">تعداد جلسات:</span>
                        <span>{toPersianNumbers(course.sessions)} جلسه</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">مدت زمان:</span>
                        <span>{toPersianNumbers(course.duration)} دقیقه</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">امتیاز:</span>
                        <span>{toPersianNumbers(course.rating)} از ۵</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">تعداد رای:</span>
                        <span>{toPersianNumbers(course.ratingCount)} نفر</span>
                      </div>
                    </div>
                    
                    <Link href={`/courses/${course.id}/purchase`}>
                      <Button className="w-full" size="lg">
                        خرید دوره
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}