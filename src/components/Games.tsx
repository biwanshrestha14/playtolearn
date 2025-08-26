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
        },
        {
            id: 'air-flyer',
            title: 'Air Flyer',
            description: 'Challenge kids to make a rocket that travels super far using rubber bands. Design custom rockets and learn about elasticity and design thinking.',
            image: '/games/air-flyer.jpg',
            category: 'Rocket Science'
        },
        {
            id: 'glider-wheel',
            title: 'Glider Wheel',
            description: 'Create flying objects using paper and straws. Experiment with different shapes, wings, and tails to understand aerodynamics principles.',
            image: '/games/glider-wheel.jpg',
            category: 'Aerodynamics'
        },
        {
            id: 'paper-glider',
            title: 'Paper Glider',
            description: 'Build unique paper shapes that can fly without looking like traditional planes. Discover magical designs that work through clever engineering.',
            image: '/games/paper-glider.jpg',
            category: 'Flight Design'
        },
        {
            id: 'launcher',
            title: 'Launcher',
            description: 'Figure out how many rubber bands are needed to launch paper cups to specific heights. Learn about potential energy and rotational motion.',
            image: '/games/launcher.jpg',
            category: 'Physics & Energy'
        },
        {
            id: 'balloon-flyer',
            title: 'Balloon Flyer',
            description: 'Build a working cable car that uses balloon power to transport loads along a thread. Master the balance of aerodynamics and weight management.',
            image: '/games/balloon-flyer.jpg',
            category: 'Transportation & Air Power'
        },
        {
            id: 'balloon-car',
            title: 'Balloon Car',
            description: 'Create a balloon-powered car that can navigate obstacle courses, carry cargo, and complete various challenges. Learn about propulsion and vehicle design.',
            image: '/games/balloon-car.jpg',
            category: 'Vehicle Engineering'
        },
        {
            id: 'slingshot-cart',
            title: 'Slingshot Cart',
            description: 'Build a rubber band-powered cart for fast deliveries. Explore elasticity and kinetic energy while designing the perfect racing vehicle.',
            image: '/games/slingshot-cart.jpg',
            category: 'Elastic Energy'
        },
        {
            id: 'gliding-car',
            title: 'Gliding Car',
            description: 'Design a flying car with wings that can glide through the air. Experiment with lift, aerodynamics, and different wing shapes for optimal flight.',
            image: '/games/gliding-car.jpg',
            category: 'Flight Engineering'
        },
        {
            id: 'rubber-cart',
            title: 'Rubber Cart',
            description: 'Create an automated vehicle powered by wound-up rubber bands. Design custom wheels and learn about converting potential energy into motion.',
            image: '/games/rubber-cart.jpg',
            category: 'Mechanical Energy'
        },
        {
            id: 'beam-balance',
            title: 'Beam Balance',
            description: 'Build your own weighing scale using simple materials. Discover how balance works and explore concepts of mass, weight, and equilibrium.',
            image: '/games/beam-balance.jpg',
            category: 'Physics & Measurement'
        },
        {
            id: 'straw-rescue-device',
            title: 'Straw Rescue Device',
            description: 'Engineer a pulley system to rescue objects from depths. Learn about mechanical advantage, force, and different lifting mechanisms.',
            image: '/games/straw-rescue-device.jpg',
            category: 'Mechanical Systems'
        },
        {
            id: 'straw-park',
            title: 'Straw Park',
            description: 'Construct large-scale structures like domes, towers, and shelters using straws. Build something big enough for people to sit or stand inside.',
            image: '/games/straw-park.jpg',
            category: 'Structural Engineering'
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
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