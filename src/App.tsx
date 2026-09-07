import {
  FaArrowUpRightFromSquare,
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import CursorLight from "./components/CursorLight";
import { Contact } from "./pages/Contact";
import { useState } from "react";

type ProjectCategory = "software" | "ai";

type Project = {
  img: string;
  alt: string;
  title: string;
  description: string;
  techstack: string[];
  githubUrl: string;
  demoUrl?: string;
};

const App = () => {
  const [activeProjectCategory, setActiveProjectCategory] =
    useState<ProjectCategory>("software");

  const socialIcons = [
    {
      href: "https://github.com/kelia01",
      label: "GitHub",
      icon: <FaGithub />,
    },
    {
      href: "https://discord.com/channels/@me/1305914087233949759",
      label: "Discord",
      icon: <FaDiscord />,
    },
    {
      href: "https://www.linkedin.com/in/iradukundakelia/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      href: "https://www.instagram.com/sk_elia/",
      label: "Instagram",
      icon: <FaInstagram />,
    },
  ];

  const experienceDetails = [
    {
      year: "MAR 2026 - PRESENT",
      title: "AI/ML Engineering Trainee",
      organization: "The Gym × MaibornWolff",
      description:
        "Specializing in Artificial Intelligence and Machine Learning while building AI-powered applications and developing a deeper understanding of modern AI systems.",
      skills: [
        "Python",
        "FastAPI",
        "LLM APIs",
        "Embeddings",
        "RAG",
        "Vector Databases",
      ],
    },
    {
      year: "MAR 2025 - PRESENT",
      title: "Software Development Coach",
      organization: "The Gym",
      description:
        "Coach students in software development programs, helping them strengthen technical foundations, problem-solving skills, communication, and professional habits. I have also facilitated training sessions in different learning environments, including RCA Coding Academy.",
      skills: [
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind",
        "DOM",
        "Codewars",
        "Trello",
        "Toggl",
      ],
    },
    {
      year: "NOV 2024 - FEB 2026",
      title: "Software Development Trainee",
      organization: "The Gym",
      description:
        "Completed intensive software development training with hands-on experience building full-stack applications, collaborating on team projects, and developing practical software engineering skills.",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "NestJS",
        "PostgreSQL",
        "MongoDB",
        "Git",
      ],
    },
  ];

  const educationDetails = [
    {
      year: "2024 - PRESENT",
      title: "Bachelor of Software Engineering",
      institution: "Adventist University of Central Africa",
      description:
        "Building a foundation in software engineering, programming, databases, algorithms, and mathematical concepts.",
      skills: [
        "Java",
        "C",
        "SQL",
        "Data Structures",
        "Algebra",
        "Calculus",
      ],
    },
    {
      year: "2020 - 2023",
      title: "Computer Science Student",
      institution: "Byimana School of Sciences",
      description:
        "Completed a science-focused secondary education with a foundation in programming, mathematics, and computer science.",
      skills: ["Java", "C++", "HTML", "Mathematics"],
    },
  ];

  const softwareProjects: Project[] = [
    {
      img: "/dutch.png",
      alt: "Bauimeister website preview",
      title: "Bauimeister Website",
      description:
        "A responsive website developed for a Berlin-based construction company with a focus on modern design, usability, and responsive layouts.",
      techstack: ["HTML", "Tailwind CSS", "JavaScript"],
      demoUrl: "https://g8web-project-main.netlify.app/",
      githubUrl: "https://github.com/Preacher-Y/Web-project/",
    },
    {
      img: "/pharmacy.png",
      alt: "Pharma Care inventory management system preview",
      title: "Pharma Care",
      description:
        "An inventory management system designed to support the management of pharmaceutical products and inventory operations.",
      techstack: ["JavaScript", "Frontend", "Backend", "Database"],
      githubUrl: "https://github.com/ingdia/inventory",
    },
    {
      img: "/moni.png",
      alt: "Monishare car sharing platform preview",
      title: "Monishare Car Sharing",
      description:
        "A car-sharing platform developed as a collaborative software project with a focus on frontend functionality and user experience.",
      techstack: ["React", "TypeScript", "JavaScript"],
      githubUrl:
        "https://github.com/TheGymRwanda/c7-auca-snow-carsharing-frontend",
    },
    {
      img: "/bagi-news.png",
      alt: "Bagi News platform preview",
      title: "Bagi News",
      description:
        "A news platform for browsing and reading news content through a modern and responsive web interface.",
      techstack: ["React", "JavaScript", "CSS"],
      githubUrl: "https://github.com/kelia01/news-web",
    },
  ];

  const aiProjects: Project[] = [
    {
      img: "/movie-watchlist.png",
      alt: "AI Movie Watchlist preview",
      title: "AI Movie Watchlist",
      description:
        "An AI-powered application that allows users to interact with and manage a movie watchlist through natural-language interactions.",
      techstack: ["Python", "AI", "LLM APIs"],
      githubUrl: "https://github.com/kelia01/movie_watchlist",
    },
    {
      img: "/vacation-planner.png",
      alt: "AI Vacation Planner preview",
      title: "AI Vacation Planner",
      description:
        "An AI-powered vacation planning application that combines backend services with LLM capabilities and a travel knowledge base to generate personalized recommendations.",
      techstack: ["Python", "FastAPI", "AI", "RAG"],
      githubUrl: "https://github.com/kelia01/AI_Vacation_Planner",
    },
  ];

  const displayedProjects =
    activeProjectCategory === "software" ? softwareProjects : aiProjects;

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "EDUCATION", href: "#education" },
    { label: "PROJECTS", href: "#projects" },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#1B2A4A] font-sans text-[#f0ece4]">
      <CursorLight />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-10 lg:flex-row lg:gap-20 lg:px-12">
        {/* LEFT / SIDEBAR */}
        <aside className="flex flex-col gap-10 lg:sticky lg:top-0 lg:h-screen lg:w-[42%] lg:justify-between lg:py-10">
          {/* Hero */}
          <div>
            <p className="mb-4 text-sm font-medium tracking-[0.2em] text-[#C9A87C]">
              SOFTWARE ENGINEER
            </p>

            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Kelia Iradukunda
            </h1>

            <h2 className="mb-5 text-xl font-medium text-[#e8e0d4]">
              Full-Stack Engineer & AI/ML Trainee
            </h2>

            <p className="max-w-md text-base leading-relaxed text-[#a8a090]">
              Building reliable software systems with a growing focus on backend
              development, AI-powered applications, and practical engineering.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-4">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="group flex w-fit items-center gap-3 text-xs font-semibold tracking-[0.2em] text-[#a8a090] transition hover:text-[#f0ece4]"
              >
                <span className="h-px w-8 bg-[#a8a090] transition-all duration-300 group-hover:w-14 group-hover:bg-[#C9A87C]" />

                <span>{label}</span>
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            {socialIcons.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="text-xl text-[#a8a090] transition duration-300 hover:-translate-y-1 hover:text-[#C9A87C]"
              >
                {icon}
              </a>
            ))}
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <div className="flex w-full flex-col gap-24 pb-10 lg:w-[58%] lg:py-10">
          {/* ABOUT */}
          <section id="about" className="scroll-mt-10">
            <SectionHeading number="01" title="About" />

            <div className="max-w-2xl space-y-5 text-base leading-8 text-[#b8b0a0]">
              <p>
                I’m a Full-Stack Software Engineer with a stronger interest in
                backend development and AI systems. I enjoy building practical
                applications that combine reliable backend services, intuitive
                user interfaces, and increasingly, AI-powered capabilities.
              </p>

              <p>
                My backend work focuses on technologies such as{" "}
                <span className="font-medium text-[#C9A87C]">NestJS</span>,{" "}
                <span className="font-medium text-[#C9A87C]">Python</span>,{" "}
                <span className="font-medium text-[#C9A87C]">FastAPI</span>,
                databases, APIs, and system architecture. My frontend
                experience includes React, TypeScript, JavaScript, and Tailwind
                CSS.
              </p>

              <p>
                I am currently deepening my specialization in Artificial
                Intelligence and Machine Learning through a training program
                offered by MaibornWolff and The Gym. I enjoy understanding how
                systems work beyond simply making them function—from software
                architecture and data structures to APIs, AI applications, and
                retrieval-based systems.
              </p>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="scroll-mt-10">
            <SectionHeading number="02" title="Experience" />

            <div className="flex flex-col gap-5">
              {experienceDetails.map(
                ({ year, title, organization, description, skills }) => (
                  <article
                    key={`${title}-${organization}`}
                    className="group rounded-2xl border border-white/10 bg-[#243352] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C9A87C]/40 hover:bg-[#2a3a5e]"
                  >
                    <div className="mb-4 flex flex-col gap-1">
                      <p className="text-xs font-semibold tracking-wider text-[#C9A87C]">
                        {year}
                      </p>

                      <h3 className="text-xl font-semibold text-[#f0ece4]">
                        {title}
                      </h3>

                      <p className="text-sm text-[#a8a090]">{organization}</p>
                    </div>

                    <p className="mb-5 leading-7 text-[#b8b0a0]">
                      {description}
                    </p>

                    <SkillList skills={skills} />
                  </article>
                )
              )}
            </div>
          </section>

          {/* EDUCATION */}
          <section id="education" className="scroll-mt-10">
            <SectionHeading number="03" title="Education" />

            <div className="flex flex-col gap-5">
              {educationDetails.map(
                ({ year, title, institution, description, skills }) => (
                  <article
                    key={`${title}-${institution}`}
                    className="rounded-2xl border border-white/10 bg-[#243352] p-5 transition duration-300 hover:border-[#C9A87C]/40 hover:bg-[#2a3a5e]"
                  >
                    <p className="mb-3 text-xs font-semibold tracking-wider text-[#C9A87C]">
                      {year}
                    </p>

                    <h3 className="text-xl font-semibold text-[#f0ece4]">
                      {title}
                    </h3>

                    <p className="mb-4 mt-1 text-sm text-[#a8a090]">
                      {institution}
                    </p>

                    <p className="mb-5 leading-7 text-[#b8b0a0]">
                      {description}
                    </p>

                    <SkillList skills={skills} />
                  </article>
                )
              )}
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="scroll-mt-10">
            <SectionHeading number="04" title="Projects" />

            <p className="mb-8 max-w-2xl leading-7 text-[#b8b0a0]">
              A selection of projects covering full-stack software development
              and AI-powered applications.
            </p>

            {/* Project category buttons */}
            <div className="mb-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setActiveProjectCategory("software")}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 ${
                  activeProjectCategory === "software"
                    ? "bg-[#C0522A] text-[#f0ece4]"
                    : "border border-white/15 bg-white/[0.04] text-[#e8e0d4] hover:border-[#C9A87C]/50 hover:text-white"
                }`}
              >
                Software Development
              </button>

              <button
                type="button"
                onClick={() => setActiveProjectCategory("ai")}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 ${
                  activeProjectCategory === "ai"
                    ? "bg-[#C0522A] text-[#f0ece4]"
                    : "border border-white/15 bg-white/[0.04] text-[#e8e0d4] hover:border-[#C9A87C]/50 hover:text-white"
                }`}
              >
                AI & Machine Learning
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {displayedProjects.map(
                ({
                  img,
                  alt,
                  title,
                  description,
                  techstack,
                  githubUrl,
                  demoUrl,
                }) => (
                  <article
                    key={title}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-[#243352] transition duration-300 hover:border-[#C9A87C]/40 hover:bg-[#2a3a5e]"
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="h-52 w-full flex-shrink-0 overflow-hidden sm:h-auto sm:w-52">
                        <img
                          src={img}
                          alt={alt}
                          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="mb-3 text-xl font-semibold text-[#f0ece4]">
                          {title}
                        </h3>

                        <p className="mb-5 leading-7 text-[#b8b0a0]">
                          {description}
                        </p>

                        <div className="mb-6">
                          <SkillList skills={techstack} />
                        </div>

                        <div className="mt-auto flex flex-wrap gap-3">
                          {demoUrl && (
                            <a
                              href={demoUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="inline-flex items-center gap-2 rounded-lg bg-[#C0522A] px-4 py-2 text-sm font-semibold text-[#f0ece4] transition hover:bg-[#d4623a]"
                            >
                              Live Demo
                              <FaArrowUpRightFromSquare className="text-xs" />
                            </a>
                          )}

                          <a
                            href={githubUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-[#f0ece4] transition hover:border-[#C9A87C]/50 hover:text-[#C9A87C]"
                          >
                            <FaGithub />
                            View Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              )}
            </div>

            {/* CV */}
            <div className="mt-10">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-[#f7f2f8]"
              >
                <span className="border-b border-[#C9A87C] pb-1 transition group-hover:text-[#C9A87C]">
                  View full resume
                </span>

                <FaArrowUpRightFromSquare className="text-xs text-[#C9A87C]" />
              </a>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="scroll-mt-10">
            <Contact />
          </section>
        </div>
      </div>
    </main>
  );
};

type SectionHeadingProps = {
  number: string;
  title: string;
};

const SectionHeading = ({ number, title }: SectionHeadingProps) => {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="text-xs font-semibold tracking-[0.2em] text-[#C9A87C]">
        {number}
      </span>

      <div className="h-px w-10 bg-[#C9A87C]/50" />

      <h2 className="text-xl font-bold tracking-tight text-[#f0ece4]">
        {title}
      </h2>
    </div>
  );
};

const SkillList = ({ skills }: { skills: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-[#C9A87C]/20 bg-[#C9A87C]/10 px-3 py-1 text-xs font-medium text-[#C9A87C]"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default App;