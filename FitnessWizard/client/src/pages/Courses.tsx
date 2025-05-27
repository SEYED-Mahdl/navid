import { Helmet } from 'react-helmet';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useQuery } from '@tanstack/react-query';
import { Course } from '@shared/schema';
import { CourseCard } from '@/components/courses/CourseCard';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sort, setSort] = useState('newest');
  
  const { data: courses, isLoading } = useQuery<Course[]>({
    queryKey: ['/api/courses'],
  });
  
  const filteredCourses = courses?.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];
  
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sort === 'rating') {
      return b.rating - a.rating;
    } else if (sort === 'duration') {
      return b.duration - a.duration;
    } else {
      // Default sort by newest (id)
      return b.id - a.id;
    }
  });

  return (
    <>
      <Helmet>
        <title>دوره‌های آموزشی | آکادمی دکتر نوید کلانی</title>
        <meta name="description" content="مشاهده دوره‌های آموزشی آکادمی تخصصی حرکات اصلاحی و آسیب‌شناسی ورزشی دکتر نوید کلانی" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h1 className="text-3xl font-bold mb-2">دوره‌های آموزشی</h1>
              <div className="h-1 w-20 bg-primary"></div>
            </div>
            
            {/* Filters */}
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="search">جستجو در دوره‌ها</Label>
                <Input
                  id="search"
                  placeholder="نام دوره یا توضیحات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="space-y-2 lg:col-start-3">
                <Label htmlFor="sort">مرتب‌سازی</Label>
                <Select value={sort} onValueChange={setSort}>
                  <SelectTrigger id="sort" className="w-full">
                    <SelectValue placeholder="نحوه نمایش" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">جدیدترین</SelectItem>
                    <SelectItem value="rating">بیشترین امتیاز</SelectItem>
                    <SelectItem value="duration">طولانی‌ترین</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
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
              <>
                {sortedCourses.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-medium mb-2">هیچ دوره‌ای یافت نشد</h3>
                    <p className="text-muted-foreground">
                      لطفاً با عبارت دیگری جستجو کنید یا فیلترها را تغییر دهید
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedCourses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
