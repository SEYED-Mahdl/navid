import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'wouter';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import Logo from '@/assets/new-logo.jpg';
import { User, UserPlus, Mail, Phone, Eye, EyeOff, Lock } from 'lucide-react';

const formSchema = z.object({
  username: z.string().min(3, { message: 'نام کاربری باید حداقل 3 کاراکتر باشد' }),
  password: z.string().min(6, { message: 'رمز عبور باید حداقل 6 کاراکتر باشد' }),
  fullName: z.string().min(3, { message: 'نام و نام خانوادگی الزامی است' }),
  email: z.string().email({ message: 'ایمیل نامعتبر است' }).optional().or(z.literal('')),
  phone: z.string().min(10, { message: 'شماره تماس معتبر نیست' }),
  nationalId: z.string().optional().or(z.literal('')),
});

type FormValues = z.infer<typeof formSchema>;

export default function Register() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Define form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      fullName: '',
      email: '',
      phone: '',
      nationalId: '',
    },
  });
  
  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const response = await apiRequest('POST', '/api/auth/register', {
        username: data.username,
        password: data.password,
        fullName: data.fullName,
        email: data.email || undefined,
        phone: data.phone,
        nationalId: data.nationalId || undefined,
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'ثبت نام موفقیت‌آمیز',
        description: 'حساب کاربری شما با موفقیت ایجاد شد',
        variant: 'default',
      });
      setLocation('/');
    },
    onError: (error) => {
      toast({
        title: 'خطا در ثبت نام',
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
        <title>ثبت نام | آکادمی دکتر نوید کلانی</title>
        <meta name="description" content="ایجاد حساب کاربری در آکادمی تخصصی حرکات اصلاحی و آسیب‌شناسی ورزشی دکتر نوید کلانی" />
      </Helmet>
      
      <div className="min-h-screen flex">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto">
                <img src={Logo} alt="دکتر کلانی" className="w-16 h-16" />
              </div>
              <h1 className="text-2xl font-bold mt-6">ایجاد حساب کاربری</h1>
            </div>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="relative">
                <User className="register-input-icon" size={20} />
                <input
                  {...form.register("fullName")}
                  className="register-input pr-9"
                  placeholder="نام و نام خانوادگی"
                />
                {form.formState.errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.fullName.message}</p>
                )}
              </div>
              
              <div className="relative">
                <UserPlus className="register-input-icon" size={20} />
                <input
                  {...form.register("username")}
                  className="register-input pr-9"
                  placeholder="نام کاربری"
                />
                {form.formState.errors.username && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.username.message}</p>
                )}
              </div>
              
              <div className="relative">
                <Mail className="register-input-icon" size={20} />
                <input
                  {...form.register("email")}
                  type="email"
                  className="register-input pr-9"
                  placeholder="ایمیل"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
              
              <div className="relative">
                <Phone className="register-input-icon" size={20} />
                <input
                  {...form.register("phone")}
                  className="register-input pr-9"
                  placeholder="شماره تماس"
                />
                {form.formState.errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                )}
              </div>
              
              <div className="relative">
                <Lock className="register-input-icon" size={20} />
                <input
                  {...form.register("password")}
                  type={showPassword ? "text" : "password"}
                  className="register-input pr-9"
                  placeholder="رمز عبور"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                {form.formState.errors.password && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.password.message}</p>
                )}
              </div>
              
              <button 
                type="submit" 
                className="register-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'در حال ثبت...' : 'ثبت نام'}
              </button>
              
              <div className="flex justify-center mt-4">
                <span className="text-gray-400">
                  حساب کاربری دارید؟ 
                </span>
                <Link href="/login">
                  <span className="text-primary mr-2 cursor-pointer hover:text-primary/80">
                    ورود
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
        
        {/* Right Side - Green Gradient Background */}
        <div className="hidden lg:block lg:w-1/2 green-gradient relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/30"></div>
          <img 
            src="https://images.unsplash.com/photo-1576678927484-cc907957088c" 
            alt="تمرینات اصلاحی در آکادمی دکتر کلانی" 
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
          />
          
          <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">آکادمی دکتر کلانی</h2>
            <p className="text-white/90 text-xl mb-8 max-w-md mx-auto">
              مرکز تخصصی حرکات اصلاحی و آسیب‌شناسی ورزشی
            </p>
          </div>
          
          <div className="absolute top-5 left-5">
            <Link href="/login">
              <span className="bg-black/20 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-black/30 transition">
                ورود
              </span>
            </Link>
          </div>
          
          <div className="absolute top-5 right-5">
            <Link href="/register">
              <span className="bg-primary text-white px-4 py-2 rounded-md cursor-pointer hover:bg-primary/90 transition">
                ثبت‌نام
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
