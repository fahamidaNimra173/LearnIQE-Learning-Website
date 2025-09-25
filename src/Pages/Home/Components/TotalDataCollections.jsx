import { useEffect, useState } from "react";

export default function TotalDataCollections({
    totalUsers,
    totalClasses,
    totalEnrollments,
    backgroundImage = "https://i.ibb.co/9mbv8shF/desk-3139127-1280.jpg",
}) {
    const [counts, setCounts] = useState({
        users: 0,
        classes: 0,
        enrollments: 0,
    });

    useEffect(() => {
        const duration = 2000;
        const start = performance.now();

        function animate(now) {
            const progress = Math.min((now - start) / duration, 1);
            setCounts({
                users: Math.floor(progress * totalUsers),
                classes: Math.floor(progress * totalClasses),
                enrollments: Math.floor(progress * totalEnrollments),
            });
            if (progress < 1) requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }, [totalUsers, totalClasses, totalEnrollments]);

    return (
        <section>
            <h1 className="md:text-4xl leading-10 text-2xl font-bold text-[#6c4370] habibi text-center md:mt-40 mt-20 uppercase ">
                <span className="text-[#1e8a78] md:text-5xl habibi font-extrabold "> Join</span> the Movement to Learn & Grow
            </h1>
            <div
                className="relative w-full h-[70vh] md:mt-15 mt-10 flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                {/* Custom overlay with #1e8a78 and 50% opacity */}
                <div className="absolute inset-0 bg-[#1e8a78]/95" />

                {/* Counter content */}
                <div className="relative z-10 flex flex-row flex-wrap items-center justify-center gap-10 md:gap-20 text-white text-center">
                    <Stat c value={counts.users} label="Users" />
                    <Stat value={counts.classes} label="Classes" />
                    <Stat value={counts.enrollments} label="Enrollments" />
                </div>
            </div>
        </section>
    );
}

function Stat({ value, label }) {
    return (
        <div className="flex flex-col  items-center merienda gap-2 md:gap-5 justify-center">
            <p className="lg:text-7xl text-3xl font-bold merienda">{value}+</p>
            <p className="mt-2 font-bold uppercase tracking-wide border-b-1 box-shadow-2 shadow-2xl shadow-black pb-1   text-[20px]">{label}</p>
        </div>
    );
}
