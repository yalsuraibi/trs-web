import logo from "./assets/Logo_Ar2.png"

type Service = {
  title: string
  icon: JSX.Element
}

const ServiceIconContract = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 3h9l3 3v15H6z" />
    <path d="M15 3v3h3" />
    <path d="M9 10h6M9 13h6M9 16h4" />
  </svg>
)

const ServiceIconAdvice = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3v18" />
    <path d="M4 7h16" />
    <path d="M7 7c0 3-2 5-2 5s2 2 2 5" />
    <path d="M17 7c0 3 2 5 2 5s-2 2-2 5" />
  </svg>
)

const ServiceIconPolicy = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="5" y="4" width="14" height="16" rx="2" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </svg>
)

const ServiceIconChecklist = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="5" y="4" width="14" height="16" rx="2" />
    <path d="M8 9l1.5 1.5L12 8" />
    <path d="M8 13l1.5 1.5L12 12" />
    <path d="M13.5 9H17" />
    <path d="M13.5 13H17" />
  </svg>
)

const ServiceIconMail = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="7" width="16" height="12" rx="2" />
    <path d="M4.5 8.5l7.5 5 7.5-5" />
  </svg>
)

const ServiceIconMeeting = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="9" cy="8" r="2.5" />
    <circle cx="16" cy="8" r="2.5" />
    <path d="M3.5 20c0-3 3-5 6-5" />
    <path d="M20.5 20c0-3-3-5-6-5" />
  </svg>
)

const ServiceIconLicense = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="6" y="4" width="12" height="16" rx="2" />
    <path d="M9 7h6" />
    <path d="M8.5 12l2 2 5-5" />
  </svg>
)

const ServiceIconCompany = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 20V6h10v14" />
    <path d="M14 10h6v10" />
    <path d="M7 9h4M7 12h4M7 15h4" />
    <path d="M16 13h2M16 16h2" />
  </svg>
)

const ServiceIconInvestigation = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16.2 16.2L21 21" />
    <path d="M9.5 11h3" />
  </svg>
)

const ServiceIconTrademark = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M9 15V9h3a2 2 0 0 1 0 4H9" />
    <path d="M14 15V9" />
  </svg>
)

const ServiceIconCollection = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="6" width="16" height="12" rx="2" />
    <path d="M7 12h10" />
    <path d="M9 10v4" />
    <path d="M15 10v4" />
  </svg>
)

const ServiceIconCourt = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 10h18" />
    <path d="M5 10l2 9h10l2-9" />
    <path d="M12 3v7" />
  </svg>
)

const services: Service[] = [
  { title: "إعداد ومراجعة كافة العقود القانونية", icon: <ServiceIconContract /> },
  { title: "تقديم الاستشارات القانونية الشفهية", icon: <ServiceIconAdvice /> },
  { title: "إعداد ومراجعة اللوائح الداخلية في المنشأة", icon: <ServiceIconPolicy /> },
  {
    title: "مراجعة القرارات والتوجهات بالعمل والتحقق من الوضع القانوني وتقديم التوصيات",
    icon: <ServiceIconChecklist />
  },
  { title: "إعداد الخطابات القانونية والوارد في المنشأة (المراسلات)", icon: <ServiceIconMail /> },
  { title: "التمثيل القانوني في الاجتماعات", icon: <ServiceIconMeeting /> },
  { title: "اعمال كافة التراخيص اللازمة لممارسة الأنشطة", icon: <ServiceIconLicense /> },
  {
    title: "اعمال تحول كيان المنشأة الى أي شكل قانوني آخر وإصدار كافة التراخيص الاستثمارية",
    icon: <ServiceIconCompany />
  },
  {
    title: "إدارة كافة إجراءات التحقيق العمالي في المخالفات المنسوبة لموظفي المنشأة",
    icon: <ServiceIconInvestigation />
  },
  { title: "أعمال توثيق العلامات التجارية", icon: <ServiceIconTrademark /> },
  { title: "تولي مهام استحصال مستحقات العميل المتعثرة لدى الغير صلحًا", icon: <ServiceIconCollection /> },
  { title: "استلام القصايا امام المحاكم والتمثيل القانوني بها (مرافعة/مدافعة)", icon: <ServiceIconCourt /> }
]

function App() {
  return (
    <div>
      <header className="header">
        <div className="container headerInner">
          <div className="logoRow">
            <img className="logoImg" src={logo} alt="TRS logo" />
            <div className="brandName"></div>
          </div>

          <nav className="nav">
            <a href="#about">من نحن</a>
            <a href="#services">الخدمات</a>
            <a href="#team">الفريق</a>
            <a href="#contact">تواصل</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1 className="heroTitle">نقطة انطلاقك قبـــــــــــــل اتخــــاذ أي قــــرار</h1>
            <p className="heroText">نبي نضيف نص هنا. عطوني اقتراحاتكم</p>

            <div className="heroButtons">
              <button className="btnPrimary">اتصل الآن</button>
              <button className="btnGhost">راسلنا</button>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2 className="sectionTitle">من نحن</h2>
            <p className="sectionText">
              تـرس، هــي شركــة مـحامـــاة مـتخصصــــــة في تـقديـــــم الخـدمــــات
              الاسـتشاريـة والحــلول الــقانــونــية ومهــتمة في تــفعيل ورفــع الــوعــي
              بــالــدور الــوقــائي لــدى المـنشآت والأفـراد، وذلـك لـتعز يـز فـرص
              الـنجاح والـقدرة الـتنافسـية في الـسوق المحـلية والـدولـية بـالـكشف
              المـبكر عـن المـشكلات وتـجنّب وقـوعـها، والمـحافـظة على استقرار
              التعاملات القانونية.
            </p>
          </div>
        </section>

        <section id="services" className="section sectionAlt" style={{ background: "#faf7f8" }}>
          <div className="container">
            <h2 className="sectionTitle">الخدمات</h2>

            <div className="grid">
              {services.map((s) => (
                <div className="card" key={s.title}>
                  <div className="cardIcon">{s.icon}</div>
                  <h3 className="cardTitle">{s.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="section">
          <div className="container">
            <h2 className="sectionTitle">الفريق</h2>
            <p className="sectionText">أسماء الفريق ومناصبهم بشكل بسيط. يمكننا إضافة صور لاحقاً.</p>

            <div className="grid">
              {[
                { name: "محام ١", role: "شريك" },
                { name: "محام ٢", role: "مستشار قانوني" },
                { name: "محام ٣", role: "محام" }
              ].map((p) => (
                <div className="card" key={p.name}>
                  <h3 className="cardTitle">{p.name}</h3>
                  <p className="cardText">{p.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section sectionAlt" style={{ background: "#faf7f8" }}>
          <div className="container">
            <h2 className="sectionTitle">تواصل معنا</h2>
            <p className="sectionText">بيانات التواصل نص تجريبي. سنستبدله ببيانات المكتب لاحقاً.</p>

            <div className="grid">
              <div className="card">
                <h3 className="cardTitle">معلومات التواصل</h3>
                <p className="cardText">المدينة: الرياض</p>
                <p className="cardText">الهاتف: 000000000</p>
                <p className="cardText">البريد: info@trs.com</p>
              </div>

              <div className="card">
                <h3 className="cardTitle">أرسل رسالة</h3>
                <form style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <input placeholder="الاسم" style={{ padding: 12, borderRadius: 10, border: "1px solid var(--border)" }} />
                  <input
                    placeholder="البريد الإلكتروني"
                    style={{ padding: 12, borderRadius: 10, border: "1px solid var(--border)" }}
                  />
                  <textarea placeholder="الرسالة" rows={4} style={{ padding: 12, borderRadius: 10, border: "1px solid var(--border)" }} />
                  <button className="btnPrimary" type="button">
                    إرسال
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">© {new Date().getFullYear()} TRS</div>
        </footer>
      </main>
    </div>
  )
}

export default App