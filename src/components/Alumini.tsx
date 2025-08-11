
const Alumini = () => {
    const alumniMembers = [
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

    const AlumniCard = ({ member }: { member: typeof alumniMembers[0] }) => (
        <div className="group relative bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-3 hover:shadow-4xl hover:bg-opacity-15 transition-all duration-500 overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shine effect */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/10 to-transparent transform -translate-x-full -translate-y-full rotate-45 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-700" />
            
            <div className="relative z-10">
                {/* Profile Image */}
                <div className="relative mb-6 mx-auto w-32 h-32 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-300">
                    {/* Gradient background as fallback */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
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
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-purple-500/20 text-purple-300 border border-purple-400/30">
                        {member.role}
                    </span>
                </div>

                {/* Name */}
                <h3 className="text-white text-xl font-bold text-center mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {member.name}
                </h3>

                {/* Description */}
                <p className="text-gray-100 text-sm leading-relaxed text-center line-clamp-4 group-hover:text-white transition-colors duration-300">
                    {member.description}
                </p>

                {/* Decorative element */}
                <div className="mt-6 flex justify-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full group-hover:via-purple-300/70 transition-all duration-300" />
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <div className="mb-20">
                <h2 className="text-purple-300 text-3xl lg:text-4xl font-bold text-center mb-12 drop-shadow-lg">
                    Our Alumni
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {alumniMembers.map((member, index) => (
                        <AlumniCard key={index} member={member} />
                    ))}
                </div>
            </div>
            <div className="text-center mt-16">
                <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl max-w-4xl mx-auto">
                    <h3 className="text-purple-300 text-2xl lg:text-3xl font-bold mb-4">
                        Proud of Our Alumni Journey
                    </h3>
                    <p className="text-white text-lg leading-relaxed">
                        Our alumni represent the heart and soul of Play2Learn's mission. Each member has contributed 
                        their unique talents and passion to create meaningful learning experiences that continue to 
                        inspire and empower communities across the region.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Alumini
