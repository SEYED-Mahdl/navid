import { Helmet } from 'react-helmet';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function HotStoneMassage() {
  return (
    <>
      <Helmet>
        <title>ماساژلوژی سنگ داغ | آکادمی دکتر نوید کلانی</title>
        <meta name="description" content="استفاده از سنگ‌های گرم برای آرامش عضلات" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">ماساژلوژی سنگ داغ</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  تجربه آرامش بی‌نظیر با سنگ‌های آتشفشانی گرم
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" 
                    alt="ماساژ سنگ داغ"
                    className="w-full max-w-2xl mx-auto rounded-lg mb-8"
                  />
                </div>
                
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-4">ماساژ سنگ داغ چیست؟</h2>
                  <p className="text-muted-foreground mb-6">
                    این روش ترکیبی از ماساژ سنتی و استفاده از سنگ‌های آتشفشانی گرم است که عمق آرامش را چندین برابر می‌کند.
                  </p>

                  <h2 className="text-2xl font-bold mb-4">مراحل درمان</h2>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• گرم کردن سنگ‌ها تا دمای مطلوب</li>
                    <li>• قرار دادن سنگ‌ها بر روی نقاط خاص</li>
                    <li>• ماساژ با سنگ‌های گرم</li>
                    <li>• ترکیب با تکنیک‌های دستی</li>
                    <li>• استراحت عمیق</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-4">فواید درمانی</h2>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• رفع تنش عمیق عضلات</li>
                    <li>• بهبود گردش خون</li>
                    <li>• کاهش استرس و اضطراب</li>
                    <li>• بهبود کیفیت خواب</li>
                    <li>• تسکین درد مفاصل</li>
                  </ul>
                </div>

                <div className="text-center">
                  <Link href="/assessment">
                    <Button size="lg">رزرو جلسه سنگ داغ</Button>
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