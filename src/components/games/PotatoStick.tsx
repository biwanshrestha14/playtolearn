import { Link } from 'react-router-dom'

const PotatoStick = () => {
    const activities = [
        "Build a tower that can hold the weight of your books. Start with one book, then gradually increase the number to test the tower's strength.",
        "Explore different geometrical structures using potato sticks. What kinds of shapes or structures can you create? Try building with triangles, squares, or other forms.",
        "Construct a tower using specific geometrical shapes, such as triangles or squares, for the base. Observe which base structure provides more strength and stability.",
        "Design and build a bridge that spans from one table to another. Challenge students to see if the bridge can also support a certain amount of weight."
    ];

    const challenges = [
        "What can we do to make sure the tower can hold objects without falling down? Think about balance, support, and the materials you use.",
        "Does a tower with only one structure at the base behave differently than a tower with multiple structures at the base? How does the number of base supports affect strength and stability?",
        "Why does a tall tower begin to lean or bend when it has only one structure supporting it at the bottom? What causes this instability, and how can it be fixed?",
        "Can you build a curved structure using potato sticks? Try bending or arranging the sticks in a way that forms a curve. Is it possible?",
        "What difference does it make if you add two or more sticks to your structure? How does the number of sticks affect the shape, strength, and stability of your design?"
    ];

    const story = "One day popsicle man was roaming in his garden with his pet cat, Bella. You can ask if kids have pets and what are their names? After some time Bella climbed the tree and got stuck. Popsicle man can't climb on the tree. Now help him take down his pet.";

    const materials = [
        "Potatoes: 1 KG (For Both Sessions)",
        "Tooth Pick: 5 Packet (Boxes)",
        "Measuring Tape: 10 PCs"
    ];

    return (
        <div className="min-h-screen py-20 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <div className="mb-8">
                    <Link 
                        to="/games" 
                        className="inline-flex items-center gap-2 text-white hover:text-green-300 transition-colors duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Games
                    </Link>
                </div>

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="relative mb-8 mx-auto w-64 h-64 rounded-3xl overflow-hidden ring-4 ring-green-400/30">
                        {/* Gradient background as fallback */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                            <div className="text-white text-8xl font-bold">PS</div>
                        </div>
                        <img 
                            src="/games/potato-stick.jpg" 
                            alt="Potato Stick"
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
                    <h1 className="text-green-300 text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
                        Potato Stick
                    </h1>
                    <span className="inline-block px-6 py-2 rounded-full text-lg font-semibold bg-green-500/20 text-green-300 border border-green-400/30">
                        Architecture & Design
                    </span>
                </div>

                {/* Story Section */}
                <div className="mb-16">
                    <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl">
                        <h2 className="text-yellow-300 text-2xl lg:text-3xl font-bold mb-6 text-center">
                            Bella's Rescue Mission
                        </h2>
                        <p className="text-white text-lg leading-relaxed text-center italic">
                            "{story}"
                        </p>
                    </div>
                </div>

                {/* Activities Section */}
                <div className="mb-16">
                    <h2 className="text-green-300 text-3xl lg:text-4xl font-bold text-center mb-12 drop-shadow-lg">
                        Activities
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {activities.map((activity, index) => (
                            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 shadow-2xl">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
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
                    <h2 className="text-green-300 text-3xl lg:text-4xl font-bold text-center mb-12 drop-shadow-lg">
                        Challenges & Questions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {challenges.map((challenge, index) => (
                            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 shadow-2xl">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
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
                    <h2 className="text-green-300 text-3xl lg:text-4xl font-bold text-center mb-12 drop-shadow-lg">
                        Required Materials
                    </h2>
                    <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl max-w-2xl mx-auto">
                        <div className="grid grid-cols-1 gap-6">
                            {materials.map((material, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 bg-white bg-opacity-10 rounded-2xl">
                                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                                    <span className="text-white font-medium">{material}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Learning Outcomes */}
                <div className="text-center">
                    <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl max-w-4xl mx-auto">
                        <h3 className="text-green-300 text-2xl lg:text-3xl font-bold mb-6">
                            Learning Outcomes
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                            <div>
                                <h4 className="font-semibold text-yellow-300 mb-2">Structural Engineering</h4>
                                <p className="text-sm">Understanding load-bearing, stability, and geometric shapes</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-yellow-300 mb-2">Problem Solving</h4>
                                <p className="text-sm">Critical thinking, trial and error, and optimization</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-yellow-300 mb-2">Spatial Awareness</h4>
                                <p className="text-sm">3D thinking, geometry, and architectural design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PotatoStick
