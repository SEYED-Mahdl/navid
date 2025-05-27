import { Helmet } from 'react-helmet';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Massage() {
  const massageTypes = [
    {
      id: 'applications',
      title: 'کاربرد ماساژ',
      description: 'آشنایی با کاربردهای مختلف ماساژ در درمان و بهبود سلامت',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
      href: '/services/massage/applications'
    },
    {
      id: 'massagology',
      title: 'ماساژلوژی',
      description: 'اصول و مبانی علمی ماساژ درمانی',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      href: '/services/massage/massagology'
    },
    {
      id: 'thai',
      title: 'ماساژلوژی تایلندی',
      description: 'تکنیک‌های سنتی ماساژ تایلندی و فواید آن',
      image: 'https://images.unsplash.com/photo-1506629905607-acd26ded7eb7',
      href: '/services/massage/thai'
    },
    {
      id: 'shiatsu',
      title: 'ماساژلوژی شیاتسو',
      description: 'روش ژاپنی ماساژ با فشار انگشت',
      image: 'https://images.unsplash.com/photo-1594824891321-e93ff7ac3c87',
      href: '/services/massage/shiatsu'
    },
    {
      id: 'deep-tissue',
      title: 'ماساژلوژی دیپ تیشو',
      description: 'ماساژ عمقی برای رفع تنش‌های عضلانی',
      image: 'https://images.unsplash.com/photo-1549476464-37392f717541',
      href: '/services/massage/deep-tissue'
    },
    {
      id: 'hot-stone',
      title: 'ماساژلوژی سنگ داغ',
      description: 'استفاده از سنگ‌های گرم برای آرامش عضلات',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      href: '/services/massage/hot-stone'
    },
    {
      id: 'therapeutic',
      title: 'ماساژلوژی درمانی',
      description: 'ماساژ تخصصی برای درمان مشکلات جسمی',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
      href: '/services/massage/therapeutic'
    }
  ];

  return (
    <>
      <Helmet>
        <title>خدمات ماساژ | آکادمی دکتر نوید کلانی</title>
        <meta name="description" content="انواع خدمات ماساژ درمانی و آموزشی در آکادمی دکتر نوید کلانی" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">خدمات ماساژ</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  آکادمی دکتر نوید کلانی انواع خدمات ماساژ تخصصی و درمانی را با بهره‌گیری از جدیدترین روش‌های روز دنیا ارائه می‌دهد
                </p>
                <Link href="/assessment">
                  <Button size="lg" className="mx-2">
                    درخواست مشاوره
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">انواع ماساژ</h2>
                <div className="h-1 w-20 bg-primary mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {massageTypes.map((massage) => (
                  <Card key={massage.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={massage.image} 
                        alt={massage.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{massage.title}</CardTitle>
                      <CardDescription>{massage.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href={massage.href}>
                        <Button variant="outline" className="w-full">
                          اطلاعات بیشتر
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary/10">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">آماده تجربه ماساژ درمانی هستید؟</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                با ما تماس بگیرید تا بهترین نوع ماساژ برای نیازهای شما انتخاب شود
              </p>
              <Link href="/assessment">
                <Button size="lg">درخواست مشاوره</Button>
              </Link>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}