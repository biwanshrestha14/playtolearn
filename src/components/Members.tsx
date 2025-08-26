import { useState } from "react";

const Members = () => {
   const teamLeaders = [
    {
      name: "Raghav Lamichhane",
      description: "I am Raghav Lamichhane. That is all about me. Just an open page of the book who loves to write and play cricket.",
      image: "/team/raghav.jpg",
      role: "Team Leader"
    },
    {
      name: "Prabhat Kuikel",
      description: "I am a hard-working and driven individual who isn't afraid to face a challenge. I am very interested in running business. Hobby is to play every game and watch football.",
      image: "/team/prabhat.jpg",
      role: "Team Leader"
    },
    {
      name: "Sarbagya Parajuli",
      description: "Passionate about guiding children and working alongside dedicated individuals to create a fun, inspiring, and impactful learning environment.",
      image: "/team/sarbagya.jpg",
      role: "Team Leader"
    },
    {
      name: "Anna Dahal",
      description: "At first, I'm shy, but once I'm comfy, I'm super outgoing and friendly. I'm warm, lively, and caring in my interactions, making others feel welcomed and valued. Enjoys spending time in nature, playing games, and engaging with others in a joyful and friendly manner.",
      image: "/team/anna.jpg",
      role: "Team Leader"
    },
    {
      name: "Anjal Adhikari",
      description: "Passionate about inspiring young minds through Play to Learn, I create fun, engaging, and interactive activities that make learning enjoyable while helping children build creativity, confidence, and essential life skills.",
      image: "/team/anjal.jpg",
      role: "Team Leader"
    },
    {
      name: "Bijen Lama Thing",
      description: "I am very helpful",
      image: "/team/bijen.jpg",
      role: "Team Leader"
    },
    {
      name: "Abhishek Adhikari",
      description: "Trying to find something new then regular thing.",
      image: "/team/abhishek.jpg",
      role: "Team Leader"
    },
    {
      name: "Sujal Bhattarai",
      description: "Sujal Bhattarai, a very enthusiastic and handsome male. A person with diplomatic and futuristic vision.",
      image: "/team/sujal.jpg",
      role: "Team Leader"
    }
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  const TeamCard = ({ member }) => (
    <div
      onClick={() => setSelectedMember(member)}
      className="cursor-pointer group relative bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 border border-white border-opacity-20 shadow-2xl hover:-translate-y-3 hover:shadow-4xl hover:bg-opacity-15 transition-all duration-500 overflow-hidden w-64 h-96 flex flex-col"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/10 to-transparent transform -translate-x-full -translate-y-full rotate-45 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-700" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Profile Image */}
        <div className="relative mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-300 flex-shrink-0">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <div className="text-white text-4xl font-bold">
              {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>
          </div>
          <img
            src={member.image}
            alt={member.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>

        {/* Role Badge */}
        <div className="mb-4 text-center flex-shrink-0">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-yellow-500/20 text-yellow-300 border border-yellow-400/30">
            {member.role}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-white text-xl font-bold text-center mb-2 group-hover:text-yellow-300 transition-colors duration-300 flex-shrink-0">
          {member.name}
        </h3>

        {/* Short Description */}
        <p className="text-gray-100 text-sm leading-relaxed text-center line-clamp-4 flex-grow mb-3">
          {member.description}
        </p>

        {/* Decorative bar */}
        <div className="mt-4 flex justify-center flex-shrink-0">
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full group-hover:via-yellow-300/70 transition-all duration-300" />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <h2 className="text-green-300 text-3xl lg:text-4xl font-bold text-center mb-12 mt-4">
        Team Leaders
      </h2>

      {/* Centered grid like alumni section */}
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-8">
          {teamLeaders.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-16">
        <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl max-w-4xl mx-auto">
          <h3 className="text-yellow-300 text-2xl lg:text-3xl font-bold mb-4">
            Together We Make Learning Joyful
          </h3>
          <p className="text-white text-lg leading-relaxed">
            Each member of our team brings unique strengths, perspectives, and
            passion to Play2Learn. Together, we create magical learning
            experiences that inspire children and empower communities.
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl max-w-2xl w-full text-white">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-white hover:text-red-400 text-2xl"
            >
              ✕
            </button>

            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-white/20">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold text-center mb-2 text-yellow-300">
              {selectedMember.name}
            </h3>
            <p className="text-center text-yellow-200 font-semibold mb-6">
              {selectedMember.role}
            </p>

            <p className="text-gray-100 leading-relaxed text-center">
              {selectedMember.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Members;
