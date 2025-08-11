import React from 'react';

const WhatWeOffer = () => {
  const studentOffers = [
    {
      title: "Fun Learning",
      description: "Playful games that make learning exciting and stress-free.",
      icon: "🎯"
    },
    {
      title: "Skill Building",
      description: "Boosts communication, thinking, teamwork, and emotional skills.",
      icon: "🧠"
    },
    {
      title: "Hands-On Activities",
      description: "Interactive games that bring school subjects to life.",
      icon: "👐"
    },
    {
      title: "Creative Play",
      description: "Imagination, storytelling, role-play, and art come alive.",
      icon: "🎨"
    },
    {
      title: "Safe Expression",
      description: "A space to be yourself, try new things, and learn from mistakes.",
      icon: "🛡️"
    },
    {
      title: "Nature Learning",
      description: "Explore the outdoors and spark curiosity about the environment.",
      icon: "🌳"
    },
    {
      title: "Leadership Chances",
      description: "Lead games, help peers, or shine at events like FunMela.",
      icon: "👑"
    },
    {
      title: "Unforgettable Moments",
      description: "Celebrate small wins, make friends, and enjoy special events.",
      icon: "✨"
    }
  ];

  const volunteerOffers = [
    {
      title: "Hands-On Child Development Experience",
      description: "Gain practical experience working with children in educational settings.",
      icon: "👶"
    },
    {
      title: "Creative Freedom in Play Design",
      description: "Design and implement your own creative learning activities.",
      icon: "🎭"
    },
    {
      title: "Learning Through Play Training",
      description: "Receive specialized training in play-based learning methodologies.",
      icon: "📚"
    },
    {
      title: "Peer Collaboration & Team Projects",
      description: "Work with like-minded volunteers on meaningful projects.",
      icon: "🤝"
    },
    {
      title: "Inclusive Community Impact",
      description: "Make a real difference in your local community's education landscape.",
      icon: "🌍"
    },
    {
      title: "Storytelling and Documentation Opportunities",
      description: "Share stories and document the impact of your work.",
      icon: "📝"
    },
    {
      title: "Pathway to Careers in Education",
      description: "Build experience for careers in education or child psychology.",
      icon: "🎓"
    },
    {
      title: "Personal Growth Through Joyful Learning",
      description: "Develop personally while spreading joy and knowledge.",
      icon: "🌱"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-gradient-radial from-white/5 to-transparent rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-gradient-radial from-white/3 to-transparent rounded-full animate-pulse" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-green-300 text-4xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg">
            What We Offer
          </h2>
          <p className="text-white text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Play 2 Learn creates meaningful experiences for both students and volunteers, 
            fostering growth, creativity, and joy in learning.
          </p>
        </div>

        {/* For Students Section */}
        <div className="mb-20">
          <h3 className="text-yellow-400 text-3xl lg:text-4xl font-bold text-center mb-12 drop-shadow-lg">
            For Students
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentOffers.map((offer, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400 group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {offer.icon}
                  </div>
                  <h4 className="text-white text-lg font-bold mb-3 leading-tight">
                    {offer.title}
                  </h4>
                  <p className="text-gray-100 text-sm leading-relaxed">
                    {offer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* For Volunteers Section */}
        <div>
          <h3 className="text-yellow-400 text-3xl lg:text-4xl font-bold text-center mb-12 drop-shadow-lg">
            For Volunteers
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteerOffers.map((offer, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400 group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {offer.icon}
                  </div>
                  <h4 className="text-white text-lg font-bold mb-3 leading-tight">
                    {offer.title}
                  </h4>
                  <p className="text-gray-100 text-sm leading-relaxed">
                    {offer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default WhatWeOffer;
