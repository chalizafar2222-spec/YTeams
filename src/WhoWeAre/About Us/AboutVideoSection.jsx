import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutVideo from "../../Assets/video.MOV"; // replace with your About Us video
import { Link } from "react-router-dom";

const AboutVideoSection = () => {
  const ref = useRef(null);

  // track how far the whole section has been scrolled
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // transforms for the video (scale + move left)
  const videoScale = useTransform(scrollYProgress, [0, 0.25, 0.45], [1.02, 0.7, 0.7]);
  const videoX = useTransform(scrollYProgress, [0, 0.25, 0.45], ["0%", "-38%", "-38%"]);
  const videoY = useTransform(scrollYProgress, [0, 0.45], ["0%", "-3%"]);
  const videoRadius = useTransform(scrollYProgress, [0, 0.25], ["0px", "12px"]);

  // text fade + slide
  const textOpacity = useTransform(scrollYProgress, [0.22, 0.42], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.22, 0.42], ["30px", "0px"]);

  return (
    <section ref={ref} className="relative w-full h-[170vh] px-4 sm:px-6">
      {/* sticky video that animates */}
      <motion.div
        style={{ x: videoX, y: videoY, scale: videoScale, borderRadius: videoRadius }}
        className="sticky top-[80px] left-0 w-full h-[calc(100vh-80px)] z-[80] overflow-hidden pointer-events-none"
      >
        <video
          src={aboutVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* sticky content area */}
      <div className="sticky top-[80px] h-[calc(100vh-80px)] z-10 flex items-center">
        <div className="w-full flex items-center gap-4">
          {/* video placeholder space */}
          <div className="w-1/2 min-w-[150px]"></div>

          {/* text column */}
          <motion.div
            style={{ opacity: textOpacity, x: textX }}
            className="w-1/2 min-w-[150px] max-w-[400px]"
          >
            <p className="text-xs sm:text-sm text-teal-500 uppercase tracking-widest">
              About Us
            </p>
            <h2 className="text-lg sm:text-3xl font-bold mt-2 sm:mt-3 leading-snug">
              Driving Innovation, Building Trust.
            </h2>
            <p className="mt-2 sm:mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              We are passionate about creating solutions that inspire growth and empower 
              businesses worldwide. With a people-first mindset, we blend creativity, 
              technology, and strategy to deliver meaningful impact.
            </p>
            <Link to="/our-team" className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-teal-600 text-white rounded-full inline-block text-sm sm:text-base">
              Meet Our Team
            </Link>
          </motion.div>
        </div>
      </div>

      {/* spacer */}
      <div className="h-[70vh]"></div>
    </section>
  );
};

export default AboutVideoSection;
