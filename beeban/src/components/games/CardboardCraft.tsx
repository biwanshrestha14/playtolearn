import { Link } from 'react-router-dom'

const CardboardCraft = () => {
    const activities = [
        "Connect the cardboard pieces together to build different types of structures or buildings. Encourage children to fit and lock the pieces at various angles and in creative ways.",
        "Challenge them to experiment with stability, height, and design by using unique shapes and connection points.",
        "Additional Challenge: Can you create a building that stands on its own, holds a small object, or includes a doorway or window?",
        "Try combining pieces in new ways to improve your structure's strength and appearance."
    ];

    const challenges = [
        "What do you think will happen if we change the size or shape of the pieces? Will they still fit together and form a stable structure? How does changing the shape affect the way the pieces connect or stand?",
        "Can you create a story or scene using the structures you've built? Who lives in your buildings? What happens in your city or landscape?",
        "What challenges did you face when building your structure? How did you solve problems when pieces didn't fit or stay together?",
        "Can you redesign your structure to make it taller, wider, or more creative?",
        "What materials would you use if you wanted to build this in real life?",
        "How would your structure change if it had to survive wind, rain, or an earthquake?"
    ];

    const story = "Popsicle man now finds himself having difficulty working with paper as it keeps collapsing because of heavy winds. So now he decides to build a more stable building using cardboard by interlocking it in various ways. He figures out that you can lock these pieces together to make them more stable. Can you imagine what the man made and how?";

    const materials = [
        "Cardboard pieces"
    ];

    return (
        <div className="min-h-screen py-20 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <div className="mb-8">
                    <Link 
                        to="/games" 
                        className="inline-flex items-center gap-2 text-white hover:text-blue-300 transition-colors duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Games
                    </Link>
                </div>

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="relative mb-8 mx-auto w-64 h-64 rounded-3xl overflow-hidden ring-4 ring-blue-400/30">
                        {/* Gradient background as fallback */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                            <div className="text-white text-8xl font-bold">CC</div>
                        </div>
                        <img 
                            src="/games/cardboard-craft.jpg" 
                            alt="Cardboard Craft"
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
                    <h1 className="text-blue-300 text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
                        Cardboard Craft
                    </h1>
                    <span className="inline-block px-6 py-2 rounded-full text-lg font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                        Craft & Building
                    </span>
                </div>

                {/* Story Section */}
                <div className="mb-16">
                    <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl">
                        <h2 className="text-yellow-300 text-2xl lg:text-3xl font-bold mb-6 text-center">
                            The Stable Building Challenge
                        </h2>
                        <p className="text-white text-lg leading-relaxed text-center italic">
                            "{story}"
                        </p>
                    </div>
                </div>

                {/* Activities Section */}
                <div className="mb-16">
                    <h2 className="text-blue-300 text-3xl lg:text-4xl font-bold text-center mb-12 drop-shadow-lg">
                        Activities
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {activities.map((activity, index) => (
                            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 shadow-2xl">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
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
                    <h2 className="text-blue-300 text-3xl lg:text-4xl font-bold text-center mb-12 drop-shadow-lg">
                        Challenges & Questions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {challenges.map((challenge, index) => (
                            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 shadow-2xl">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
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
                    <h2 className="text-blue-300 text-3xl lg:text-4xl font-bold text-center mb-12 drop-shadow-lg">
                        Required Materials
                    </h2>
                    <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl max-w-2xl mx-auto">
                        <div className="grid grid-cols-1 gap-6">
                            {materials.map((material, index) => (
                                <div key={index} className="flex items-center justify-center gap-4 p-4 bg-white bg-opacity-10 rounded-2xl">
                                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                                    <span className="text-white font-medium text-lg">{material}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Learning Outcomes */}
                <div className="text-center">
                    <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl max-w-4xl mx-auto">
                        <h3 className="text-blue-300 text-2xl lg:text-3xl font-bold mb-6">
                            Learning Outcomes
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                            <div>
                                <h4 className="font-semibold text-yellow-300 mb-2">Creative Problem Solving</h4>
                                <p className="text-sm">Finding innovative ways to connect and stabilize structures</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-yellow-300 mb-2">Engineering Principles</h4>
                                <p className="text-sm">Understanding interlocking mechanisms and structural stability</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-yellow-300 mb-2">Design Thinking</h4>
                                <p className="text-sm">Iterative design, testing, and improvement processes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardboardCraft
