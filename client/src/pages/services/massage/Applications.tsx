import { Helmet } from 'react-helmet';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function MassageApplications() {
  return (
    <>
      <Helmet>
        <title>کاربرد ماساژ | آکادمی دکتر نوید کلانی</title>
        <meta name="description" content="کاربردهای مختلف ماساژ در درمان و بهبود سلامت" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">کاربرد ماساژ</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  آشنایی با کاربردهای مختلف ماساژ در درمان و بهبود سلامت جسمی و روحی
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">کاربردهای درمانی</h2>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• درمان درد عضلانی و مفصلی</li>
                      <li>• کاهش التهاب و ورم</li>
                      <li>• بهبود گردش خون</li>
                      <li>• درمان اسپاسم عضلانی</li>
                      <li>• کاهش استرس و اضطراب</li>
                      <li>• بهبود کیفیت خواب</li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">کاربردهای ورزشی</h2>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• آماده‌سازی قبل از تمرین</li>
                      <li>• بازیابی بعد از تمرین</li>
                      <li>• پیشگیری از آسیب‌های ورزشی</li>
                      <li>• بهبود عملکرد ورزشی</li>
                      <li>• کاهش خستگی عضلانی</li>
                      <li>• افزایش انعطاف‌پذیری</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" 
                    alt="کاربرد ماساژ"
                    className="w-full max-w-2xl mx-auto rounded-lg mb-8"
                  />
                  <Link href="/assessment">
                    <Button size="lg">درخواست مشاوره</Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}