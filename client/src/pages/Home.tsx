import { Helmet } from 'react-helmet';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { useQuery } from '@tanstack/react-query';
import { Course } from '@shared/schema';
import { CourseCard } from '@/components/courses/CourseCard';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function Home() {
  const { data: courses, isLoading } = useQuery<Course[]>({
    queryKey: ['/api/courses'],
  });

  return (
    <>
      <Helmet>
        <title>آکادمی تخصصی حرکات اصلاحی و آسیب‌شناسی ورزشی دکتر نوید کلانی</title>
        <meta name="description" content="آکادمی تخصصی حرکات اصلاحی و آسیب‌شناسی ورزشی دکتر نوید کلانی - مشاوره آنلاین و دوره‌های آموزشی" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <HeroSection />
          
          {/* Featured Courses Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-3xl font-bold mb-2">دوره‌های آموزشی</h2>
                  <div className="h-1 w-20 bg-primary"></div>
                </div>
                <Link href="/courses">
                  <Button variant="outline">مشاهده همه دوره‌ها</Button>
                </Link>
              </div>
              
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-card rounded-lg overflow-hidden shadow-lg h-[350px] animate-pulse">
                      <div className="h-48 bg-muted"></div>
                      <div className="p-5">
                        <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
                        <div className="h-4 bg-muted rounded w-1/2 mb-4"></div>
                        <div className="flex justify-between mt-4">
                          <div className="h-4 bg-muted rounded w-1/4"></div>
                          <div className="h-4 bg-muted rounded w-1/4"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses?.slice(0, 3).map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              )}
            </div>
          </section>
          
          {/* About Section */}
          <section className="py-16 bg-card">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pl-10">
                  <h2 className="text-3xl font-bold mb-6">درباره آکادمی دکتر نوید کلانی</h2>
                  <p className="text-muted-foreground mb-6">
                    آکادمی تخصصی حرکات اصلاحی و آسیب‌شناسی ورزشی دکتر نوید کلانی با هدف ارائه خدمات حرفه‌ای در زمینه 
                    اصلاح حرکات، درمان آسیب‌های ورزشی و توانبخشی تاسیس شده است.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    این آکادمی با بهره‌گیری از جدیدترین متدهای روز دنیا و تجربه و دانش متخصصین برجسته در زمینه‌های 
                    فیزیوتراپی، حرکات اصلاحی و آسیب‌شناسی ورزشی، خدمات متنوعی را برای ورزشکاران و افراد مختلف ارائه می‌دهد.
                  </p>
                  <div className="flex space-x-4 space-x-reverse">
                    <Link href="/about">
                      <Button variant="default">بیشتر بدانید</Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline">تماس با ما</Button>
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" 
                      alt="آکادمی دکتر نوید کلانی" 
                      className="w-full h-[400px] object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Services Preview */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">خدمات ما</h2>
                <div className="h-1 w-20 bg-primary mx-auto"></div>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  آکادمی دکتر کلانی طیف گسترده‌ای از خدمات تخصصی در زمینه حرکات اصلاحی، توانبخشی و آسیب‌شناسی ورزشی را ارائه می‌دهد
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-primary h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">حرکات اصلاحی</h3>
                  <p className="text-muted-foreground">ارزیابی و اصلاح ناهنجاری‌های اسکلتی-عضلانی با جدیدترین روش‌های علمی</p>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-primary h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">توانبخشی آسیب‌های ورزشی</h3>
                  <p className="text-muted-foreground">بازگرداندن عملکرد طبیعی بدن پس از آسیب‌های ورزشی با پروتکل‌های استاندارد</p>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-primary h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">مشاوره و برنامه تمرینی</h3>
                  <p className="text-muted-foreground">ارائه مشاوره تخصصی و برنامه‌های تمرینی اختصاصی برای بهبود عملکرد و پیشگیری از آسیب</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Call-to-Action Section */}
          <section className="py-16 bg-primary/10">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">آماده همکاری با ما هستید؟</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                همین امروز با ما تماس بگیرید و از خدمات تخصصی آکادمی دکتر نوید کلانی بهره‌مند شوید
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
                <Link href="/assessment">
                  <Button variant="default" size="lg">درخواست مشاوره</Button>
                </Link>
                <Link href="/courses">
                  <Button variant="outline" size="lg">مشاهده دوره‌ها</Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
