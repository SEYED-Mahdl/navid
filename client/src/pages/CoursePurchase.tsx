import { Helmet } from 'react-helmet';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useRoute, Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Course } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toPersianNumbers } from '@/lib/utils';
import { ArrowRight, CreditCard, User, CheckCircle } from 'lucide-react';

export default function CoursePurchase() {
  const [match, params] = useRoute('/courses/:id/purchase');
  const courseId = params?.id;

  const { data: courses } = useQuery<Course[]>({
    queryKey: ['/api/courses'],
  });

  const course = courses?.find(c => c.id === Number(courseId));

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
        <title>خرید {course.title} | آکادمی دکتر نوید کلانی</title>
        <meta name="description" content={`خرید دوره ${course.title} - آکادمی دکتر نوید کلانی`} />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
              <Link href="/courses" className="hover:text-primary">دوره‌ها</Link>
              <ArrowRight className="h-4 w-4" />
              <Link href={`/courses/${course.id}`} className="hover:text-primary">{course.title}</Link>
              <ArrowRight className="h-4 w-4" />
              <span>خرید دوره</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Course Summary */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      خلاصه دوره
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <img 
                        src={course.imageUrl}
                        alt={course.title}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3">{course.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {course.description}
                    </p>
                    
                    <div className="space-y-2 text-sm">
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
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Payment Information */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      اطلاعات پرداخت
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100">
                        راهنمای خرید دوره
                      </h4>
                      <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                        برای خرید این دوره، مبلغ دوره را به شماره کارت زیر واریز نمایید. 
                        پس از واریز، دوره به صورت خودکار برای شما فعال خواهد شد.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <CreditCard className="h-4 w-4 text-primary" />
                          <span className="font-medium">شماره کارت</span>
                        </div>
                        <div className="font-mono text-lg font-bold text-center bg-white dark:bg-gray-700 p-3 rounded border">
                          {toPersianNumbers('6219861987821484')}
                        </div>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <User className="h-4 w-4 text-primary" />
                          <span className="font-medium">نام صاحب حساب</span>
                        </div>
                        <div className="text-center font-medium bg-white dark:bg-gray-700 p-3 rounded border">
                          آقای نوید کلانی
                        </div>
                      </div>

                      <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                          ✅ مزایای خرید این دوره:
                        </h4>
                        <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                          <li>• دسترسی مادام‌العمر به محتوای دوره</li>
                          <li>• پشتیبانی تخصصی استاد</li>
                          <li>• گواهینامه معتبر پس از اتمام دوره</li>
                          <li>• دسترسی به منابع تکمیلی</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <Link href={`/courses/${course.id}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          بازگشت به دوره
                        </Button>
                      </Link>
                      <Button className="flex-1" onClick={() => {
                        alert('اطلاعات پرداخت کپی شد! لطفاً واریز را انجام دهید.');
                      }}>
                        کپی اطلاعات پرداخت
                      </Button>
                    </div>
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