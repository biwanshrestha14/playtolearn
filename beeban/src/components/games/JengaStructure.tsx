import { Link } from 'react-router-dom'

const JengaStructure = () => {
    const activities = [
        "Provide the same number of Jenga blocks to a few kids and ask them to build towers that are taller and stronger than those made by others.",
        "Challenge the kids to construct paper cup towers that are wind-resistant and strong enough to hold a certain weight.",
        "Let the kids estimate the height and width of their towers, and then use a measuring tape to find the actual dimensions.",
        "Conduct an estimation activity where the kids guess the number of pebbles in your hand without looking—only by listening to the sound they make.",
        "Use sequences and series with pebbles to help kids predict what comes next in a pattern (such as odd, even, prime, or multiples). For example: after 2, 4, 6 pebbles, what number comes next?",
        "Using Jenga blocks, pebbles, and paper cups, encourage the kids to build models of structures they see around them, such as towns, cities, schools, or their home area."
    ];

    const challenges = [
        "How tall can you build your city structures before they fall over? Test the height and stability of your buildings—how high can you go?",
        "If one Jenga block is 5 cm long, how many blocks would you need to build a tower that is 100 cm tall? Do the math and stack them up!",
        "Can you guess how many pebbles I'm holding just by listening to the sound they make? Use your sense of hearing to make an educated guess.",
        "How can you make sure your paper cup towers don't fall over in the wind? Think about ways to stabilize or anchor the tower. What materials or techniques could help?"
    ];

    const story = "Once there was a popsicle man who was new to this world. He had no home or society to live in so he decided to make home and city for its own. Do you guys know of what materials he made the city? Can you all help popsicle man make his city?";

    const materials = [
        "Jenga: 10 Boxes",
        "Paper Cup: 5 Rolls", 
        "Pebbles: 2 Packet",
        "Measuring Tape: 10 PCs"
    ];

    return (
        <div className="min-h-screen py-20 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <div className="mb-8">
                    <Link 
                        to="/games" 
                        className="inline-flex items-center gap-2 text-white hover:text-orange-300 transition-colors duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Games
                    </Link>
                </div>

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="relative mb-8 mx-auto w-64 h-64 rounded-3xl overflow-hidden ring-4 ring-orange-400/30">
                        {/* Gradient background as fallback */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                            <div className="text-white text-8xl font-bold">JS</div>
                        </div>
                        <img 
                            src="/games/jenga-structure.jpg" 
                            alt="Jenga Structure"
                            className="absolute inset-0 w-full h-full object-cover"
                            onLoad={(e) => {
                                const gradientBg = (e.target as HTMLImageElement).previousElementSibling as HTMLElement;
                                if (gradientBg) gradientBg.style.opacity = '0';
                            }}
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                                const gradientBg = (e.target as HTMLImageElement).previousElementSibling as HTMLElement;
                                if (gradientBg) gradientBg.style.opacity = '1';
                            }}
                        />
                    </div>
                    <h1 className="text-orange-300 text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
                        Jenga Structure
                    </h1>
                    <span className="inline-block px-6 py-2 rounded-full text-lg font-semibold bg-orange-500/20 text-orange-300 border border-orange-400/30">
                        Construction & Engineering
                    </span>
                </div>

                {/* Story Section */}
                <div className="mb-16">
                    <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl">
                        <h2 className="text-yellow-300 text-2xl lg:text-3xl font-bold mb-6 text-center">
                            The Popsicle Man's Adventure
                        </h2>
                        <p className="text-white text-lg leading-relaxed text-center italic">
                            "{story}"
                        </p>
                    </div>
                </div>

                {/* Activities Section */}
                <div className="mb-16">
                    <h2 className="text-orange-300 text-3xl lg:text-4xl font-bold text-center mb-12 drop-shadow-lg">
                        Activities
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {activities.map((activity, index) => (
                            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 shadow-2xl">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                                        {index + 1}
                                    </div>
                                    <p className="text-white leading-relaxed">
                                        {activity}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Challenges Section */}
                <div className="mb-16">
                    <h2 className="text-orange-300 text-3xl lg:text-4xl font-bold text-center mb-12 drop-shadow-lg">
                        Challenges & Questions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {challenges.map((challenge, index) => (
                            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 shadow-2xl">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                                        ?
                                    </div>
                                    <p className="text-white leading-relaxed">
                                        {challenge}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Materials Section */}
                <div className="mb-16">
                    <h2 className="text-orange-300 text-3xl lg:text-4xl font-bold text-center mb-12 drop-shadow-lg">
                        Required Materials
                    </h2>
                    <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl max-w-2xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {materials.map((material, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 bg-white bg-opacity-10 rounded-2xl">
                                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                                    <span className="text-white font-medium">{material}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Learning Outcomes */}
                <div className="text-center">
                    <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl max-w-4xl mx-auto">
                        <h3 className="text-orange-300 text-2xl lg:text-3xl font-bold mb-6">
                            Learning Outcomes
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                            <div>
                                <h4 className="font-semibold text-yellow-300 mb-2">Mathematical Skills</h4>
                                <p className="text-sm">Estimation, measurement, patterns, and basic calculations</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-yellow-300 mb-2">Engineering Concepts</h4>
                                <p className="text-sm">Structural stability, balance, and problem-solving</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-yellow-300 mb-2">Creative Thinking</h4>
                                <p className="text-sm">Design thinking, innovation, and spatial awareness</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JengaStructure
