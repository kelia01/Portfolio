import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import CursorLight from "./components/CursorLight";

const App = () => {
  const socialIcons = [
    {
      href: "https://github.com/kelia01",
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      href: "https://discord.com/channels/@me/1305914087233949759",
      icon: <FaDiscord className="w-5 h-5" />,
    },
    {
      href: "https://www.linkedin.com/in/iradukundakelia/",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      href: "https://www.instagram.com/sk_elia/",
      icon: <FaInstagram className="w-5 h-5" />,
    },
  ];

  const experienceDetails = [
    {
      year: "2024 - PRESENT",
      Title: "Software Trainee, The Gym",
      description:
        "Software development trainee with hands on real-life projects",
      skills: ["Javascript", "TypeScript", "React", "Agile methodologies"],
    },

    {
      year: "2024 - PRESENT",
      Title: "Software Engineering, AUCA 2nd-year Student",
      description: "Software student in 2nd year skilled in sql mostly oracle.",
      skills: ["SQL", "C", "Statistics", "Github"],
    },

    {
      year: "APRIL - AUGUST 2025",
      Title: "Software Development Coach, The Gym - Gap year",
      description:
        "Coach for gap-year students helping them to gain experiences",
      skills: ["Javascript", "React", "HTML", "CSS"],
    },

    {
      year: "2020 - 2023",
      Title: "Computer Science student, Byimana School of Sciences",
      description: "3-years experience with people in the same field",
      skills: ["Java", "C++", "HTML", "Visual"],
    },
  ];

  const projectDetails = [
    {
      img: "./public/agri.png",
      alt: "agri platform image",
      title: "Agriculture Management Platform",
      description:
        "Smart farming solution with crop monitoring and yield prediction features.",
      techstack: ["Nextjs", "Tailwind"],
    },

    {
      img: "./public/dutch.png",
      alt: "bauimester platform image",
      title: "Bauimeister Website",
      description:
        "Berlin-based construction company website with modern design and responsive layout.",
      techstack: ["HTML", "Tailwindcss", "Javascript"],
    },

    {
      img: "./public/game.png",
      alt: "gaming platform image",
      title: "LugX Gaming Platform",
      description:
        "Interactive gaming website with dynamic content and engaging user interface.",
      techstack: ["HTML", "Tailwindcss", "Javascript"],
    },

    {
      img: "./public/uni.png",
      alt: "penny uni platform image",
      title: "University Website",
      description:
        "Comprehensive university platform with an eye-catching design",
      techstack: ["HTML", "Tailwind"],
    },
  ];

  return (
    <div className=" font-[sans-serif] relative bg-[#37055a] flex items-center justify-center">
      <CursorLight />
      <div className="flex p-10 w-full">
        <div className="flex flex-col gap-10 w-full lg:sticky lg:top-0 lg:h-screen justify-evenly">
          <div className="text-green-100">
            <h2 className="text-3xl mb-3 font-bold">Kelia Iradukunda</h2>
            <h3 className="text-2xl mb-4 font-semibold">Full Stack Engineer</h3>
            <p className="font-light text-base">
              I build responsive and eye-catching designs for websites
            </p>
          </div>
          <div className="flex flex-col gap-2 text-green-100">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-green-100"></span>
              <p className="text-base">ABOUT</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-green-100"></span>
              <p className="text-base">EXPERIENCE</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-green-100"></span>
              <p className="text-base">PROJECTS</p>
            </div>
          </div>
          <div className="flex flex-row gap-3 text-green-100">
            {socialIcons.map(({ href, icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="transition"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-12 overflow-y-auto">
          <div className="">
            <p className="text-green-100 max-w-xl text-base leading-relaxed">
              I’m a developer passionate about crafting accessible,
              pixel-perfect user interfaces that blend thoughtful design with
              robust engineering. My favorite work lies at the intersection of
              design and development, creating experiences that not only look
              great but are meticulously built for performance and usability.
              <br />
              Currently, I'm a Senior Front-End Engineer at Klaviyo,
              specializing in accessibility. I contribute to the creation and
              maintenance of UI components that power Klaviyo’s frontend,
              ensuring our platform meets web accessibility standards and best
              practices to deliver an inclusive user experience.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-green-100">
            {experienceDetails.map(
              ({ year, Title, description, skills }, idx) => (
                <div key={idx} className="flex gap-3 p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-md border border-white/20
">
                  <div>
                    <p className="font-light text-base text-green-50">{year}</p>
                  </div>
                  <div className="p-2">
                    <h4 className="font-semibold text-green-200 text-xl mb-2">
                      {Title}
                    </h4>
                    <p className="text-[16px] leading-relaxed mb-2 text-base">
                      {description}
                    </p>
                    <div className="flex gap-1.5">
                      {skills.map((skill, i) => (
                        <div key={i} className="rounded-xl p-1 bg-amber-100/20 backdrop-blur-md shadow">
                          <p className="text-amber-300 text-base">{skill}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
            <a href="https://docs.google.com/document/d/1P_3yd3WE8X4SGxZKrKgrRr1gpx4ABflcxzILprLughA/edit?tab=t.0">
              <p className="font-semibold text-base text-green-100">View full resume</p>
            </a>
          </div>
          <div className="flex flex-col gap-12">
            {projectDetails.map(
              ({ img, title, alt, description, techstack }, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-md border border-white/20">
                  <div>
                    <img src={img} alt={alt} className="h-20 w-20" />
                  </div>
                  <div className="">
                    <h3 className="font-semibold text-green-200 text-2xl mb-2">
                      {title}
                    </h3>
                    <p className="text-[16px] leading-relaxed mb-2 text-green-100 text-base">{description}</p>
                    <div className="flex gap-1.5">
                      {techstack.map((tech, i) => (
                        <div key={i} className="rounded-xl px-4 py-0.5 bg-amber-100/20 backdrop-blur-md">
                          <p className="text-amber-300 text-base">{tech}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="">
            <h2 className="font-[Lora] text-3xl text-green-200 font-bold mb-4">Get In Touch</h2>
            <div className="w-30 h-[2px] bg-amber-300 text-amber-300"></div>
            <p className="text-green-200 mt-5 font-semibold text-base">Have a sweet project in mind or just saying hello! <br /> Feel free to send a message!</p>
            <div className="flex flex-col space-y-4 text-green-200 font-bold text-lg mt-7">
              <label htmlFor="name" className="">NAME</label>
              <input type="text" name="name" className="rounded bg-gray-100 opacity-30 text-white w-96 py-1"/>
              <label htmlFor="email" className="">EMAIL</label>
              <input type="text" name="name" placeholder="Enter your name" className="rounded bg-amber-500 opacity-30 text-white w-96 py-1"/>
              <label htmlFor="subject" className="">SUBJECT</label>
              <input type="text" name="name" placeholder="Enter your name"/>
              <label htmlFor="message" className="">MESSAGE</label>
              <input type="text" name="name" placeholder="Enter your name"/>
            </div>
            <button className="border-1 border-amber-300 text-amber-300 font-bold text-lg p-2 mt-6 hover:bg-amber-300/80 hover:text-purple-900">SEND MESSAGE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
