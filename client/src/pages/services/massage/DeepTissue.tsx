import { Helmet } from 'react-helmet';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function DeepTissueMassage() {
  return (
    <>
      <Helmet>
        <title>ماساژلوژی دیپ تیشو | آکادمی دکتر نوید کلانی</title>
        <meta name="description" content="ماساژ عمقی برای رفع تنش‌های عضلانی" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">ماساژلوژی دیپ تیشو</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  ماساژ عمقی برای رفع تنش‌های عضلانی مزمن و درد عمیق
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1549476464-37392f717541" 
                    alt="ماساژ دیپ تیشو"
                    className="w-full max-w-2xl mx-auto rounded-lg mb-8"
                  />
                </div>
                
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-4">ماساژ دیپ تیشو چیست؟</h2>
                  <p className="text-muted-foreground mb-6">
                    این نوع ماساژ با فشار قوی بر لایه‌های عمیق عضلات و بافت همبند تمرکز دارد تا گره‌های عضلانی و تنش‌های مزمن را برطرف کند.
                  </p>

                  <h2 className="text-2xl font-bold mb-4">تکنیک‌های مورد استفاده</h2>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• فشار عمیق و کند</li>
                    <li>• حرکات اصطکاکی</li>
                    <li>• کار بر روی trigger points</li>
                    <li>• استفاده از آرنج و مفاصل انگشت</li>
                    <li>• تکنیک myofascial release</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-4">مناسب برای</h2>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• درد مزمن گردن و کمر</li>
                    <li>• گره‌های عضلانی</li>
                    <li>• آسیب‌های ورزشی</li>
                    <li>• سفتی مفاصل</li>
                    <li>• کاهش دامنه حرکتی</li>
                  </ul>
                </div>

                <div className="text-center">
                  <Link href="/assessment">
                    <Button size="lg">رزرو جلسه دیپ تیشو</Button>
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