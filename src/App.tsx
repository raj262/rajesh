import { FormEvent, useEffect, useState } from "react";
import { SylvaHero } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
import { AmbientLayer } from "./AmbientLayer";
import "./portfolio.css";

const experience = [
  {
    year: "2025 — 2026",
    label: "Role 01",
    title: "FAB Web Studio",
    role: "Senior UI/UX & Web Designer · Team Lead",
    place: "Mohali",
    summary:
      "Led UI/UX and web design from concept to delivery, keeping designers and developers aligned so products stayed user-friendly and visually consistent.",
    tags: ["UI/UX", "Web design", "Team lead"],
  },
  {
    year: "2021 — 2025",
    label: "Role 02",
    title: "Technogetic Pvt. Ltd.",
    role: "Senior Frontend Designer · Team Lead",
    place: "Mohali",
    summary:
      "Designed and developed modern responsive web applications, kept code consistent with engineering, and integrated third-party services including payment gateways.",
    tags: ["React", "Responsive UI", "Integrations"],
  },
  {
    year: "2020 — 2021",
    label: "Role 03",
    title: "Ouctus Technology",
    role: "PHP Developer",
    place: "Noida",
    summary:
      "Delivered large-scale projects on time, customized WordPress sites with Elementor and WPBakery, and improved website performance by about 30%.",
    tags: ["WordPress", "PHP", "Performance"],
  },
  {
    year: "2017 — 2019",
    label: "Role 04",
    title: "Advent Softech India",
    role: "PHP Developer",
    place: "Lucknow",
    summary:
      "Built and supported web experiences while collaborating with developers to streamline workflows and raise team productivity.",
    tags: ["PHP", "Web development"],
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
  { label: "Years experience", value: "8+", note: "Web & product delivery" },
  { label: "Roles led", value: "Team Lead", note: "Design + engineering" },
  { label: "Focus", value: "Full Stack", note: "UI to backend" },
];

const navItems = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Work" },
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
      <a className="skip-link" href="#about">
        Skip to content
      </a>

      <header className="site-nav">
        <nav className="dock" aria-label="Primary">
          <a className="dock-mark" href="#top" aria-label="Rajesh Kumar — home">
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

      <h1 className="seo-title">
        Rajesh Kumar — Full Stack Developer in Gonda, Uttar Pradesh
      </h1>

      <section className="hero-shell" id="top" aria-label="Hero introduction">
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

        <main className="site-main">
          <section className="band about" id="about" aria-labelledby="about-heading">
            <div className="band-inner">
              <div className="hero-copy">
                <p className="kicker">About me</p>
                <h2 className="headline" id="about-heading">
                  Full Stack Developer
                  <span>building usable products</span>
                  <span>end to end.</span>
                </h2>
                <p className="lede">
                  Hire Rajesh Kumar — a Full Stack Developer in Gonda, Uttar Pradesh with 8+ years
                  of experience shipping web and mobile products from UI design to backend delivery.
                </p>
              </div>

              <div className="about-body">
                <div className="about-main">
                  <p className="copy">
                    I specialize in React.js, Next.js, JavaScript, PHP, WordPress, HTML, CSS, and
                    Bootstrap, with strong UI/UX skills in Figma, wireframing, and prototyping. As a
                    Team Lead I partner with designers and developers to ship accessible, responsive,
                    high-performance websites and apps aligned with business goals.
                  </p>
                  <ul className="signal-row" aria-label="Highlights">
                    {stats.map((stat, index) => (
                      <li key={stat.label} className="signal">
                        <span className="signal__index" aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="signal__label">{stat.label}</span>
                        <strong className="signal__value">{stat.value}</strong>
                        <p className="signal__note">{stat.note}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <aside className="paper-card education-card" aria-label="Education">
                  <p className="paper-label">Education</p>
                  <h3>Bachelor of Computer Applications</h3>
                  <p>Integral University, Lucknow</p>
                </aside>
              </div>
            </div>
          </section>

          <section className="band portfolio" id="portfolio" aria-labelledby="work-heading">
            <div className="band-inner">
              <div className="work-head">
                <div className="work-head__rail" aria-hidden="true">
                  <span>Work</span>
                  <i />
                </div>
                <div className="work-head__copy">
                  <p className="kicker">Work experience</p>
                  <h2 className="work-title" id="work-heading">
                    <span className="work-title__ghost" aria-hidden="true">
                      08
                    </span>
                    <span className="work-title__line">Eight years</span>
                    <span className="work-title__line work-title__line--soft">of shipping.</span>
                  </h2>
                </div>
                <p className="work-head__lede">
                  Full Stack and UI/UX career path across Mohali, Noida, and Lucknow — from PHP and
                  WordPress development to React products and team leadership.
                </p>
              </div>

              <ol className="trail">
                {experience.map((item, index) => (
                  <li key={`${item.title}-${item.year}`} className="trail-item">
                    <div className="trail-meta">
                      <span className="trail-index">{String(index + 1).padStart(2, "0")}</span>
                      <span className="trail-year">{item.year}</span>
                      <span className="trail-place">{item.place}</span>
                    </div>
                    <article className="trail-card">
                      <p className="trail-label">{item.label}</p>
                      <h3>{item.title}</h3>
                      <p className="trail-role">{item.role}</p>
                      <p className="trail-copy">{item.summary}</p>
                      <p className="trail-tags">{item.tags.join(" · ")}</p>
                    </article>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="band skills" id="skills" aria-labelledby="skills-heading">
            <div className="band-inner">
              <div className="hero-copy">
                <p className="kicker">Technical skills</p>
                <h2 className="headline" id="skills-heading">
                  Full stack
                  <span>toolkit.</span>
                </h2>
                <p className="lede">
                  Core skills for modern web development — UI/UX design, frontend engineering, PHP,
                  WordPress, and agile delivery.
                </p>
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

          <section className="band contact" id="contact" aria-labelledby="contact-heading">
            <div className="band-inner contact-layout">
              <div className="hero-copy">
                <p className="kicker">Contact</p>
                <h2 className="headline" id="contact-heading">
                  Let’s talk about
                  <span>your next product.</span>
                </h2>
                <p className="lede">
                  Looking to hire a Full Stack Developer or Team Lead for React, Next.js, PHP, or
                  WordPress work? Reach out for freelance and product collaborations.
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
              <p className="footer-copy">
                Full Stack Developer in Gonda, UP · React · Next.js · PHP · UI/UX
              </p>
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
