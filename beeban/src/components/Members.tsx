
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
      description: "Hardworking, Consistent, Humble, Dependable, Committed",
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
      description: "I am Anjal Adhikari currently working at fun play run. I am studying BBS at makawanpur multiple campus. I love travelling.",
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
  const TeamCard = ({ member }: { member: typeof teamLeaders[0] }) => (
    <div className="group relative bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-3 hover:shadow-4xl hover:bg-opacity-15 transition-all duration-500 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shine effect */}
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/10 to-transparent transform -translate-x-full -translate-y-full rotate-45 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-700" />
      
      <div className="relative z-10">
        {/* Profile Image */}
        <div className="relative mb-6 mx-auto w-32 h-32 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-300">
          {/* Gradient background as fallback */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <div className="text-white text-4xl font-bold">
              {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
          </div>
          {/* Actual image - shows by default if available */}
          <img 
            src={member.image} 
            alt={member.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onLoad={(e) => {
              // Hide the gradient background when image loads successfully
              const gradientBg = (e.target as HTMLImageElement).previousElementSibling as HTMLElement;
              if (gradientBg) gradientBg.style.opacity = '0';
            }}
            onError={(e) => {
              // Show gradient background if image fails to load
              (e.target as HTMLImageElement).style.display = 'none';
              const gradientBg = (e.target as HTMLImageElement).previousElementSibling as HTMLElement;
              if (gradientBg) gradientBg.style.opacity = '1';
            }}
          />
        </div>

        {/* Role Badge */}
        <div className="mb-4 text-center">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
            member.role === 'Team Leader' 
              ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-400/30' 
              : 'bg-green-500/20 text-green-300 border border-green-400/30'
          }`}>
            {member.role}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-white text-xl font-bold text-center mb-4 group-hover:text-yellow-300 transition-colors duration-300">
          {member.name}
        </h3>

        {/* Description */}
        <p className="text-gray-100 text-sm leading-relaxed text-center line-clamp-4 group-hover:text-white transition-colors duration-300">
          {member.description}
        </p>

        {/* Decorative element */}
        <div className="mt-6 flex justify-center">
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full group-hover:via-yellow-300/70 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
  return (
    <div>
         <div className="mb-20">
          <h2 className="text-green-300 text-3xl lg:text-4xl font-bold text-center mb-12 drop-shadow-lg">
            Team Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamLeaders.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
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
      
    </div>
  )
}

export default Members
