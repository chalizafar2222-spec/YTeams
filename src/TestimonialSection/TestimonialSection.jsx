import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../Assets/allan.avif";
import img2 from "../Assets/bell.avif";
import img3 from "../Assets/excel.avif";
import img4 from "../Assets/HSK.avif";
import img5 from "../Assets/insta.avif";
import img6 from "../Assets/mazito.jpg";
import img7 from "../Assets/mcq.avif";


const testimonials = [
    {
        id: 1,
        logo: img1,
        text: "The team understood our requirements clearly and delivered a robust solution that exceeded expectations. Their professionalism and technical expertise stood out throughout the project.",
        name: "Allan Technologies",
        role: "CEO, Allan Technologies",
    },
    {
        id: 2,
        logo: img2,
        text: "They transformed our ideas into a functional product seamlessly. Communication was smooth, and deadlines were always met without compromising quality.",
        name: "Bell-Boy",
        role: "Operations Head, Bell-Boy",
    },
    {
        id: 3,
        logo: img3,
        text: "Their commitment to detail and delivering a reliable system for our students has been incredible. We now have a platform that truly supports our educational goals.",
        name: "Excelencia Education Consultancy",
        role: "Managing Director, Excelencia",
    },
    {
        id: 4,
        logo: img4,
        text: "From planning to deployment, the process was flawless. They provided us with a scalable system that improved efficiency across our business.",
        name: "HSK Motors",
        role: "Director, HSK Motors",
    },
    {
        id: 5,
        logo: img5,
        text: "The app developed for us has completely streamlined our service process. Customers find it easier to connect, and our internal workflow is much faster.",
        name: "Instafixit",
        role: "Founder, Instafixit",
    },
    {
        id: 6,
        logo: img6,
        text: "Their innovative approach and continuous support have helped us expand our digital presence. We are grateful for the dedication shown by the team.",
        name: "Mazito",
        role: "Co-Founder, Mazito",
    },
    {
        id: 7,
        logo: img7,
        text: "The solution delivered has greatly enhanced our customer engagement. Their creative input and technical delivery were simply outstanding.",
        name: "MCQueenz Cafe",
        role: "Owner, MCQueenz Cafe",
    },
];


const TestimonialSection = () => {
    const [index, setIndex] = useState(0);

    // Auto slide every 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full bg-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
            {/* Left side */}
            <div className="w-full md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
                    What our <br /> customers think
                </h2>
                <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-md">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus commodi sint, similique cupiditate possimus suscipit delectus illum eos iure magnam!
                </p>

                {/* timeline indicator */}
                <div className="flex gap-2 mt-10">
                    {testimonials.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1 w-14 rounded-full transition-all duration-300 ${i === index ? "bg-gray-900" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Right side */}
            <div className="w-full md:w-1/2 relative flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={testimonials[index].id}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-lg border"
                    >
                        <div className="flex justify-center mb-6">
                            <img
                                src={testimonials[index].logo}
                                alt="logo"
                                className="w-20 object-contain"
                            />
                        </div>
                        <p className="text-gray-700 italic text-lg mb-6 leading-relaxed">
                            "{testimonials[index].text}"
                        </p>
                        <div>
                            <h4 className="font-bold text-lg text-gray-900">
                                {testimonials[index].name}
                            </h4>
                            <p className="text-sm text-gray-500">{testimonials[index].role}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default TestimonialSection;
