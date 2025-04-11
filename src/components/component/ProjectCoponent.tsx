'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
// import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  details?: {
    overview: string;
    features: string[];
    technologies: {
      name: string;
      description: string;
    }[];
    challenges: string[];
    solutions: string[];
  };
}

export default function ProjectComponent({
  title,
  description,
  imageUrl,
  tags,
  githubUrl,
  liveUrl,
  details
}: ProjectProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Project Image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden"
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {(tags || []).map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-white/10 text-white border-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Content */}
        <div>
          <Card className="bg-gray-900 border-gray-800 h-full">
            <CardHeader>
              <CardTitle className="text-2xl text-white">{title}</CardTitle>
              <CardDescription className="text-gray-400">{description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {details && (
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-6 bg-gray-800">
                    <TabsTrigger value="overview" className="data-[state=active]:text-black text-white">Overview</TabsTrigger>
                    <TabsTrigger value="tech" className="data-[state=active]:text-black text-white">Technologies</TabsTrigger>
                    <TabsTrigger value="challenges" className="data-[state=active]:text-black text-white">Challenges</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-0">
                    <div className="space-y-4">
                      <p className="text-gray-400">{details.overview}</p>
                      <div>
                        <h4 className="font-medium text-white mb-2">Key Features:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-400">
                          {details.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="tech" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {details.technologies.map((tech, index) => (
                        <div key={index} className="border border-gray-800 rounded-lg p-4">
                          <h4 className="font-medium text-white mb-1">{tech.name}</h4>
                          <p className="text-sm text-gray-400">{tech.description}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="challenges" className="mt-0">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-white mb-2">Challenges Faced:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-400">
                          {details.challenges.map((challenge, index) => (
                            <li key={index}>{challenge}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">Solutions Implemented:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-400">
                          {details.solutions.map((solution, index) => (
                            <li key={index}>{solution}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              )}

              <div className="flex flex-wrap gap-3 pt-2">
                {githubUrl && (
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-white text-black hover:bg-black hover:text-white">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </a>
                )}
                {liveUrl && (
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="group">
                      Live Demo
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                )}
                {!liveUrl && !githubUrl && (
                  <Button variant="ghost" className="text-gray-200" disabled>
                    Private Project
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}