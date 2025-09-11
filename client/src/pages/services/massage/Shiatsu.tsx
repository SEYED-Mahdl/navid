import { Helmet } from 'react-helmet';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function ShiatsuMassage() {
  return (
    <>
      <Helmet>
        <title>ماساژلوژی شیاتسو | آکادمی دکتر نوید کلانی</title>
        <meta name="description" content="روش ژاپنی ماساژ با فشار انگشت" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">ماساژلوژی شیاتسو</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  هنر ژاپنی درمان با فشار انگشت بر نقاط انرژی بدن
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1594824891321-e93ff7ac3c87" 
                    alt="ماساژ شیاتسو"
                    className="w-full max-w-2xl mx-auto rounded-lg mb-8"
                  />
                </div>
                
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-4">اصول شیاتسو</h2>
                  <p className="text-muted-foreground mb-6">
                    شیاتسو که به معنای "فشار انگشت" است، بر اساس فلسفه طب سنتی چینی و ژاپنی عمل می‌کند.
                  </p>

                  <h2 className="text-2xl font-bold mb-4">تکنیک‌ها</h2>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• فشار ریتمیک با انگشتان</li>
                    <li>• استفاده از کف دست و آرنج</li>
                    <li>• کار بر روی مریدین‌های انرژی</li>
                    <li>• تحریک نقاط فشاری</li>
                    <li>• کشش ملایم مفاصل</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-4">مزایای درمانی</h2>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• تنظیم جریان انرژی در بدن</li>
                    <li>• کاهش درد و استرس</li>
                    <li>• بهبود خواب</li>
                    <li>• تقویت سیستم گوارش</li>
                    <li>• افزایش انرژی و نشاط</li>
                  </ul>
                </div>

                <div className="text-center">
                  <Link href="/assessment">
                    <Button size="lg">رزرو جلسه شیاتسو</Button>
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