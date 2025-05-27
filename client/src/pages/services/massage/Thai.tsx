import { Helmet } from 'react-helmet';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function ThaiMassage() {
  return (
    <>
      <Helmet>
        <title>ماساژلوژی تایلندی | آکادمی دکتر نوید کلانی</title>
        <meta name="description" content="تکنیک‌های سنتی ماساژ تایلندی و فواید آن" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">ماساژلوژی تایلندی</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  تکنیک‌های سنتی ماساژ تایلندی برای آرامش عمیق و انعطاف‌پذیری
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1506629905607-acd26ded7eb7" 
                    alt="ماساژ تایلندی"
                    className="w-full max-w-2xl mx-auto rounded-lg mb-8"
                  />
                </div>
                
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-4">ویژگی‌های ماساژ تایلندی</h2>
                  <p className="text-muted-foreground mb-6">
                    ماساژ تایلندی ترکیبی از فشار، کشش و حرکات یوگا است که بر روی خطوط انرژی بدن تمرکز دارد.
                  </p>

                  <h2 className="text-2xl font-bold mb-4">تکنیک‌های اصلی</h2>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• فشار با انگشت شست و کف دست</li>
                    <li>• کشش عضلات و مفاصل</li>
                    <li>• حرکات یوگا پسیو</li>
                    <li>• ماساژ خطوط انرژی (Sen Lines)</li>
                    <li>• تنفس عمیق همراه با حرکات</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-4">فواید</h2>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• افزایش انعطاف‌پذیری</li>
                    <li>• بهبود گردش خون و انرژی</li>
                    <li>• کاهش استرس و تنش</li>
                    <li>• تقویت سیستم ایمنی</li>
                    <li>• بهبود تعادل جسم و ذهن</li>
                  </ul>
                </div>

                <div className="text-center">
                  <Link href="/assessment">
                    <Button size="lg">رزرو جلسه ماساژ تایلندی</Button>
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