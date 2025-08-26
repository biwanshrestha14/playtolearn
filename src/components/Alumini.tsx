import { useState } from "react";

const Playmaker = () => {
 const playmakers = [
        {
            name: "Srijal Basnet",
            description: "I'm a natural leader. I've received a promotion to a leadership role in almost every job because I like to help people. I find coworkers usually come to me with questions or concerns even when I'm not in a leadership role because if I don't know the answer, I'll at least point them in the right direction.",
            image: "/alumni/srijal.jpg",
            role: "Alumni"
        },
        {
            name: "Bipan Khanal",
            description: "I am the humble one who loves sports crazily and also describe myself as a passionate, caring and reliable and seeking for opportunity cost",
            image: "/alumni/bipan.jpg",
            role: "Alumni"
        },
        {
            name: "Kushal KC",
            description: "I am interested in this platform. I'm a cricket player of district level. My hobby is interacting with children how they are going.",
            image: "/alumni/kushal.jpg",
            role: "Alumni"
        },
        {
            name: "Saugat Bartaula",
            description: "I am very interested in working for cause. I am really genuine, innovative, and curious",
            image: "/alumni/saugat.jpg",
            role: "Alumni"
        },
        {
            name: "Aarya Shrestha",
            description: "I have a passion for learning new skills and enjoy exploring various hobbies, with cooking being a favorite. I'm dedicated to personal growth and constantly seek new opportunities to expand my knowledge. My hardworking and competitive nature fuels my ambition. My fighting spirit drives me to overcome challenges and achieve my goals.",
            image: "/alumni/aarya.jpg",
            role: "Alumni"
        },
        {
            name: "Sara Kafle",
            description: "I'm interested more in watching series. I like dancing. I'm also interested in social works. I'm a humble human. I'm interested in social activities too.",
            image: "/alumni/sara.jpg",
            role: "Alumni"
        },
        {
            name: "Ankita Paudel",
            description: "I'm interested in doing social work, I like dancing, I'm also interested in looking series, I'm humble woman.",
            image: "/alumni/ankita.jpg",
            role: "Alumni"
        },
        {
            name: "Anwesh Chaudhary",
            description: "Artistic charismatic helpful creative lovely",
            image: "/alumni/anwesh.jpg",
            role: "Alumni"
        },
        {
            name: "Shirshak Kafle",
            description: "I am a very young energetic boy in my teenage having a sound health and good humor.",
            image: "/alumni/shirshak.jpg",
            role: "Alumni"
        },
        {
            name: "Jyoti Pokhrel",
            description: "I am a person who is positive about every aspect of life.",
            image: "/alumni/jyoti.jpg",
            role: "Alumni"
        },
        {
            name: "Sujisa Gautam",
            description: "I like volleyball. I used to sing song. I like to do volunteering",
            image: "/alumni/sujisa.jpg",
            role: "Alumni"
        },
        {
            name: "Najma Basnyat",
            description: "Love teaching others",
            image: "/alumni/najma.jpg",
            role: "Alumni"
        },
        {
            name: "Pranish Sedai",
            description: "I'm Pranish Sedai from Hetauda 8 Kamane.",
            image: "/alumni/pranish.jpg",
            role: "Alumni"
        },
        {
            name: "Aman Regmi",
            description: "My name is aman regmi I'm in class 11 I'm from hetauda",
            image: "/alumni/aman.jpg",
            role: "Alumni"
        },
        {
            name: "Barsha Khadka",
            description: "I would describe myself as an open and honest person who doesn't believe in misleading other people and tries to be fair in everything I do.",
            image: "/alumni/barsha.jpg",
            role: "Alumni"
        },
        {
            name: "Puja Yonjan",
            description: "I am a friendly person.",
            image: "/alumni/puja.jpg",
            role: "Alumni"
        },
        {
            name: "Nalina Phuyal",
            description: "It's me Nalina phuyal. Playing, sleeping, dancing are my favorite hobbies. I like the children most.",
            image: "/alumni/nalina.jpg",
            role: "Alumni"
        },
        {
            name: "Rahul Singh Thakuri",
            description: "I'm Rahul Singh Thakuri from hetauda. I Just completed my bachelor degree from B.com stream India. My goal is to create more engaging lesson plans that incorporate fun learning activities to enhance students' participation and understanding. Also, incorporating real-life scenarios can help students connect the material to their own lives.",
            image: "/alumni/rahul.jpg",
            role: "Alumni"
        },
        {
            name: "Sujita Dhakal",
            description: "Hello my name is sujita dhakal. I love playing basketball. My hobby is to be banker. And am just a simple person with no modernity.",
            image: "/alumni/sujita.jpg",
            role: "Alumni"
        },
        {
            name: "Ashmita Adhikari",
            description: "My name is Ashmita adhikari my hobby is Travelling dancing.",
            image: "/alumni/ashmita.jpg",
            role: "Alumni"
        }
    ];
  const [selectedMember, setSelectedMember] = useState(null);

  const TeamCard = ({ member }) => (
    <div
      onClick={() => setSelectedMember(member)}
      className="cursor-pointer group relative bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 border border-white border-opacity-20 shadow-2xl hover:-translate-y-3 hover:shadow-4xl hover:bg-opacity-15 transition-all duration-500 overflow-hidden w-64 h-96 flex flex-col"
    >
      {/* Gradient & Shine */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/10 to-transparent transform -translate-x-full -translate-y-full rotate-45 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-700" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Profile Image */}
        <div className="relative mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-300 flex-shrink-0">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
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
      <h2 className="text-green-300 text-3xl lg:text-4xl font-bold text-center mb-12 mt-4">
        Alumni
      </h2>

      {/* Centered grid */}
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-8">
          {playmakers.map((member) => (
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
            <h3 className="text-2xl font-bold text-center mb-2 text-green-300">
              {selectedMember.name}
            </h3>
            <p className="text-center text-green-200 font-semibold mb-6">
              {selectedMember.role}
            </p>

            {/* Full Detail */}
            <p className="text-gray-100 leading-relaxed text-center mb-3">
              {selectedMember.fullDetail || selectedMember.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Playmaker;
