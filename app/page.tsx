"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Shield,
  Download,
  Mail,
  Linkedin,
  Github,
  Globe,
  Eye,
  Server,
  Code,
  Sun,
  Moon,
  Menu,
  X,
  MapPin,
  Phone,
  GraduationCap,
  Calendar,
  ExternalLink,
  Terminal,
  Lock,
  Network,
  Users,
  Clock,
  Target,
  MessageSquare,
  Lightbulb,
  Puzzle,
  Bot,
  Layout,
  Monitor,
  Cpu,
  School,
  BookOpen,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDark(savedTheme === "dark")
    }
  }, [])

  useEffect(() => {
    // Apply theme and save preference
    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header/Navigation */}
      <header className="container mx-auto py-5 px-4 flex justify-between items-center relative backdrop-blur-sm bg-background/80 sticky top-0 z-50 border-b border-border">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <div>
            <h1 className="text-lg font-medium text-primary">Irfan Ali Lashari</h1>
            <p className="text-xs text-muted-foreground">Front-End Developer | Cybersecurity Student</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm hover:text-primary transition-colors">
            Home
          </a>
          <a href="#experience" className="text-sm hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#projects" className="text-sm hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#certifications" className="text-sm hover:text-primary transition-colors">
            Certifications
          </a>
          <a href="#skills" className="text-sm hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#education" className="text-sm hover:text-primary transition-colors">
            Education
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="h-8 w-8 p-0 hover:bg-primary/10 rounded-lg"
          >
            {isDark ? <Sun className="h-4 w-4 text-secondary" /> : <Moon className="h-4 w-4 text-primary" />}
          </Button>
          <Button
            className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground transition-colors rounded-lg"
            onClick={() => window.open("/irfan%20ali%20lashari.pdf", "_blank")}
          >
            <Download className="mr-2 h-4 w-4" /> Resume
          </Button>
          <Button variant="ghost" size="sm" onClick={toggleMenu} className="md:hidden h-8 w-8 p-0 rounded-lg">
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden z-50 backdrop-blur-sm">
            <nav className="flex flex-col p-4 space-y-3">
              <a href="#" className="text-sm hover:text-primary transition-colors">
                Home
              </a>
              <a href="#experience" className="text-sm hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#certifications" className="text-sm hover:text-primary transition-colors">
                Certifications
              </a>
              <a href="#skills" className="text-sm hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#education" className="text-sm hover:text-primary transition-colors">
                Education
              </a>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full rounded-lg"
                onClick={() => window.open("/irfan%20ali%20lashari.pdf", "_blank")}
              >
                <Download className="mr-2 h-4 w-4" /> Resume
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 mb-10 md:mb-0">
          <div className="mb-8">
            <p className="text-primary text-sm tracking-wider mb-4">FRONT-END DEVELOPER | CYBERSECURITY STUDENT</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Building Secure</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Digital Experiences</h2>
          </div>

          <div className="mb-6 space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Karachi, Sindh, Pakistan</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <span>irfanalilashari56@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" />
              <span>0347-8595882</span>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Motivated cybersecurity undergraduate and front-end developer with hands-on experience in ethical hacking,
            chatbot AI, and web design. Proficient in HTML, CSS, Flask, and Google Gemini API. Completed multiple Google
            and Cisco cybersecurity certifications. Eager to grow through internship opportunities.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 rounded-lg"
              onClick={() => window.open("https://www.linkedin.com/in/irfan-ali-9601b1331/", "_blank")}
            >
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 rounded-lg"
              onClick={() => window.open("https://github.com/irfanlashari", "_blank")}
            >
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
            <Button
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-105 rounded-lg"
              onClick={() => window.open("/irfan ali lashari.pdf", "_blank")}
            >
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 rounded-lg"
              onClick={() => window.open("https://tryhackme.com/p/irfn3seven", "_blank")}
            >
              <Shield className="mr-2 h-4 w-4" /> TryHackMe
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 rounded-lg"
              onClick={() => window.open("mailto:irfanalilashari56@gmail.com", "_blank")}
            >
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center md:justify-end relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute w-full h-full rounded-full border-2 border-primary animate-pulse"></div>
            <div className="absolute w-full h-full rounded-full overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Irfan Ali Lashari"
                width={320}
                height={320}
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-secondary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">Professional Experience</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>

        <div className="space-y-8">
          {/* Ethical Hacking */}
          <div className="bg-card rounded-lg p-6 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] border border-border">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Lock className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-bold text-primary">Ethical Hacking (Initiated)</h3>
              </div>
              <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-lg">Active</span>
            </div>
            <p className="text-muted-foreground mb-6">Cybersecurity Research & Penetration Testing</p>

            <ul className="space-y-4">
              <li className="flex">
                <span className="text-primary mr-2 mt-1">•</span>
                <p className="text-muted-foreground">
                  Practicing network and web application security using platforms like TryHackMe and Hack The Box
                </p>
              </li>
              <li className="flex">
                <span className="text-primary mr-2 mt-1">•</span>
                <p className="text-muted-foreground">
                  Familiar with Kali Linux, Nmap, Wireshark, and basic Metasploit usage
                </p>
              </li>
              <li className="flex">
                <span className="text-primary mr-2 mt-1">•</span>
                <p className="text-muted-foreground">
                  Simulated attacks in isolated VMs to understand penetration testing workflows
                </p>
              </li>
              <li className="flex">
                <span className="text-primary mr-2 mt-1">•</span>
                <p className="text-muted-foreground">
                  Explored password cracking, reconnaissance, and vulnerability scanning
                </p>
              </li>
            </ul>
          </div>

          {/* Web Development Skills */}
          <div className="bg-card rounded-lg p-6 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] border border-border">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Code className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-bold text-primary">Web Development Skills</h3>
              </div>
              <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-lg">Ongoing</span>
            </div>
            <p className="text-muted-foreground mb-6">Front-End & Back-End Development</p>

            <ul className="space-y-4">
              <li className="flex">
                <span className="text-primary mr-2 mt-1">•</span>
                <p className="text-muted-foreground">
                  Developed several responsive websites using HTML, CSS, and JavaScript (basic)
                </p>
              </li>
              <li className="flex">
                <span className="text-primary mr-2 mt-1">•</span>
                <p className="text-muted-foreground">
                  Built a chatbot using Flask, integrating Google Gemini API with session-based logic
                </p>
              </li>
              <li className="flex">
                <span className="text-primary mr-2 mt-1">•</span>
                <p className="text-muted-foreground">
                  Created a department website with animated UI and "Our Team" section
                </p>
              </li>
              <li className="flex">
                <span className="text-primary mr-2 mt-1">•</span>
                <p className="text-muted-foreground">
                  Worked on GitHub Pages and Netlify for deployment and version control
                </p>
              </li>
            </ul>
          </div>

          {/* Cybersecurity Skills */}
          <div className="bg-card rounded-lg p-6 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] border border-border">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-bold text-primary">Cybersecurity Skills</h3>
              </div>
              <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-lg">Certified</span>
            </div>
            <p className="text-muted-foreground mb-6">Security Fundamentals & Best Practices</p>

            <ul className="space-y-4">
              <li className="flex">
                <span className="text-primary mr-2 mt-1">•</span>
                <p className="text-muted-foreground">
                  Completed Google Cybersecurity Certificate (8 Courses) on Coursera
                </p>
              </li>
              <li className="flex">
                <span className="text-primary mr-2 mt-1">•</span>
                <p className="text-muted-foreground">
                  Studied networking basics, threat detection, and incident response with Cisco
                </p>
              </li>
              <li className="flex">
                <span className="text-primary mr-2 mt-1">•</span>
                <p className="text-muted-foreground">
                  Experienced in basic Linux commands, secure coding practices, and firewall concepts
                </p>
              </li>
              <li className="flex">
                <span className="text-primary mr-2 mt-1">•</span>
                <p className="text-muted-foreground">
                  Familiar with API security and basic concepts of IAM (Identity and Access Management)
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">Featured Projects</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group border border-border">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/portfolio1.jpg"
                alt="Portfolio Website"
                width={500}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <Layout className="h-5 w-5 text-primary mr-2" />
                <h3 className="text-xl font-bold text-card-foreground">Portfolio Website</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Fully responsive personal portfolio site featuring smooth animations, dark/light mode toggle, and
                seamless scrolling.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-lg">HTML</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-lg">CSS</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-lg">JavaScript</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-lg">Responsive Design</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-lg">UI Animation</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-lg">Netlify</span>
              </div>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full transition-all duration-300 rounded-lg"
                onClick={() => window.open("https://github.com/irfanalilashari/portfolio", "_blank")}
              >
                <Github className="mr-2 h-4 w-4" /> View Project
              </Button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group border border-border">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/unibot.png"
                alt="UniBot Chatbot"
                width={490}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <Bot className="h-5 w-5 text-primary mr-2" />
                <h3 className="text-xl font-bold text-card-foreground">University Chatbot – UniBot</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Intelligent chatbot system combining rule-based responses with AI fallback using Flask framework and
                Google Gemini API.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-lg">Flask</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-lg">Python</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-lg">Gemini API</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-lg">Session Tracking</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-lg">AI Integration</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-lg">Heroku</span>
              </div>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full transition-all duration-300 rounded-lg"
                onClick={() => window.open("https://github.com/irfanalilashari/unibot", "_blank")}
              >
                <Github className="mr-2 h-4 w-4" /> View Project
              </Button>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group border border-border">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/Screenshot 2025-05-28 155307.jpg"
                alt="Cybersecurity Department Website"
                width={500}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <Shield className="h-5 w-5 text-primary mr-2" />
                <h3 className="text-xl font-bold text-card-foreground">Cyber Security Department Website</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Comprehensive department website featuring modern design, interactive team section, and detailed program
                information.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-lg">HTML</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-lg">CSS</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-lg">JavaScript</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-lg">UI Animation</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-lg">Team Section</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-lg">Netlify</span>
              </div>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full transition-all duration-300 rounded-lg"
                onClick={() => window.open("https://github.com/irfanalilashari/cybersec-dept", "_blank")}
              >
                <Github className="mr-2 h-4 w-4" /> View Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">Professional Certifications</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group border border-border">
            <div className="relative h-48 overflow-hidden flex items-center justify-center p-6">
              <Image
                src="/linux certf google_page-0001.jpg"
                alt="Google Logo"
                width={250}
                height={250}
                className="max-h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-card-foreground mb-1">Google Cybersecurity Professional</h3>
              <p className="text-sm text-muted-foreground mb-3">8 Courses – Coursera</p>
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full rounded-lg"
                onClick={() => window.open("/linux certf google_page-0001.jpg", "_blank")}
              >
                <Eye className="mr-2 h-3 w-3" /> View Certificate
              </Button>
            </div>
          </div>

          <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group border border-border">
            <div className="relative h-48 overflow-hidden flex items-center justify-center p-6">
              <Image
                src="/Introduction_to_Cybersecurity_certificate_irfanalilashari56-gmail-com_3ab22b46-0684-43e4-aa01-f7bca8be38a4_page-0001.jpg"
                alt="Cisco Logo"
                width={250}
                height={250}
                className="max-h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-card-foreground mb-1">Cisco: Introduction to Cybersecurity</h3>
              <p className="text-sm text-muted-foreground mb-3">Cisco Networking Academy</p>
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full rounded-lg"
                onClick={() => window.open("/Introduction_to_Cybersecurity_certificate_irfanalilashari56-gmail-com_3ab22b46-0684-43e4-aa01-f7bca8be38a4_page-0001.jpg", "_blank")}
              >
                <Eye className="mr-2 h-3 w-3" /> View Certificate
              </Button>
            </div>
          </div>

          <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group border border-border">
            <div className="relative h-48 overflow-hidden flex items-center justify-center p-6">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Cisco Logo"
                width={250}
                height={250}
                className="max-h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-card-foreground mb-1">Cisco: Networking Basics</h3>
              <p className="text-sm text-muted-foreground mb-3">Cisco Networking Academy</p>
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full rounded-lg"
                onClick={() => window.open("/_certificate_irfanalilashari56-gmail-com_0bc9b9b2-8c88-40e2-b55e-fd4e5d0fac8e_page-0001.jpg", "_blank")}
              >
                <Eye className="mr-2 h-3 w-3" /> View Certificate
              </Button>
            </div>
          </div>

          <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group border border-border">
            <div className="relative h-48 overflow-hidden flex items-center justify-center p-6">
              <Image
                src="/fundamentak of Azure_page-0001.jpg"
                alt="Microsoft Logo"
                width={250}
                height={250}
                className="max-h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-card-foreground mb-1">Microsoft: Azure Fundamentals</h3>
              <p className="text-sm text-muted-foreground mb-3">Cloud Concepts</p>
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full rounded-lg"
                onClick={() => window.open("/fundamentak of Azure_page-0001.jpg", "_blank")}
              >
                <Eye className="mr-2 h-3 w-3" /> View Certificate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">Skills</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center">
              <Code className="h-6 w-6 mr-2" />
              Technical Skills
            </h3>
            <div className="grid gap-4">
              <div className="bg-card rounded-lg p-4 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] group border border-border">
                <div className="flex items-center">
                  <Layout className="h-5 w-5 text-primary mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-card-foreground">HTML, CSS, JavaScript</span>
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] group border border-border">
                <div className="flex items-center">
                  <Server className="h-5 w-5 text-primary mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-card-foreground">Flask & REST API Integration</span>
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] group border border-border">
                <div className="flex items-center">
                  <Bot className="h-5 w-5 text-primary mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-card-foreground">Google Gemini API</span>
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] group border border-border">
                <div className="flex items-center">
                  <Terminal className="h-5 w-5 text-primary mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-card-foreground">Linux Command Line</span>
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] group border border-border">
                <div className="flex items-center">
                  <Github className="h-5 w-5 text-primary mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-card-foreground">Git & GitHub</span>
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] group border border-border">
                <div className="flex items-center">
                  <Monitor className="h-5 w-5 text-primary mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-card-foreground">Responsive Design</span>
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] group border border-border">
                <div className="flex items-center">
                  <Cpu className="h-5 w-5 text-primary mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-card-foreground">Chrome DevTools</span>
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center">
              <Users className="h-6 w-6 mr-2" />
              Soft Skills
            </h3>
            <div className="grid gap-4">
              <div className="bg-card rounded-lg p-4 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] group border border-border">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-card-foreground">Time Management</span>
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] group border border-border">
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-primary mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-card-foreground">Attention to Detail</span>
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] group border border-border">
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-primary mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-card-foreground">Communication</span>
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] group border border-border">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-card-foreground">Team Collaboration</span>
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] group border border-border">
                <div className="flex items-center">
                  <Lightbulb className="h-5 w-5 text-primary mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-card-foreground">Self-Learning</span>
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] group border border-border">
                <div className="flex items-center">
                  <Puzzle className="h-5 w-5 text-primary mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-card-foreground">Problem Solving</span>
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] group border border-border">
                <div className="flex items-center">
                  <Network className="h-5 w-5 text-primary mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-card-foreground">Adaptability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section id="education" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">Academic Background</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>

        <div className="space-y-8">
          {/* Current Education */}
          <div className="bg-card rounded-lg p-8 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] border border-border relative">
            <div className="flex items-start gap-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-primary mb-2 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      BS Cyber Security
                    </h3>
                    <div className="flex items-center text-xl text-card-foreground mb-2">
                      <School className="h-5 w-5 text-secondary mr-2" />
                      Quaid-e-Awam University of Engineering, Science & Technology
                    </div>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4 text-primary mr-2" />
                      Nawabshah, Sindh, Pakistan
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Award className="h-4 w-4 text-secondary mr-2" />
                      CGPA: 3.17
                    </div>
                  </div>
                  <div className="text-left lg:text-right">
                    <div className="flex items-center text-primary font-semibold mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      2024 – 2028
                    </div>
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-medium">
                      Current
                    </span>
                    <p className="text-muted-foreground text-sm mt-1">Expected Graduation</p>
                  </div>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 mt-4">
                  <p className="text-muted-foreground text-sm">
                    Pursuing comprehensive studies in cybersecurity including network security, ethical hacking, digital
                    forensics, and secure software development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Previous Education */}
          <div className="bg-card rounded-lg p-8 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] border border-border">
            <div className="flex items-start gap-6">
              <div className="bg-secondary/10 p-3 rounded-full">
                <School className="h-8 w-8 text-secondary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-primary mb-2 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Higher Secondary Certificate (HSC) & Secondary School Certificate (SSC)
                    </h3>
                    <div className="flex items-center text-xl text-card-foreground mb-2">
                      <School className="h-5 w-5 text-secondary mr-2" />
                      Model School Cadet College
                    </div>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4 text-primary mr-2" />
                      Larkana, Sindh, Pakistan
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Award className="h-4 w-4 text-secondary mr-2" />
                      Grade: A
                    </div>
                  </div>
                  <div className="text-left lg:text-right">
                    <div className="flex items-center text-primary font-semibold mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      Completed
                    </div>
                    <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-lg text-sm font-medium">
                      Graduated
                    </span>
                    <p className="text-muted-foreground text-sm mt-1">Secondary Education</p>
                  </div>
                </div>
                <div className="bg-secondary/5 rounded-lg p-4 mt-4">
                  <p className="text-muted-foreground text-sm">
                    Completed secondary and higher secondary education with distinction, building a strong foundation in
                    mathematics, science, and computer studies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Polished Footer */}
      <footer className="bg-muted py-12 mt-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-primary">Irfan Ali Lashari</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated to building secure digital experiences through innovative front-end development and
              cybersecurity expertise. Always ready to tackle new challenges in the ever-evolving landscape of web
              technology and digital security.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <Button
              variant="ghost"
              size="sm"
              className="h-12 w-12 p-0 hover:bg-primary/10 hover:scale-110 transition-all duration-300 rounded-lg"
              onClick={() => window.open("mailto:irfanalilashari56@gmail.com", "_blank")}
            >
              <Mail className="h-5 w-5 text-primary" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-12 w-12 p-0 hover:bg-primary/10 hover:scale-110 transition-all duration-300 rounded-lg"
              onClick={() => window.open("https://www.linkedin.com/in/irfan-ali-9601b1331/", "_blank")}
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-12 w-12 p-0 hover:bg-primary/10 hover:scale-110 transition-all duration-300 rounded-lg"
              onClick={() => window.open("https://github.com/irfanlashari", "_blank")}
            >
              <Github className="h-5 w-5 text-primary" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-12 w-12 p-0 hover:bg-primary/10 hover:scale-110 transition-all duration-300 rounded-lg"
              onClick={() => window.open("https://tryhackme.com/p/irfn3seven", "_blank")}
            >
              <Globe className="h-5 w-5 text-primary" />
            </Button>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Irfan Ali Lashari. All rights reserved. Building secure digital experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
