import { Link } from 'wouter';

export function MegaMenu() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="container mx-auto py-10 px-4 relative z-10">
        <div className="grid grid-cols-4 gap-8">
          {/* First Column - Main Categories */}
          <div className="flex flex-col border-l border-primary">
            <div className="text-primary text-xl font-bold mb-6 pr-4">
              حرکات اصلاحی
            </div>
            <div className="text-white text-lg font-semibold mb-3 pr-4">
              آسیب‌های ورزشی و توانبخشی
            </div>
            <div className="text-white text-lg font-semibold pr-4">
              ماساژ
            </div>
          </div>
          
          {/* Second Column - مفاهیم پایه */}
          <div>
            <div className="text-white text-lg font-bold mb-4">
              مفاهیم پایه
            </div>
            <ul className="space-y-3 text-white/80 text-sm">
              <li><Link href="/concepts/movement-standards"><span className="mega-menu-item">استانداردهای بدنی در حرکت</span></Link></li>
              <li><Link href="/concepts/movement-characteristics"><span className="mega-menu-item">ویژگی‌های حرکتی</span></Link></li>
              <li><Link href="/concepts/muscle-conditions"><span className="mega-menu-item">وضعیت عضلات</span></Link></li>
              <li><Link href="/concepts/neuromuscular-mechanisms"><span className="mega-menu-item">مفصل و دامنه حرکتی</span></Link></li>
              <li><Link href="/concepts/anatomy-arms"><span className="mega-menu-item">نیروهای وارده بر بدن</span></Link></li>
              <li><Link href="/concepts/pelvic-tilt"><span className="mega-menu-item">پشت صاف (Flat back)</span></Link></li>
              <li><Link href="/concepts/sway-back"><span className="mega-menu-item">پشت تابدار (Sway back)</span></Link></li>
              <li><Link href="/concepts/forward-head"><span className="mega-menu-item">سر به جلو</span></Link></li>
              <li><Link href="/concepts/uneven-shoulders"><span className="mega-menu-item">شانه نابرابر</span></Link></li>
            </ul>
          </div>
          
          {/* Third Column - عدم تعادل عضلانی و سندروم‌ها */}
          <div>
            <div className="text-white text-lg font-bold mb-4">
              عدم تعادل عضلانی و سندروم‌ها
            </div>
            <ul className="space-y-3 text-white/80 text-sm">
              <li><Link href="/muscle-balance/causes"><span className="mega-menu-item">علت عدم تعادل عضلانی و سندروم‌ها</span></Link></li>
              <li><Link href="/muscle-balance/scientific-principles"><span className="mega-menu-item">اصول علمی عدم تعادل عضلانی</span></Link></li>
              <li><Link href="/muscle-balance/assessment"><span className="mega-menu-item">ارزیابی مقدماتی عدم تعادل عضلانی</span></Link></li>
              <li><Link href="/muscle-balance/lateral-syndromes"><span className="mega-menu-item">سندروم‌های جانبی</span></Link></li>
              <li><Link href="/muscle-balance/coordination"><span className="mega-menu-item">کردوراتورازی</span></Link></li>
              <li><Link href="/muscle-balance/joint-disorders"><span className="mega-menu-item">اختلالات مفصلی</span></Link></li>
              <li><Link href="/muscle-balance/injury-factors"><span className="mega-menu-item">عوامل آسیب</span></Link></li>
              <li><Link href="/muscle-balance/movement-chains"><span className="mega-menu-item">زنجیره‌های حرکتی</span></Link></li>
            </ul>
          </div>
          
          {/* Fourth Column - ناهنجاری‌های اندام تحتانی */}
          <div>
            <div className="text-white text-lg font-bold mb-4">
              ناهنجاری‌های اندام تحتانی
            </div>
            <ul className="space-y-3 text-white/80 text-sm">
              <li><Link href="/services/lower-limb-abnormalities"><span className="mega-menu-item">ناهنجاری‌های اندام تحتانی</span></Link></li>
              <li><Link href="/services/gait-biomechanics"><span className="mega-menu-item">بیومکانیک راه رفتن</span></Link></li>
              <li><Link href="/services/static-dynamic-tests"><span className="mega-menu-item">آزمون‌های ایستا و پویا</span></Link></li>
              <li><Link href="/services/pelvis-cavus"><span className="mega-menu-item">لگن و پای گود</span></Link></li>
              <li><Link href="/services/flat-foot"><span className="mega-menu-item">کف پای صاف</span></Link></li>
              <li><Link href="/services/high-arch"><span className="mega-menu-item">کف پای گود</span></Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Background image overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 z-0">
        <img 
          src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" 
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
    </div>
  );
}
