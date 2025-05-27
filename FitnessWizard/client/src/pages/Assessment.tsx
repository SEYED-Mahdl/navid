import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { insertConsultationSchema } from '@shared/schema';
import { useToast } from '@/hooks/use-toast';
import { User, Phone, MessageSquare, Mail } from 'lucide-react';

// Extend the schema with validation rules
const formSchema = insertConsultationSchema.extend({
  fullName: z.string().min(2, { message: 'نام و نام خانوادگی الزامی است' }),
  phone: z.string().min(10, { message: 'شماره تماس معتبر نیست' }),
  description: z.string().min(10, { message: 'توضیحات باید حداقل 10 کاراکتر باشد' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Assessment() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Define form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      age: '',
      phone: '',
      description: '',
    },
  });
  
  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const response = await apiRequest('POST', '/api/consultations', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'درخواست شما با موفقیت ثبت شد',
        description: 'کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت',
        variant: 'default',
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: 'خطا در ثبت درخواست',
        description: error.message || 'لطفا دوباره تلاش کنید',
        variant: 'destructive',
      });
    },
    onMutate: () => {
      setIsSubmitting(true);
    },
    onSettled: () => {
      setIsSubmitting(false);
    }
  });
  
  function onSubmit(data: FormValues) {
    mutation.mutate(data);
  }

  return (
    <>
      <Helmet>
        <title>ارزیابی آنلاین، مشاوره و برنامه تمرینی | آکادمی دکتر نوید کلانی</title>
        <meta name="description" content="درخواست ارزیابی آنلاین، مشاوره و برنامه تمرینی اختصاصی از آکادمی تخصصی حرکات اصلاحی و آسیب‌شناسی ورزشی دکتر نوید کلانی" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow green-gradient">
          <div className="container mx-auto px-4 py-10 lg:py-12">
            <div className="text-right mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">ارزیابی آنلاین، مشاوره و برنامه تمرینی</h1>
              <p className="text-white/80">
                اطلاعات و توضیحات خود را ثبت کنید. تیم ما در سریع‌ترین زمان ممکن پاسخگو خواهد بود
              </p>
            </div>
            
            {/* Form Section */}
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <User className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  {...form.register("fullName")}
                  className="w-full p-3 pr-12 rounded-md bg-background/10 backdrop-blur-md placeholder-white/70 text-white border border-white/20 mb-4"
                  placeholder="نام و نام خانوادگی"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full p-3 pr-12 rounded-md bg-background/10 backdrop-blur-md placeholder-white/70 text-white border border-white/20"
                    placeholder="سن"
                  />
                </div>
                
                <div className="relative">
                  <Phone className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    {...form.register("phone")}
                    className="w-full p-3 pr-12 rounded-md bg-background/10 backdrop-blur-md placeholder-white/70 text-white border border-white/20"
                    placeholder="شماره تماس"
                  />
                </div>
              </div>
              
              <div className="relative mt-4">
                <MessageSquare className="absolute right-4 top-6 text-gray-400" size={20} />
                <textarea
                  {...form.register("description")}
                  className="w-full h-64 p-4 pr-12 rounded-md bg-background/10 backdrop-blur-md placeholder-white/70 text-white border border-white/20"
                  placeholder="علت مراجعه و شرح حال مختصر"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-md transition mt-6 w-full"
                disabled={isSubmitting}
                onClick={form.handleSubmit(onSubmit)}
              >
                {isSubmitting ? 'در حال ثبت...' : 'ثبت'}
              </button>
            </div>
            
            {/* Social Icons at Bottom */}
            <div className="flex items-center justify-start mt-16 space-x-4 space-x-reverse">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="mailto:info@example.com" className="text-white hover:text-primary transition">
                <Mail size={24} />
              </a>
            </div>
            
            {/* Footer Links */}
            <div className="flex justify-end mt-8">
              <a href="/contact" className="text-white/70 hover:text-white transition mr-6">تماس با ما</a>
              <a href="/about" className="text-white/70 hover:text-white transition">درباره ما</a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
