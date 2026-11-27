const cakes = [
  { number: '01', name: 'The Celebration Cake', detail: 'A centrepiece for birthdays, milestones and all the lovely in-betweens.', tag: 'Bestseller', art: 'cake-one' },
  { number: '02', name: 'The Floral Collection', detail: 'Soft colours, delicate details and a little garden-inspired magic.', tag: 'Made to order', art: 'cake-two' },
  { number: '03', name: 'The Little Something', detail: 'Thoughtful smaller cakes for intimate gatherings and sweet surprises.', tag: 'Perfect for sharing', art: 'cake-three' },
];

const occasions = [
  ['✦', 'Birthdays', 'Make their day feel extra special.'],
  ['♡', 'Weddings & anniversaries', 'A beautiful centrepiece for your story.'],
  ['✿', 'Baby showers', 'Celebrate a brand-new little love.'],
  ['☼', 'Just because', 'Some moments deserve cake, too.'],
];

export default function Home() {
  return (
    <main>
      <div className="announcement">CUSTOM-MADE CAKES FOR MEANINGFUL OCCASIONS <span>·</span> MADE TO ORDER</div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Sweet Atelier home"><span className="brand-mark">s.</span><span>sweet atelier<small>CAKES & CONFECTIONS</small></span></a>
        <nav aria-label="Main navigation">
          <a href="#cakes">Our cakes</a><a href="#occasions">Occasions</a><a href="#story">Our story</a>
        </nav>
        <a className="header-cta" href="#contact">Enquire now <span>↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span></span> THOUGHTFUL CAKES, MADE BY HAND</p>
          <h1>A cake for<br />every <em>good</em><br /><em>moment.</em></h1>
          <p className="hero-description">Considered designs, beautiful details and carefully made cakes for the occasions worth gathering for.</p>
          <div className="hero-actions"><a className="button button-dark" href="#cakes">View the collection <span>↗</span></a><a className="text-link" href="#contact">Enquire about a cake <span>→</span></a></div>
          <div className="hero-note"><span className="note-star">✳</span><span>Made to order<br /><strong>Designed around your occasion</strong></span></div>
        </div>
        <div className="hero-art" aria-label="Decorative illustration of a celebration cake">
          <div className="sun-disc"></div><div className="hero-spark spark-a">✦</div><div className="hero-spark spark-b">✧</div>
          <div className="hero-cake-shadow"></div>
          <div className="hero-cake"><div className="cake-top"></div><div className="cake-icing"></div><div className="cake-body"><i></i><i></i><i></i><i></i><i></i></div><div className="cake-plate"></div><div className="cake-flower flower-a">✿</div><div className="cake-flower flower-b">✿</div><div className="cake-flower flower-c">✿</div></div>
          <div className="art-caption"><span>01 / 03</span><span>A little work of heart</span></div>
        </div>
      </section>

      <section className="intro-strip"><span>MADE WITH INTENTION</span><p>Simple details. Beautiful cakes. <em>Meaningful moments.</em></p><span>MADE TO ORDER</span></section>

      <section className="cakes-section section-pad" id="cakes">
        <div className="section-heading"><div><p className="eyebrow">THE CAKE COLLECTION</p><h2>Made for <em>sharing.</em></h2></div><p className="section-aside">A considered collection of celebration cakes, made fresh to order and finished with care.</p></div>
        <div className="cake-grid">
          {cakes.map((cake) => <article className="cake-card" key={cake.number}>
            <div className={`cake-card-art ${cake.art}`}><span className="cake-tag">{cake.tag}</span><div className="mini-plate"></div><div className="mini-cake"><div className="mini-top"></div><div className="mini-body"></div><div className="mini-deco">✿</div></div><span className="art-number">{cake.number}</span></div>
            <div className="cake-card-copy"><div><h3>{cake.name}</h3><p>{cake.detail}</p></div><a href="#contact" aria-label={`Enquire about ${cake.name}`}>↗</a></div>
          </article>)}
        </div>
        <p className="made-note">Have something different in mind? We love a creative brief. <a href="#contact">Tell us about it →</a></p>
      </section>

      <section className="occasion-section" id="occasions">
        <div className="occasion-inner"><div className="occasion-title"><p className="eyebrow">A CAKE FOR EVERY CHAPTER</p><h2>Made for<br /><em>your occasion.</em></h2><p>From milestone celebrations to intimate gatherings, each cake is tailored to the occasion.</p><a className="button button-light" href="#contact">Let’s plan your cake <span>↗</span></a></div>
          <div className="occasion-list">{occasions.map(([icon, title, desc], i) => <a className="occasion-item" href="#contact" key={title}><span className="occasion-icon">{icon}</span><span className="occasion-text"><strong>{title}</strong><small>{desc}</small></span><span className="occasion-arrow">↗</span></a>)}</div>
        </div>
      </section>

      <section className="story-section section-pad" id="story"><div className="story-art"><div className="story-circle">BAKED<br />WITH<br /><em>LOVE</em><span>✳</span></div><div className="story-ribbon">A LITTLE JOY IN EVERY SLICE</div></div><div className="story-copy"><p className="eyebrow">OUR APPROACH</p><h2>Thoughtfully made.<br /><em>Simply special.</em></h2><p>We believe a beautiful cake should feel considered, personal and effortless. Every detail has a purpose, from the finish to the flavour.</p><p>Our small-batch approach means each order receives individual attention and is made especially for your celebration.</p><a className="text-link" href="#contact">Our story <span>→</span></a></div></section>

      <section className="order-section"><div className="order-top"><p className="eyebrow">FROM IDEA TO ICING</p><h2>A simple <em>three-step process.</em></h2></div><div className="steps"><div><span>01</span><h3>Tell us your idea</h3><p>Share your date, occasion, guest numbers and the look you love.</p></div><div><span>02</span><h3>Make it yours</h3><p>We’ll discuss the details, flavours and a design to suit your celebration.</p></div><div><span>03</span><h3>Let’s celebrate</h3><p>We’ll confirm your order and get baking for your special day.</p></div></div></section>

      <section className="contact-section" id="contact"><div><p className="eyebrow">ENQUIRE ABOUT YOUR CAKE</p><h2>Let’s create<br /><em>something lovely.</em></h2><p>Share your occasion, preferred date and design ideas. We’ll be in touch to discuss your cake.</p><a className="button button-dark" href="mailto:hello@example.com?subject=Cake%20enquiry">Send an enquiry <span>↗</span></a></div><div className="contact-decoration"><span>✿</span><span>✧</span><span>♡</span><small>LET’S<br />MAKE<br />A DAY<br />OF IT</small></div></section>

      <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">s.</span><span>sweet atelier<small>CAKES & CONFECTIONS</small></span></a><p>Thoughtfully made. Beautifully shared.</p><div className="footer-links"><a href="#cakes">Cakes</a><a href="#story">Our story</a><a href="#contact">Contact</a></div><small className="copyright">© {new Date().getFullYear()} Sweet Atelier. All sweet things reserved.</small></footer>
    </main>
  );
}
