import { useState } from "react";

type Leader = {
    id: number;
    name: string;
    description: string;
    image: string;
    role: string;
};

const Members = () => {
    const teamLeaders: Leader[] = [
        {
            id: 1,
            name: "Kishu Kuikel",
            description:
                "At PlayToLearn, we help children learn through play, sparking curiosity, creativity, and confidence. Our programs make education fun, encouraging exploration, problem-solving, and a lifelong love of learning. We aim to nurture not just knowledge, but emotional and social growth, empowering every child to thrive and discover their full potential.",
            image: "/team/leadM.jpeg",
            role: "Founder",
        },
        {
            id: 2,
            name: "Ranju Darshana",
            description:
                "As a Key Advisor at Play 2 Learn, I’m proud to support a youth-led movement that uses the power of play to spark curiosity, joy, and confidence in young children—while empowering volunteers to grow into compassionate and socially responsible leaders.",
            image: "/team/leadw.jpg",
            role: "Key Advisor",
        },

    ];

    const [selectedMember, setSelectedMember] = useState<Leader | null>(null);

    const TeamCard = ({ member }: { member: Leader }) => (
        <div
            onClick={() => setSelectedMember(member)}
            className="cursor-pointer group relative bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 border border-white border-opacity-20 shadow-2xl hover:-translate-y-3 hover:shadow-4xl hover:bg-opacity-15 transition-all duration-500 overflow-hidden w-96 h-96 flex flex-col"
        >
            {/* Gradient & Shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/10 to-transparent transform -translate-x-full -translate-y-full rotate-45 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-700"></div>

            <div className="relative z-10 flex flex-col h-full">
                {/* Profile Image */}
                <div className="relative mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-300 flex-shrink-0">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
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

                {/* Decorative element */}
                <div className="mt-4 flex justify-center flex-shrink-0">
                    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full group-hover:via-yellow-300/70 transition-all duration-300" />
                </div>
            </div>
        </div>
    );


    return (
        <div>
            <h2 className="text-green-300 text-3xl lg:text-4xl font-bold text-center mb-12 mt-4">
                Our Owner & Key Advisor      </h2>

            {/* Centered Grid */}
            <div className="flex flex-wrap justify-center gap-8">
                {teamLeaders.map((member) => (
                    <TeamCard key={member.id} member={member} />
                ))}
            </div>

            {/* Footer Section */}
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
                        {/* Gradient shine */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-20 rounded-3xl pointer-events-none"></div>

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

                        {/* Full Description */}
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
