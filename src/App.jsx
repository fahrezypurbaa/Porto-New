import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import AOS from "aos";
// import ChatRoom from "./components/ChatRoom";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      // Ambil path tanpa hash
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#050505", "#111111", "#5E4128"]}
          blend={0.35}
          amplitude={0.7}
          speed={0.25}
        />
      </div>
      <main className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className=" hero grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-20 pt-14 min-h-[85vh]">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex flex-wrap gap-4 items-center mb-6 bg bg-[#111111] border border-[#C68B59]/20 backdrop-blur-md w-fit p-4 rounded-2xl">
              <img src="./assets/fahrezy.jpeg" className="w-10 rounded-md" />
              <q>Turning ideas into scalable web solutions.</q>
            </div>
            <h1 className="mb-8 whitespace-nowrap">
              <ShinyText
                text="Fahrezy Purba"
                disabled={false}
                speed={3}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#E7C29B]"
              />
            </h1>
            <BlurText
              text="Fullstack Web Developer specializing in Laravel, PHP, MySQL, and modern web technologies. Passionate about building business systems, company websites, and digital solutions that create real impact."
              delay={150}
              animateBy="words"
              direction="top"
              className="max-w-xl text-lg leading-8 text-zinc-300 mb-8"
            />
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="./assets/CV.pdf"
                download="Fahrezy_A_D_Romero_Purba_CV.pdf"
                className="font-semibold bg-[#111111] p-4 px-6 rounded-full border border-[#C68B59]/30 hover:border-[#D4A373] hover:shadow-[0_0_25px_rgba(198,139,89,0.25)] hover:bg-[#222] transition-colors"
              >
                <ShinyText
                  text="Download CV"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>

              <a
                href="#project"
                className="font-semibold bg-[#111111] p-4 px-6 rounded-full border border-[#C68B59]/30 hover:border-[#D4A373] hover:shadow-[0_0_25px_rgba(198,139,89,0.25)] hover:bg-[#222] transition-colors"
              >
                <ShinyText
                  text="Explore My Projects"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Fahrezy Purba"
              title="Web Developer"
              handle="fahrezy"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/fahrezy1.jpeg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() =>
                window.open(
                  "https://wa.me/6281268044470?text=Hi%20Fahrezy,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
                  "_blank",
                )
              }
            />
          </div>
        </div>
        {/* tentang */}
        <div
          className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-[#C68B59]/40 shadow-[0_0_50px_rgba(212,163,115,0.25)] bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#1B1713] p-6"
          id="about"
        >
          <div
            className="flex flex-col lg:flex-row items-center gap-14 pt-0 px-6 lg:px-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-[#C68B59]/30">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="I am a Fullstack Web Developer with experience developing internal business systems and company websites using Laravel, MySQL, and JavaScript. I have worked on dashboard development, reporting systems, prospect management, and website optimization to support business operations."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="grid grid-cols-3 gap-10 mt-8">
                  <div className="flex flex-col items-start">
                    <h2 className="text-3xl font-bold leading-none">
                      4<span className="text-[#C68B59]">+</span>
                    </h2>
                    <span className="mt-3 text-base text-zinc-300">
                      Project Finished
                    </span>
                  </div>

                  <div className="flex flex-col items-start">
                    <h2 className="text-3xl font-bold leading-none">
                      1<span className="text-[#C68B59]">+</span>
                    </h2>
                    <span className="mt-3 text-base text-zinc-300">
                      Years of Experience
                    </span>
                  </div>

                  <div className="flex flex-col items-start">
                    <h2 className="text-3xl font-bold leading-none">
                      3.66<span className="text-[#C68B59]">/4.00</span>
                    </h2>
                    <span className="mt-3 text-base text-zinc-300">GPA</span>
                  </div>
                </div>

                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-[#D4A373]"
                />
              </div>
            </div>

            {/* Kolom kanan */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>
        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools & Technologies
          </h1>
          <p
            className="max-w-xl text-base leading-8 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            My Profesional Skills
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-[#C68B59]/20 hover:border-[#C68B59]/40 rounded-xl bg-[#111111]/80 backdrop-blur-md hover:bg-[#141414]/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-[#141414] p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* tentang */}

        {/* Proyek */}
        <div
          className="proyek mt-32 py-10"
          id="project"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        ></div>
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Project
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Showcasing a selection of projects that reflect my skills, creativity,
          and passion for building meaningful digital experiences.
        </p>
        <div className="kontak mt-24 lg:mt-32 px-4" id="contact">
          <div className="proyek-box mt-14 max-w-[1200px] mx-auto">
            <div
              style={{ height: "auto", position: "relative" }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <ChromaGrid
                items={listProyek}
                onItemClick={handleProjectClick} // Kirim fungsi untuk handle klik
                radius={500}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          </div>
        </div>
        {/* Proyek */}

        {/* Contact */}
        <div
          className="kontak mt-24 lg:mt-32 px-4 sm:px-6 lg:px-0"
          id="contact"
        >
          {/* Heading */}
          <div className="text-center mb-16">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Let's Work Together
            </h1>

            <p
              className="max-w-2xl mx-auto mt-5 text-base leading-8 text-zinc-400"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="true"
            >
              Whether you have a project, collaboration, or job opportunity,
              feel free to reach out. I'll get back to you as soon as possible.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left Card */}
            <div
              className="rounded-2xl bg-[#141414] border border-[#C68B59]/20 p-8 lg:p-10 h-full"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <span className="text-[#C68B59] uppercase tracking-[3px] text-sm font-semibold">
                CONTACT
              </span>

              <h2 className="text-3xl font-bold mt-4">Get In Touch</h2>

              <p className="text-zinc-400 leading-8 mt-6">
                I'm always open to discussing new projects, creative ideas,
                freelance work, or full-time opportunities. Let's build
                something meaningful together.
              </p>

              <div className="mt-10 space-y-7">
                <div>
                  <p className="text-[#C68B59] text-sm uppercase tracking-wider">
                    Email
                  </p>

                  <a
                    href="mailto:fahrezyromeropurba@gmail.com"
                    className="mt-1 inline-block hover:text-[#D4A373] transition-all duration-300 hover:translate-x-1"
                  >
                    fahrezyromeropurba@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-[#C68B59] text-sm uppercase tracking-wider">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/6281268044470?text=Hi%20Fahrezy,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block hover:text-[#D4A373] transition-all duration-300 hover:translate-x-1"
                  >
                    +62 812-6804-4470
                  </a>
                </div>

                <div>
                  <p className="text-[#C68B59] text-sm uppercase tracking-wider">
                    Location
                  </p>
                  <p className="mt-1">Yogyakarta, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              action="https://formsubmit.co/fahrezyromeropurba@gmail.com"
              method="POST"
              autoComplete="off"
              className="rounded-2xl bg-[#141414] border border-[#C68B59]/20 p-8 lg:p-10"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="flex flex-col gap-6">
                <div>
                  <label className="block mb-2 font-medium">Full Name</label>

                  <input
                    type="text"
                    name="Name"
                    placeholder="John Doe"
                    required
                    className="w-full rounded-lg border border-[#C68B59]/20 bg-[#1A1A1A] px-4 py-3 outline-none transition-all duration-300 focus:border-[#D4A373] focus:ring-1 focus:ring-[#D4A373]"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Email</label>

                  <input
                    type="email"
                    name="Email"
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-lg border border-[#C68B59]/20 bg-[#1A1A1A] px-4 py-3 outline-none transition-all duration-300 focus:border-[#D4A373] focus:ring-1 focus:ring-[#D4A373]"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Message</label>

                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project..."
                    required
                    className="w-full rounded-lg border border-[#C68B59]/20 bg-[#1A1A1A] px-4 py-3 outline-none resize-none transition-all duration-300 focus:border-[#D4A373] focus:ring-1 focus:ring-[#D4A373]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-full border border-[#C68B59]/30 bg-[#111111] py-4 transition-all duration-300 hover:scale-[1.02] hover:border-[#D4A373] hover:shadow-[0_0_25px_rgba(198,139,89,0.25)] active:scale-95"
                >
                  <ShinyText text="Send Message" speed={3} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}

export default App;
