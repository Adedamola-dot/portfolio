import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/skills';
import AnimatedText from '../ui/AnimatedText';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { key: 'frontend', label: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    { key: 'backend', label: 'Backend', color: 'from-green-500 to-emerald-500' },
    { key: 'devops', label: 'DevOps', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section id="skills" className="section-padding bg-light-bg dark:bg-dark-bg">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">My Skills</span>
          <AnimatedText
            text="Technologies I Work With"
            className="text-3xl sm:text-4xl font-bold font-display mt-2"
            delay={0.2}
          />
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            A comprehensive list of technologies, frameworks, and tools I use to build amazing applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1 + 0.3 }}
              className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-dark-border hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className={`text-xl font-bold font-display mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.label}
              </h3>

              <div className="space-y-4">
                {skills[category.key]?.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.1 + index * 0.05 + 0.5 }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-primary-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-dark-border rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: categoryIndex * 0.1 + index * 0.05 + 0.8, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-primary-500/10 via-purple-500/10 to-cyan-500/10 border border-primary-500/20"
        >
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            🚀 Currently Learning: 
            <span className="text-primary-500 font-bold ml-2 animate-pulse">
              Next.js 14 • TypeScript • GraphQL
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;