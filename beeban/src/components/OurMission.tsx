import React from 'react';

const OurMission = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/5 right-[-10%] w-72 h-72 bg-gradient-radial from-white/10 to-transparent rounded-full animate-float" />
      <div className="absolute bottom-1/10 left-[-5%] w-48 h-48 bg-gradient-radial from-white/5 to-transparent rounded-full animate-float-reverse" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-green-300 text-4xl lg:text-6xl font-extrabold text-center mb-12 drop-shadow-lg relative">
          Our Mission
          {/* Decorative lines */}
          <div className="absolute top-1/2 left-0 w-[calc(50%-12rem)] h-0.5 bg-gradient-to-r from-transparent to-white/50 transform -translate-y-1/2 hidden lg:block" />
          <div className="absolute top-1/2 right-0 w-[calc(50%-12rem)] h-0.5 bg-gradient-to-l from-transparent to-white/50 transform -translate-y-1/2 hidden lg:block" />
        </h2>
        
        <div className="text-center mb-12">
          <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl max-w-5xl mx-auto">
            <p className="text-yellow-300 text-xl lg:text-2xl font-bold italic mb-6 drop-shadow-lg">
              "We aim to spark a love for learning through play—offering joyful, low-cost, and inclusive experiences that awaken curiosity and confidence."
            </p>
            <p className="text-white text-lg lg:text-xl leading-relaxed text-justify">
              With trained youth volunteers and strong school partnerships, we empower children to explore and grow. Over time, we support communities to sustain playful learning on their own.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400 relative overflow-hidden group">
            {/* Animated shine effect */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/3 to-transparent transform -translate-x-full -translate-y-full rotate-45 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-600" />
            
            <p className="text-white text-base lg:text-lg leading-relaxed text-justify drop-shadow-sm relative z-10">
              Our mission is to create joyful, curiosity-driven learning experiences for young children by mobilizing passionate youth volunteers. We aim to nurture a love for learning that goes beyond classrooms and textbooks, making education fun, meaningful, and accessible.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400 relative overflow-hidden group">
            {/* Animated shine effect */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/3 to-transparent transform -translate-x-full -translate-y-full rotate-45 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-600" />
            
            <p className="text-white text-base lg:text-lg leading-relaxed text-justify drop-shadow-sm relative z-10">
              Through simple games and thoughtful guidance, we want children to explore their natural curiosity, and help young volunteers grow into empathetic, responsible leaders who care deeply about their communities and the future of education in Nepal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
