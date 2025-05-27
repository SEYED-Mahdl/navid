import { Link } from 'wouter';
import { ChevronDown, ChevronLeft } from 'lucide-react';

export function MegaMenu() {
  return (
    <div className="bg-white shadow-xl border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* حرکات اصلاحی */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary border-b border-primary/20 pb-2">
              حرکات اصلاحی
            </h3>
            
            {/* مفاهیم پایه */}
            <div className="space-y-2">
              <div className="group">
                <div className="flex items-center justify-between cursor-pointer hover:text-primary transition-colors">
                  <span className="font-medium">مفاهیم پایه</span>
                  <ChevronLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mr-4 mt-2 space-y-1 text-sm text-muted-foreground">
                  <Link href="/services/movement/basics/structures">
                    <div className="hover:text-primary cursor-pointer">ساختارهای درگیر در حرکت</div>
                  </Link>
                  <Link href="/services/movement/basics/muscle-properties">
                    <div className="hover:text-primary cursor-pointer">ویژگی‌های عضلانی</div>
                  </Link>
                  <Link href="/services/movement/basics/joint-range">
                    <div className="hover:text-primary cursor-pointer">مفصل و دامنه حرکت</div>
                  </Link>
                  <Link href="/services/movement/basics/body-forces">
                    <div className="hover:text-primary cursor-pointer">نیروهای وارد بر بدن</div>
                  </Link>
                  <Link href="/services/movement/basics/muscle-adaptation">
                    <div className="hover:text-primary cursor-pointer">انطباق و سازگاری عضلانی</div>
                  </Link>
                  <Link href="/services/movement/basics/neural-mechanism">
                    <div className="hover:text-primary cursor-pointer">سازوکار عصبی و عضلانی وضعیت بدن</div>
                  </Link>
                  <Link href="/services/movement/basics/spine-stability">
                    <div className="hover:text-primary cursor-pointer">ثبات و پایداری ستون فقرات</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* ناهنجاری‌های اسکلتی عضلانی */}
            <div className="space-y-2">
              <div className="group">
                <div className="flex items-center justify-between cursor-pointer hover:text-primary transition-colors">
                  <span className="font-medium">ناهنجاری‌های اسکلتی عضلانی و تمرینات اصلاحی</span>
                  <ChevronLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mr-4 mt-2 space-y-1 text-sm text-muted-foreground">
                  <Link href="/services/movement/disorders/torticollis">
                    <div className="hover:text-primary cursor-pointer">کج گردنی</div>
                  </Link>
                  <Link href="/services/movement/disorders/forward-head">
                    <div className="hover:text-primary cursor-pointer">سر به جلو</div>
                  </Link>
                  <Link href="/services/movement/disorders/scoliosis">
                    <div className="hover:text-primary cursor-pointer">اسکولیوز</div>
                  </Link>
                  <Link href="/services/movement/disorders/hyperkyphosis">
                    <div className="hover:text-primary cursor-pointer">هایپرکایفوزیس</div>
                  </Link>
                  <Link href="/services/movement/disorders/uneven-shoulders">
                    <div className="hover:text-primary cursor-pointer">شانه نابرابر</div>
                  </Link>
                  <Link href="/services/movement/disorders/forward-shoulder">
                    <div className="hover:text-primary cursor-pointer">شانه به جلو (شانه گرد)</div>
                  </Link>
                  <Link href="/services/movement/disorders/winged-scapula">
                    <div className="hover:text-primary cursor-pointer">کتف بالدار</div>
                  </Link>
                  <Link href="/services/movement/disorders/hyperlordosis">
                    <div className="hover:text-primary cursor-pointer">هایپرلوردوزیس (گودی کمر)</div>
                  </Link>
                  <Link href="/services/movement/disorders/flat-back">
                    <div className="hover:text-primary cursor-pointer">پشت صاف</div>
                  </Link>
                  <Link href="/services/movement/disorders/sway-back">
                    <div className="hover:text-primary cursor-pointer">پشت تابدار</div>
                  </Link>
                  <Link href="/services/movement/disorders/genu-valgum">
                    <div className="hover:text-primary cursor-pointer">زانوی ضربدری</div>
                  </Link>
                  <Link href="/services/movement/disorders/genu-recurvatum">
                    <div className="hover:text-primary cursor-pointer">زانوی عقب رفته</div>
                  </Link>
                  <Link href="/services/movement/disorders/genu-flexum">
                    <div className="hover:text-primary cursor-pointer">زانوی خمیده</div>
                  </Link>
                  <Link href="/services/movement/disorders/patella-displacement">
                    <div className="hover:text-primary cursor-pointer">جابجایی کشکک</div>
                  </Link>
                  <Link href="/services/movement/disorders/flat-foot">
                    <div className="hover:text-primary cursor-pointer">کف پای صاف</div>
                  </Link>
                  <Link href="/services/movement/disorders/high-arch">
                    <div className="hover:text-primary cursor-pointer">کف پای گرد</div>
                  </Link>
                  <Link href="/services/movement/disorders/hallux-valgus">
                    <div className="hover:text-primary cursor-pointer">انگشت شست گرد</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* عدم تعادل عضلانی */}
            <div className="space-y-2">
              <div className="group">
                <div className="flex items-center justify-between cursor-pointer hover:text-primary transition-colors">
                  <span className="font-medium">عدم تعادل عضلانی و سندروم‌ها</span>
                  <ChevronLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mr-4 mt-2 space-y-1 text-sm text-muted-foreground">
                  <Link href="/services/movement/imbalance/principles">
                    <div className="hover:text-primary cursor-pointer">اصول علمی عدم تعادل عضلانی</div>
                  </Link>
                  <Link href="/services/movement/imbalance/assessment">
                    <div className="hover:text-primary cursor-pointer">ارزشیابی عملکرد عدم تعادل عضلانی</div>
                  </Link>
                  <Link href="/services/movement/imbalance/syndromes">
                    <div className="hover:text-primary cursor-pointer">سندروم‌های عدم تعادل عضلانی</div>
                  </Link>
                  <Link href="/services/movement/imbalance/clinical">
                    <div className="hover:text-primary cursor-pointer">سندروم‌های بالینی</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* کینزیوپاتولوژی */}
            <div className="space-y-2">
              <div className="group">
                <div className="flex items-center justify-between cursor-pointer hover:text-primary transition-colors">
                  <span className="font-medium">کینزیوپاتولوژی</span>
                  <ChevronLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mr-4 mt-2 space-y-1 text-sm text-muted-foreground">
                  <Link href="/services/movement/kinesiopathology/movement-disorders">
                    <div className="hover:text-primary cursor-pointer">اختلال حرکتی</div>
                  </Link>
                  <Link href="/services/movement/kinesiopathology/assessment-stages">
                    <div className="hover:text-primary cursor-pointer">مراحل ارزیابی</div>
                  </Link>
                  <Link href="/services/movement/kinesiopathology/kinetic-chain">
                    <div className="hover:text-primary cursor-pointer">زنجیره حرکتی</div>
                  </Link>
                  <Link href="/services/movement/kinesiopathology/musculoskeletal-pain">
                    <div className="hover:text-primary cursor-pointer">پاتومکانیک درد‌های اسکلتی عضلانی</div>
                  </Link>
                  <Link href="/services/movement/kinesiopathology/shoulder">
                    <div className="hover:text-primary cursor-pointer">کینزیوپاتولوژی و پاتوکینزیولوژی اختلالات مفصل شانه</div>
                  </Link>
                  <Link href="/services/movement/kinesiopathology/elbow">
                    <div className="hover:text-primary cursor-pointer">کینزیوپاتولوژی و پاتوکینزیولوژی مفصل آرنج</div>
                  </Link>
                  <Link href="/services/movement/kinesiopathology/spine">
                    <div className="hover:text-primary cursor-pointer">کینزیوپاتولوژی و پاتوکینزیولوژی ستون فقرات</div>
                  </Link>
                  <Link href="/services/movement/kinesiopathology/sacroiliac">
                    <div className="hover:text-primary cursor-pointer">کینزیوپاتولوژی و پاتوکینزیولوژی مفصل‌های خاجی خاصرها</div>
                  </Link>
                  <Link href="/services/movement/kinesiopathology/hip">
                    <div className="hover:text-primary cursor-pointer">کینزیوپاتولوژی و پاتوکینزیولوژی مفصل ران</div>
                  </Link>
                  <Link href="/services/movement/kinesiopathology/knee">
                    <div className="hover:text-primary cursor-pointer">کینزیوپاتولوژی و پاتوکینزیولوژی مفصل زانو</div>
                  </Link>
                  <Link href="/services/movement/kinesiopathology/foot-ankle">
                    <div className="hover:text-primary cursor-pointer">کینزیوپاتولوژی و پاتوکینزیولوژی مفصل پا و مچ پا</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* آسیب‌شناسی ورزشی و توانبخشی */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary border-b border-primary/20 pb-2">
              آسیب‌شناسی ورزشی و توانبخشی
            </h3>
            
            {/* اندام فوقانی */}
            <div className="space-y-2">
              <div className="group">
                <div className="flex items-center justify-between cursor-pointer hover:text-primary transition-colors">
                  <span className="font-medium">اندام فوقانی</span>
                  <ChevronLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mr-4 mt-2 space-y-1 text-sm text-muted-foreground">
                  <Link href="/services/rehabilitation/upper-limb/shoulder">
                    <div className="hover:text-primary cursor-pointer">شانه</div>
                  </Link>
                  <Link href="/services/rehabilitation/upper-limb/elbow">
                    <div className="hover:text-primary cursor-pointer">آرنج</div>
                  </Link>
                  <Link href="/services/rehabilitation/upper-limb/wrist">
                    <div className="hover:text-primary cursor-pointer">مچ دست</div>
                  </Link>
                  <Link href="/services/rehabilitation/upper-limb/fingers">
                    <div className="hover:text-primary cursor-pointer">انگشتان دست</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* اندام تحتانی */}
            <div className="space-y-2">
              <div className="group">
                <div className="flex items-center justify-between cursor-pointer hover:text-primary transition-colors">
                  <span className="font-medium">اندام تحتانی</span>
                  <ChevronLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mr-4 mt-2 space-y-1 text-sm text-muted-foreground">
                  <Link href="/services/rehabilitation/lower-limb/hip-groin">
                    <div className="hover:text-primary cursor-pointer">ران و کشاله</div>
                  </Link>
                  <Link href="/services/rehabilitation/lower-limb/knee-shin">
                    <div className="hover:text-primary cursor-pointer">زانو و ساق پا</div>
                  </Link>
                  <Link href="/services/rehabilitation/lower-limb/ankle">
                    <div className="hover:text-primary cursor-pointer">مچ پا</div>
                  </Link>
                  <Link href="/services/rehabilitation/lower-limb/toes">
                    <div className="hover:text-primary cursor-pointer">انگشتان پا</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* ستون فقرات و لگن */}
            <div className="space-y-2">
              <div className="group">
                <div className="flex items-center justify-between cursor-pointer hover:text-primary transition-colors">
                  <span className="font-medium">ستون فقرات و لگن</span>
                  <ChevronLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mr-4 mt-2 space-y-1 text-sm text-muted-foreground">
                  <Link href="/services/rehabilitation/spine-pelvis/cervical">
                    <div className="hover:text-primary cursor-pointer">فقرات گردنی</div>
                  </Link>
                  <Link href="/services/rehabilitation/spine-pelvis/thoracic">
                    <div className="hover:text-primary cursor-pointer">فقرات پشتی</div>
                  </Link>
                  <Link href="/services/rehabilitation/spine-pelvis/lumbar">
                    <div className="hover:text-primary cursor-pointer">فقرات کمری</div>
                  </Link>
                  <Link href="/services/rehabilitation/spine-pelvis/pelvis">
                    <div className="hover:text-primary cursor-pointer">لگن</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ماساژ */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary border-b border-primary/20 pb-2">
              ماساژ
            </h3>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link href="/services/massage/therapeutic">
                <div className="hover:text-primary cursor-pointer">ماساژ درمانی</div>
              </Link>
              <Link href="/services/massage/sports">
                <div className="hover:text-primary cursor-pointer">ماساژ ورزشی</div>
              </Link>
              <Link href="/services/massage/deep-tissue">
                <div className="hover:text-primary cursor-pointer">ماساژ بافت عمقی</div>
              </Link>
              <Link href="/services/massage/relaxation">
                <div className="hover:text-primary cursor-pointer">ماساژ آرامش‌بخش</div>
              </Link>
              <Link href="/services/massage/trigger-point">
                <div className="hover:text-primary cursor-pointer">ماساژ نقاط ماشه‌ای</div>
              </Link>
              <Link href="/services/massage/lymphatic">
                <div className="hover:text-primary cursor-pointer">ماساژ لنفاوی</div>
              </Link>
            </div>

            {/* تماس و رزرو */}
            <div className="mt-6 p-4 bg-primary/5 rounded-lg">
              <h4 className="font-medium text-primary mb-2">رزرو ماساژ</h4>
              <p className="text-sm text-muted-foreground mb-3">
                برای رزرو جلسه ماساژ با ما تماس بگیرید
              </p>
              <Link href="/assessment">
                <button className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary/90 transition-colors">
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