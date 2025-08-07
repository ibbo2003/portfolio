import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gray-900/70 shadow-md">
      <ul className="flex justify-center space-x-8 p-4 font-medium text-white text-lg">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="text-blue-400"
            className="cursor-pointer hover:text-blue-400 transition-colors duration-300 ease-in-out"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="text-blue-400"
            className="cursor-pointer hover:text-blue-400 transition-colors duration-300 ease-in-out"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="text-blue-400"
            className="cursor-pointer hover:text-blue-400 transition-colors duration-300 ease-in-out"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="text-blue-400"
            className="cursor-pointer hover:text-blue-400 transition-colors duration-300 ease-in-out"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
