import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload } from 'react-icons/fi';
import Button from '../ui/Button';
import AnimatedText from '../ui/AnimatedText';

const Hero = () => {
  const roles = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver'];

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-20 md:pt-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-primary-500/10 dark:bg-primary-500/20 border border-primary-500/20"
            >
              <span className="text-sm font-medium text-primary-500">Available for Freelance</span>
            </motion.div>

            <div className="space-y-4">
              <AnimatedText
                text="Hi, I'm Adebara Adedamola"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display"
                delay={0.2}
              />
              
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-gray-700 dark:text-gray-300">
                <span className="inline-block">I'm a </span>
                <span className="gradient-text">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    {roles[0]}
                  </motion.span>
                </span>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed"
              >
                Building exceptional digital experiences with clean code,
                beautiful design, and a focus on performance and accessibility.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button size="lg" icon={FiMail}>
                Let's Talk
              </Button>
              <Button variant="outline" size="lg" icon={FiDownload} iconPosition="right">
                Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex items-center gap-6"
            >
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Follow me</span>
              <div className="flex items-center gap-4">
                {[
                  { icon: FiGithub, href: 'https://github.com' },
                  { icon: FiLinkedin, href: 'https://linkedin.com' },
                  { icon: FiTwitter, href: 'https://twitter.com' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Animated Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Gradient Orbs */}
              <div className="absolute inset-0 bg-gradient-radial from-primary-500/20 via-purple-500/20 to-transparent rounded-full animate-pulse-slow" />
              <div className="absolute inset-10 bg-gradient-radial from-cyan-500/20 via-transparent to-transparent rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
             {/* Profile Image Placeholder */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-primary-500/20 shadow-2xl">
                <img 
                  src="/images/Man_holding_laptop_in_office_202608282042.jpeg" 
                  alt="Adebara Adedamola Joshua"
                  className="w-full h-full object-cover object-[center_15%]"
                />
              </div>
              {/* Floating Tags */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white dark:bg-dark-card px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-dark-border"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-sm font-medium text-primary-500">React</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white dark:bg-dark-card px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-dark-border"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <span className="text-sm font-medium text-purple-500">Tailwind</span>
              </motion.div>
              <motion.div
                className="absolute top-1/2 -left-6 bg-white dark:bg-dark-card px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-dark-border"
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-sm font-medium text-cyan-500">JavaScript</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;