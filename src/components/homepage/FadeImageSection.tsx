"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeImageSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        function handleScroll() {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            let visible = 1;
            if (rect.top > windowHeight) {
                visible = 0;
            } else if (rect.bottom < 0) {
                visible = 0;
            } else if (rect.top > 0) {
                visible = 1 - rect.top / windowHeight;
            } else if (rect.bottom < windowHeight) {
                visible = rect.bottom / windowHeight;
            }
            visible = Math.max(0, Math.min(1, visible));
            setOpacity(visible);
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={sectionRef}
            className="
        w-full
        min-h-screen
        bg-[url('/images/homepage/frontpage_background.jpg')]
        bg-cover
        bg-center
        transition-opacity
        duration-500
      "
            style={{ opacity }}
        />
    );
}
