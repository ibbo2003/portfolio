import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-purple-100 to-indigo-100 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-4">Contact</h2>
      <p className="mb-2 text-lg">📧 ibrahimhakim.official@gmail.com</p>
      <p className="text-lg">
        🔗{' '}
        <a
          href="https://github.com/ibrahimhakim"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/ibrahimhakim
        </a>
      </p>
    </motion.div>
  );
};

export default Contact;
