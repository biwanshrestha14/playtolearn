
const Resources = () => {
  const handleVolunteerClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScDqqfnCHL-gvuA9-7U8mAkH8WB_FF-nFWi9VzHJ25yNE0bAQ/viewform?usp=header', '_blank');
  };

  return (
    <section className="py-12 lg:py-20 px-3 lg:px-4 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto text-center relative z-10 bg-white bg-opacity-10 backdrop-blur-md rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-16 border border-white border-opacity-20 shadow-3xl">
        <h1 className="text-yellow-400 text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-8 lg:mb-12 drop-shadow-lg">
          Resources
        </h1>
        <p className="text-white text-lg sm:text-xl leading-relaxed mb-8 lg:mb-16 px-2">
          Access educational materials, guides, and resources to support learning through play.
        </p>
        
        {/* Volunteer Section */}
        <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-12 border border-white border-opacity-30 shadow-2xl">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 drop-shadow-md">
            Become a Volunteer
          </h2>
          <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed mb-6 lg:mb-8 max-w-3xl mx-auto px-2">
            Join our community of dedicated volunteers and make a meaningful impact on students' learning experiences.
            Help us bring innovative educational programs to schools and support children's growth through engaging,
            play-based learning activities.
          </p>
          <button
            onClick={handleVolunteerClick}
            className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-5 text-base sm:text-lg lg:text-xl font-bold text-blue-600 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 ease-out hover:from-yellow-300 hover:to-orange-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50"
          >
            <span className="relative z-10 flex items-center">
              <span className="hidden sm:inline">Start Your Volunteer Journey</span>
              <span className="sm:hidden">Volunteer Now</span>
              <svg
                className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </button>
          <p className="text-white text-xs sm:text-sm lg:text-base mt-4 lg:mt-6 opacity-80 px-2">
            Fill out our volunteer application form to get started
          </p>
        </div>
      </div>
      
      {/* Decorative elements - smaller on mobile */}
      <div className="absolute top-5 left-5 lg:top-10 lg:left-10 w-12 h-12 lg:w-20 lg:h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-5 lg:bottom-20 lg:right-10 w-20 h-20 lg:w-32 lg:h-32 bg-pink-400 rounded-full opacity-15 animate-bounce"></div>
      <div className="absolute top-1/2 left-10 lg:left-20 w-10 h-10 lg:w-16 lg:h-16 bg-green-400 rounded-full opacity-25 animate-pulse delay-1000"></div>
    </section>
  );
};

export default Resources;