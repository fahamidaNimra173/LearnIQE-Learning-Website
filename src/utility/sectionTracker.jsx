import React, { useEffect } from "react";

export default function ScrollTracker({ setActiveSection }) {
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );
        sections.forEach((sec) => observer.observe(sec));

        return () => observer.disconnect();
    }, [setActiveSection])


    return null;
}