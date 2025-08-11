import React from 'react';

const OurValues = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/5 right-[-10%] w-72 h-72 bg-gradient-radial from-white/10 to-transparent rounded-full animate-float" />
      <div className="absolute bottom-1/10 left-[-5%] w-48 h-48 bg-gradient-radial from-white/5 to-transparent rounded-full animate-float-reverse" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-green-300 text-4xl lg:text-6xl font-extrabold text-center mb-8 drop-shadow-lg relative">
          Our Values
          {/* Decorative lines */}
          <div className="absolute top-1/2 left-0 w-[calc(50%-12rem)] h-0.5 bg-gradient-to-r from-transparent to-white/50 transform -translate-y-1/2 hidden lg:block" />
          <div className="absolute top-1/2 right-0 w-[calc(50%-12rem)] h-0.5 bg-gradient-to-l from-transparent to-white/50 transform -translate-y-1/2 hidden lg:block" />
        </h2>
        
        <div className="text-center mb-12">
          <h3 className="text-yellow-300 text-2xl lg:text-3xl font-bold mb-6">What We Believe</h3>
          <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl">
            <p className="text-white text-lg leading-relaxed text-justify mb-4">
              We believe that <span className="text-yellow-300 font-semibold">learning happens best when it's fun</span>. Joy and play spark 
              curiosity, leading to deeper and more meaningful learning. We nurture a child's inborn curiosity through exploration, 
              discovery, and active participation.
            </p>
            <p className="text-white text-lg leading-relaxed text-justify">
              We believe <span className="text-yellow-300 font-semibold">play is not a break from learning; it is powerful learning</span>. 
              Through play, children develop problem-solving skills, confidence, and creativity.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Curiosity First */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400 relative overflow-hidden group">
            {/* Animated shine effect */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/3 to-transparent transform -translate-x-full -translate-y-full rotate-45 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-600" />
            
            <div className="relative z-10">
              <div className="text-5xl mb-6 text-center">✨</div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-4 text-center">Curiosity First</h3>
              <p className="text-white text-base lg:text-lg leading-relaxed text-justify drop-shadow-sm">
                We believe that curiosity is the foundation of all learning. By nurturing and celebrating children's natural inquisitiveness, we help them develop a lifelong love for discovery and knowledge.
              </p>
            </div>
          </div>
          
          {/* Joy in Learning */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400 relative overflow-hidden group">
            {/* Animated shine effect */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/3 to-transparent transform -translate-x-full -translate-y-full rotate-45 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-600" />
            
            <div className="relative z-10">
              <div className="text-5xl mb-6 text-center">😊</div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-4 text-center">Joy in Learning</h3>
              <p className="text-white text-base lg:text-lg leading-relaxed text-justify drop-shadow-sm">
                Learning should be joyful and exciting. We create environments where children feel happy, safe, and motivated to explore, ensuring that education becomes a positive and memorable experience.
              </p>
            </div>
          </div>

          {/* Community Impact */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400 relative overflow-hidden group">
            {/* Animated shine effect */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/3 to-transparent transform -translate-x-full -translate-y-full rotate-45 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-600" />
            
            <div className="relative z-10">
              <div className="text-5xl mb-6 text-center">🌍</div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-4 text-center">Community Impact</h3>
              <p className="text-white text-base lg:text-lg leading-relaxed text-justify drop-shadow-sm">
                We are committed to making a meaningful difference in our communities. Through our programs, we aim to strengthen educational foundations and inspire positive change at the grassroots level.
              </p>
            </div>
          </div>

          {/* Youth Empowerment */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400 relative overflow-hidden group">
            {/* Animated shine effect */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/3 to-transparent transform -translate-x-full -translate-y-full rotate-45 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-600" />
            
            <div className="relative z-10">
              <div className="text-5xl mb-6 text-center">🚀</div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-4 text-center">Youth Empowerment</h3>
              <p className="text-white text-base lg:text-lg leading-relaxed text-justify drop-shadow-sm">
                We believe in the power of young people to create change. By empowering youth volunteers with skills and confidence, we create leaders who will continue to make a difference in their communities.
              </p>
            </div>
          </div>

          {/* Innovation & Creativity */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400 relative overflow-hidden group">
            {/* Animated shine effect */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/3 to-transparent transform -translate-x-full -translate-y-full rotate-45 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-600" />
            
            <div className="relative z-10">
              <div className="text-5xl mb-6 text-center">💡</div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-4 text-center">Innovation & Creativity</h3>
              <p className="text-white text-base lg:text-lg leading-relaxed text-justify drop-shadow-sm">
                We embrace innovative approaches to education and encourage creative thinking. Our methods are constantly evolving to better serve children and adapt to their changing needs.
              </p>
            </div>
          </div>

          {/* Inclusivity & Respect */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400 relative overflow-hidden group">
            {/* Animated shine effect */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/3 to-transparent transform -translate-x-full -translate-y-full rotate-45 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-600" />
            
            <div className="relative z-10">
              <div className="text-5xl mb-6 text-center">🤗</div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-4 text-center">Inclusivity & Respect</h3>
              <p className="text-white text-base lg:text-lg leading-relaxed text-justify drop-shadow-sm">
                We celebrate diversity and treat every child with respect and dignity. Our programs are designed to be inclusive and welcoming to all, regardless of background, ability, or circumstance.
              </p>
            </div>
          </div>
        </div>
        
        {/* Additional Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400">
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="text-white text-lg font-bold mb-3">Imagination & Open-Ended Thinking</h4>
              <p className="text-gray-100 text-sm leading-relaxed">
                We encourage imagination and open-ended thinking because creativity fuels innovation and lifelong learning.
              </p>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400">
            <div className="text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-white text-lg font-bold mb-3">Life Skills Over Test Scores</h4>
              <p className="text-gray-100 text-sm leading-relaxed">
                We prioritize life skills like communication, collaboration, and critical thinking over rote memorization and test scores.
              </p>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400">
            <div className="text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h4 className="text-white text-lg font-bold mb-3">Learning Beyond Classrooms</h4>
              <p className="text-gray-100 text-sm leading-relaxed">
                We believe education is not limited to classrooms. Parks, playgrounds, homes, and communities are all part of a child's learning environment.
              </p>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400">
            <div className="text-center">
              <div className="text-4xl mb-4">👫</div>
              <h4 className="text-white text-lg font-bold mb-3">Collaboration & Teamwork</h4>
              <p className="text-gray-100 text-sm leading-relaxed">
                Collaboration and shared experiences build social skills and deepen learning. We foster peer learning and teamwork through group play.
              </p>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400">
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="text-white text-lg font-bold mb-3">Safe & Inclusive Spaces</h4>
              <p className="text-gray-100 text-sm leading-relaxed">
                We create safe, inclusive spaces where all children, regardless of background or ability, can learn, play, and thrive.
              </p>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400">
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h4 className="text-white text-lg font-bold mb-3">Full Potential Development</h4>
              <p className="text-gray-100 text-sm leading-relaxed">
                Education should awaken a child's full potential—not just prepare them for exams. We focus on holistic development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
