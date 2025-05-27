import { Course, Article } from "@shared/schema";

// Menu categories and items
export type MenuItem = {
  title: string;
  href: string;
};

export type MenuCategory = {
  title: string;
  isPrimary?: boolean;
  items: MenuItem[];
};

export const serviceMenuCategories: MenuCategory[] = [
  {
    title: "حرکات اصلاحی",
    isPrimary: true,
    items: [
      { title: "آسیب‌های ورزشی و توانبخشی", href: "/services/sports-injuries" },
      { title: "ماساژ", href: "/services/massage" },
    ]
  },
  {
    title: "مفاهیم پایه",
    items: [
      { title: "استانداردهای بدنی در حرکات", href: "/concepts/movement-standards" },
      { title: "ویژگی‌های حرکتی", href: "/concepts/movement-characteristics" },
      { title: "وضعیت عضلات", href: "/concepts/muscle-conditions" },
      { title: "ساز و کار عصبی و عضلانی", href: "/concepts/neuromuscular-mechanisms" },
      { title: "آناتومی و بازو", href: "/concepts/anatomy-arms" },
      { title: "ناهنجاری‌های اسکلتی عضلانی و حرکات اصلاحی", href: "/concepts/skeletal-abnormalities" },
      { title: "کج گردنی", href: "/concepts/torticollis" },
      { title: "سر به جلو", href: "/concepts/forward-head" },
      { title: "شانه نابرابر", href: "/concepts/uneven-shoulders" },
    ]
  },
  {
    title: "تعادل عضلانی",
    items: [
      { title: "علت عدم تعادل عضلانی و سندروم‌ها", href: "/muscle-balance/causes" },
      { title: "اصول علمی عدم تعادل عضلانی", href: "/muscle-balance/scientific-principles" },
      { title: "ارزیابی مقدماتی عدم تعادل عضلانی", href: "/muscle-balance/assessment" },
      { title: "سندروم‌های جانبی", href: "/muscle-balance/lateral-syndromes" },
      { title: "کردوراتورازی", href: "/muscle-balance/coordination" },
      { title: "اختلالات مفصلی", href: "/muscle-balance/joint-disorders" },
      { title: "عوامل آسیب", href: "/muscle-balance/injury-factors" },
      { title: "زنجیره‌های حرکتی", href: "/muscle-balance/movement-chains" },
    ]
  },
  {
    title: "سایر خدمات",
    items: [
      { title: "ناهنجاری‌های اندام تحتانی", href: "/services/lower-limb-abnormalities" },
      { title: "بیومکانیک راه رفتن", href: "/services/gait-biomechanics" },
      { title: "آزمون‌های ایستا و پویا", href: "/services/static-dynamic-tests" },
      { title: "لگن و پای گود", href: "/services/pelvis-cavus" },
      { title: "کف پای صاف", href: "/services/flat-foot" },
      { title: "کف پای گود", href: "/services/high-arch" },
    ]
  },
];
