import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 py-8 gap-6 max-w-full overflow-hidden">
      <div className="flex-1 max-w-full lg:max-w-[55%] bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 lg:p-10 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-300 animate-slideInLeft order-2 lg:order-1">
        <h1 className="text-sky-300 text-3xl lg:text-5xl font-bold mb-6 drop-shadow-lg relative">
          Introduction
          <div className="absolute bottom-[-10px] left-0 w-20 h-1 bg-gradient-to-r from-white to-transparent rounded"></div>
        </h1>
        <p className="text-gray-100 text-base lg:text-xl leading-relaxed text-justify drop-shadow-sm">
          <span className="text-yellow-300 font-semibold">Play 2 Learn</span> is an educational initiative designed to spark{' '}
          <span className="text-yellow-300 font-semibold">curiosity</span> in
          young children through <span className="text-yellow-300 font-semibold">playful and engaging activities</span>. Rather than using
          traditional teaching methods, our approach focuses on <span className="text-yellow-300 font-semibold">learning through
          play</span>; helping children explore, ask questions, and enjoy the process of
          discovering new things.
          <br /><br />
          At the heart of the program are trained youth volunteers, known as
          "<span className="text-yellow-300 font-semibold">Learning Buddies</span>," who guide children through games that encourage
          <span className="text-yellow-300 font-semibold">curiosity, creativity, and joy</span>. Learning Buddies are recent SEE
          graduates, high school students, undergraduate or graduate level students
          primarily from Makwanpaur district.
          <br /><br />
          Play 2 Learn operates in schools through short sessions that include a
          variety of <span className="text-yellow-300 font-semibold">age-appropriate games and activities</span>. These sessions are
          designed to fit into the school day without disrupting the regular
          routine. The games are carefully selected to keep children engaged while
          promoting skills such as <span className="text-yellow-300 font-semibold">observation, thinking, and problem-solving</span>.
          <br /><br />
          Our core belief is that <span className="text-yellow-300 font-semibold">curiosity is a natural gift</span> in every child and by
          nurturing it early, we help build a strong foundation for <span className="text-yellow-300 font-semibold">lifelong
          learning</span>. At its core, Play 2 Learn is about preserving and promoting one
          of the most powerful gifts we all share — <span className="text-yellow-300 font-semibold">curiosity</span>.
        </p>
      </div>

      <div className="flex-1 max-w-full lg:max-w-[45%] perspective-1000 animate-slideInRight order-1 lg:order-2">
        <img 
          src="/learning-illustration.jpeg" 
          alt="Learning illustration" 
          className="w-full h-full object-cover rounded-3xl border border-white border-opacity-20 shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-400"
        />
      </div>
    </section>
  );
};

export default Hero;
