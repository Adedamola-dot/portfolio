import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-card border-t border-gray-200 dark:border-dark-border">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold font-display gradient-text mb-2">
              AD.
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {currentYear} Adebara Adedamola. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">Connect:</span>
            {[
              { icon: FiGithub, href: 'https://github.com' },
              { icon: FiLinkedin, href: 'https://linkedin.com' },
              { icon: FiTwitter, href: 'https://twitter.com' },
              { icon: FiInstagram, href: 'https://instagram.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-primary-500 text-white rounded-full shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-dark-border">
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;