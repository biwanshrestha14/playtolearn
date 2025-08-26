import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa";

const OurImpact = () => {
    const stats = [
        { number: "22+", label: "School Reached" },
        { number: "3k+", label: "Children Reached" },
        { number: "30+", label: "Playmaker Impacts" },
    ];

    return (
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
            {/* Floating background shapes */}
            <div className="absolute top-[-10%] left-[-10%] w-80 h-80 bg-gradient-radial from-white/8 to-transparent rounded-full animate-float" />
            <div className="absolute bottom-[-15%] right-[-8%] w-96 h-96 bg-gradient-radial from-white/5 to-transparent rounded-full animate-float-reverse" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-white text-xl lg:text-4xl font-extrabold mb-8 drop-shadow-lg">
                        <span className="bg-white text-blue-600 px-2 rounded">Our</span> Impact
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl text-center hover:transform hover:-translate-y-3 hover:shadow-3xl hover:bg-opacity-15 transition-all duration-400"
                        >
                            <div className="text-2xl md:text-3xl font-bold text-white mb-3">
                                {stat.number}
                            </div>
                            <div className="text-gray-100 text-base md:text-xl">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Section with Quote and Social Links */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-16">
                    {/* Quote */}
                    <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl max-w-2xl">
                        <p className="text-yellow-300 text-xl lg:text-2xl font-bold italic">
                            "Every student counts. Every experience matters."
                        </p>
                    </div>

                    {/* Fun Play Learn + Social Media */}
                    <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-right">
                        <h3 className="text-white font-extrabold text-lg mb-2">
                            <span className="text-red-400">Play</span>{" "}
                            <span className="text-yellow-300">To</span>{" "}
                            <span className="text-cyan-300">Learn</span>
                        </h3>
                        <p className="text-red-400 text-lg mb-3 font-bold">Follow us on:</p>
                        <div className="flex justify-center md:justify-end gap-3 text-xl">
                            <a href="https://www.facebook.com/profile.php?id=61578793521662" target="_blank" rel="noreferrer" className="text-blue-500 hover:scale-110 transition-transform">
                                <FaFacebook />
                            </a>
                            <a href="https://www.instagram.com/play_2_learnn/" target="_blank" rel="noreferrer" className="text-pink-500 hover:scale-110 transition-transform">
                                <FaInstagram />
                            </a>
                            <a href="https://www.tiktok.com/@play2learn125" target="_blank" rel="noreferrer" className="text-black hover:scale-110 transition-transform">
                                <FaTiktok />
                            </a>
                          

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurImpact;
