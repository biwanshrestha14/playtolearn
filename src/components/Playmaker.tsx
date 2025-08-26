import { useState } from "react";

type PlaymakerMember = {
  name: string;
  description: string;
  image: string;
  role: string;
};

const Playmaker = () => {
    const playmakers = [
    {
      name: "Pragalb Dahal",
      description: "I'm a kind, honest, and hardworking person who always tries my best.",
      image: "/team/pragalb.jpg",
      role: "Playmaker"
    },
    {
      name: "Sital Kafle",
      description: "Enjoy exploring new things",
      image: "/team/sital.jpg",
      role: "Playmaker"
    },
    {
      name: "Swikar Ghimire",
      description: "I am very active and punctual in person.",
      image: "/team/swikar.jpg",
      role: "Playmaker"
    },
    {
      name: "Sushma Bartaula",
      description: "I'm someone who loves peace, comfort, and meaningful little moments. Spending time with kids brings me pure joy and reminds me to stay playful. I'm on a journey of growing, healing, and understanding myself—one step at a time.",
      image: "/team/sushma.jpg",
      role: "Playmaker"
    },
    {
      name: "Roneel Manandhar",
      description: "I am a friendly and creative person who loves music. I enjoy working in a team and sharing ideas with others. I always try to stay positive and help people around me. I like learning new things and improving myself every day. I believe in working hard and following my dreams.",
      image: "/team/roneel.jpg",
      role: "Playmaker"
    },
    {
      name: "Anuj Poudel",
      description: "Myself anuj poudel. I live in hetauda 5. My hobby is to do sketches in my free time.",
      image: "/team/anuj.jpg",
      role: "Playmaker"
    },
    {
      name: "Riya Chhetri",
      description: "I am a hard-working and driven individual who isn't afraid to face a challenge. I'm passionate about my work and I know how to get the job done. I would describe myself as an open and honest person who doesn't believe in misleading other people and tries to be fair in everything I do.",
      image: "/team/riya.jpg",
      role: "Playmaker"
    },
    {
      name: "Urja Kayastha",
      description: "My interest is to explore new innovation of arts and designing my hobby is to be model, fashion designer and as a social worker. My self-reflection is to communicate with other people.",
      image: "/team/urja.jpg",
      role: "Playmaker"
    },
    {
      name: "Nitika Pudasaini",
      description: "I am a unique individual with a blend of strengths, experiences, and aspirations. I am navigating life with a mix of curiosity and resilience, learning from challenges and celebrating growth.",
      image: "/team/nitika.jpg",
      role: "Playmaker"
    },
    {
      name: "Abisha Gurung",
      description: "My interest is to dance my hobby is to be fashion designer. Can communicate with others friendly",
      image: "/team/abisha.jpg",
      role: "Playmaker"
    },
    {
      name: "Nischal Khatiwada",
      description: "I am nischal Khatiwada from hetauda.",
      image: "/team/nischal.jpg",
      role: "Playmaker"
    },
    {
      name: "Saramsha",
      description: "Traveling, playing games",
      image: "/team/saramsha.jpg",
      role: "Playmaker"
    },
    {
      name: "Bibisha Lamsal",
      description: "I am passionate about learning and exploring new ideas, especially in the field of healthcare. My main hobby is watching documentaries related to health and wellness which helps me stay informed and inspired. I enjoy helping others and often take part in volunteering activities. As a person I am caring, dedicated, and always eager to grow both personally and professionally. I believe in kindness, hard work, and continuous self-improvement.",
      image: "/team/bibisha.jpg",
      role: "Playmaker"
    },
    {
      name: "Samita Thapa",
      description: "Honest, creative, kind, communicative, determined",
      image: "/team/samita.jpg",
      role: "Playmaker"
    }
  ];

  const [selectedMember, setSelectedMember] = useState<PlaymakerMember | null>(null);

  const TeamCard = ({ member }: { member: PlaymakerMember }) => (
    <div
      onClick={() => setSelectedMember(member)}
      className="cursor-pointer group relative bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 border border-white border-opacity-20 shadow-2xl hover:-translate-y-3 hover:shadow-4xl hover:bg-opacity-15 transition-all duration-500 overflow-hidden w-64 h-96 flex flex-col"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/10 to-transparent transform -translate-x-full -translate-y-full rotate-45 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-700" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Profile Image */}
        <div className="relative mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-300 flex-shrink-0">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
            <div className="text-white text-4xl font-bold">
              {member.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
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
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-green-500/20 text-green-300 border border-green-400/30">
            {member.role}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-white text-xl font-bold text-center mb-2 group-hover:text-green-300 transition-colors duration-300 flex-shrink-0">
          {member.name}
        </h3>

        {/* Short Description */}
        <p className="text-gray-100 text-sm leading-relaxed text-center line-clamp-4 flex-grow mb-3">
          {member.description}
        </p>

        {/* Decorative element */}
        <div className="mt-4 flex justify-center flex-shrink-0">
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full group-hover:via-green-300/70 transition-all duration-300" />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <h2 className="text-green-300 text-3xl lg:text-4xl font-bold text-center mb-12 drop-shadow-lg mt-4">
        Playmakers
      </h2>

      {/* Cards Grid */}
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-8">
          {playmakers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-16">
        <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl max-w-4xl mx-auto">
          <h3 className="text-yellow-300 text-2xl lg:text-3xl font-bold mb-4">
            Together We Make Learning Joyful
          </h3>
          <p className="text-white text-lg leading-relaxed">
            Each member of our team brings unique strengths, perspectives, and passion to Play2Learn. 
            Together, we create magical learning experiences that inspire children and empower communities.
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl max-w-2xl w-full text-white">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-white hover:text-red-400 text-2xl"
            >
              ✕
            </button>

            {/* Image */}
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-white/20">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name + Role */}
            <h3 className="text-2xl font-bold text-center mb-2 text-yellow-300">
              {selectedMember.name}
            </h3>
            <p className="text-center text-yellow-200 font-semibold mb-6">
              {selectedMember.role}
            </p>

            {/* Full Detail */}
            <p className="text-gray-100 leading-relaxed text-center">
              {selectedMember.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Playmaker;
