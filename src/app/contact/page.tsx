'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, Download, Link } from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "rajputaashutosh011@gmail.com",
      action: "mailto:rajputaashutosh011@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 6359375904",
      action: "tel:+916359375904"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Ahmedabad, India",
      action: "https://maps.google.com/?q=Ahmedabad"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com/Aashu-king"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aashutosh-singh-560986274"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      url: "javascript:void(0)"
    }
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <div className="w-24 h-1 bg-white mb-8"></div>
          <p className="text-gray-400 max-w-2xl text-lg mb-8">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out - I&apos;m always open to new collaborations and conversations.
          </p>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
              <CardDescription className="text-gray-400">
                Here&apos;s how you can reach me directly
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-full bg-white/10">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{method.title}</h3>
                    <a 
                      href={method.action} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {method.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Social Links</CardTitle>
              <CardDescription className="text-gray-400">
                Connect with me on these platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    {social.icon}
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gray-900 border-gray-800 h-full">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send Me a Message</CardTitle>
              <CardDescription className="text-gray-400">
                Fill out the form below and I&apos;ll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-gray-800 border-gray-700 text-white focus:ring-white focus:border-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-gray-800 border-gray-700 text-white focus:ring-white focus:border-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="bg-gray-800 border-gray-700 text-white focus:ring-white focus:border-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={5}
                    className="bg-gray-800 border-gray-700 text-white focus:ring-white focus:border-white"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full group bg-white text-black hover:bg-black hover:text-white hover:border-white"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Looking for a developer?</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            I&apos;m currently available for full-time positions, freelance work, or open-source collaborations.
            Let&apos;s build something amazing together!
          </p>
          <div className="flex justify-center gap-4">
            <a href="/Aashutoshsingh.pdf" download>
              <Button className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </a>
            <Link href="/projects">
              <Button variant="outline" className="border-white text-black hover:bg-black hover:text-white">
                View My Projects
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}