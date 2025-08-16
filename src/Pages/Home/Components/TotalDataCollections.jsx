import React from "react";
import { motion } from "framer-motion";

const StatsCard = ({ title, count, bgColor, textColor }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`rounded-xl p-6 shadow-lg mb-6`}
            style={{ backgroundColor: bgColor, color: textColor }}
        >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-3xl font-bold">{count}</p>
        </motion.div>
    );
};

const TotalDataCollections = ({ totalUsers, totalClasses, totalEnrollments }) => {
    return (
        <div>

            <section className="pt-30 pb-10 px-4 dark:text-[#51a3f5] text-black">
                {/* Title + Description */}

                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-4xl font-extrabold mb-3">Our Website Impact</h2>
                    <p className="text-lg max-w-xl mx-auto">
                        See how many students, teachers, and classes make up our vibrant learning community.
                    </p>
                </div>
                {/* Content: Left stats cards + Right image */}
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-10">
                    {/* Left: Cards */}
                    <div className="flex-1 w-full h-full flex flex-col justify-between">
                        <StatsCard
                            title="Total Users"
                            count={totalUsers}
                            bgColor="#EBFFD8"
                            textColor="#0A5EB0"
                        />
                        <StatsCard
                            title="Total Classes"
                            count={totalClasses}
                            bgColor="#FFCFEF"
                            textColor="#0A5EB0"
                        />
                        <StatsCard
                            title="Total Enrollments"
                            count={totalEnrollments}
                            bgColor="#0A5EB0"
                            textColor="#EBFFD8"
                        />
                    </div>

                    {/* Right: Image */}
                    <div className="flex-1 w-full h-full">
                        <motion.img
                            src="https://i.ibb.co/9mbv8shF/desk-3139127-1280.jpg"
                            alt="Online Learning"
                            className="rounded-xl shadow-lg w-full h-full object-cover max-h-[500px]"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        />
                    </div>
                </div>

            </section>

        </div>

    );
};

export default TotalDataCollections;
