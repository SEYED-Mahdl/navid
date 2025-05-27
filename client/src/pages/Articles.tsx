import { Helmet } from 'react-helmet';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'wouter';
import { ChevronLeft } from 'lucide-react';

export default function Articles() {
  // Mock article data to match design 
  const articles = [
    {
      id: 1,
      title: 'عنوان مقاله',
      content: 'Lorem ipsum dolor sit amet consectetur. Massa pellentesque justo etiam arcu lectus risus imperdiet diam. Hendrerit lorem cursus nisl lorem id tellus lorem. Cras urna tristique lacus eu et est. Vehicula nullam et amet erat non vestibulum sit. Sit at arcu sit parturient leo magna vel cras in. Id eu nunc sit quis. Viverra in amet sodales mollis ligula orci cras molestie facilisis. Tortor commodo gravida orci sagittis malesuada non quisque. Nisl dis ultrices leo id ullamcorper faucibus malesuada...',
      date: '2023-05-15',
    },
    {
      id: 2,
      title: 'عنوان مقاله',
      content: 'Lorem ipsum dolor sit amet consectetur. Massa pellentesque justo etiam arcu lectus risus imperdiet diam. Hendrerit lorem cursus nisl lorem id tellus lorem. Cras urna tristique lacus eu et est. Vehicula nullam et amet erat non vestibulum sit. Sit at arcu sit parturient leo magna vel cras in. Id eu nunc sit quis. Viverra in amet sodales mollis ligula orci cras molestie facilisis. Tortor commodo gravida orci sagittis malesuada non quisque. Nisl dis ultrices leo id ullamcorper faucibus malesuada...',
      date: '2023-05-10',
    },
    {
      id: 3,
      title: 'عنوان مقاله',
      content: 'Lorem ipsum dolor sit amet consectetur. Massa pellentesque justo etiam arcu lectus risus imperdiet diam. Hendrerit lorem cursus nisl lorem id tellus lorem. Cras urna tristique lacus eu et est. Vehicula nullam et amet erat non vestibulum sit. Sit at arcu sit parturient leo magna vel cras in. Id eu nunc sit quis. Viverra in amet sodales mollis ligula orci cras molestie facilisis. Tortor commodo gravida orci sagittis malesuada non quisque. Nisl dis ultrices leo id ullamcorper faucibus malesuada...',
      date: '2023-05-05',
    }
  ];

  return (
    <>
      <Helmet>
        <title>مقالات | آکادمی دکتر نوید کلانی</title>
        <meta name="description" content="مقالات آموزشی و تخصصی آکادمی حرکات اصلاحی و آسیب‌شناسی ورزشی دکتر نوید کلانی" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h1 className="text-3xl font-bold mb-2">مقالات</h1>
              <div className="h-1 w-20 bg-primary"></div>
            </div>
            
            <div className="space-y-6">
              {articles.map((article) => (
                <div key={article.id} className="article-item">
                  <h2 className="article-title">{article.title}</h2>
                  <p className="article-content">{article.content}</p>
                  <Link href={`/articles/${article.id}`}>
                    <span className="article-link">
                      ادامه مطلب
                      <ChevronLeft className="mr-1 h-4 w-4" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
