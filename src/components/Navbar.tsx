import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTiktok, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center p-3 lg:p-4 lg:px-8 bg-white bg-opacity-10 backdrop-blur-md sticky top-0 z-50 border-b border-white border-opacity-20 transition-all duration-300">
        <div className="flex items-center gap-2 md:gap-4">
          <Link to='/'>
            <img className="h-12 md:h-16 lg:h-20 transition-transform transform hover:scale-110" src="/logofinal.png" alt="Logo" />
          </Link>
          <div className="text-left">
            <Link to='/'>
              <h3 className="text-white font-extrabold text-lg md:text-2xl mb-1 md:mb-2">
                <span className="text-red-400">Play</span>{" "}
                <span className="text-yellow-300">To</span>{" "}
                <span className="text-cyan-300">Learn</span>
              </h3>
            </Link>
            <div className='flex items-center'>
              <p className="text-red-400 text-xs md:text-sm mb-2 md:mb-3 font-bold">Follow us on:</p>
              <div className="flex gap-2 md:gap-3 text-sm md:text-xl ml-1 md:ml-2 mb-2 md:mb-3">
                <a href="https://www.facebook.com/profile.php?id=61578793521662" target="_blank" rel="noreferrer" className="text-white-500 hover:scale-150 transition-transform invert">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/play_2_learnn/" target="_blank" rel="noreferrer" className="text-black-500 hover:scale-150 transition-transform invert">
                  <FaInstagram />
                </a>
                <a href="https://www.tiktok.com/@play2learn125" target="_blank" rel="noreferrer" className="text-black hover:scale-150 transition-transform invert">
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hamburger menu button */}
        <button
          onClick={toggleMenu}
          className="flex flex-col cursor-pointer sm:hidden p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300"
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>

        {/* Desktop menu */}
        <div className="hidden sm:flex gap-8">
          <ul className="flex list-none gap-8">
            <li className="relative">
              <Link to="/" className="text-white font-medium px-4 py-2 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:bg-opacity-20 hover:shadow-lg block relative">
                Home
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 hover:w-3/4" />
              </Link>
            </li>
            <li className="relative">
              <Link to="/why-us" className="text-white font-medium px-4 py-2 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:bg-opacity-20 hover:shadow-lg block relative">
                Why Us?
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 hover:w-3/4" />
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="/team/members"
                className="text-white font-medium px-4 py-2 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:bg-opacity-20 hover:shadow-lg block relative"
              >
                Meet Our Team
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4" />
              </Link>

              {/* Dropdown Menu */}
              <ul className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <li>
                  <Link
                    to="/team/Owner"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Owner & Key Advisor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team/members"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Our Member
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team/alumini"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Our Alumni
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team/playmaker"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Our Playmaker
                  </Link>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <Link
                to="/programs"
                className="text-white font-medium px-4 py-2 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:bg-opacity-20 hover:shadow-lg block relative"
              >
                Programs
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4" />
              </Link>

              {/* Dropdown Menu */}
              <ul className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <li>
                  <Link
                    to="/sessions"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Our Sessions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/games"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Our Games
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partners"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Reached School
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative">
              <Link to="/resources" className="text-white font-medium px-4 py-2 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:bg-opacity-20 hover:shadow-lg block relative">
                Resources
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 hover:w-3/4" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Full Height Mobile menu overlay */}
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-95 backdrop-blur-lg sm:hidden z-50 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {/* Mobile navbar header */}
        <div className="flex justify-between items-center p-3 lg:p-4 lg:px-8 bg-white bg-opacity-10 backdrop-blur-md border-b border-white border-opacity-20">
          <div className="flex items-center gap-2 md:gap-4">
            <Link to='/' onClick={() => setIsMenuOpen(false)}>
              <img className="h-12 md:h-16 lg:h-20 transition-transform transform hover:scale-110" src="/logofinal.png" alt="Logo" />
            </Link>
            <div className="text-left">
              <Link to='/' onClick={() => setIsMenuOpen(false)}>
                <h3 className="text-white font-extrabold text-lg md:text-2xl mb-1 md:mb-2">
                  <span className="text-red-400">Play</span>{" "}
                  <span className="text-yellow-300">To</span>{" "}
                  <span className="text-cyan-300">Learn</span>
                </h3>
              </Link>
            </div>
          </div>
          
          {/* Close button */}
          <button
            onClick={toggleMenu}
            className="p-3 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300"
            aria-label="Close menu"
          >
            <FaTimes className="text-white text-xl" />
          </button>
        </div>

        {/* Mobile menu content */}
        <div className="flex-1 overflow-y-auto h-full pt-4">
          <ul className="flex flex-col p-4 gap-2 pb-6">
            {/* Single Menu Items */}
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/" className="text-white font-semibold text-base p-3 rounded-lg text-left transition-all duration-300 hover:bg-blue-600 hover:bg-opacity-30 hover:shadow-lg block border border-transparent hover:border-blue-400">
                🏠 Home
              </Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/why-us" className="text-white font-semibold text-base p-3 rounded-lg text-left transition-all duration-300 hover:bg-blue-600 hover:bg-opacity-30 hover:shadow-lg block border border-transparent hover:border-blue-400">
                ❓ Why Us?
              </Link>
            </li>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent my-2" />

            {/* Team Section */}
            <li>
              <div className="text-white font-bold text-lg p-3 rounded-lg text-left bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg border border-blue-400 mb-2">
                <span className="flex items-center gap-2">
                  👥 Meet Our Team
                </span>
              </div>
              <ul className="ml-4 space-y-1">
                <li onClick={() => setIsMenuOpen(false)}>
                  <Link to="/team/Owner" className="text-blue-200 font-medium text-sm p-2 rounded-md text-left transition-all duration-300 hover:bg-blue-600 hover:bg-opacity-20 hover:text-white hover:shadow-md block border border-transparent hover:border-blue-400">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                      Owner & Key Advisor
                    </span>
                  </Link>
                </li>
                <li onClick={() => setIsMenuOpen(false)}>
                  <Link to="/team/members" className="text-blue-200 font-medium text-sm p-2 rounded-md text-left transition-all duration-300 hover:bg-blue-600 hover:bg-opacity-20 hover:text-white hover:shadow-md block border border-transparent hover:border-blue-400">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                      Our Members
                    </span>
                  </Link>
                </li>
                <li onClick={() => setIsMenuOpen(false)}>
                  <Link to="/team/alumini" className="text-blue-200 font-medium text-sm p-2 rounded-md text-left transition-all duration-300 hover:bg-blue-600 hover:bg-opacity-20 hover:text-white hover:shadow-md block border border-transparent hover:border-blue-400">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                      Our Alumni
                    </span>
                  </Link>
                </li>
                <li onClick={() => setIsMenuOpen(false)}>
                  <Link to="/team/playmaker" className="text-blue-200 font-medium text-sm p-2 rounded-md text-left transition-all duration-300 hover:bg-blue-600 hover:bg-opacity-20 hover:text-white hover:shadow-md block border border-transparent hover:border-blue-400">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                      Our Playmakers
                    </span>
                  </Link>
                </li>
              </ul>
            </li>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent my-2" />

            {/* Programs Section */}
            <li>
              <div className="text-white font-bold text-lg p-3 rounded-lg text-left bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg border border-blue-400 mb-2">
                <span className="flex items-center gap-2">
                  📚 Programs
                </span>
              </div>
              <ul className="ml-4 space-y-1">
                <li onClick={() => setIsMenuOpen(false)}>
                  <Link to="/sessions" className="text-blue-200 font-medium text-sm p-2 rounded-md text-left transition-all duration-300 hover:bg-blue-600 hover:bg-opacity-20 hover:text-white hover:shadow-md block border border-transparent hover:border-blue-400">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                      Our Sessions
                    </span>
                  </Link>
                </li>
                <li onClick={() => setIsMenuOpen(false)}>
                  <Link to="/games" className="text-blue-200 font-medium text-sm p-2 rounded-md text-left transition-all duration-300 hover:bg-blue-600 hover:bg-opacity-20 hover:text-white hover:shadow-md block border border-transparent hover:border-blue-400">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                      Our Games
                    </span>
                  </Link>
                </li>
              </ul>
            </li>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent my-2" />

            {/* Final Single Items */}
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/partners" className="text-white font-semibold text-base p-3 rounded-lg text-left transition-all duration-300 hover:bg-blue-600 hover:bg-opacity-30 hover:shadow-lg block border border-transparent hover:border-blue-400">
                🤝 Trusted Partners
              </Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/resources" className="text-white font-semibold text-base p-3 rounded-lg text-left transition-all duration-300 hover:bg-blue-600 hover:bg-opacity-30 hover:shadow-lg block border border-transparent hover:border-blue-400">
                📖 Resources
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;