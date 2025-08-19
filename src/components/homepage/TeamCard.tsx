type TeamCardProps = {
    image: string;
    alt: string;
    title: string;
    description: string;
    buttonText?: string;
    onButtonClick?: () => void;
};

export default function TeamCard({
                                     image,
                                     alt,
                                     title,
                                     description,
                                     buttonText = "More Info",
                                     onButtonClick,
                                 }: TeamCardProps) {
    return (
        <div className="w-[434px] bg-white rounded-xl outline outline-1 outline-transparent flex flex-col">
            <img
                className="w-[434px] h-68 rounded-t-xl object-cover"
                src={image}
                alt={alt}
            />
            <div className="w-full h-48 px-4 pt-6 pb-4 bg-purple-400/90 flex flex-col gap-4">
                <div>
                    <div className="text-purple-950 text-4xl font-bold leading-9 font-h2">
                        {title}
                    </div>
                </div>
                <div className="text-purple-950 text-1xl font-normal leading-loose font-body">
                    {description}
                </div>
            </div>
            <div className="w-full h-20 p-4 rounded-b-xl bg-purple-400/90 flex items-center">
                <button
                    className="flex items-center gap-2 group"
                    onClick={onButtonClick}
                >
          <span className="text-[var(--theme-yellow)] text-base font-normal uppercase leading-none font-nav group-hover:underline">
            {buttonText}
          </span>
                    <svg width="24" height="24" fill="none" className="text-[var(--theme-yellow)]" viewBox="0 0 24 24">
                        <path d="M8 4l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}
