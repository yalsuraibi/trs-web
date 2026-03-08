import logo from "./assets/Logo_Ar2.png"
import { useEffect, useRef, useState  } from "react"
import type { ReactNode } from "react"
import client1 from "./assets/clients/client1.png"
import client2 from "./assets/clients/client2.png"
import client3 from "./assets/clients/client3.png"
type Service = {
  title: string
  icon: ReactNode
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
  const [aboutOpen, setAboutOpen] = useState(false)
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollerRef.current
    if (!el) return
    const amount = Math.round(el.clientWidth * 0.75)
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  const clients = [
    { name: "Client1", logo: client1, scale: 1.6, y: -12 },
    { name: "Client2", logo: client2, scale: 1.5, y: 0},
    { name: "Client3", logo: client3, scale: 2.3, y: -15 },
    { name: "Client1", logo: client1, scale: 1.6, y: -12 },
    { name: "Client2", logo: client2, scale: 1.5, y: 0},
    { name: "Client3", logo: client3, scale: 2.3, y: -15 },
    { name: "Client1", logo: client1, scale: 1.6, y: -12 },
    { name: "Client2", logo: client2, scale: 1.5, y: 0},
    { name: "Client3", logo: client3, scale: 2.3, y: -15 }
  ]

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]")
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("isVisible")
        })
      },
      { threshold: 0.12 }
    )
  
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div>
      <header className="header">
        <div className="headerContainer  headerInner">
          <div className="logoRow">
            <img className="logoImg" src={logo} alt="TRS logo" />
            <div className="brandName"></div>
          </div>

          <nav className="nav">
            <a href="#about">من نحن</a>
            <a href="#services">الخدمات</a>
            <a href="#clients">عملاؤنا</a>
            <a href="#contact">تواصل</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="containerWide">
            <h1 className="heroTitle">نقطة انطلاقك قبـــــــــــــل اتخــــاذ أي قــــرار</h1>
            <p className="heroText">حلول قانونية حديثــــــــــــــــــــــــــــــــــة</p>

            <div className="heroButtons">
              <button className="btnPrimary">اتصل الآن</button>
              <button className="btnGhost">راسلنا</button>
            </div>
          </div>
        </section>

        <section id="about" className="section">
  <div className="containerWide">
    <h2 className="sectionTitle">من نحن</h2>

    <div className={`aboutBox ${aboutOpen ? "isOpen" : ""}`}>
      <p className="sectionText">
        تـرس، هــي شركــة مـحامـــاة مـتخصصــــــة في تـقديـــــم الخـدمــــات الاسـتشاريـة
        والحــلول الــقانــونــية ومهــتمة في تــفعيل ورفــع الــوعــي بــالــدور الــوقــائي لــدى
        المـنشآت والأفـراد، وذلـك لـتعز يـز فـرص الـنجاح والـقدرة الـتنافسـية في الـسوق
        المحـلية والـدولـية بـالـكشف المـبكر عـن المـشكلات وتـجنّب وقـوعـها، والمـحافـظة
        على استقرار التعاملات القانونية.
      </p>

      <div className="aboutMore">
  <div className="whyWrap">
    <div className="whyTitle">
      <h3>لماذا اسم ترس؟</h3>
    </div>

    <div className="whyGrid">
      <div className="whyCard">
        <div className="whyIcon">
          {/* Gear icon */}
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <circle
    cx="12"
    cy="12"
    r="3"
    stroke="currentColor"
    strokeWidth="1.8"
  />
  <path
    d="M19.4 12a7.4 7.4 0 0 0-.1-1l2-1.6-2-3.4-2.4.7a7.3 7.3 0 0 0-1.7-1l-.4-2.5H9.2l-.4 2.5a7.3 7.3 0 0 0-1.7 1l-2.4-.7-2 3.4 2 1.6a7.4 7.4 0 0 0-.1 1c0 .34.03.67.1 1l-2 1.6 2 3.4 2.4-.7c.5.4 1.1.7 1.7 1l.4 2.5h5.6l.4-2.5c.6-.3 1.2-.6 1.7-1l2.4.7 2-3.4-2-1.6c.07-.33.1-.66.1-1Z"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinejoin="round"
  />
</svg>
        </div>
        <h4>الترس</h4>
        <p>ضع وصفكم هنا كما في التصميم. استبدله بالنص الحقيقي لاحقاً.</p>
      </div>

      <div className="whyCard">
        <div className="whyIcon">
          {/* Lock icon */}
          <svg width="54" height="54" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M7 11V8a5 5 0 0 1 10 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M6.5 11h11A1.5 1.5 0 0 1 19 12.5v7A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5v-7A1.5 1.5 0 0 1 6.5 11Z" stroke="currentColor" strokeWidth="1.6"/>
            <path d="M12 15v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div>
        <h4>التُرس</h4>
        <p>ضع وصفكم هنا كما في التصميم. استبدله بالنص الحقيقي لاحقاً.</p>
      </div>

      <div className="whyCard">
        <div className="whyIcon">
          {/* Shield icon */}
          <svg width="54" height="54" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V7l8-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
            <path d="M8.5 12.5l2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h4>الترس</h4>
        <p>ضع وصفكم هنا كما في التصميم. استبدله بالنص الحقيقي لاحقاً.</p>
      </div>
    </div>
  </div>

  <div className="vmSection">
  <div className="vmGrid">
    <div className="vmCol">
      <h3 className="vmTitle">الرؤية</h3>
      <p className="vmText">
        أن نكون من الرواد في تقديم خدماتنا وفق أعلى المعايير، وبذل العناية اللازمة لرفع الوعي
        بالثقافة القانونية على العموم وبالثقافة القانونية الوقائية على وجه الخصوص.
      </p>
    </div>

    <div className="vmDivider" />

    <div className="vmCol">
      <h3 className="vmTitle">الرسالة</h3>
      <p className="vmText">
        مواكبة التطور والتغيرات التشريعية، وابتكار أفضل الطرق الحديثة وممارستها، والسعي لخلق
        بيئة عمل محفزة نستقطب بها الكفاءات المميزة في جميع المجالات القانونية
      </p>
    </div>
  </div>
</div>



</div>
    </div>

    <button
      type="button"
      className="btnGhost aboutToggle"
      onClick={() => setAboutOpen((v) => !v)}
      aria-expanded={aboutOpen}
      aria-controls="aboutMore"
    >
      {aboutOpen ? "إخفاء" : "المزيد.."}
    </button>
  </div>
</section>

        <section id="services" className="section sectionAlt reveal" data-reveal style={{ background: "#faf7f8" }}>
          <div className="containerWide">
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

<section id="clients" className="section">
        <div className="containerWide">
          <h2 className="sectionTitle">عملاؤنا</h2>
          <p className="sectionText">نماذج من الجهات التي تشرفنا بخدمتها.</p>

          <div className="clientsWrap">
            <button className="clientsArrow" type="button" onClick={() => scrollByAmount("right")}>
              ‹
            </button>

            <div className="clientsScroller" ref={scrollerRef}>
              {clients.map((c) => (
                <div className="clientItem">
                <img src={c.logo} className="clientLogo" style={{ transform: `scale(${c.scale})` }}
                />
              </div>
              ))}
            </div>

            <button className="clientsArrow" type="button" onClick={() => scrollByAmount("left")}>
              ›
            </button>
          </div>
        </div>
      </section>

        <section id="contact" className="section sectionAlt reveal" data-reveal style={{ background: "#faf7f8" }}>
          <div className="containerWide">
            <h2 className="sectionTitle">تواصل معنا</h2>
            <p className="sectionText">بيانات التواصل نص تجريبي. </p>

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
            <div style={{ marginTop: 12, borderRadius: 14, overflow: "hidden", border: "1px solid var(--border)" }}>
              <iframe
    title="موقع المكتب"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14493.578764868067!2d46.642787273927986!3d24.747653054351755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee2bdce7f6e45%3A0x2c54683f7a107fc4!2z2YXYtdix2YEg2KfZhNix2KfYrNit2YogfCBhbHJhamhpIGJhbms!5e0!3m2!1sen!2sus!4v1771812994277!5m2!1sen!2sus"
    width="100%"
    height="320"
    style={{ border: 0, display: "block" }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
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




