import React from 'react';

const KeyBenefits = () => {
  const benefits = [
    {
      title: "Academic Performance",
      description: "Deeper engagement and better understanding.",
      icon: "📈"
    },
    {
      title: "Emotional Well-being",
      description: "Builds confidence, resilience, and emotional intelligence.",
      icon: "💙"
    },
    {
      title: "Social Development",
      description: "Enhances communication, empathy, and collaboration.",
      icon: "🤝"
    },
    {
      title: "Future Readiness",
      description: "Prepares for modern challenges with innovation and adaptability.",
      icon: "🚀"
    },
    {
      title: "Lifelong Impact",
      description: "Develops habits of inquiry, reflection, and continuous learning.",
      icon: "🌟"
    },
    {
      title: "Reduces Fear of Failure",
      description: "Students feel more comfortable making mistakes, viewing them as learning steps rather than failures.",
      icon: "🛡️"
    },
    {
      title: "Makes Learning More Meaningful",
      description: "When curiosity is at the center, lessons are hands-on, real-world, and experiential with deeper understanding.",
      icon: "🎯"
    },
    {
      title: "Better Communication Skills",
      description: "Students learn how to communicate their thoughts, listen to others, and respect diverse ideas.",
      icon: "💬"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-80 h-80 bg-gradient-radial from-white/8 to-transparent rounded-full animate-float" />
      <div className="absolute bottom-[-15%] right-[-8%] w-96 h-96 bg-gradient-radial from-white/5 to-transparent rounded-full animate-float-reverse" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-green-300 text-4xl lg:text-6xl font-extrabold mb-8 drop-shadow-lg">
            Key Benefits
          </h2>
          <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl max-w-5xl mx-auto mb-12">
            <p className="text-white text-lg lg:text-xl leading-relaxed text-justify">
              It empowers students to <span className="text-yellow-300 font-semibold">explore, question, and create their own path</span>. 
              It transforms education from a one-way delivery of knowledge into a <span className="text-yellow-300 font-semibold">two-way process 
              of discovery and expression</span>, which is far more impactful in shaping thoughtful, capable, and confident individuals.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-3 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400 group"
            >
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-white text-lg font-bold mb-4 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="text-center mt-16">
          <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl max-w-4xl mx-auto">
            <p className="text-yellow-300 text-xl lg:text-2xl font-bold italic">
              "Our team is driven by the belief that education should awaken a child's full potential—not just prepare them for exams."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
