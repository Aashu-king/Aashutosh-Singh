"use client"
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TechStack from "@/components/component/TechStack";
import { projectData } from "@/lib/projectdata";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectProps {
  id: number,
  title: string,
  techStack: string[],
  description: string[]
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 md:px-20 lg:px-32">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
        <div className="space-y-6 max-w-xl" style={{ color: "oklch(0.88 0.09 1.42)" }}>
          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Hey, I&apos;m <span className="text-white">Aashutosh Singh</span> 👋
          </motion.h1>
          <p className="text-lg text-gray-400">
            A passionate <strong>Full Stack Developer</strong> who builds beautiful and performant web applications.
          </p>
          <div className="flex gap-4">
            <Link href="/projects">
              <Button variant="outline" className="border-white text-black hover:bg-black hover:text-white">View Projects</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-black hover:bg-black hover:text-white">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>

        <motion.div
          className="w-56 h-56 relative rounded-full overflow-hidden border-4 border-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Image
            src="/WhatsApp Image 2025-04-01 at 19.15.05.jpeg"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            priority
          />
        </motion.div>
      </section>

      {/* Enhanced About Section */}
      <motion.section 
        className="mb-20 p-6 bg-gray-900 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <span className="inline-block w-6 h-1 bg-white mr-2"></span>
              About Me
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
            I&apos;m a developer who loves building products that solve real-world problems.
              My journey started with curiosity and turned into a passion for design and code.
              I enjoy working on full-stack apps, constantly learning, adapting new technologies and collaborating on creative teams.
            </p>
            <Link href="/about">
              <Button className="group">
                Know More
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="w-full md:w-auto">
            <Card className="bg-black border-gray-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div className="flex gap-2">
                  <Badge variant="outline" className="bg-white/10 border-primary/20 text-white">Experience</Badge>
                  <span className="text-gray-400">2+ Years</span>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="bg-white/10 text-white border-primary/20">Location</Badge>
                  <span className="text-gray-400">India</span>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="bg-white/10 text-white border-primary/20">Focus</Badge>
                  <span className="text-gray-400">Full Stack Development</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <TechStack />

      {/* Enhanced Projects Preview */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <span className="inline-block w-6 h-1 bg-white mr-2"></span>
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projectData.map((project: ProjectProps) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: project.id * 0.1 }}
            >
              <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description[0]}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-gray-800 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/projects#${project.id}`}>
                    <Button variant="outline" className="group border-gray-700 hover:border-primary">
                      <span>View Details</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/projects">
            <Button variant="outline" className="border-white text-black hover:bg-black hover:text-white">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h2>
        <p className="text-gray-400 mb-6">I&apos;
          m always open to discussing new opportunities, freelance gigs, or just geeking out over code.</p>
        <div className="flex justify-center gap-4">
          <Link href="mailto:rajputaashutosh011@gmail.com">
            <Button variant="outline" className="border-white text-black hover:bg-black hover:text-white">
              <Mail className="mr-2 h-4 w-4" /> Email
            </Button>
          </Link>
          <Link href="https://github.com/Aashu-king" target="_blank">
            <Button variant="outline" className="border-white text-black hover:bg-black hover:text-white">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/aashutosh-singh-560986274" target="_blank">
            <Button variant="outline" className="border-white text-black hover:bg-black hover:text-white">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}