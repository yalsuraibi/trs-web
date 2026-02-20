function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#222" }}>
      
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
          borderBottom: "1px solid #eee",
          position: "sticky",
          top: 0,
          background: "white",
          direction: "rtl"
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: 20 }}>ترس</div>
        <nav style={{ display: "flex", gap: 20 }}>
          <a href="#about">من نحن</a>
          <a href="#services">الخدمات</a>
          <a href="#team">الفريق</a>
          <a href="#contact">تواصل معنا</a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          padding: "100px 40px",
          textAlign: "center",
          background: "#f5f7fa"
        }}
      >
        <h1>للمحاماة والاستشارات القانونية</h1>
        <p style={{ maxWidth: 600, margin: "20px auto" }}>
          حلول قانونية حديثة
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
          <button style={{ padding: "12px 20px" }}>Call Now</button>
          <button style={{ padding: "12px 20px" }}>Email Us</button>
        </div>
      </section> 

      {/* ABOUT */}
      <section id="about" style={{ padding: "80px 40px" }}>
        <h2>من نحن</h2>
        <p style={{ maxWidth: 700 }}>
        تـرس، هــي شركــة مـحامـــاة مـتخصصــــــة في تـقديـــــم الخـدمــــات الاسـتشاريـة
والحــلول الــقانــونــية ومهــتمة في تــفعيل ورفــع الــوعــي بــالــدور الــوقــائي لــدى
المـنشآت والأفـراد، وذلـك لـتعز يـز فـرص الـنجاح والـقدرة الـتنافسـية في الـسوق
ب وقـوعـها، والمـحافـظة
ّ
المحـلية والـدولـية بـالـكشف المـبكر عـن المـشكلات وتـجن
على استقرار التعاملات القانونية.

        </p>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "80px 40px", background: "#f5f7fa" }}>
        <h2>الخدمات</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
            marginTop: 30
          }}
        >
          {[
            "Corporate & Commercial",
            "Contracts & Agreements",
            "Dispute Resolution",
            "Labor & Employment",
            "Real Estate",
            "Compliance & Advisory"
          ].map((service) => (
            <div
              key={service}
              style={{
                padding: 20,
                border: "1px solid #eee",
                borderRadius: 8,
                background: "white"
              }}
            >
              <h4>{service}</h4>
              <p>Short description of this service area.</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" style={{ padding: "80px 40px" }}>
        <h2>الفريق</h2>

        <div style={{ display: "flex", gap: 30, marginTop: 30 }}>
          {["Attorney One", "Attorney Two", "Attorney Three"].map((name) => (
            <div key={name} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 120,
                  height: 120,
                  background: "#ddd",
                  borderRadius: "50%",
                  margin: "0 auto 10px"
                }}
              />
              <div>{name}</div>
              <div style={{ fontSize: 12, color: "#666" }}>Partner</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 40px", background: "#f5f7fa" }}>
        <h2>تواصل معنا</h2>

        <div style={{ display: "flex", gap: 50, marginTop: 30, flexWrap: "wrap" }}>
          <div>
            <p>📍 Riyadh, Saudi Arabia</p>
            <p>📞 +966 000 000 000</p>
            <p>✉️ info@trs-law.com</p>
          </div>

          <form style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <input placeholder="Name" />
            <input placeholder="Email" />
            <textarea placeholder="Message" rows={4} />
            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: 20,
          textAlign: "center",
          borderTop: "1px solid #eee"
        }}
      >
        © 2026 TRS Law Firm
      </footer>
    </div>
  )
}

export default App