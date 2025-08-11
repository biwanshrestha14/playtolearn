import React from 'react';

const OurApproach = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-[-30%] left-[-20%] w-[150%] h-[150%] bg-gradient-radial from-white/3 to-transparent animate-spin-slow" />
      <div className="absolute bottom-[-20%] right-[-15%] w-80 h-80 bg-gradient-radial from-white/8 to-transparent rounded-full animate-pulse" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-yellow-400 text-4xl lg:text-6xl font-extrabold mb-8 drop-shadow-lg">
            Our Approach
          </h2>
          <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl">
            <p className="text-white text-lg lg:text-xl leading-relaxed text-justify mb-6">
              <span className="text-yellow-300 font-semibold">Play to Learn</span> is a child-centered educational approach that blends fun and learning. 
              We believe that children learn best when they are <span className="text-yellow-300 font-semibold">actively engaged, physically, emotionally, and mentally</span>. 
              That's why we use games as powerful tools to teach life skills, academic concepts, and creative thinking.
            </p>
            <p className="text-white text-lg lg:text-xl leading-relaxed text-justify">
              At Play to Learn, we believe that <span className="text-yellow-300 font-semibold">when children play, they learn faster and remember better</span>. 
              That's why we use games as a fun and engaging way to help kids grow their skills from communication to creativity, 
              from academics to life lessons. Our approach makes learning exciting, hands-on, and joyful.
            </p>
          </div>
        </div>

        {/* Key Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-white text-xl font-bold mb-4">Learning Through Play</h3>
            </div>
            <p className="text-white text-base leading-relaxed text-justify">
              We turn learning into play, so every child gets to learn, laugh, and grow at the same time. 
              Our approach makes education an adventure rather than a chore.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🏫</div>
              <h3 className="text-white text-xl font-bold mb-4">School Partnership</h3>
            </div>
            <p className="text-white text-base leading-relaxed text-justify">
              Play to Learn helps children learn better through fun and meaningful games. Our sessions support what they learn in class 
              while building skills like teamwork, focus, and creativity.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-white text-xl font-bold mb-4">Energizing Environment</h3>
            </div>
            <p className="text-white text-base leading-relaxed text-justify">
              We bring energy, learning, and joy to your school environment. Our activities create a positive, 
              vibrant atmosphere that motivates children to participate and engage.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-white text-xl font-bold mb-4">Holistic Development</h3>
            </div>
            <p className="text-white text-base leading-relaxed text-justify">
              Our games develop communication skills, creativity, academic understanding, and life lessons—all while having fun. 
              We focus on the whole child, not just academic achievement.
            </p>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center">
          <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl">
            <h4 className="text-green-300 text-2xl lg:text-3xl font-bold mb-4">
              The Power of Play
            </h4>
            <p className="text-white text-lg lg:text-xl leading-relaxed">
              We believe <span className="text-yellow-300 font-semibold">play is not a break from learning; it is powerful learning</span>. 
              Through play, children develop problem-solving skills, confidence, and creativity that will serve them throughout their lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
