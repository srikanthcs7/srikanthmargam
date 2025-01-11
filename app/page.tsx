'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}


export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-5xl">
          <motion.p 
            className="text-purple-600 dark:text-purple-400 mb-4 font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, my name is
          </motion.p>
          <motion.h1 
            className="text-5xl sm:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Srikanth Margam.
          </motion.h1>
          <motion.h2 
            className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-600 dark:text-zinc-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I craft exceptional web experiences.
          </motion.h2>
          <motion.p 
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I'm a Senior Frontend Engineer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products at Naehas.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#projects"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              <span>View My Work</span>
              <ArrowUpRight size={18} />
            </a>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://github.com/srikanth000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://x.com/SrikanthMargam7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-16">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 flex items-center"
            variants={fadeInUp}
          >
            <span className="text-purple-600 dark:text-purple-400 font-mono mr-4">01.</span>
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div className="md:col-span-2 space-y-4" variants={fadeInUp}>
              <p className="text-zinc-600 dark:text-zinc-400">
                With over 5 years of experience in web development, I specialize in crafting sleek user 
                interfaces and cutting-edge progressive web apps. I'm passionate about Test-Driven 
                Development (TDD) and building web applications that are not just faster, but also more 
                accessible and responsive.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                Currently, I'm working as a Senior Frontend Engineer at Naehas (Zenafide Team), where I 
                lead end-to-end product development and integrate advanced features like custom PDF 
                viewers and voice recognition systems.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
                {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python'].map((tech) => (
                  <motion.li 
                    key={tech}
                    className="flex items-center space-x-2 text-zinc-600 dark:text-zinc-400"
                    variants={fadeInUp}
                  >
                    <span className="text-purple-600 dark:text-purple-400">▹</span>
                    <span>{tech}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="relative group"
              variants={fadeInUp}
            >
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Srikanth Margam"
                  className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 ring-2 ring-purple-600 dark:ring-purple-400 rounded-lg translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-6 py-16">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 flex items-center"
            variants={fadeInUp}
          >
            <span className="text-purple-600 dark:text-purple-400 font-mono mr-4">02.</span>
            Where I've Worked
          </motion.h2>
          <div className="space-y-12">
            {[
              {
                company: 'Naehas (Zenafide Team)',
                role: 'Senior Frontend Engineer',
                date: 'July 2024 - Present',
                points: [
                  'Spearheaded end-to-end product development, optimizing design-to-production workflows',
                  'Integrated a PDF webviewer with custom annotation and commenting features',
                  'Developed a robust rule setup functionality and text extraction view',
                  'Collaborated with leading LLM providers to build advanced voice agents'
                ]
              },
              {
                company: 'Ridecell Inc',
                role: 'Frontend Engineer - SDE',
                date: 'July 2021 - July 2024',
                points: [
                  'Led a team of four engineers in feature development from design to deployment',
                  'Optimized multiple sets of pages to enhance rendering performance',
                  'Integrated the Ridecell plugin into the Geotab platform',
                  'Implemented Cypress as an end-to-end test tool across dashboards'
                ]
              },
              {
                company: 'Aayuv Technologies (ekincare)',
                role: 'Senior Software Developer',
                date: 'Aug 2019 - Jul 2021',
                points: [
                  'Spearheaded the development of a customer-facing Progressive Web App as Lead Developer',
                  'Revamped the entire login page for enhanced visual appeal and functionality',
                  'Worked on a design system using React and TypeScript for reusable components',
                  'Implemented custom service workers in Create React App, reducing onUpdate app crashes'
                ]
              },
              {
                company: 'Aayuv Technologies (ekincare)',
                role: 'SDE Intern',
                date: 'Dec 2017 - May 2018',
                points: [
                  'Implemented digitization of medical reports using Deep Learning modules',
                  'Reduced execution time for converting PDFs to images using system commands',
                  'Revamped the Events feature by integrating the MeraEvents service',
                  'Worked with Ruby on Rails, Python, Flask, and AWS Lambda'
                ]
              },
            ].map((job, index) => (
              <motion.div 
                key={job.company}
                className="relative pl-8 border-l-2 border-purple-600 dark:border-purple-400"
                variants={fadeInUp}
              >
                <div className="absolute w-4 h-4 bg-purple-600 dark:bg-purple-400 rounded-full -left-[9px] top-0" />
                <h3 className="text-xl font-bold mb-1">{job.role}</h3>
                <p className="text-purple-600 dark:text-purple-400 mb-2">{job.company}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 font-mono">{job.date}</p>
                <ul className="space-y-2">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex items-start space-x-2 text-zinc-600 dark:text-zinc-400">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-16">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 flex items-center"
            variants={fadeInUp}
          >
            <span className="text-purple-600 dark:text-purple-400 font-mono mr-4">03.</span>
            Some Things I've Built
          </motion.h2>
          <div className="space-y-24">
            {[
              {
                title: 'WritesyAI',
                description: 'A Chrome extension powered by ChatGPT that helps users write better content. Features include real-time suggestions, grammar checking, and style improvements.',
                tech: ['React', 'TypeScript', 'Chrome API', 'OpenAI'],
                links: {
                  demo: 'https://writesyai.framer.ai/',
                  github: '#'
                },
                image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80'
              },
              {
                title: 'BannerBlend',
                description: 'A heavily configurable and customizable SaaS tool for integrating banners into websites. Helps businesses create and manage their website announcements effectively.',
                tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
                links: {
                  demo: '#',
                  github: '#'
                },
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
              }
            ].map((project, index) => (
              <motion.div 
                key={project.title}
                className="relative md:grid md:grid-cols-12 gap-4 items-center"
                variants={fadeInUp}
              >
                <div className={`md:col-span-7 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 
                        filter grayscale hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-purple-600/20 group-hover:bg-transparent transition-colors duration-300 rounded-lg" />
                  </div>
                </div>
                <div className={`md:col-span-5 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <p className="font-mono text-purple-600 dark:text-purple-400 mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-lg mb-4">
                    <p className="text-zinc-600 dark:text-zinc-400">{project.description}</p>
                  </div>
                  <ul className="flex flex-wrap gap-2 mb-4 font-mono text-sm text-zinc-600 dark:text-zinc-400">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="flex space-x-4">
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400 transition-colors"
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-16">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 flex items-center justify-center"
            variants={fadeInUp}
          >
            <span className="text-purple-600 dark:text-purple-400 font-mono mr-4">04.</span>
            What's Next?
          </motion.h2>
          <motion.h3 
            className="text-4xl font-bold mb-4"
            variants={fadeInUp}
          >
            Get In Touch
          </motion.h3>
          <motion.p 
            className="text-zinc-600 dark:text-zinc-400 mb-8"
            variants={fadeInUp}
          >
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </motion.p>
          <motion.div variants={fadeInUp}>
            <button 
              onClick={() => window.location.href = 'mailto:margamsrikanth.cs7@gmail.com'}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              <span>Say Hello</span>
              <ArrowUpRight size={18} />
            </button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

