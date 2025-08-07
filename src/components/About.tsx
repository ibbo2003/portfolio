import { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-purple-100 to-indigo-100 text-gray-800 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        About Me
      </motion.h2>

      {/* Jump effect on hover */}
      <motion.p
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="max-w-xl text-center text-lg"
      >
        Hi, I’m <strong>Ibrahim Hakim</strong>, a Computer Science engineering student passionate about building clean, modern software.
      </motion.p>

      <motion.p
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="max-w-xl text-center text-lg mt-2"
      >
        I enjoy <strong>motor sports</strong>, <strong>MMA</strong>, <strong>cricket</strong>, <strong>books</strong>, and <strong>travel</strong> in my free time.
      </motion.p>

      {showMore && (
        <motion.div
          className="max-w-xl text-center text-base text-gray-800 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
            I love crafting responsive UIs and real-world software that solves problems. Whether working solo or in teams, I’m always learning and iterating.
          </motion.p>
          <motion.p
            className="mt-2"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Explore my <a href="#projects" className="text-indigo-800 underline">projects</a> to see what I’ve built.
          </motion.p>
        </motion.div>
      )}

      {/* Bounce animation on Read More / Show Less button */}
      <motion.button
        className="text-black-600 font-bold mt-4"
        onClick={() => setShowMore(prev => !prev)}
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        {showMore ? 'Show less' : 'Read more'}
      </motion.button>
    </motion.div>
  );
};

export default About;
