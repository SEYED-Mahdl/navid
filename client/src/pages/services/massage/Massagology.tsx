import { Helmet } from 'react-helmet';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function Massagology() {
  return (
    <>
      <Helmet>
        <title>ماساژلوژی | آکادمی دکتر نوید کلانی</title>
        <meta name="description" content="اصول و مبانی علمی ماساژ درمانی" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">ماساژلوژی</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  اصول و مبانی علمی ماساژ درمانی و تکنیک‌های مدرن
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
                    alt="ماساژلوژی"
                    className="w-full max-w-2xl mx-auto rounded-lg mb-8"
                  />
                </div>
                
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-4">تعریف ماساژلوژی</h2>
                  <p className="text-muted-foreground mb-6">
                    ماساژلوژی علم و هنر درمان از طریق لمس است که شامل تکنیک‌های مختلف دستی برای تحریک بافت‌های نرم بدن می‌باشد.
                  </p>

                  <h2 className="text-2xl font-bold mb-4">مبانی علمی</h2>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• آناتومی و فیزیولوژی بدن انسان</li>
                    <li>• نحوه عملکرد سیستم عضلانی-اسکلتی</li>
                    <li>• تأثیرات فیزیولوژیک ماساژ بر بدن</li>
                    <li>• اصول بیومکانیک حرکت</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-4">تکنیک‌های اساسی</h2>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• نوازش (Effleurage)</li>
                    <li>• ورز دادن (Petrissage)</li>
                    <li>• لرزش (Vibration)</li>
                    <li>• ضربه زدن (Tapotement)</li>
                    <li>• اصطکاک (Friction)</li>
                  </ul>
                </div>

                <div className="text-center">
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