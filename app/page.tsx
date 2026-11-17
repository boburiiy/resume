import { ArrowDown, ArrowUpRight, Code2, Mail, Server, Terminal } from 'lucide-react'

const skillGroups = [
  { label: 'Languages', items: ['Python', 'Go', 'JavaScript', 'C / C++'] },
  { label: 'Backend & systems', items: ['Microservices', 'gRPC', 'Kafka', 'RabbitMQ'] },
  { label: 'Data', items: ['PostgreSQL', 'Redis', 'CassandraDB', 'NoSQL'] },
  { label: 'Infrastructure', items: ['Docker', 'Kubernetes', 'CI / CD', 'Linux', 'Grafana', 'Git', 'GitHub', 'GitLab'] },
  { label: 'Foundations', items: ['Data structures & algorithms', 'Unit testing'] },
]

const projects = [
  {
    number: '01',
    title: 'Backend services & APIs',
    type: 'BACKEND',
    description: 'Practical service layers and REST APIs built to keep application logic clear and maintainable. Designed around dependable data access, straightforward interfaces, and useful tests.',
    stack: ['Python', 'Go', 'PostgreSQL', 'Redis'],
  },
  {
    number: '02',
    title: 'Linux & deployment workflows',
    type: 'INFRASTRUCTURE',
    description: 'Linux environments and repeatable deployment pipelines for running backend applications. Docker-based workflows make setup and release steps easier to reproduce.',
    stack: ['Linux', 'Docker', 'CI / CD', 'Grafana'],
  },
  {
    number: '03',
    title: 'Microcontroller experiments',
    type: 'SIDE PROJECT',
    description: 'A personal exploration of firmware and small connected devices. Built with C/C++ around the constraints and possibilities of microcontroller-based IoT.',
    stack: ['C / C++', 'Firmware', 'IoT'],
  },
]

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span className="section-number">{number}</span>
      <span>{children}</span>
    </div>
  )
}

export default function Page() {
  return (
    <main className="portfolio-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Boburbek Qadamov, home"><span className="wordmark-mark">b<span>.</span></span><span>BOBURBEK QADAMOV</span></a>
        <nav className="top-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#skills">Stack</a><a href="#work">Work</a>
          <a className="nav-contact" href="mailto:hello@boburbek.dev">Get in touch <ArrowUpRight aria-hidden="true" /></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" /> OPEN TO OPPORTUNITIES <span className="availability-divider">/</span> 2025—NOW</div>
          <h1>Building the<br />things <span>behind</span><br />the screen.</h1>
          <p className="hero-role">Software Engineer <span>—</span> Backend &amp; Infrastructure</p>
          <p className="hero-summary">I build backend systems, work close to the Linux layer, and make deployments less of a guessing game. Mostly Python and Go; occasionally firmware, just to see how low things go.</p>
          <div className="hero-actions">
            <a className="button-primary" href="mailto:hello@boburbek.dev">Say hello <ArrowUpRight aria-hidden="true" /></a>
            <a className="text-link" href="https://github.com/boburiiy" target="_blank" rel="noreferrer"><Code2 aria-hidden="true" /> GitHub <ArrowUpRight aria-hidden="true" /></a>
            <a className="text-link" href="https://linkedin.com/in/boburbek-qadamov" target="_blank" rel="noreferrer"><span className="linkedin-mark" aria-hidden="true">in</span> LinkedIn <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-aside" aria-label="Areas of focus">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-core"><Terminal aria-hidden="true" /></div>
          <span className="orbit-tag tag-top">backend systems</span><span className="orbit-tag tag-right">linux / ops</span><span className="orbit-tag tag-bottom">automation</span>
          <span className="hero-aside-caption">A little closer to the metal.</span>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown aria-hidden="true" /></a>
        <span className="hero-index">01 — 04</span>
      </section>

      <section className="intro-section content-grid" id="about">
        <SectionLabel number="01">A bit about me</SectionLabel>
        <div className="intro-content"><p className="intro-lead">I like software that <span>does its job</span>—and infrastructure that stays out of the way.</p><div className="intro-details"><p>I&apos;m Boburbek, a software engineer focused on backend development, server administration, and DevOps. I&apos;ve worked on freelance backend projects and Linux infrastructure, building with Python, Go, Docker, and the tools around them.</p><p>Outside the day-to-day, I tinker with C/C++ firmware and microcontroller-based IoT devices. It&apos;s a good reminder that every abstraction eventually meets the hardware.</p></div><div className="intro-signature"><span className="signature-line" /><span>Currently building, learning, and shipping.</span></div></div>
      </section>

      <section className="skills-section content-grid" id="skills">
        <SectionLabel number="02">Tools of the trade</SectionLabel>
        <div className="skills-content"><div className="skills-heading"><h2>My stack<span>.</span></h2><p>Tools I reach for to build, ship, and keep things running.</p></div><div className="skills-list">{skillGroups.map((group, index) => <div className="skill-row" key={group.label}><span className="skill-index">0{index + 1}</span><h3>{group.label}</h3><div className="skill-tags">{group.items.map((item) => <span className="skill-tag" key={item}>{item}</span>)}</div></div>)}</div></div>
      </section>

      <section className="experience-section content-grid">
        <SectionLabel number="03">The day job</SectionLabel>
        <div className="experience-content"><div className="experience-top"><div><span className="eyebrow">FREELANCE / INDEPENDENT</span><h2>Software Engineer</h2><p className="experience-company">Self-employed <span>·</span> Remote</p></div><span className="experience-date">2025 — NOW</span></div><div className="experience-description"><p><span className="bullet-mark">↳</span>Built custom backend services, REST APIs, websites, and server deployments using Python, Go, Docker, and Linux.</p><p><span className="bullet-mark">↳</span>Managed Linux server environments, databases, and automated deployment pipelines.</p></div></div>
      </section>

      <section className="work-section content-grid" id="work">
        <SectionLabel number="04">Selected areas of work</SectionLabel>
        <div className="work-content"><div className="work-heading"><div><h2>Things I&apos;ve<br /><span>worked on.</span></h2><p>A few corners of the stack I enjoy getting my hands into.</p></div><a className="all-projects-link" href="https://github.com/boburiiy?tab=repositories" target="_blank" rel="noreferrer">Browse GitHub <ArrowUpRight aria-hidden="true" /></a></div><div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}><span className="project-number">{project.number}</span><div className="project-main"><div className="project-meta"><span>{project.type}</span><Code2 aria-hidden="true" /></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div><a className="project-link" href="https://github.com/boburiiy?tab=repositories" target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight aria-hidden="true" /></a></article>)}</div></div>
      </section>

      <footer className="footer" id="contact"><div className="footer-top"><div><span className="eyebrow">HAVE A PROJECT IN MIND?</span><h2>Let&apos;s make<br /><span>it work.</span></h2></div><a className="footer-email" href="mailto:hello@boburbek.dev"><span>hello@boburbek.dev</span><ArrowUpRight aria-hidden="true" /></a></div><div className="footer-bottom"><a className="wordmark footer-wordmark" href="#home"><span className="wordmark-mark">b<span>.</span></span><span>BOBURBEK QADAMOV</span></a><span className="footer-note"><Server aria-hidden="true" /> Built with care, deployed with confidence.</span><div className="footer-socials"><a href="https://github.com/boburiiy" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 /></a><a href="https://linkedin.com/in/boburbek-qadamov" target="_blank" rel="noreferrer" aria-label="LinkedIn"><span className="linkedin-mark" aria-hidden="true">in</span></a><a href="mailto:hello@boburbek.dev" aria-label="Email"><Mail /></a></div><span className="copyright">© 2025</span></div></footer>
    </main>
  )
}
