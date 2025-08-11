
const Sessions = () => {
    const programStructure = [
        {
            title: "Weekly Learning Circles",
            description: "Our program is built on the concept of learning circles, with one designated visit per week to each school. Each circle operates in a continuous loop of four visits each month, maintaining regular engagement and creating a flow of consistent learning experiences.",
            icon: "🔄"
        },
        {
            title: "Preparation Circle (Before Student Sessions)",
            duration: "1 hour",
            description: "Each day begins with a focused preparation session where the team synchronizes for the day ahead.",
            activities: [
                "Reviewing lesson plans to ensure alignment with learning goals",
                "Taking class-wise attendance",
                "Organizing and setting up materials needed for the day's sessions",
                "Clarifying team roles and responsibilities for smooth coordination"
            ],
            note: "This preparatory phase lays the foundation for a well-structured day, ensuring every Learning Buddy is clear, confident, and ready.",
            icon: "📋"
        },
        {
            title: "First Learning Circle (Before Lunch)",
            duration: "One academic period",
            target: "Half of the designated classes (e.g., Classes 1–3)",
            description: "This session emphasizes experiential learning through:",
            activities: [
                "Interactive, hands-on games and challenges",
                "Activities that nurture critical thinking, curiosity, and peer collaboration"
            ],
            note: "The aim is to spark joyful learning by engaging students in playful yet purposeful exploration.",
            icon: "🎯"
        },
        {
            title: "Reflective Pause (Mid-Day Break)",
            description: "As students enjoy their lunch, the team takes a restorative break while informally evaluating the first session.",
            activities: [
                "What excited the students?",
                "What challenges arose?",
                "What can be adapted for the next session?"
            ],
            note: "This pause serves as a bridge for refreshing the team while preparing them for the second learning experience of the day.",
            icon: "☕"
        },
        {
            title: "Second Learning Circle (After Lunch)",
            duration: "One academic period",
            target: "Remaining half of the designated classes (e.g., Classes 4–6)",
            description: "This session mirrors the structure and spirit of the morning's session, ensuring every child receives equal opportunity to explore, express, and engage.",
            note: "Continuity is key! Students benefit from the same level of attention and creative stimulation.",
            icon: "🎪"
        },
        {
            title: "Reflection & Iteration Circle (Post-Sessions)",
            description: "The day concludes with a team debrief—a vital component of the Learning Circle model.",
            activities: [
                "What worked well today?",
                "What felt challenging?",
                "What can be improved or redesigned next time?"
            ],
            note: "This is when feedback transforms into fuel for future sessions, ensuring the program evolves through lived experience and collective insight.",
            icon: "💡"
        }
    ];

    const SessionCard = ({ session, index }: { session: typeof programStructure[0], index: number }) => (
        <div className="group relative bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-2xl hover:transform hover:-translate-y-2 hover:shadow-4xl hover:bg-opacity-15 transition-all duration-500 overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shine effect */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/10 to-transparent transform -translate-x-full -translate-y-full rotate-45 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-700" />
            
            <div className="relative z-10">
                {/* Session Number & Icon */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        {session.icon || (index + 1)}
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-bold group-hover:text-indigo-300 transition-colors duration-300">
                            {session.title}
                        </h3>
                        {session.duration && (
                            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 mt-2">
                                {session.duration}
                            </span>
                        )}
                    </div>
                </div>

                {/* Target Group */}
                {session.target && (
                    <div className="mb-4">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-purple-500/20 text-purple-300 border border-purple-400/30">
                            Target: {session.target}
                        </span>
                    </div>
                )}

                {/* Description */}
                <p className="text-gray-100 text-base leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    {session.description}
                </p>

                {/* Activities */}
                {session.activities && (
                    <div className="mb-6">
                        <h4 className="text-indigo-300 font-semibold mb-3">Key Activities:</h4>
                        <ul className="space-y-2">
                            {session.activities.map((activity, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-200 text-sm leading-relaxed">
                                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="group-hover:text-white transition-colors duration-300">{activity}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Note */}
                {session.note && (
                    <div className="bg-white bg-opacity-5 rounded-2xl p-4 border-l-4 border-indigo-400">
                        <p className="text-indigo-200 text-sm italic leading-relaxed group-hover:text-indigo-100 transition-colors duration-300">
                            {session.note}
                        </p>
                    </div>
                )}

                {/* Decorative element */}
                <div className="mt-6 flex justify-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full group-hover:via-indigo-300/70 transition-all duration-300" />
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen py-20 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-indigo-300 text-4xl lg:text-5xl font-bold mb-6 drop-shadow-lg">
                        Our Sessions
                    </h1>
                    <p className="text-white text-lg max-w-4xl mx-auto leading-relaxed mb-8">
                        Our program operates on a modular and cyclical structure called Learning Circles, designed to make each school visit intentional, reflective, and student-centered.
                    </p>
                    <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl max-w-3xl mx-auto">
                        <h2 className="text-purple-300 text-2xl lg:text-3xl font-bold mb-4">
                            Program Modality: Dynamic Learning Circles
                        </h2>
                        <p className="text-white leading-relaxed">
                            These circles promote consistency while allowing space for creativity, evaluation, and growth for both students and facilitators.
                        </p>
                    </div>
                </div>

                {/* Program Structure */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {programStructure.map((session, index) => (
                        <SessionCard key={index} session={session} index={index} />
                    ))}
                </div>

                {/* Footer Message */}
                <div className="text-center">
                    <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-3xl max-w-4xl mx-auto">
                        <h3 className="text-indigo-300 text-2xl lg:text-3xl font-bold mb-4">
                            Continuous Learning & Growth
                        </h3>
                        <p className="text-white text-lg leading-relaxed">
                            Our Learning Circles create a sustainable rhythm of education that adapts and evolves. 
                            Through consistent engagement, reflection, and iteration, we ensure that every session 
                            builds upon the last, creating meaningful learning experiences for all participants.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sessions
