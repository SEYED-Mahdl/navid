import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Course } from '@shared/schema';
import { toPersianNumbers, formatRating, getFullStars, getHalfStars, getEmptyStars } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const rating = formatRating(course.rating);
  const fullStars = getFullStars(rating);
  const halfStars = getHalfStars(rating);
  const emptyStars = getEmptyStars(rating);

  return (
    <Link href={`/courses/${course.id}`}>
      <div className="course-card">
        <Card className="bg-card transition group cursor-pointer h-full flex flex-col overflow-hidden">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-full object-cover transition duration-300"
            />
            
            {/* Hover Overlay with Description */}
            <div className="course-card-overlay">
              <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
              <p className="text-white/80 text-sm mb-3">
                {course.description.length > 150 ? 
                  `${course.description.substring(0, 150)}...` : 
                  course.description
                }
              </p>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
                مشاهده دوره
              </Button>
            </div>
          </div>
          <CardContent className="p-5 flex-grow flex flex-col">
            <h3 className="text-xl font-bold mb-3">{course.title}</h3>
            <div className="flex items-center mb-4">
              <div className="stars text-yellow-400">
                {[...Array(fullStars)].map((_, i) => (
                  <svg key={`full-${i}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
                
                {[...Array(halfStars)].map((_, i) => (
                  <svg key={`half-${i}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="none" stroke="currentColor"/>
                    <path d="M12 2v15.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
                
                {[...Array(emptyStars)].map((_, i) => (
                  <svg key={`empty-${i}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="inline-block">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-muted-foreground mr-2">{toPersianNumbers(course.ratingCount)} رای</span>
            </div>
            <div className="mt-auto flex justify-between text-muted-foreground">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>{toPersianNumbers(course.duration)} دقیقه</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <line x1="8" y1="6" x2="21" y2="6"/>
                  <line x1="8" y1="12" x2="21" y2="12"/>
                  <line x1="8" y1="18" x2="21" y2="18"/>
                  <line x1="3" y1="6" x2="3.01" y2="6"/>
                  <line x1="3" y1="12" x2="3.01" y2="12"/>
                  <line x1="3" y1="18" x2="3.01" y2="18"/>
                </svg>
                <span>{toPersianNumbers(course.sessions)} جلسه</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
}
