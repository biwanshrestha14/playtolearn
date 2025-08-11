import React from 'react';

const OurVision = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-radial from-white/5 to-transparent animate-spin-slow" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 lg:p-16 border border-white border-opacity-20 shadow-3xl hover:transform hover:-translate-y-2 hover:shadow-4xl hover:bg-opacity-15 transition-all duration-400">
        <h2 className="text-yellow-400 text-4xl lg:text-6xl font-extrabold mb-12 drop-shadow-lg relative inline-block">
          Our Vision
          <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded" />
        </h2>
        
        <div className="space-y-8">
          <div className="text-center mb-8">
            <p className="text-yellow-300 text-2xl lg:text-3xl font-bold italic drop-shadow-lg">
              "To create a world where every child learns with joy, curiosity, and confidence—through the power of play."
            </p>
          </div>
          
          <p className="text-white text-lg lg:text-xl leading-loose text-justify drop-shadow-sm">
            Play 2 Learn is run by young people, for young people. Our vision is to provide a unique model of learning to young children which is interesting and easy to grasp. We inspire young volunteers to make a meaningful impact in their communities by engaging with one of the most important causes: education. We believe that with good ideas and a sincere heart, anyone can contribute to positive change.
          </p>
          
          <p className="text-white text-lg lg:text-xl leading-loose text-justify drop-shadow-sm">
            Our focus is not to teach in the traditional sense, but to inspire a love of learning; encouraging children to explore, question, and grow with confidence. Additionally, through our program, we equip volunteers (Learning Buddies) with the skills to lead playful, curiosity-driven activities that bring joy to young children and spark their interest in learning.
          </p>
          
          <p className="text-white text-xl lg:text-2xl font-semibold text-center drop-shadow-lg">
            We strive to inspire a sense of social responsibility in our volunteers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
