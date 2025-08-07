// Hero.tsx
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        className="mb-8 md:mb-0 md:mr-10"
        whileHover={{ scale: 1.05 }}
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src={profileImg}
          alt="Ibrahim Hakim"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </motion.div>

      <motion.div
        className="text-center md:text-left max-w-md"
        whileHover={{ scale: 1.02 }}
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Ibrahim 👋
        </h1>
        <p className="text-lg md:text-xl">
          I'm a developer passionate about web and mobile experiences.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
