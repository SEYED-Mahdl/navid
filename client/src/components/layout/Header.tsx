import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { MegaMenu } from './MegaMenu';
import { Menu, Search, User, ChevronDown } from 'lucide-react';
import Logo from '@/assets/new-logo.jpg';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const [location] = useLocation();
  
  // Remove auth query that causes error
  const user = null; // For now, no authentication
  
  const logout = async () => {
    // Simple logout
    window.location.href = '/';
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <img src={Logo} alt="دکتر کلانی" className="w-8 h-8" />
                </div>
                <span className="mr-2 text-primary font-bold">دکتر کلانی</span>
              </div>
            </Link>
          </div>
          
          {/* Main Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-1 space-x-reverse">
            <Link href="/">
              <span className={`px-3 py-2 cursor-pointer ${location === '/' ? 'text-primary' : 'hover:text-primary transition'}`}>
                خانه
              </span>
            </Link>
            
            <div className="relative group">
              <span className={`px-3 py-2 cursor-pointer ${location.startsWith('/services') ? 'text-primary' : 'hover:text-primary transition'} flex items-center menu-trigger`}>
                خدمات
                <ChevronDown className="mr-1 h-4 w-4" />
              </span>
              
              {/* Mega Menu */}
              <div className="hidden group-hover:block fixed w-full right-0 left-0 top-14 z-50">
                <MegaMenu />
              </div>
            </div>
            
            <Link href="/courses">
              <span className={`px-3 py-2 cursor-pointer ${location === '/courses' ? 'text-primary' : 'hover:text-primary transition'}`}>
                دوره‌های آموزشی
              </span>
            </Link>
            
            <Link href="/assessment">
              <span className={`px-3 py-2 cursor-pointer ${location === '/assessment' ? 'text-primary' : 'hover:text-primary transition'}`}>
                ارزیابی آنلاین، مشاوره و برنامه تمرینی
              </span>
            </Link>
            
            <Link href="/articles">
              <span className={`px-3 py-2 cursor-pointer ${location === '/articles' ? 'text-primary' : 'hover:text-primary transition'}`}>
                مقالات
              </span>
            </Link>
          </nav>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-3 space-x-reverse">
            {/* Search Button */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            
            {user ? (
              <Button variant="default" onClick={logout} className="hidden md:flex">
                خروج
              </Button>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="default" className="hidden md:flex">ورود</Button>
                </Link>
                <Link href="/register">
                  <Button variant="outline" className="hidden md:flex">ثبت نام</Button>
                </Link>
              </>
            )}
            
            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 sm:w-80">
                <div className="flex flex-col space-y-4 mt-6">
                  <Link href="/">
                    <span className={`block px-3 py-2 cursor-pointer ${location === '/' ? 'text-primary' : ''}`}>
                      خانه
                    </span>
                  </Link>
                  <Link href="/services">
                    <span className={`block px-3 py-2 cursor-pointer ${location.startsWith('/services') ? 'text-primary' : ''}`}>
                      خدمات
                    </span>
                  </Link>
                  <Link href="/courses">
                    <span className={`block px-3 py-2 cursor-pointer ${location === '/courses' ? 'text-primary' : ''}`}>
                      دوره‌های آموزشی
                    </span>
                  </Link>
                  <Link href="/assessment">
                    <span className={`block px-3 py-2 cursor-pointer ${location === '/assessment' ? 'text-primary' : ''}`}>
                      ارزیابی آنلاین، مشاوره و برنامه تمرینی
                    </span>
                  </Link>
                  <Link href="/articles">
                    <span className={`block px-3 py-2 cursor-pointer ${location === '/articles' ? 'text-primary' : ''}`}>
                      مقالات
                    </span>
                  </Link>
                  {!user && (
                    <>
                      <Link href="/login">
                        <span className={`block px-3 py-2 cursor-pointer ${location === '/login' ? 'text-primary' : ''}`}>
                          ورود
                        </span>
                      </Link>
                      <Link href="/register">
                        <span className={`block px-3 py-2 cursor-pointer ${location === '/register' ? 'text-primary' : ''}`}>
                          ثبت نام
                        </span>
                      </Link>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
