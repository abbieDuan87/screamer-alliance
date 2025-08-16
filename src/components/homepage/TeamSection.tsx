import TeamCard from "./TeamCard";

export default function TeamsSection() {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-8 py-20 relative flex flex-col items-center gap-20 bg-yellow-50">
            {/* Title */}
            <div className="w-full max-w-[1280px] flex flex-col items-center gap-12">
                <h2 className="text-center text-purple-950 text-5xl font-bold uppercase leading-[48px] font-h1">
                    MEET THE TEAMS
                </h2>
            </div>

            {/* Teams Cards */}
            <div className="flex flex-row justify-center items-start gap-24 w-full max-w-[1280px]">
                <TeamCard
                    image="images/homepage/recreational.png"
                    alt="Recreational Team"
                    title="Recreational Team"
                    description="For beginners and casual players—focused on fun, fitness, and friendly games."
                />
                <TeamCard
                    image="images/homepage/development.png"
                    alt="Development Team"
                    title="Development Team"
                    description="For experienced players—structured sessions and a more competitive pace."
                />
            </div>
        </section>
    );
}
