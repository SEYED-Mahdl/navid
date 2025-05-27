import { Link } from 'wouter';
import { ChevronLeft } from 'lucide-react';

export function MegaMenu() {
  return (
    <div className="bg-white shadow-2xl border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right min-h-[500px]">
          
          {/* حرکات اصلاحی */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-primary border-b border-primary/30 pb-2 mb-4">
              حرکات اصلاحی
            </h3>
            
            {/* مفاهیم پایه */}
            <div className="space-y-2">
              <div className="group">
                <div className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-primary transition-colors py-1">
                  <span className="font-medium text-sm">مفاهیم پایه</span>
                  <ChevronLeft className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mr-3 mt-1 space-y-1 text-xs text-gray-600">
                  <Link href="/services/movement/basics/structures">
                    <div className="hover:text-primary cursor-pointer py-0.5">ساختارهای درگیر در حرکت</div>
                  </Link>
                  <Link href="/services/movement/basics/muscle-properties">
                    <div className="hover:text-primary cursor-pointer py-0.5">ویژگی‌های عضلانی</div>
                  </Link>
                  <Link href="/services/movement/basics/joint-range">
                    <div className="hover:text-primary cursor-pointer py-0.5">مفصل و دامنه حرکت</div>
                  </Link>
                  <Link href="/services/movement/basics/body-forces">
                    <div className="hover:text-primary cursor-pointer py-0.5">نیروهای وارد بر بدن</div>
                  </Link>
                  <Link href="/services/movement/basics/muscle-adaptation">
                    <div className="hover:text-primary cursor-pointer py-0.5">انطباق و سازگاری عضلانی</div>
                  </Link>
                  <Link href="/services/movement/basics/neural-mechanism">
                    <div className="hover:text-primary cursor-pointer py-0.5">سازوکار عصبی و عضلانی وضعیت بدن</div>
                  </Link>
                  <Link href="/services/movement/basics/spine-stability">
                    <div className="hover:text-primary cursor-pointer py-0.5">ثبات و پایداری ستون فقرات</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* ناهنجاری‌های اسکلتی عضلانی */}
            <div className="space-y-2">
              <div className="group">
                <div className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-primary transition-colors py-1">
                  <span className="font-medium text-sm">ناهنجاری‌های اسکلتی عضلانی و تمرینات اصلاحی</span>
                  <ChevronLeft className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mr-3 mt-1 space-y-1 text-xs text-gray-600 grid grid-cols-2 gap-1">
                  <Link href="/services/movement/disorders/torticollis">
                    <div className="hover:text-primary cursor-pointer py-0.5">کج گردنی</div>
                  </Link>
                  <Link href="/services/movement/disorders/forward-head">
                    <div className="hover:text-primary cursor-pointer py-0.5">سر به جلو</div>
                  </Link>
                  <Link href="/services/movement/disorders/scoliosis">
                    <div className="hover:text-primary cursor-pointer py-0.5">اسکولیوز</div>
                  </Link>
                  <Link href="/services/movement/disorders/hyperkyphosis">
                    <div className="hover:text-primary cursor-pointer py-0.5">هایپرکایفوزیس</div>
                  </Link>
                  <Link href="/services/movement/disorders/uneven-shoulders">
                    <div className="hover:text-primary cursor-pointer py-0.5">شانه نابرابر</div>
                  </Link>
                  <Link href="/services/movement/disorders/forward-shoulder">
                    <div className="hover:text-primary cursor-pointer py-0.5">شانه به جلو (شانه گرد)</div>
                  </Link>
                  <Link href="/services/movement/disorders/winged-scapula">
                    <div className="hover:text-primary cursor-pointer py-0.5">کتف بالدار</div>
                  </Link>
                  <Link href="/services/movement/disorders/hyperlordosis">
                    <div className="hover:text-primary cursor-pointer py-0.5">هایپرلوردوزیس (گودی کمر)</div>
                  </Link>
                  <Link href="/services/movement/disorders/flat-back">
                    <div className="hover:text-primary cursor-pointer py-0.5">پشت صاف</div>
                  </Link>
                  <Link href="/services/movement/disorders/sway-back">
                    <div className="hover:text-primary cursor-pointer py-0.5">پشت تابدار</div>
                  </Link>
                  <Link href="/services/movement/disorders/genu-valgum">
                    <div className="hover:text-primary cursor-pointer py-0.5">زانوی ضربدری</div>
                  </Link>
                  <Link href="/services/movement/disorders/genu-recurvatum">
                    <div className="hover:text-primary cursor-pointer py-0.5">زانوی عقب رفته</div>
                  </Link>
                  <Link href="/services/movement/disorders/genu-flexum">
                    <div className="hover:text-primary cursor-pointer py-0.5">زانوی خمیده</div>
                  </Link>
                  <Link href="/services/movement/disorders/patella-displacement">
                    <div className="hover:text-primary cursor-pointer py-0.5">جابجایی کشکک</div>
                  </Link>
                  <Link href="/services/movement/disorders/flat-foot">
                    <div className="hover:text-primary cursor-pointer py-0.5">کف پای صاف</div>
                  </Link>
                  <Link href="/services/movement/disorders/high-arch">
                    <div className="hover:text-primary cursor-pointer py-0.5">کف پای گرد</div>
                  </Link>
                  <Link href="/services/movement/disorders/hallux-valgus">
                    <div className="hover:text-primary cursor-pointer py-0.5">انگشت شست گرد</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* عدم تعادل عضلانی */}
            <div className="space-y-2">
              <div className="group">
                <div className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-primary transition-colors py-1">
                  <span className="font-medium text-sm">عدم تعادل عضلانی و سندروم‌ها</span>
                  <ChevronLeft className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mr-3 mt-1 space-y-1 text-xs text-gray-600">
                  <Link href="/services/movement/imbalance/principles">
                    <div className="hover:text-primary cursor-pointer py-0.5">اصول علمی عدم تعادل عضلانی</div>
                  </Link>
                  <Link href="/services/movement/imbalance/assessment">
                    <div className="hover:text-primary cursor-pointer py-0.5">ارزشیابی عملکرد عدم تعادل عضلانی</div>
                  </Link>
                  <Link href="/services/movement/imbalance/syndromes">
                    <div className="hover:text-primary cursor-pointer py-0.5">سندروم‌های عدم تعادل عضلانی</div>
                  </Link>
                  <Link href="/services/movement/imbalance/clinical">
                    <div className="hover:text-primary cursor-pointer py-0.5">سندروم‌های بالینی</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* کینزیوپاتولوژی */}
            <div className="space-y-2">
              <div className="group">
                <div className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-primary transition-colors py-1">
                  <span className="font-medium text-sm">کینزیوپاتولوژی</span>
                  <ChevronLeft className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mr-3 mt-1 space-y-1 text-xs text-gray-600 grid grid-cols-1 gap-1">
                  <Link href="/services/movement/kinesiopathology/movement-disorders">
                    <div className="hover:text-primary cursor-pointer py-0.5">اختلال حرکتی</div>
                  </Link>
                  <Link href="/services/movement/kinesiopathology/assessment-stages">
                    <div className="hover:text-primary cursor-pointer py-0.5">مراحل ارزیابی</div>
                  </Link>
                  <Link href="/services/movement/kinesiopathology/kinetic-chain">
                    <div className="hover:text-primary cursor-pointer py-0.5">زنجیره حرکتی</div>
                  </Link>
                  <Link href="/services/movement/kinesiopathology/musculoskeletal-pain">
                    <div className="hover:text-primary cursor-pointer py-0.5">پاتومکانیک درد‌های اسکلتی عضلانی</div>
                  </Link>
                  <Link href="/services/movement/kinesiopathology/shoulder">
                    <div className="hover:text-primary cursor-pointer py-0.5">کینزیوپاتولوژی اختلالات مفصل شانه</div>
                  </Link>
                  <Link href="/services/movement/kinesiopathology/elbow">
                    <div className="hover:text-primary cursor-pointer py-0.5">کینزیوپاتولوژی مفصل آرنج</div>
                  </Link>
                  <Link href="/services/movement/kinesiopathology/spine">
                    <div className="hover:text-primary cursor-pointer py-0.5">کینزیوپاتولوژی ستون فقرات</div>
                  </Link>
                  <Link href="/services/movement/kinesiopathology/sacroiliac">
                    <div className="hover:text-primary cursor-pointer py-0.5">کینزیوپاتولوژی مفصل‌های خاجی خاصرها</div>
                  </Link>
                  <Link href="/services/movement/kinesiopathology/hip">
                    <div className="hover:text-primary cursor-pointer py-0.5">کینزیوپاتولوژی مفصل ران</div>
                  </Link>
                  <Link href="/services/movement/kinesiopathology/knee">
                    <div className="hover:text-primary cursor-pointer py-0.5">کینزیوپاتولوژی مفصل زانو</div>
                  </Link>
                  <Link href="/services/movement/kinesiopathology/foot-ankle">
                    <div className="hover:text-primary cursor-pointer py-0.5">کینزیوپاتولوژی مفصل پا و مچ پا</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* آسیب‌شناسی ورزشی و توانبخشی */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-primary border-b border-primary/30 pb-2 mb-4">
              آسیب‌شناسی ورزشی و توانبخشی
            </h3>
            
            {/* اندام فوقانی */}
            <div className="space-y-2">
              <div className="group">
                <div className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-primary transition-colors py-1">
                  <span className="font-medium text-sm">اندام فوقانی</span>
                  <ChevronLeft className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mr-3 mt-1 space-y-1 text-xs text-gray-600">
                  <Link href="/services/rehabilitation/upper-limb/shoulder">
                    <div className="hover:text-primary cursor-pointer py-0.5">شانه</div>
                  </Link>
                  <Link href="/services/rehabilitation/upper-limb/elbow">
                    <div className="hover:text-primary cursor-pointer py-0.5">آرنج</div>
                  </Link>
                  <Link href="/services/rehabilitation/upper-limb/wrist">
                    <div className="hover:text-primary cursor-pointer py-0.5">مچ دست</div>
                  </Link>
                  <Link href="/services/rehabilitation/upper-limb/fingers">
                    <div className="hover:text-primary cursor-pointer py-0.5">انگشتان دست</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* اندام تحتانی */}
            <div className="space-y-2">
              <div className="group">
                <div className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-primary transition-colors py-1">
                  <span className="font-medium text-sm">اندام تحتانی</span>
                  <ChevronLeft className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mr-3 mt-1 space-y-1 text-xs text-gray-600">
                  <Link href="/services/rehabilitation/lower-limb/hip-groin">
                    <div className="hover:text-primary cursor-pointer py-0.5">ران و کشاله</div>
                  </Link>
                  <Link href="/services/rehabilitation/lower-limb/knee-shin">
                    <div className="hover:text-primary cursor-pointer py-0.5">زانو و ساق پا</div>
                  </Link>
                  <Link href="/services/rehabilitation/lower-limb/ankle">
                    <div className="hover:text-primary cursor-pointer py-0.5">مچ پا</div>
                  </Link>
                  <Link href="/services/rehabilitation/lower-limb/toes">
                    <div className="hover:text-primary cursor-pointer py-0.5">انگشتان پا</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* ستون فقرات و لگن */}
            <div className="space-y-2">
              <div className="group">
                <div className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-primary transition-colors py-1">
                  <span className="font-medium text-sm">ستون فقرات و لگن</span>
                  <ChevronLeft className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mr-3 mt-1 space-y-1 text-xs text-gray-600">
                  <Link href="/services/rehabilitation/spine-pelvis/cervical">
                    <div className="hover:text-primary cursor-pointer py-0.5">مهره‌های گردنی</div>
                  </Link>
                  <Link href="/services/rehabilitation/spine-pelvis/thoracic">
                    <div className="hover:text-primary cursor-pointer py-0.5">مهره‌های پشتی</div>
                  </Link>
                  <Link href="/services/rehabilitation/spine-pelvis/lumbar">
                    <div className="hover:text-primary cursor-pointer py-0.5">مهره‌های کمری</div>
                  </Link>
                  <Link href="/services/rehabilitation/spine-pelvis/pelvis">
                    <div className="hover:text-primary cursor-pointer py-0.5">لگن</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ماساژ */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-primary border-b border-primary/30 pb-2 mb-4">
              ماساژ
            </h3>
            
            <div className="space-y-2 text-xs text-gray-600">
              <Link href="/services/massage/applications">
                <div className="hover:text-primary cursor-pointer py-0.5">کاربرد ماساژ</div>
              </Link>
              <Link href="/services/massage/massagology">
                <div className="hover:text-primary cursor-pointer py-0.5">ماساژلوژی</div>
              </Link>
              <Link href="/services/massage/thai">
                <div className="hover:text-primary cursor-pointer py-0.5">ماساژلوژی تایلندی</div>
              </Link>
              <Link href="/services/massage/shiatsu">
                <div className="hover:text-primary cursor-pointer py-0.5">ماساژلوژی شیاتسو</div>
              </Link>
              <Link href="/services/massage/deep-tissue">
                <div className="hover:text-primary cursor-pointer py-0.5">ماساژلوژی دیپ تیشو</div>
              </Link>
              <Link href="/services/massage/hot-stone">
                <div className="hover:text-primary cursor-pointer py-0.5">ماساژلوژی سنگ داغ</div>
              </Link>
              <Link href="/services/massage/therapeutic">
                <div className="hover:text-primary cursor-pointer py-0.5">ماساژلوژی درمانی</div>
              </Link>
            </div>

            {/* تماس و رزرو */}
            <div className="mt-6 p-3 bg-primary/5 rounded-lg">
              <h4 className="font-medium text-primary mb-2 text-sm">رزرو ماساژ</h4>
              <p className="text-xs text-gray-600 mb-3">
                برای رزرو جلسه ماساژ با ما تماس بگیرید
              </p>
              <Link href="/assessment">
                <button className="bg-primary text-white px-3 py-1.5 rounded-md text-xs hover:bg-primary/90 transition-colors">
                  درخواست مشاوره
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}