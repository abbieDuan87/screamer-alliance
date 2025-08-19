import TeamCard from "./TeamCard";
import Image from "next/image";


export default function TeamsSection() {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-8 pt-20 pb-4 relative flex flex-col items-center gap-20 bg-yellow-50">
            {/*pt-padding top, pb-padding bottom to adjust the position of the divider*/}
            {/* Title */}
            <div className="w-full max-w-[1280px] flex flex-col items-center gap-12">
                <h2 className="text-center text-purple-950 text-5xl font-bold uppercase leading-[48px] font-h1">
                    MEET THE TEAMS
                </h2>
            </div>

            {/* Teams Cards */}
            <div className="flex flex-row justify-center items-start gap-20 w-full max-w-[1280px]">
                {/* Recreational Team with its own decorations */}
                <div className="relative">
                    {/* Decorations for Recreational card */}
                    <Image
                        src="/images/homepage/decorations/drink.png"
                        alt=""
                        width={48}
                        height={48}
                        className="absolute -top-24 -left-24 w-48 h-48"
                    />
                    <Image
                        src="/images/homepage/decorations/glove.png"
                        alt=""
                        width={48}
                        height={48}
                        className="absolute -bottom-16 -right-24 w-48 h-48"
                    />
                    <TeamCard
                        image="/images/homepage/recreational.png"
                        alt="Recreational Team"
                        title="Recreational Team"
                        description="For beginners and casual players—focused on fun, fitness, and friendly games."
                    />
                </div>

                {/* Development Team with its own decorations */}
                <div className="relative">
                    {/* Decorations for Development card */}
                    <Image
                        src="/images/homepage/decorations/women.png"
                        alt=""
                        width={48}
                        height={48}
                        className="absolute -top-24 -right-22 w-48 h-48"
                    />
                    <Image
                        src="/images/homepage/decorations/grass3.png"
                        alt=""
                        width={48}
                        height={48}
                        className="absolute -bottom-40 -right-42 w-80 h-80"
                    />
                    <TeamCard
                        image="/images/homepage/development.png"
                        alt="Development Team"
                        title="Development Team"
                        description="For experienced players—structured sessions and a more competitive pace."
                    />
                </div>
            </div>

            {/* Divider at the bottom */}
            <div className="w-full relative -mt-20">
                {/*-mt to pull up the divider*/}
                <Image
                    src="/images/homepage/divider.png"
                    alt=""
                    width={1728}
                    height={559}
                    className="w-full h-auto object-cover animate-horizontal"
                />
            </div>
        </section>
    );
}
