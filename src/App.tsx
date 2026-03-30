import logo from "./assets/Logo_Ar2.png"
import { FaInstagram, FaTiktok } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { useEffect, useRef, useState  } from "react"
import type { ReactNode } from "react"
import client1 from "./assets/clients/client1.png"
import client2 from "./assets/clients/client2.png"
import client3 from "./assets/clients/client3.png"
import client4 from "./assets/clients/client4.png"
import client5 from "./assets/clients/client5.png"
import client6 from "./assets/clients/client6.png"
import client7 from "./assets/clients/client7.png"
import client8 from "./assets/clients/client8.png"
import client9 from "./assets/clients/client9.png"
import client10 from "./assets/clients/client10.png"
import client11 from "./assets/clients/client11.png"
import client12 from "./assets/clients/client12.png"
import client13 from "./assets/clients/client13.png"
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
  { title: "استلام القضايا امام المحاكم والتمثيل القانوني بها (مرافعة/مدافعة)", icon: <ServiceIconCourt /> }
]

const documentationServices: Service[] = [
  { title: "توثيق العقار", icon: <ServiceIconContract /> },
  { title: "توثيق وكالة", icon: <ServiceIconChecklist /> },
  { title: "توثيق عقد تأسيس شركة", icon: <ServiceIconMeeting /> },
  { title: "توثيق الدين", icon: <ServiceIconMail /> },
  { title: "الرهن العقاري", icon: <ServiceIconCompany /> },
  { title: "فك الرهن العقاري", icon: <ServiceIconCompany /> },
  { title: "تصحيح الرهن العقاري", icon: <ServiceIconCompany /> }
]

function App() {

  const [aboutOpen, setAboutOpen] = useState(false)
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const [activeServiceTab, setActiveServiceTab] = useState<"sector" | "documentation">("sector")
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
    { name: "Client4", logo: client4, scale: 1.3, y: -12 },
    { name: "Client5", logo: client5, scale: 1, y: 0},
    { name: "Client6", logo: client6, scale: 1.2, y: -15 },
    { name: "Client7", logo: client7, scale: 0.8, y: -12 },
    { name: "Client8", logo: client8, scale: 1.3, y: -12 },
    { name: "Client9", logo: client9, scale: 1.7, y: -12 },
    { name: "Client10", logo: client10, scale: 1, y: -12 },
    { name: "Client11", logo: client11, scale: 1, y: -12 },
    { name: "Client12", logo: client12, scale: 1.5, y: -12 },
    { name: "Client13", logo: client13, scale: 1.5, y: -12 }
  ]
  const displayedServices =
  activeServiceTab === "sector" ? services : documentationServices
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
        <section className="hero heroSection">
          <svg
  className="heroCurve"
  viewBox="0 0 600 600"
  preserveAspectRatio="none"
>
  <path
    d="M0,120 C200,20 350,350 500,600"
    stroke="url(#curveGradient)"
    strokeWidth="3"
    fill="none"
  />

  <defs>
    <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#81A5C6" stopOpacity="0.9" />
      <stop offset="100%" stopColor="#81A5C6" stopOpacity="0.2" />
    </linearGradient>
  </defs>
</svg>
          <div className="containerWide">
            <h1 className="heroTitle">نقطة انطلاقك قبـــــــــــــل اتخــــاذ أي قــــرار</h1>
            <p className="heroText">حلول قانونية حديثــــــــــــــــــــــــــــــــــة</p>

            <div className="heroButtons">
              <a href="tel:+966500000000" className="btnPrimary">
  اتصل الآن
</a>
              <a href="#contact" className="btnGhost">
  راسلنا
</a>
            </div>
            <div className="socialRow">
  <a href="https://instagram.com/trslawsa" target="_blank" rel="noreferrer">
    <FaInstagram />
  </a>

  <a href="https://x.com/trslawsa" target="_blank" rel="noreferrer">
    <FaXTwitter />
  </a>

  <a href="https://tiktok.com/@trslawsa" target="_blank" rel="noreferrer">
    <FaTiktok />
  </a>
</div>
          </div>
        </section>

        <section id="about" className="section aboutSection">
          <svg
  className="aboutCurve"
  viewBox="0 0 600 600"
  preserveAspectRatio="none"
>
  <path
    d="M0,120 C200,20 350,350 500,600"
    stroke="url(#curveGradient2)"
    strokeWidth="3"
    fill="none"
  />

  <defs>
    <linearGradient id="curveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#d9b27c" stopOpacity="0.9" />
      <stop offset="100%" stopColor="#d9b27c" stopOpacity="0.2" />
    </linearGradient>
  </defs>
</svg>
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
        <p>قطعة مستديرة مسنّنة و ناقلة للحركة في الساعة ونحو ذلك.</p>
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
        <h4>التُّرْسُ</h4>
        <p>قطعة من الحديد توضع خلف الباب لإِحكام إِغلاقة.</p>
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
        <p>صحيفة من الفولاذ مستديرة يحملها المحارب في ذراعه للوقاية من الضربات.</p>
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

    <div className="servicesTabs">
      <button
        type="button"
        className={`servicesTab ${activeServiceTab === "sector" ? "active" : ""}`}
        onClick={() => setActiveServiceTab("sector")}
      >
        القطاع الخاص/العام
      </button>

      <button
        type="button"
        className={`servicesTab ${activeServiceTab === "documentation" ? "active" : ""}`}
        onClick={() => setActiveServiceTab("documentation")}
      >
        التوثيق
      </button>
    </div>

    <div className="grid">
      {displayedServices.map((s) => (
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
                <p className="cardText">الهاتف: 0537374555</p>
                <p className="cardText">البريد: info@trslaw.net</p>
                 <div className="socialRow">
  <a href="https://instagram.com/trslawsa" target="_blank" rel="noreferrer">
    <FaInstagram />
  </a>

  <a href="https://x.com/trslawsa" target="_blank" rel="noreferrer">
    <FaXTwitter />
  </a>

  <a href="https://tiktok.com/@trslawsa" target="_blank" rel="noreferrer">
    <FaTiktok />
  </a>
</div>
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
      <a
  href="https://wa.me/966500000000"
  className="whatsappFloat"
  target="_blank"
  rel="noreferrer"
  aria-label="تواصل عبر واتساب"
>
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.6 0 .33 5.27.33 11.73c0 2.07.54 4.1 1.57 5.89L0 24l6.54-1.72a11.67 11.67 0 0 0 5.52 1.4h.01c6.46 0 11.73-5.27 11.73-11.73 0-3.13-1.22-6.07-3.28-8.47ZM12.07 21.3h-.01a9.6 9.6 0 0 1-4.9-1.35l-.35-.21-3.88 1.02 1.04-3.78-.23-.39a9.55 9.55 0 0 1-1.46-5.08c0-5.3 4.31-9.61 9.62-9.61 2.57 0 4.98 1 6.79 2.81a9.53 9.53 0 0 1 2.82 6.8c0 5.3-4.31 9.61-9.61 9.61Zm5.27-7.19c-.29-.14-1.72-.85-1.99-.95-.27-.1-.46-.14-.66.14-.19.29-.76.95-.93 1.14-.17.19-.34.22-.63.08-.29-.14-1.21-.45-2.31-1.42-.86-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.66-1.59-.9-2.18-.24-.57-.49-.5-.66-.51h-.56c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44s1.04 2.82 1.19 3.01c.14.19 2.04 3.11 4.94 4.36.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34Z"
    />
  </svg>
</a>
    </div>
  )
}

export default App




