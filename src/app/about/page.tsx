"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Download, Book, Briefcase, GraduationCap, Code, Database, Layers } from "lucide-react";

export default function AboutPage() {
  const technicalSkills = [
    { name: "React/Next.js", proficiency: 90 },
    { name: "JavaScript/TypeScript", proficiency: 95 },
    { name: "HTML/CSS", proficiency: 90 },
    { name: "Node.js", proficiency: 80 },
    { name: "MongoDB", proficiency: 75 },
    { name: "Tailwind CSS", proficiency: 80 },
    { name: "REST APIs", proficiency: 85 },
    { name: "Git/GitHub", proficiency: 85 },
    { name: "Angular", proficiency: 80 },
    { name: "Bootstrap", proficiency: 85 },
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Adaptability",
    "Critical Thinking"
  ];

  const experiences = [
    {
      title: "Full Stack Web Developer",
      company: "Varahi SoftTech",
      duration: "August 2023 - April 2025",
      location: "Ahmedabad, India",
      description: [
        "Developed and maintained responsive web applications using Angular, React.js, and Next.js",
        "Built RESTful APIs with Node.js and Express for seamless frontend-backend communication",
        "Integrated and managed relational data using Microsoft SQL Server and MySQL",
        "Worked with NoSQL databases like MongoDB for flexible data handling",
        "Collaborated with team members to implement clean, scalable, and maintainable code",
        "Ensured cross-browser compatibility and optimized performance across devices"
      ]
    },
    {
      title: "Web Developer (Static Websites)",
      company: "Varahi SoftTech",
      duration: "May 2023 - July 2023",
      location: "Ahmedabad, India",
      description: [
        "Built interactive UI components using HTML, CSS, and JavaScript",
        "Participated in daily stand-ups and sprint planning meetings",
        "Collaborated with designers to implement pixel-perfect designs"
      ]
    }
  ];

  // Education
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Silver Oak University",
      duration: "2022 - Present (Expected Graduation: 2026)",
      location: "Ahmedabad, India",
      description: "Currently pursuing, with a focus on Web Technologies, Full Stack Development, and Database Management"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Upasana Lions English Medium School",
      duration: "2020 - 2022",
      location: "Vapi, India",
      description: "Completed with distinction in Science and Mathematics"
    },
    {
      degree: "Secondary Education",
      institution: "Upasana Lions English Medium School",
      duration: "2010 - 2020",
      location: "Vapi, India",
      description: "Received excellence award for academic performance"
    }
  ];

  // Certifications
  // const certifications = [
  //   {
  //     name: "AWS Certified Developer",
  //     issuer: "Amazon Web Services",
  //     year: "2023"
  //   },
  //   {
  //     name: "MongoDB Certified Developer",
  //     issuer: "MongoDB University",
  //     year: "2022"
  //   },
  //   {
  //     name: "Advanced React and Redux",
  //     issuer: "Udemy",
  //     year: "2021"
  //   },
  //   {
  //     name: "Professional Scrum Master I",
  //     issuer: "Scrum.org",
  //     year: "2020"
  //   }
  // ];

  // Interests
  const interests = [
    "Open Source Contribution",
    "Tech Blogging",
    "UI/UX Design",
    "Machine Learning",
    "Hiking"
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 md:px-20 lg:px-32">
      {/* Hero Section */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <div className="w-24 h-1 bg-white mb-8"></div>
          <p className="text-gray-400 max-w-2xl text-lg mb-8">
            I&apos;m Aashutosh Singh, a Full Stack Developer with over 2 years of experience
            creating exceptional digital experiences. I&apos;m passionate about building
            innovative solutions that solve real-world problems.
          </p>
          <div className="flex gap-4">
            <a href="/Aashutoshsingh.pdf" download>
              <Button className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-black hover:bg-black hover:text-white">
                Get In Touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Details Section */}
      <section className="mb-16 grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-1"
        >
          <div className="relative w-full h-80 md:h-full rounded-xl overflow-hidden">
            <Image
              src="/WhatsApp Image 2025-04-01 at 19.15.05.jpeg"
              alt="Aashutosh Singh"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:col-span-2"
        >
          <Card className="bg-gray-900 border-gray-800 h-full">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Personal Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-gray-400 mb-2">Name</h3>
                  <p className="font-medium text-white">Aashutosh Singh</p>
                </div>
                <div>
                  <h3 className="text-gray-400 mb-2">Email</h3>
                  <p className="font-medium text-white ">rajputaashutosh011@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-gray-400 mb-2">Location</h3>
                  <p className="font-medium text-white">Ahmedabad, India</p>
                </div>
                <div>
                  <h3 className="text-gray-400 mb-2">Availability</h3>
                  <p className="font-medium text-white">Full-time, Freelance</p>
                </div>
                <div>
                  <h3 className="text-gray-400 mb-2">Experience</h3>
                  <p className="font-medium text-white">2+ Years</p>
                </div>
                <div>
                  <h3 className="text-gray-400 mb-2">Languages</h3>
                  <p className="font-medium text-white">English, Hindi, Gujarati</p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-medium text-gray-400 mb-4">Bio</h3>
                <p className="text-gray-400">
                  I&apos;m a passionate full stack developer currently in my third year of college, with around 2 years of hands-on experience in modern web technologies.
                  My development journey began early in my academic life when I built my first web application, which sparked my interest in creating digital solutions.
                  Since then, I&apos;ve worked with a variety of technologies and frameworks to build robust, scalable, and user-friendly applications.
                  I take pride in writing clean, maintainable code and continuously strive to learn and grow with the evolving tech landscape.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Experience & Education */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 flex items-center">
          <span className="inline-block w-6 h-1 bg-white mr-2"></span>
          Experience & Education
        </h2>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-8">
            <TabsTrigger value="experience" className="text-base">Experience</TabsTrigger>
            <TabsTrigger value="education" className="text-base">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="mt-0">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900 border-gray-800 overflow-hidden">
                    <CardHeader className="flex flex-row items-start justify-between">
                      <div>
                        <div className="inline-block p-3 rounded-full bg-white/10 mb-4">
                          <Briefcase className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                        <CardDescription className="text-gray-400">
                          {exp.company} | {exp.location}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-white/10 text-white border-primary/20">
                        {exp.duration}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1 text-gray-400">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education" className="mt-0">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900 border-gray-800 overflow-hidden">
                    <CardHeader className="flex flex-row items-start justify-between">
                      <div>
                        <div className="inline-block p-3 rounded-full bg-white/10 mb-4">
                          <GraduationCap className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl text-white">{edu.degree}</CardTitle>
                        <CardDescription className="text-gray-400">
                          {edu.institution} | {edu.location}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-white/10 text-white border-primary/20">
                        {edu.duration}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 flex items-center">
          <span className="inline-block w-6 h-1 bg-white mr-2"></span>
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gray-900 border-gray-800 h-full ">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-5 w-5 text-white" />
                  <CardTitle className='text-white'>Technical Skills</CardTitle>
                </div>
                <CardDescription>Programming languages and frameworks I work with</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-gray-400">{skill.proficiency}%</span>
                    </div>
                    <Progress
                      value={skill.proficiency}
                      className="h-2 [&>div]:bg-white"
                    />

                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-rows-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-gray-900 border-gray-800 h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="h-5 w-5 text-white" />
                    <CardTitle className='text-white'>Soft Skills</CardTitle>
                  </div>
                  <CardDescription>Personal attributes that enable me to interact effectively</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-800 text-gray-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-gray-900 border-gray-800 h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="h-5 w-5 text-white" />
                    <CardTitle className='text-white'>Tools & Technologies</CardTitle>
                  </div>
                  <CardDescription>Development tools I&apos;m proficient with</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {["VS Code", "Git", "GitHub", "Figma", "Postman", "Docker", "Vercel", "Firebase"].map((tool, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Interests */}
      <section className="mb-16">
        <div className="grid md:grid-cols-1 gap-8">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-white" />
                  <CardTitle className='text-white'>Certifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-800 last:border-0 last:pb-0">
                      <div>
                        <h3 className="font-medium text-white">{cert.name}</h3>
                        <p className="text-sm text-gray-400">{cert.issuer}</p>
                      </div>
                      <Badge>{cert.year}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Book className="h-5 w-5 text-white" />
                  <CardTitle className='text-white'>Interests & Hobbies</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge key={index} variant="outline" className="border-gray-700 text-gray-300">
                      {interest}
                    </Badge>
                  ))}
                </div>
                <p className="mt-6 text-gray-400">
                  Outside of coding, I enjoy contributing to open-source projects and sharing my knowledge through tech blogs.
                  I&apos;m also passionate about UI/UX design and exploring new technologies like Machine Learning.
                  When I&apos;m not in front of the computer, you can find me hiking or practicing photography.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Interested in working together?</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            I&apos;m currently available for full-time positions or freelance work.
            If you have a project that you want to get started or need help with an existing one,
            feel free to reach out!
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button className="group">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" className="border-white text-black hover:bg-black hover:text-white">
                View My Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}