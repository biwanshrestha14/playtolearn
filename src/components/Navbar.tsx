import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 lg:px-8 bg-white bg-opacity-10 backdrop-blur-md sticky top-0 z-50 border-b border-white border-opacity-20 transition-all duration-300">
      <Link to="/" className="flex items-center gap-4">
        <img className="h-16 lg:h-20 transition-transform transform hover:scale-110" src="/logofinal.png" alt="Logo" />
        <h1 className="text-xl lg:text-2xl font-bold text-white drop-shadow-lg">
          Playtolearn
        </h1>
      </Link>

      {/* Hamburger menu button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col cursor-pointer sm:hidden p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300"
        aria-label="Toggle menu"
      >
        <div className={`w-6 h-1 bg-white mb-1 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <div className={`w-6 h-1 bg-white mb-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-1 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
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
    to="/team"
    className="text-white font-medium px-4 py-2 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:bg-opacity-20 hover:shadow-lg block relative"
  >
    Meet Our Team
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4" />
  </Link>

  {/* Dropdown Menu */}
  <ul className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
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
        Our Anomaly
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
                  to="/games/jenga-structure"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 pl-8"
                >
                  • Jenga Structure
                </Link>
              </li>
              <li>
                <Link
                  to="/games/potato-stick"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 pl-8"
                >
                  • Potato Stick
                </Link>
              </li>
              <li>
                <Link
                  to="/games/cardboard-craft"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 pl-8"
                >
                  • Cardboard Craft
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative">
            <Link to="/partners" className="text-white font-medium px-4 py-2 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:bg-opacity-20 hover:shadow-lg block relative">
              Trusted Partners
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 hover:w-3/4" />
            </Link>
          </li>
          <li className="relative">
            <Link to="/resources" className="text-white font-medium px-4 py-2 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:bg-opacity-20 hover:shadow-lg block relative">
              Resources
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 hover:w-3/4" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <div className={`absolute top-full left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-lg border-b-2 border-blue-400 sm:hidden transition-all duration-300 shadow-2xl ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        <div className="max-h-screen overflow-y-auto">
          <ul className="flex flex-col p-6 gap-3">
            {/* Single Menu Items */}
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/" className="text-white font-semibold text-lg p-4 rounded-xl text-left transition-all duration-300 hover:bg-blue-600 hover:bg-opacity-30 hover:shadow-lg block border border-transparent hover:border-blue-400">
                🏠 Home
              </Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/why-us" className="text-white font-semibold text-lg p-4 rounded-xl text-left transition-all duration-300 hover:bg-blue-600 hover:bg-opacity-30 hover:shadow-lg block border border-transparent hover:border-blue-400">
                ❓ Why Us?
              </Link>
            </li>
            
            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent my-2" />
            
            {/* Team Section */}
            <li>
              <div className="text-white font-bold text-xl p-4 rounded-xl text-left bg-gradient-to-r from-green-600 to-teal-600 shadow-lg border border-green-400 mb-3">
                <span className="flex items-center gap-3">
                  👥 Meet Our Team
                </span>
              </div>
              <ul className="ml-6 space-y-2">
                <li onClick={() => setIsMenuOpen(false)}>
                  <Link to="/team/members" className="text-green-200 font-medium text-base p-3 rounded-lg text-left transition-all duration-300 hover:bg-green-600 hover:bg-opacity-20 hover:text-white hover:shadow-md block border border-transparent hover:border-green-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Our Members
                    </span>
                  </Link>
                </li>
                <li onClick={() => setIsMenuOpen(false)}>
                  <Link to="/team/alumini" className="text-purple-200 font-medium text-base p-3 rounded-lg text-left transition-all duration-300 hover:bg-purple-600 hover:bg-opacity-20 hover:text-white hover:shadow-md block border border-transparent hover:border-purple-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Our Alumni
                    </span>
                  </Link>
                </li>
                <li onClick={() => setIsMenuOpen(false)}>
                  <Link to="/team/playmaker" className="text-teal-200 font-medium text-base p-3 rounded-lg text-left transition-all duration-300 hover:bg-teal-600 hover:bg-opacity-20 hover:text-white hover:shadow-md block border border-transparent hover:border-teal-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                      Our Playmakers
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
            
            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent my-3" />
            
            {/* Programs Section */}
            <li>
              <div className="text-white font-bold text-xl p-4 rounded-xl text-left bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg border border-indigo-400 mb-3">
                <span className="flex items-center gap-3">
                  📚 Programs
                </span>
              </div>
              <ul className="ml-6 space-y-2">
                <li onClick={() => setIsMenuOpen(false)}>
                  <Link to="/sessions" className="text-indigo-200 font-medium text-base p-3 rounded-lg text-left transition-all duration-300 hover:bg-indigo-600 hover:bg-opacity-20 hover:text-white hover:shadow-md block border border-transparent hover:border-indigo-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                      Our Sessions
                    </span>
                  </Link>
                </li>
                <li onClick={() => setIsMenuOpen(false)}>
                  <Link to="/games" className="text-orange-200 font-medium text-base p-3 rounded-lg text-left transition-all duration-300 hover:bg-orange-600 hover:bg-opacity-20 hover:text-white hover:shadow-md block border border-transparent hover:border-orange-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                      Our Games
                    </span>
                  </Link>
                </li>
                <li onClick={() => setIsMenuOpen(false)}>
                  <Link to="/games/jenga-structure" className="text-orange-300 font-medium text-sm p-2 pl-10 rounded-lg text-left transition-all duration-300 hover:bg-orange-600 hover:bg-opacity-15 hover:text-orange-200 hover:shadow-sm block border border-transparent hover:border-orange-500">
                    <span className="flex items-center gap-2">
                      <span className="text-orange-500">•</span>
                      Jenga Structure
                    </span>
                  </Link>
                </li>
                <li onClick={() => setIsMenuOpen(false)}>
                  <Link to="/games/potato-stick" className="text-green-300 font-medium text-sm p-2 pl-10 rounded-lg text-left transition-all duration-300 hover:bg-green-600 hover:bg-opacity-15 hover:text-green-200 hover:shadow-sm block border border-transparent hover:border-green-500">
                    <span className="flex items-center gap-2">
                      <span className="text-green-500">•</span>
                      Potato Stick
                    </span>
                  </Link>
                </li>
                <li onClick={() => setIsMenuOpen(false)}>
                  <Link to="/games/cardboard-craft" className="text-blue-300 font-medium text-sm p-2 pl-10 rounded-lg text-left transition-all duration-300 hover:bg-blue-600 hover:bg-opacity-15 hover:text-blue-200 hover:shadow-sm block border border-transparent hover:border-blue-500">
                    <span className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      Cardboard Craft
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
            
            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent my-3" />
            
            {/* Final Single Items */}
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/partners" className="text-white font-semibold text-lg p-4 rounded-xl text-left transition-all duration-300 hover:bg-blue-600 hover:bg-opacity-30 hover:shadow-lg block border border-transparent hover:border-blue-400">
                🤝 Trusted Partners
              </Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/resources" className="text-white font-semibold text-lg p-4 rounded-xl text-left transition-all duration-300 hover:bg-blue-600 hover:bg-opacity-30 hover:shadow-lg block border border-transparent hover:border-blue-400">
                📖 Resources
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

