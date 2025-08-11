import { Link } from 'react-router-dom'

const Games = () => {
    const games = [
        {
            id: 'jenga-structure',
            title: 'Jenga Structure',
            description: 'Build towers that are taller and stronger using Jenga blocks, paper cups, and pebbles. Learn about estimation, patterns, and structural engineering.',
            image: '/games/jenga-structure.jpg',
            category: 'Construction & Engineering'
        },
        {
            id: 'potato-stick',
            title: 'Potato Stick',
            description: 'Create towers, bridges, and geometric structures using potato sticks. Explore balance, stability, and architectural principles.',
            image: '/games/potato-stick.jpg',
            category: 'Architecture & Design'
        },
        {
            id: 'cardboard-craft',
            title: 'Cardboard Craft',
            description: 'Connect cardboard pieces to build different structures and buildings. Learn about interlocking mechanisms and stability.',
            image: '/games/cardboard-craft.jpg',
            category: 'Craft & Building'
        }
    ];

    const GameCard = ({ game }: { game: typeof games[0] }) => (
        <Link to={`/games/${game.id}`} className="group">
            <div className="group relative bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-3 hover:shadow-4xl hover:bg-opacity-15 transition-all duration-500 overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Shine effect */}
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/10 to-transparent transform -translate-x-full -translate-y-full rotate-45 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-700" />
                
                <div className="relative z-10">
                    {/* Game Image */}
                    <div className="relative mb-6 mx-auto w-full h-48 rounded-2xl overflow-hidden ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-300">
                        {/* Gradient background as fallback */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                            <div className="text-white text-6xl font-bold">
                                {game.title.split(' ').map(n => n[0]).join('')}
                            </div>
                        </div>
                        {/* Actual image - shows by default if available */}
                        <img 
                            src={game.image} 
                            alt={game.title}
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

                    {/* Category Badge */}
                    <div className="mb-4 text-center">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-orange-500/20 text-orange-300 border border-orange-400/30">
                            {game.category}
                        </span>
                    </div>

                    {/* Game Title */}
                    <h3 className="text-white text-2xl font-bold text-center mb-4 group-hover:text-orange-300 transition-colors duration-300">
                        {game.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-100 text-sm leading-relaxed text-center line-clamp-4 group-hover:text-white transition-colors duration-300">
                        {game.description}
                    </p>

                    {/* Play Now Button */}
                    <div className="mt-6 flex justify-center">
                        <div className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-300 shadow-lg">
                            Learn More
                        </div>
                    </div>

                    {/* Decorative element */}
                    <div className="mt-6 flex justify-center">
                        <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full group-hover:via-orange-300/70 transition-all duration-300" />
                    </div>
                </div>
            </div>
        </Link>
    );

    return (
        <div className="min-h-screen py-20 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h1 className="text-orange-300 text-4xl lg:text-5xl font-bold text-center mb-6 drop-shadow-lg">
                        Our Games
                    </h1>
                    <p className="text-white text-lg text-center max-w-3xl mx-auto leading-relaxed">
                        Discover our collection of educational games designed to make learning fun and engaging. 
                        Each game combines creativity, problem-solving, and hands-on experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {games.map((game, index) => (
                        <GameCard key={index} game={game} />
                    ))}
                </div>

                <div className="text-center">
                    <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl max-w-4xl mx-auto">
                        <h3 className="text-orange-300 text-2xl lg:text-3xl font-bold mb-4">
                            Learning Through Play
                        </h3>
                        <p className="text-white text-lg leading-relaxed">
                            Our games are carefully designed to promote critical thinking, creativity, and collaborative 
                            learning. Each activity encourages children to explore, experiment, and discover new concepts 
                            through hands-on experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Games
