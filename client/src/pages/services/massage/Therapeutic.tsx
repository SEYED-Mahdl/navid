import { Helmet } from 'react-helmet';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function TherapeuticMassage() {
  return (
    <>
      <Helmet>
        <title>ماساژلوژی درمانی | آکادمی دکتر نوید کلانی</title>
        <meta name="description" content="ماساژ تخصصی برای درمان مشکلات جسمی" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">ماساژلوژی درمانی</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  ماساژ تخصصی و هدفمند برای درمان مشکلات خاص جسمی
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b" 
                    alt="ماساژ درمانی"
                    className="w-full max-w-2xl mx-auto rounded-lg mb-8"
                  />
                </div>
                
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-4">ماساژ درمانی چیست؟</h2>
                  <p className="text-muted-foreground mb-6">
                    ماساژ درمانی روشی تخصصی است که برای درمان مشکلات خاص جسمی و بازیابی عملکرد طبیعی بدن طراحی شده است.
                  </p>

                  <h2 className="text-2xl font-bold mb-4">حوزه‌های کاربرد</h2>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• درمان آسیب‌های ورزشی</li>
                    <li>• بازیابی پس از جراحی</li>
                    <li>• درمان اختلالات عضلانی-اسکلتی</li>
                    <li>• کاهش درد مزمن</li>
                    <li>• بهبود دامنه حرکتی</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-4">روش‌های درمانی</h2>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• تحلیل وضعیت بیمار</li>
                    <li>• طراحی برنامه درمانی اختصاصی</li>
                    <li>• اعمال تکنیک‌های هدفمند</li>
                    <li>• پیگیری و ارزیابی پیشرفت</li>
                    <li>• آموزش تمرینات خانگی</li>
                  </ul>
                </div>

                <div className="text-center">
                  <Link href="/assessment">
                    <Button size="lg">مشاوره درمانی</Button>
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