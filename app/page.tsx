"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { Github, Linkedin, Twitter, ExternalLink, Send, Mail, MapPin, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-gray-100">
      <Header />
      <main>
        <HeroSection />
        <WaveDivider />
        <AboutSection />
        <AngleDivider />
        <SkillsSection />
        <WaveDivider flip />
        <ProjectsSection />
        <AngleDivider flip />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">Priyanshu</span>
          <span className="text-white"> Raj</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link
            href="#about"
            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#skills"
            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
          >
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
        <a
  href="/Priyanshu_Raj_CV.pdf"
  download
  className="hidden md:flex items-center justify-center px-4 py-2 text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-700 hover:to-cyan-600 text-white border-0 shadow-lg shadow-violet-700/20 hover:shadow-violet-700/40 transition-all duration-300 rounded-md"
>
  Resume
</a>

<Button
  variant="ghost"
  size="icon"
  className="md:hidden text-gray-300 hover:text-white hover:bg-gray-800"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
</Button>

      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <div className="inline-block">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-violet-500/10 to-cyan-400/10 border border-violet-500/20 rounded-full text-cyan-400"
            >
              Full Stack Developer
            </motion.span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none">
            Hi, I'm 
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent"> Priyanshu</span>
          </h1>
          <h2 className="text-2xl font-medium text-gray-400 sm:text-3xl">Crafting digital experiences</h2>
          <p className="max-w-[600px] text-gray-400 md:text-xl">
            I build accessible, responsive, and performant web applications with modern technologies that solve
            real-world problems.
          </p>
          <div className="flex gap-4 mt-4">
            <Button className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-700 hover:to-cyan-600 text-white border-0 shadow-lg shadow-violet-700/20 hover:shadow-violet-700/40 transition-all duration-300 group">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="border-gray-700 text-gray-300 hover:text-white hover:border-violet-500 hover:bg-gray-800/50 transition-all duration-300"
            >
              View projects
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-violet-500/50 p-1">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src="me.jpeg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/20 to-cyan-500/20"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden ${flip ? "rotate-180" : ""}`}>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-16 sm:h-24 fill-current text-gray-900"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
        />
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
        />
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
      </svg>
    </div>
  )
}

function AngleDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden ${flip ? "rotate-180" : ""}`}>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-16 sm:h-24 fill-current text-gray-900"
      >
        <path d="M1200 120L0 16.48V0h1200v120z" />
      </svg>
    </div>
  )
}

function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section id="about" className="py-24 sm:py-32 bg-gray-900">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col items-center text-center mb-12"
        >
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mb-8"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
            initial="hidden"
            animate={controls}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">My Journey</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience building web applications. My
              journey in tech started when I built my first website at 15, and I've been hooked ever since.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I specialize in React, Next.js, and Node.js, with a strong focus on creating accessible, performant, and
              user-friendly applications. I believe in writing clean, maintainable code and staying up-to-date with the
              latest technologies and best practices.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { title: "1+", subtitle: "Years Experience", icon: "code" },
              { title: "10+", subtitle: "Projects Completed", icon: "layout" },
              { title: "5+", subtitle: "Skills", icon: "users" },
              { title: "∞", subtitle: "Cups of Coffee", icon: "coffee" },
            ].map((item, index) => (
              <motion.div
                key={item.subtitle}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(76, 29, 149, 0.1), 0 10px 10px -5px rgba(76, 29, 149, 0.04)",
                }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center p-6 rounded-xl backdrop-blur-md bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 shadow-xl"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center mb-4 border border-violet-500/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cyan-400"
                  >
                    {item.icon === "code" && (
                      <>
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </>
                    )}
                    {item.icon === "layout" && (
                      <>
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <line x1="3" x2="21" y1="9" y2="9" />
                        <line x1="9" x2="9" y1="21" y2="9" />
                      </>
                    )}
                    {item.icon === "users" && (
                      <>
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </>
                    )}
                    {item.icon === "coffee" && (
                      <>
                        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                        <line x1="6" x2="6" y1="2" y2="4" />
                        <line x1="10" x2="10" y1="2" y2="4" />
                        <line x1="14" x2="14" y1="2" y2="4" />
                      </>
                    )}
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                <p className="text-sm text-gray-400 text-center">{item.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Tailwind CSS", level: 95 },
    { name: "GraphQL", level: 70 },
  ]

  return (
    <section id="skills" className="py-24 sm:py-32 bg-black">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent"
          >
            My Skills
          </motion.h2>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mb-8"
          />
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="max-w-[600px] text-gray-400"
          >
            I've worked with a variety of technologies in the web development world. Here are my main areas of
            expertise:
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1 * index, duration: 0.5 },
                  },
                }}
                className="space-y-2"
              >
                <div className="flex justify-between">
                  <h3 className="font-medium text-white">{skill.name}</h3>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 * index, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { name: "HTML/CSS", icon: "code" },
              { name: "JavaScript", icon: "braces" },
              { name: "UI/UX Design", icon: "layout" },
              { name: "Responsive Design", icon: "smartphone" },
              { name: "API Integration", icon: "plug" },
              { name: "Git/GitHub", icon: "git-branch" },
              { name: "Testing", icon: "check-circle" },
              { name: "Performance", icon: "zap" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 0.05 * index, duration: 0.3 },
                  },
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 0 25px rgba(139, 92, 246, 0.3)",
                  borderColor: "rgba(139, 92, 246, 0.5)",
                }}
                className="flex flex-col items-center p-6 rounded-xl backdrop-blur-md bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center mb-4 border border-violet-500/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cyan-400"
                  >
                    {skill.icon === "code" && (
                      <>
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </>
                    )}
                    {skill.icon === "braces" && (
                      <>
                        <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
                        <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1" />
                      </>
                    )}
                    {skill.icon === "layout" && (
                      <>
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <line x1="3" x2="21" y1="9" y2="9" />
                        <line x1="9" x2="9" y1="21" y2="9" />
                      </>
                    )}
                    {skill.icon === "smartphone" && (
                      <>
                        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                        <line x1="12" x2="12.01" y1="18" y2="18" />
                      </>
                    )}
                    {skill.icon === "plug" && (
                      <>
                        <path d="M12 22v-5" />
                        <path d="M9 7V2" />
                        <path d="M15 7V2" />
                        <path d="M6 13V8h12v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4Z" />
                      </>
                    )}
                    {skill.icon === "git-branch" && (
                      <>
                        <line x1="6" x2="6" y1="3" y2="15" />
                        <circle cx="18" cy="6" r="3" />
                        <circle cx="6" cy="18" r="3" />
                        <path d="M18 9a9 9 0 0 1-9 9" />
                      </>
                    )}
                    {skill.icon === "check-circle" && (
                      <>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </>
                    )}
                    {skill.icon === "zap" && (
                      <>
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </>
                    )}
                  </svg>
                </div>
                <h4 className="font-medium text-white text-center">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const projects = [
    {
      title: "StudyNotion",
      description: "A fully functional EdTech platform like Udemy.",
      image: "https://img.freepik.com/free-psd/flat-design-education-template_23-2150251293.jpg?t=st=1746031859~exp=1746035459~hmac=03cc4c29e86003fe4e7f31a8f09c18d85b1594ca5cb6343fd21c269ccc1ef1f2&w=1380",
      tags: ["Next.js", "Tailwind CSS", "Stripe", "Supabase"],
      github: "https://github.com/priyanshu654/studyNotion",
      demo: "#",
    },
    {
      title: "Expense Tracker",
      description: "React-based budget management app with categorized transactions.",
      image: "https://img.freepik.com/free-vector/aesthetic-cool-budget-planner_1421494-136.jpg?t=st=1746031989~exp=1746035589~hmac=a16f87dec0800adfbc43c64894e0cfc8c783706191ea2202e4bfc4e05e7a7f45&w=740",
      tags: ["React", "TypeScript", "Redux", "Firebase"],
      github: "https://github.com/priyanshu654",
      demo: "#",
    },
    {
      title: "usepopCorn.",
      description:"A movie app using OMDb API to manage a watchlist and rate movies.",
      image: "https://img.freepik.com/premium-photo/smartphone-application-online-buying-booking-cinema-tickets_250014-1.jpg?uid=R99016623&ga=GA1.1.1985857619.1744356112&semt=ais_hybrid&w=740",
      tags: ["React", "D3.js", "Tailwind CSS", "REST API"],
      github: "https://github.com/priyanshu654",
      demo: "#",
    },
    {
      title: "worldWise",
      description: "A travel map app to track places visited using Leaflet.",
      image: "https://img.freepik.com/free-vector/white-world-map_23-2147509768.jpg?uid=R99016623&ga=GA1.1.1985857619.1744356112&semt=ais_hybrid&w=740",
      tags: ["Next.js", "GraphQL", "Styled Components"],
      github: "https://github.com/priyanshu654",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-24 sm:py-32 bg-gray-900">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent"
          >
            My Projects
          </motion.h2>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mb-8"
          />
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="max-w-[600px] text-gray-400"
          >
            Here are some of my recent projects. Each one was built with a focus on solving real problems and delivering
            exceptional user experiences.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1 * index, duration: 0.5 },
                },
              }}
              whileHover={{
                y: -10,
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)",
              }}
              className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md rounded-xl overflow-hidden shadow-xl border border-gray-700/50 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gradient-to-r from-violet-500/10 to-cyan-400/10 border border-violet-500/20 text-cyan-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <Link
                    href={project.github}
                    className="flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Link>
                  <Link
                    href={project.demo}
                    className="flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-gray-700 text-gray-300 hover:text-white hover:border-violet-500 hover:bg-gray-800/50 transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section id="contact" className="py-24 sm:py-32 bg-black">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mb-8"
          />
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="max-w-[600px] text-gray-400"
          >
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out using the form
            below or through my social media channels.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
            initial="hidden"
            animate={controls}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 w-12 h-12 rounded-full bg-gradient-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 border border-violet-500/20">
                <Mail className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-medium text-white">Email</h3>
                <p className="text-gray-400">priyanshubkj10@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 w-12 h-12 rounded-full bg-gradient-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 border border-violet-500/20">
                <MapPin className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-medium text-white">Location</h3>
                <p className="text-gray-400">Phagwara, Punjab</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 w-12 h-12 rounded-full bg-gradient-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 border border-violet-500/20">
                <Send className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-medium text-white">Social Media</h3>
                <div className="flex gap-4 mt-2">
                  <Link
                    href="https://github.com/priyanshu654"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group"
                  >
                    <span className="absolute -inset-2 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-all duration-300"></span>
                    <Github className="h-5 w-5 relative z-10" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/priyanshuraj10/"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group"
                  >
                    <span className="absolute -inset-2 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-all duration-300"></span>
                    <Linkedin className="h-5 w-5 relative z-10" />
                  </Link>
                  <Link
                    href="https://x.com/Priyans25198743"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group"
                  >
                    <span className="absolute -inset-2 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-all duration-300"></span>
                    <Twitter className="h-5 w-5 relative z-10" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
            initial="hidden"
            animate={controls}
            className="space-y-6 p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md rounded-xl shadow-xl border border-gray-700/50"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-violet-500/20"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-violet-500/20"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="How can I help you?"
                className="bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                className="min-h-[120px] bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-700 hover:to-cyan-600 text-white border-0 shadow-lg shadow-violet-700/20 hover:shadow-violet-700/40 transition-all duration-300"
            >
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()}. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="https://www.instagram.com/priyanshu_.raaz/" className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 relative group">
            <span className="absolute -inset-2 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-all duration-300"></span>
            <Github className="h-5 w-5 relative z-10" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/priyanshuraj10/" className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 relative group">
            <span className="absolute -inset-2 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-all duration-300"></span>
            <Linkedin className="h-5 w-5 relative z-10" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://x.com/Priyans25198743" className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 relative group">
            <span className="absolute -inset-2 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-all duration-300"></span>
            <Twitter className="h-5 w-5 relative z-10" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
