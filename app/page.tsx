
import Image from "next/image";

const venueAddress =
  "Mallam, Pithapuram Mandal, Kakinada District, Andhra Pradesh - 533433";


const mapsUrl =
  "https://maps.app.goo.gl/WPF3A1nAG6kb4LdMA";

const events = [
  {
    number: "01",
    name: "The Reception",
    subtitle: "An evening of joy, blessings and togetherness",
    date: "15 November 2026",
    time: "6:00 PM onwards",
    venue: "Konidela Chiranjeevi Gari Function Hall",
    address: venueAddress,
    mapsUrl,
    symbol: "✧",
  },
  {
    number: "02",
    name: "The Wedding Ceremony",
    subtitle: "Two hearts united in a sacred bond",
    date: "15 November 2026",
    time: "Muhurtham: 10:14 PM",
    venue: "Konidela Chiranjeevi Gari Function Hall",
    address: venueAddress,
    mapsUrl,
    symbol: "❦",
  },
];

export default function Home() {
  return (
    <main id="home">
      {/* NAVIGATION */}
      <nav className="topbar">
        <a className="brand" href="#home" aria-label="Back to invitation">
          V &amp; V
        </a>

        <div className="nav-links">
          <a href="#invitation">Invitation</a>
          <a href="#family">Families</a>
          <a href="#events">Celebrations</a>
          <a href="#closing">Blessings</a>
        </div>
      </nav>

      {/* 1. HERO INVITATION */}
      <section className="hero" id="invitation">
        <div className="hero-frame">
          <div className="ganesha">
            <Image
              src="/ganesha.svg"
              alt="Decorative illustration of Lord Ganesha"
              width={112}
              height={126}
              priority
            />
          </div>

          <p className="sanskrit">॥ శ్రీ గణేశాయ నమః ॥</p>
          <p className="eyebrow">WITH THE BLESSINGS OF THE ALMIGHTY</p>

          <h1>A Celebration of Love &amp; Tradition</h1>

          <div className="invitation-flourish" aria-hidden="true">
            ❧ ── ✦ ── ❧
          </div>

          <p className="hero-intro">
            With the blessings of God and our elders,
            we joyfully invite you and your family to
            celebrate the auspicious wedding of
          </p>

          
        
<div className="couple-highlight">
  <div className="couple-person">
    <p className="couple-role">THE BRIDE</p>
    <h2 className="couple-name">Vaishnavi</h2>
  </div>

  <div className="couple-ornament">
    <span className="ornament-line"></span>
    <span className="ampersand">&amp;</span>
    <span className="ornament-line"></span>
  </div>

  <div className="couple-person">
    <p className="couple-role">THE GROOM</p>
    <h2 className="couple-name">Venkateswarulu</h2>
  </div>
</div>




          <p className="eyebrow">THE WEDDING CELEBRATION</p>
          <p className="hero-date">15 November 2026</p>

          <p className="hero-venue">
            Konidela Chiranjeevi Gari Function Hall
          </p>
          <p className="hero-venue">
            Mallam, Pithapuram, Kakinada District
          </p>

          <a className="primary-link" href="#family">
            Read Our Invitation ↓
          </a>
        </div>
      </section>

      {/* 2. FAMILY INVITATION */}
      <section className="welcome section" id="family">
        <p className="eyebrow">WITH THE BLESSINGS OF OUR ELDERS</p>

        <div className="heading-flourish" aria-hidden="true">
          ❧ ✦ ❧
        </div>

        <h2>A Family Invitation</h2>

        <p className="family-message">
          With immense happiness and gratitude, we cordially
          invite you and your family to grace the wedding
          celebrations of our beloved children.
          Your presence and blessings will make this
          auspicious occasion truly memorable.
        </p>

        <div className="family-grid">
          <article className="family-card">
            <p className="eyebrow">BRIDE'S FAMILY</p>
            <h3>Vaishnavi</h3>
            <p>Daughter of</p>
            <p className="family-names">Challa Venkataramana</p>
            <p>and</p>
            <p className="family-names">Challa Surya Chandra</p>
          </article>

          <article className="family-card">
            <p className="eyebrow">GROOM'S FAMILY</p>
            <h3>Venkateswarulu</h3>
            <p>Son of</p>
            <p className="family-names">Mediboyina Srinivasu</p>
            <p>and</p>
            <p className="family-names">Mediboyina Thalupulamma</p>
          </article>
        </div>

        <p className="family-message">
          With love and warm regards,
          <br />
          <strong>Mediboyina &amp; Challa Families</strong>
        </p>
      </section>

      {/* 3. RECEPTION AND 4. WEDDING CEREMONY */}
      <section className="events-section section" id="events">
        <div className="section-heading">
          <p className="eyebrow">SAVE THE SPECIAL DATE</p>

          <div className="heading-flourish" aria-hidden="true">
            ❧ ✦ ❧
          </div>

          <h2>Our Wedding Celebrations</h2>

          <p className="section-description">
            We warmly invite you to join us for these
            beautiful moments of love, happiness and tradition.
          </p>
        </div>

        <div className="event-grid">
          {events.map((event) => (
            <article className="event-card" key={event.number}>
              <div className="event-topline">
                <span className="event-number">{event.number}</span>

                <span className="event-symbol" aria-hidden="true">
                  {event.symbol}
                </span>
              </div>

              <div className="event-card-content">
                <p className="event-kicker">
                  YOU ARE CORDIALLY INVITED
                </p>

                <h3>{event.name}</h3>
                <p className="event-subtitle">{event.subtitle}</p>

                <div className="event-divider" aria-hidden="true">
                  ❧ ── ✦ ── ❧
                </div>

                <div className="event-detail">
                  <span className="detail-icon" aria-hidden="true">▦</span>
                  <span className="detail-label">Date</span>
                  <span className="detail-value">{event.date}</span>
                </div>

                <div className="event-detail">
                  <span className="detail-icon" aria-hidden="true">◷</span>
                  <span className="detail-label">Time</span>
                  <span className="detail-value">{event.time}</span>
                </div>

                <div className="event-detail">
                  <span className="detail-icon" aria-hidden="true">⌖</span>
                  <span className="detail-label">Venue</span>
                  <span className="detail-value">{event.venue}</span>
                </div>

                <p className="event-address">{event.address}</p>

                <a
                  className="text-link"
                  href={event.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Location on Google Maps ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. CELEBRATION AND FEAST */}
      <section className="feast section" id="celebration">
        <p className="eyebrow">A JOYFUL GATHERING</p>

        <div className="heading-flourish" aria-hidden="true">
          ❧ ✦ ❧
        </div>

        <h2>A Celebration of Togetherness</h2>

        <p className="celebration-message">
          Weddings bring families together and create memories
          that last a lifetime. We look forward to sharing
          our happiness, traditions and blessings with you.
          Your gracious presence will make our celebration
          even more special.
        </p>

        <div className="celebration-details">
          <p>
            <strong>Our Feast</strong>
          </p>
          <p>Tiffins &amp; Pure Vegetarian Food</p>
          <p>
            <strong>Venue</strong>
          </p>
          <p>Konidela Chiranjeevi Gari Function Hall</p>
          <p>Mallam, Pithapuram, Kakinada District</p>
        </div>
      </section>

      {/* 6. CLOSING */}
      <section className="rsvp section" id="closing">
        <p className="eyebrow">YOUR PRESENCE IS OUR BLESSING</p>

        <div className="heading-flourish" aria-hidden="true">
          ❧ ✦ ❧
        </div>

        <h2>With Love &amp; Blessings</h2>

        <p className="closing-message">
          As we begin this beautiful journey together,
          we seek the blessings and good wishes of our
          family, friends and well-wishers.
          We would be delighted to have you with us
          on this auspicious occasion.
        </p>

        <p className="closing-family">With warm regards,</p>

        <p className="closing-family-name">
          Mediboyina &amp; Challa Families
        </p>

        <p className="closing-thanks">
          Thank you for being part of our joy.
        </p>

        <a className="primary-link" href="#home">
          Return to the Invitation ↑
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>V &amp; V</p>
        <p>Vaishnavi &amp; Venkateswarulu</p>
        <p>15 November 2026</p>
        <p>Made with love, tradition and blessings.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
