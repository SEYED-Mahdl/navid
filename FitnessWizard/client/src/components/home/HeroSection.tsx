import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';

export function HeroSection() {
  const { data: user } = useQuery({
    queryKey: ['/api/auth/user'],
    retry: false,
  });

  return (
    <section className="relative h-screen min-h-[600px]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="absolute inset-0 hero-gradient z-10"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080)'}}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            آکادمی تخصصی حرکات اصلاحی و
            <span className="text-primary"> آسیب‌شناسی ورزشی</span> دکتر نوید کلانی
          </h1>
          <p className="text-lg md:text-xl mb-8">در کنار شما هستیم تا آگاهانه زندگی با کیفیتی را انتخاب کنید</p>
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 md:space-x-reverse justify-center">
            {user ? (
              <Link href="/courses">
                <Button variant="default" size="lg">مشاهده دوره‌ها</Button>
              </Link>
            ) : (
              <>
                <Link href="/register">
                  <Button variant="default" size="lg">عضویت</Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" size="lg">ورود</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Social Media Links */}
      <div className="absolute bottom-8 left-8 z-20 flex space-x-4">
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
            <path d="m10 15 5-3-5-3z"/>
          </svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
          </svg>
        </a>
        <a href="mailto:contact@example.com" className="text-white hover:text-primary transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </a>
      </div>
      
      {/* Page Dots */}
      <div className="absolute bottom-8 right-0 left-0 z-20">
        <div className="flex justify-center space-x-2 space-x-reverse">
          <button className="w-2 h-2 rounded-full bg-white/50"></button>
          <button className="w-2 h-2 rounded-full bg-white"></button>
          <button className="w-2 h-2 rounded-full bg-white/50"></button>
        </div>
      </div>
    </section>
  );
}
