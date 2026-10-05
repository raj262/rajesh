import { FormEvent, useEffect, useState } from "react";
import { SylvaHero } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
import { AmbientLayer } from "./AmbientLayer";
import "./portfolio.css";

const experience = [
  {
    year: "2025 — 2026",
    label: "Field note 01",
    title: "FAB Web Studio",
    role: "Senior UI/UX & Web Designer · Team Lead",
    place: "Mohali",
    summary:
      "Led UI/UX and web design from concept to delivery, keeping designers and developers aligned so products stayed user-friendly and visually consistent.",
    tags: ["UI/UX", "Web design", "Team lead"],
    image: "/landing-pages/inner-green-assets/card-ethos.jpg",
  },
  {
    year: "2021 — 2025",
    label: "Field note 02",
    title: "Technogetic Pvt. Ltd.",
    role: "Senior Frontend Designer · Team Lead",
    place: "Mohali",
    summary:
      "Designed and developed modern responsive web applications, kept code consistent with engineering, and integrated third-party services including payment gateways.",
    tags: ["React", "Responsive UI", "Integrations"],
    image: "/landing-pages/inner-green-assets/card-ecostove.jpg",
  },
  {
    year: "2020 — 2021",
    label: "Field note 03",
    title: "Ouctus Technology",
    role: "PHP Developer",
    place: "Noida",
    summary:
      "Delivered large-scale projects on time, customized WordPress sites with Elementor and WPBakery, and improved website performance by about 30%.",
    tags: ["WordPress", "PHP", "Performance"],
    image: "/landing-pages/inner-green-assets/card-ethos.jpg",
  },
  {
    year: "2017 — 2019",
    label: "Field note 04",
    title: "Advent Softech India",
    role: "PHP Developer",
    place: "Lucknow",
    summary:
      "Built and supported web experiences while collaborating with developers to streamline workflows and raise team productivity.",
    tags: ["PHP", "Web development"],
    image: "/landing-pages/inner-green-assets/card-ecostove.jpg",
  },
];

const skillGroups = [
  {
    label: "Design",
    items: ["UI Design", "Wireframing", "Prototyping", "Figma", "Usability Testing", "Responsive Design"],
  },
  {
    label: "Build",
    items: ["HTML / CSS", "JavaScript", "React.js", "Next.js", "PHP", "Bootstrap", "WordPress"],
  },
  {
    label: "Process",
    items: ["Adobe XD", "VS Code", "Jira", "TestLink", "BrowserStack", "Agile & Scrum"],
  },
];

const stats = [
  { label: "Years shipping", value: "4+" },
  { label: "Roles led", value: "Team Lead" },
  { label: "Focus", value: "Full Stack" },
];

const navItems = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function App() {
  const [sent, setSent] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const ids = navItems.map((item) => item.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="site">
      <section className="hero-shell" aria-label="Sylva hero">
        <div className="shader-frame">
          <SylvaHero
            variant="living-green"
            headingFont="lexend"
            bodyFont="lexend"
            headingWeight="300"
            bodyWeight="300"
            primaryColor="#ffffff"
            headingSize={63}
            bodySize={16.5}
            headingLetterSpacing={-0.006}
          />
        </div>
        <a className="discover" href="#about">
          Discover
          <span className="discover__track" />
        </a>
      </section>

      <div className="site-rest">
        <AmbientLayer />
        <div className="guides" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <header className="site-nav">
          <nav className="dock" aria-label="Page">
            <a className="dock-mark" href="#about" aria-label="Rajesh Kumar — home">
              RK
            </a>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={active === item.href ? "is-active" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <main className="site-main">
          <section className="band about" id="about">
            <div className="band-inner">
              <div className="hero-copy">
                <p className="kicker">About me</p>
                <h2 className="headline">
                  Full Stack Developer
                  <span>building usable products</span>
                  <span>end to end.</span>
                </h2>
                <p className="lede">
                  I’m Rajesh Kumar — based in Gonda, Uttar Pradesh — with 4+ years shipping web and
                  mobile products from interface to implementation.
                </p>
              </div>

              <div className="about-split">
                <p className="copy">
                  I work across design and engineering: user research, wireframing, prototyping,
                  React.js, Next.js, HTML, CSS, JavaScript, Bootstrap, PHP, and WordPress. I care
                  about usability, accessibility, and clean aesthetics — and I collaborate with
                  cross-functional teams to deliver responsive, high-performance experiences.
                </p>
                <aside className="paper-card paper-card--compact">
                  <p className="paper-label">Education</p>
                  <h3>Bachelor of Computer Applications</h3>
                  <p>Integral University, Lucknow</p>
                </aside>
              </div>

              <ul className="stat-row">
                {stats.map((stat) => (
                  <li key={stat.label}>
                    <span className="stat-mark" aria-hidden="true" />
                    <div>
                      <p>{stat.label}</p>
                      <strong>{stat.value}</strong>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="band portfolio" id="portfolio">
            <div className="band-inner">
              <div className="hero-copy">
                <p className="kicker">Portfolio</p>
                <h2 className="headline">
                  Experience
                  <span>grown in the field.</span>
                </h2>
                <p className="lede">
                  Roles where design and development stayed in the same hands — from concept through
                  delivery.
                </p>
              </div>

              <div className="card-grid">
                {experience.map((item) => (
                  <article key={`${item.title}-${item.year}`} className="paper-card">
                    <figure className="portal">
                      <img src={item.image} alt="" loading="lazy" />
                    </figure>
                    <p className="paper-label">{item.label}</p>
                    <h3>{item.title}</h3>
                    <p className="paper-role">
                      {item.role}
                      <span>· {item.place}</span>
                    </p>
                    <p className="paper-year">{item.year}</p>
                    <p className="paper-copy">{item.summary}</p>
                    <p className="paper-tags">{item.tags.join(" · ")}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="band skills" id="skills">
            <div className="band-inner">
              <div className="hero-copy">
                <p className="kicker">Skills</p>
                <h2 className="headline">
                  Full stack
                  <span>toolkit.</span>
                </h2>
                <p className="lede">The materials I reach for every week — design, build, and delivery.</p>
              </div>

              <div className="skills-grid">
                {skillGroups.map((group) => (
                  <div key={group.label} className="skill-board">
                    <p className="paper-label">{group.label}</p>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="band contact" id="contact">
            <div className="band-inner contact-layout">
              <div className="hero-copy">
                <p className="kicker">Contact us</p>
                <h2 className="headline">
                  Let’s talk about
                  <span>your next product.</span>
                </h2>
                <p className="lede">
                  Open to full stack development, product builds, and team-lead collaborations.
                </p>
                <div className="contact-details">
                  <a className="contact-link" href="mailto:raj262.kum@gmail.com">
                    raj262.kum@gmail.com
                  </a>
                  <a className="contact-link" href="tel:+919129874494">
                    +91 9129874494
                  </a>
                  <p className="contact-place">Gonda, Uttar Pradesh</p>
                </div>
              </div>

              <form className="paper-card contact-form" onSubmit={handleContact}>
                <p className="paper-label">Write a note</p>
                <label>
                  <span>Name</span>
                  <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@company.com"
                  />
                </label>
                <label>
                  <span>Message</span>
                  <textarea name="message" rows={5} required placeholder="Tell me about the project" />
                </label>
                <button className="explore-pill" type="submit">
                  <span className="explore-pill__plate" aria-hidden="true" />
                  <span className="explore-pill__label">
                    {sent ? "Message noted" : "Send message"}
                  </span>
                </button>
                {sent ? (
                  <p className="form-note">Thanks — I’ll reply at raj262.kum@gmail.com soon.</p>
                ) : null}
              </form>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="band-inner footer-inner">
            <div>
              <p className="footer-mark">Rajesh Kumar</p>
              <p className="footer-copy">Full Stack Developer · Design · Team Lead</p>
            </div>
            <div className="footer-links">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
            <p className="footer-meta">© {new Date().getFullYear()} · Gonda, Uttar Pradesh</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
