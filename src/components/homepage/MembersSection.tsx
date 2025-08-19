"use client";
import Image from "next/image";

type Member = {
    name: string;
    role: string;
    photo: string;
};

const members: Member[] = [
    { name: "Ricky Lin", role: "Chairwoman", photo: "https://placehold.co/384x384" },
    { name: "Yuchan Zheng", role: "Secretary", photo: "https://placehold.co/384x384" },
    { name: "Yihan Huang", role: "Secretary", photo: "https://placehold.co/384x384" },
    { name: "Lei Chen", role: "Welfare Officer", photo: "https://placehold.co/384x384" },
    { name: "Qiu", role: "Team Manager", photo: "https://placehold.co/384x384" },
    { name: "Sarah Hao", role: "Team Manager", photo: "https://placehold.co/384x384" },
    { name: "Mengyuan Xue", role: "Team Manager", photo: "https://placehold.co/384x384" },
    { name: "Yanjia Chen", role: "Welfare Officer", photo: "https://placehold.co/384x384" },
    { name: "Angelina Niu", role: "Welfare Officer", photo: "https://placehold.co/384x384" },
    { name: "Wen", role: "Welfare Officer", photo: "https://placehold.co/384x384" },
];

export default function CommitteeMembers() {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-8 py-20">
            <h2 className="text-center text-purple-950 text-5xl font-bold uppercase leading-[48px] mb-12">
                Committee Members
            </h2>

            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 place-items-center">
                {members.map((m) => (
                    <li key={m.name} className="flex flex-col items-center text-center">
                        <div className="relative w-40 h-40 md:w-48 md:h-48">
                            <Image
                                src={m.photo}
                                alt={`${m.name} — ${m.role}`}
                                width={384}
                                height={384}
                                className="rounded-full object-cover w-full h-full"
                                sizes="(min-width: 1024px) 12rem, (min-width: 768px) 12rem, 10rem"
                            />
                        </div>
                        <p className="mt-4 text-purple-950 text-xl md:text-3xl font-medium leading-tight">
                            {m.name}
                        </p>
                        <p className="mt-1 text-purple-950 text-lg md:text-xl">{m.role}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}


