import { motion } from 'framer-motion';

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Projects = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 w-full max-w-6xl">
        {[
          {
            title: 'Service-Squad',
            description:
              'Service Squad – A web platform built with React and SQL that connects clients with trusted local service providers for various home and professional needs..',
          },
          {
            title: 'CartApp',
            description:
              'A simple shopping cart application built to simulate real-world e-commerce functionality. Users can browse dummy products, add them to their cart, and see the cart update in real-time. The app also includes an address form for placing orders and displays detailed order summaries upon checkout.',
          },
          {
            title: 'EdgeSimPy',
            description:
              'Collaborative edge caching simulator with JSON logging and animated visualization.',
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300"
            initial="initial"
            whileInView="whileInView"
            variants={cardVariants}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-indigo-400">
              {project.title}
            </h3>
            <p className="text-gray-300">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
