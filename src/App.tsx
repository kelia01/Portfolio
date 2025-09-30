
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const App = () => {
  return (
    <div className="font-[sans-serif] relative bg-[#37055a] flex items-center justify-center">
      <div className="flex p-10 w-full">
        <div className="flex flex-col gap-10 w-full">
          <div className="text-green-100">
            <h2 className="text-3xl mb-3 font-bold">Kelia Iradukunda</h2>
            <h3 className="text-2xl mb-4 font-semibold">Full Stack Engineer</h3>
            <p className="font-light">
              I build responsive and eye-catching designs for websites
            </p>
          </div>
          <div className="flex flex-col gap-2">

            <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-green-100"></span>
            <p>ABOUT</p>
            </div>
            <span className="w-10 h-1 text-green-100">-</span>
            <p>EXPERIENCE</p>
            <span className="w-10 h-1 text-green-100">-</span>
            <p>PROJECTS</p>
          </div>
          <div className="flex flex-row gap-2">
            <a href="https://github.com/kelia01">
            <FaGithub className="w-5 h-5 text-green-100 hover:text-green-300" />
            </a>
            <a href="https://discord.com/channels/@me/1305914087233949759">
            <FaDiscord className="w-5 h-5 text-green-100 hover:text-green-300" />
            </a>
            <a href="https://www.linkedin.com/in/iradukundakelia/">
            <FaLinkedin className="w-5 h-5 text-green-100 hover:text-green-300" />
            </a>
            <a href="https://www.instagram.com/sk_elia/">
            <FaInstagram className="w-5 h-5 text-green-100 hover:text-green-300" />
            </a>
          </div>
        </div>
        <div className="w-full">
          <div className="">
          <p className="text-green-100 max-w-xl">
            I’m a developer passionate about crafting accessible, pixel-perfect
            user interfaces that blend thoughtful design with robust
            engineering. My favorite work lies at the intersection of design and
            development, creating experiences that not only look great but are
            meticulously built for performance and usability.
            <br />
            
            Currently, I'm a
            Senior Front-End Engineer at Klaviyo, specializing in accessibility.
            I contribute to the creation and maintenance of UI components that
            power Klaviyo’s frontend, ensuring our platform meets web
            accessibility standards and best practices to deliver an inclusive
            user experience.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
