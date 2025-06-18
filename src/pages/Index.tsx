import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Code,
  Mail,
  User,
  Briefcase,
  Home,
  ChevronDown,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Navigation from "../components/Navigation";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
          }
        }
      });

      // Update scroll progress bar
      const scrollProgress = document.querySelector(
        ".scroll-progress"
      ) as HTMLElement;
      if (scrollProgress) {
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.pageYOffset;
        const progress = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.width = progress + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Cursor trail effect
    const cursorTrail = document.querySelector(".cursor-trail") as HTMLElement;
    let mouseX = 0,
      mouseY = 0;
    let trailX = 0,
      trailY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.1;
      trailY += (mouseY - trailY) * 0.1;

      if (cursorTrail) {
        cursorTrail.style.left = trailX - 10 + "px";
        cursorTrail.style.top = trailY - 10 + "px";
      }

      requestAnimationFrame(animateTrail);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animateTrail();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress"></div>

      {/* Cursor Trail */}
      <div className="cursor-trail"></div>

      <div
        className="min-h-screen text-white overflow-x-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
        }}
      >
        {/* Navigation */}
        <Navigation
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        {/* Hero Section */}
        <HeroSection scrollToSection={scrollToSection} />

        {/* About Section */}
        <AboutSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Floating Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>
    </>
  );
};

export default Index;
