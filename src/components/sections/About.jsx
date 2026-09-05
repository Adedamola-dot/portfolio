import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiUsers, FiAward, FiCoffee } from 'react-icons/fi';
import AnimatedText from '../ui/AnimatedText';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: FiCode, label: 'Projects', value: '50+' },
    { icon: FiUsers, label: 'Clients', value: '30+' },
    { icon: FiAward, label: 'Awards', value: '5' },
    { icon: FiCoffee, label: 'Coffee', value: '1000+' },
  ];

  return (
    <section id="about" className="section-padding bg-light-bg dark:bg-dark-bg">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative background */}
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
              
             {/* Image placeholder */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-500/20">
                <img 
                  src="/images/projects/profile.jpeg" 
                  alt="Adebara Adedamola Joshua"
                  className="w-full aspect-square object-cover object-[center_15%]"
                />
              </div>

              {/* Floating stats */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white dark:bg-dark-card px-6 py-3 rounded-xl shadow-lg border border-gray-200 dark:border-dark-border"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.3, type: 'spring' }}
              >
                <p className="text-sm font-medium text-primary-500">★ 5.0 Rating</p>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">About Me</span>
            </motion.div>

            <AnimatedText
              text="Passionate Developer Creating Digital Solutions"
              className="text-3xl sm:text-4xl font-bold font-display"
              delay={0.3}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              I'm Adebara Adedamola Joshua, a Full Stack Developer with a passion for 
              building beautiful, functional, and user-centric applications. With expertise 
              in both frontend and backend technologies, I bring ideas to life through code.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              My journey in web development started with a curiosity for how things work 
              online, and has evolved into a career dedicated to creating exceptional 
              digital experiences. I believe in writing clean code, continuous learning, 
              and pushing the boundaries of what's possible.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <stat.icon className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold font-display gradient-text">{stat.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;