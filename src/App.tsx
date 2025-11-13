import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Figma,
  Globe,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "tentang",
        "portofolio",
        "pengalaman",
        "kontak",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      const elements = document.querySelectorAll(".animate-on-scroll");
      const newVisibleElements = new Set(visibleElements);

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible && !newVisibleElements.has(element.id)) {
          newVisibleElements.add(element.id);
        }
      });

      setVisibleElements(newVisibleElements);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleElements]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "tentang", label: "Tentang" },
    { id: "portofolio", label: "Portofolio" },
    { id: "pengalaman", label: "Organisasi" },
    { id: "kontak", label: "Kontak" },
  ];

  const techStack = [
    "React",
    "TypeScript",
    "Next.js",
    "Vite.js",
    "Golang",
    "Laravel",
    "Motoko",
    "Solidity",
    "Flutter",
    "Tailwind CSS",
  ];

  const projects = [
    {
      image: "pemira.png",
      title: "E-Voting Platform for University Student Election",
      description:
        "Merancang dan mengimplementasikan platform web menggunakan Next.js dan ASP.NET untuk memfasilitasi pemilihan badan mahasiswa (BEM, MPM, dan organisasi kemahasiswaan).",
      role: "Frontend Developer",
      tools: ["Figma", "Next.js", "ASP.NET"],
      process:
        "Fokus pada pembuatan antarmuka pengguna yang intuitif dan sistem backend yang aman untuk memastikan integritas data pemilihan.",
      figmaLink:
        "https://www.figma.com/design/OEgxWLxnL8E5lDahEhdZdI/PEMIRA-WEB--Copy-?node-id=0-1&t=4sjJhWvmhYOpIxNG-1",
      repoLink: "",
      webLink: "",
    },
    {
      image: "siaga-bunda.jpg",
      title: "Siaga Bunda - Web for Pregnancy Assistant",
      description:
        "Mengembangkan aplikasi web berbasis PHP untuk memberikan dukungan digital bagi program pendampingan ibu di Posyandu.",
      role: "Fullstack Developer",
      tools: ["Figma", "PHP native", "MySQL"],
      process:
        "Mengimplementasikan aplikasi web di lokasi Posyandu sebagai bagian dari inisiatif pengabdian kepada masyarakat.",
      figmaLink:
        "https://www.figma.com/design/E18gAeEUKBNt2MoZ8iAB8X/siaga-bunda?node-id=800-165&t=UFL3Z1WPcwGMXdZx-1",
      repoLink: "https://github.com/SIAGA-BUNDA/siaga-bunda-mysql",
      webLink: "https://siaga-bunda.my.id/",
    },
    {
      image: "expasign.png",
      title: "Expasign - Competition & Seminar Management Website",
      description:
        "Mengembangkan situs web responsif berbasis vitejs dan laravel (api backend) untuk mengelola pendaftaran kompetisi, pembayaran pendaftaran, dan pendaftaran seminar untuk acara nasional yang diselenggarakan oleh UKM Mars Project Politeknik Negeri Jakarta.",
      role: "Fullstack Developer",
      tools: ["Figma", "Laravel", "ReactJs (Vite)"],
      process:
        "Menerapkan strategi SEO dan penanganan konten dinamis untuk meningkatkan visibilitas, menyederhanakan pengalaman pengguna, dan meningkatkan keterlibatan mahasiswa di seluruh universitas.",
      figmaLink: "",
      repoLink: "https://github.com/imxey/expasign-react",
      webLink: "https://expasign-edutime.site/",
    },
    {
      image: "splitBill.png",
      title: "Poolit - Blockchain-based Split Bill App",
      description:
        "Sebuah aplikasi web untuk patungan bayar (split bill) yang dibangun di atas teknologi blockchain untuk transparansi dan keamanan.",
      role: "Fullstack Developer",
      tools: ["Figma", "Vite", "Motoko"],
      process:
        "Bertanggung jawab pada keseluruhan pengembangan, mulai dari merancang antarmuka pengguna yang interaktif dengan Vite hingga membangun logika backend dan smart contract-nya menggunakan Motoko.",
      figmaLink:
        "https://www.figma.com/design/lbKHxslpTsmx8sIXBEiCKq/Poolit?node-id=0-1&t=qO6BZ8QCz0bfgOWl-1",
      repoLink: "https://github.com/WEBELS-MATE/poolit",
      webLink: "",
    },
  ];

  const experiences = [
    {
      title: "Staff Departemen Advokasi",
      organization: "Badan Eksekutif Mahasiswa (BEM)",
      period: "Jan 2025 - Sekarang",
      description:
        "Menjadi penghubung antara pihak direktorat kampus dan mahasiswa dalam penyebaran informasi. Aktif terlibat dalam perencanaan strategi advokasi serta koordinasi rapat antara pihak kampus dan mahasiswa.",
    },
    {
      title: "Wakil Kepala Departemen Riset",
      organization: "Mapres dan Research Project",
      period: "Jan 2024 - Sekarang",
      description:
        "Bertanggung jawab mengkoordinasi staff departemen riset. Berhasil memperoleh pendanaan sebesar Rp32.000.000 melalui Program Ormawa Membangun Negeri untuk pengembangan sistem monitoring keramba ikan berbasis IoT. Mendampingi Kepala Departemen dalam memimpin anggota, serta menginisiasi dan mengelola berbagai program riset.",
    },
    {
      title: "Staff Sosial Mahasiswa",
      organization: "Himpunan Mahasiswa TIK",
      period: "2023 - 2024",
      description:
        "Menjadi penghubung antara jurusan dan mahasiswa dalam penyebaran informasi serta advokasi di tingkat jurusan. Terlibat aktif dalam kegiatan pengabdian kepada masyarakat bersama tim Himpunan.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#111827] text-white min-h-screen overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Portfolio</div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 hover:text-gray-300 ${
                  activeSection === item.id ? "text-white" : "text-gray-400"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
                )}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 hover:bg-gray-800/50 transition-colors ${
                  activeSection === item.id
                    ? "text-white bg-gray-800/30"
                    : "text-gray-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div
            id="home-left"
            className={`animate-on-scroll lg:ml-8 transform transition-all duration-1000 ${
              visibleElements.has("home-left")
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
              <h1 className="text-5xl text-center md:text-left md:text-7xl font-bold mb-6 text-white">
                Full Stack Developer
              </h1>
            <div className="text-center md:text-justify">
              <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                Halo! Saya Xeyla Vithra Arfhina, mahasiswa Teknik Informatika
                semester 5 di Politeknik Negeri Jakarta dengan IPK 3.68. Saya
                sangat antusias untuk belajar dan bertumbuh, khususnya di bidang
                pengembangan web.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Dengan keahlian dalam teknologi seperti PHP, React JS, AJAX, dan
                Laravel, saya mampu bekerja secara teliti, sistematis, dan
                kolaboratif dalam tim. Saya berkomitmen untuk menciptakan solusi
                digital yang efektif dan dapat memberikan wawasan berharga bagi
                organisasi.
              </p>
            </div>

            <button
              onClick={() => scrollToSection("portofolio")}
              className="bg-white w-full md:w-1/3 text-black hover:bg-gray-200 px-10 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Portofolio
              <ChevronDown className="inline ml-2 w-5 h-5" />
            </button>
            <a
              target="blank"
              href="https://drive.google.com/file/d/1O6XQ9rqwPmKH4xbQV3RqZqhx0OEmuvnO/view?usp=sharing"
            >
              <button className="bg-white w-full md:w-1/3 text-black hover:bg-gray-200 mt-8 lg:ml-8 px-15 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Lihat CV
              </button>
            </a>
          </div>

          <div
            id="home-right"
            className={`animate-on-scroll transform transition-all duration-1000 delay-300 ${
              visibleElements.has("home-right")
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-white p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <img
                      src="xeyla.png"
                      alt="Profile Photo"
                      className="w-72 h-72 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tentang" className="py-20">
        <div className="container mx-auto px-4">
          <h2
            id="tentang-title"
            className={`animate-on-scroll text-4xl md:text-5xl font-bold text-center mb-16 text-white transform transition-all duration-1000 ${
              visibleElements.has("tentang-title")
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            Tentang Saya
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div
              id="tentang-left"
              className={`animate-on-scroll space-y-8 transform transition-all duration-1000 delay-200 ${
                visibleElements.has("tentang-left")
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">
                  🎓 Latar Belakang Pendidikan
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Politeknik Negeri Jakarta
                    </h4>
                    <p className="text-gray-300">D4 Teknik Informatika</p>
                    <p className="text-gray-400 text-sm text-justify mt-2">
                      Fokus pada praktik Software Development, Artificial
                      Intelligence, dan Data Science
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      SMAN 5 Kabupaten Tangerang
                    </h4>
                    <p className="text-gray-300">SMA • 2020 - 2023</p>
                    <p className="text-gray-400 text-sm mt-2">
                      Jurusan Matematika dan Ilmu Pengetahuan Alam (MIPA)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="tentang-right"
              className={`animate-on-scroll transform transition-all duration-1000 delay-400 ${
                visibleElements.has("tentang-right")
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">
                  💻 Tech Stack
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {techStack.map((tech, index) => (
                    <div
                      key={tech}
                      className="bg-gray-800 rounded-lg px-4 py-2 text-center border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="text-sm font-medium text-gray-200">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portofolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2
            id="portofolio-title"
            className={`animate-on-scroll text-4xl md:text-5xl font-bold text-center mb-16 text-white transform transition-all duration-1000 ${
              visibleElements.has("portofolio-title")
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            Portofolio
          </h2>

          <div className="grid md:grid-cols-2  lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                id={`project-${index}`}
                className={`animate-on-scroll group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between
          ${
            visibleElements.has(`project-${index}`)
              ? "translate-x-0 opacity-100"
              : index % 2 === 0
              ? "-translate-x-20 opacity-0"
              : "translate-x-20 opacity-0"
          }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm text-justify leading-relaxed">
                      {project.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">
                        PERAN:
                      </h4>
                      <p className="text-gray-300 text-sm">{project.role}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">
                        TOOLS:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-200 border border-gray-700"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">
                        PROSES:
                      </h4>
                      <p className="text-gray-400 text-xs text-justify leading-relaxed">
                        {project.process}
                      </p>
                    </div>
                  </div>
                </div>

                {/* DROPDOWN BUTTON */}
                <div className="relative p-6 pt-0">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Lihat Project <ChevronDown size={16} />
                  </button>

                  {openIndex === index && (
                    <div className="mt-2 mb-10  bg-gray-800 rounded-lg shadow-lg overflow-hidden z-10 relative">
                      <ul className="flex flex-col text-sm text-white">
                        {project.figmaLink && (
                          <li>
                            <a
                              href={project.figmaLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setOpenIndex(null)}
                              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700"
                            >
                              <Figma size={16} /> Figma
                            </a>
                          </li>
                        )}
                        {project.repoLink && (
                          <li>
                            <a
                              href={project.repoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setOpenIndex(null)}
                              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700"
                            >
                              <Github size={16} /> Repository
                            </a>
                          </li>
                        )}
                        {project.webLink && (
                          <li>
                            <a
                              href={project.webLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setOpenIndex(null)}
                              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700"
                            >
                              <Globe size={16} /> Website
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pengalaman" className="py-20">
        <div className="container mx-auto px-4">
          <h2
            id="pengalaman-title"
            className={`animate-on-scroll text-4xl md:text-5xl font-bold text-center mb-16 text-white transform transition-all duration-1000 ${
              visibleElements.has("pengalaman-title")
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            Pengalaman Organisasi
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  id={`experience-${index}`}
                  className={`animate-on-scroll relative flex items-start mb-12 group transform transition-all duration-1000 ${
                    visibleElements.has(`experience-${index}`)
                      ? "translate-x-0 opacity-100"
                      : index % 2 === 0
                      ? "-translate-x-20 opacity-0"
                      : "translate-x-20 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="absolute left-6 w-4 h-4 bg-white rounded-full border-4 border-black"></div>

                  <div className="ml-20">
                    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">
                          {exp.title}
                        </h3>
                        <span className="text-gray-400 font-medium text-sm bg-gray-800 px-3 py-1 rounded-full mt-2 md:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <h4 className="text-white font-semibold mb-3">
                        {exp.organization}
                      </h4>
                      <p className="text-gray-300 text-justify leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kontak" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2
            id="kontak-title"
            className={`animate-on-scroll text-4xl md:text-5xl font-bold mb-8 text-white transform transition-all duration-1000 ${
              visibleElements.has("kontak-title")
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            Hubungi Saya
          </h2>
          <p
            id="kontak-subtitle"
            className={`animate-on-scroll text-xl text-gray-300 mb-12 max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${
              visibleElements.has("kontak-subtitle")
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            Untuk kerja sama maupun diskusi proyek lebih
            lanjut, silakan hubungi kontak dibawah.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "xeyla.vithra.arfhina.tik23@stu.pnj.ac.id",
              },
              { icon: Phone, title: "Telepon", value: "+62 851-8352-0848" },
              { icon: MapPin, title: "Lokasi", value: "Tangerang, Indonesia" },
            ].map((contact, index) => (
              <div
                key={index}
                id={`contact-${index}`}
                className={`animate-on-scroll bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:-translate-y-2 ${
                  visibleElements.has(`contact-${index}`)
                    ? "translate-x-0 opacity-100"
                    : index % 2 === 0
                    ? "-translate-x-20 opacity-0"
                    : "translate-x-20 opacity-0"
                }`}
                style={{ transitionDelay: `${10 + index * 100}ms` }}
              >
                <contact.icon className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {contact.title}
                </h3>
                <p className="text-xs text-center text-gray-400">
                  {contact.value}
                </p>
              </div>
            ))}
          </div>

          <div
            id="social-links"
            className={`animate-on-scroll mt-12 flex justify-center gap-6 transform transition-all duration-1000 delay-100 ${
              visibleElements.has("social-links")
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <a href="https://github.com/imxey">
              <button className="bg-gray-800 hover:bg-white hover:text-black p-4 rounded-full transition-all duration-300 transform hover:scale-110">
                <Github className="w-6 h-6" />
              </button>
            </a>
            <a href="mailto:xeyla.vithra.arfhina.tik23@stu.pnj.ac.id">
              <button className="bg-gray-800 hover:bg-white hover:text-black p-4 rounded-full transition-all duration-300 transform hover:scale-110">
                <Mail className="w-6 h-6" />
              </button>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-gray-800 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Portfolio Xeyla Vithra Arfhina</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
