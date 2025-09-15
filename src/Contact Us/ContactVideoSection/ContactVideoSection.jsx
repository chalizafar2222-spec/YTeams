import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import video from "../../Assets/map.mp4";

const ContactVideoSection = () => {
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
          src={video}
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

          {/* contact details column */}
          <motion.div
            style={{ opacity: textOpacity, x: textX }}
            className="w-1/2 min-w-[150px] max-w-[400px]"
          >
            <p className="text-xs sm:text-sm text-teal-500 uppercase tracking-widest">
              Contact Us
            </p>
            <h2 className="text-lg sm:text-3xl font-bold mt-2 sm:mt-3 leading-snug">
              Let’s Connect With Us
            </h2>

            <div className="mt-4 space-y-3 text-gray-700 text-sm sm:text-base">
              <p><strong>📍 Address:</strong> 123 Main Street, Faisalabad, Pakistan</p>
              <p><strong>📞 Phone:</strong> +92 300 1234567</p>
              <p><strong>📧 Email:</strong> contact@yteams.com</p>
              <p><strong>🌐 Website:</strong> www.yteams.com</p>
            </div>

            <button className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-teal-600 text-white rounded-full inline-block text-sm sm:text-base">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>

      {/* spacer */}
      <div className="h-[70vh]"></div>
    </section>
  );
};

export default ContactVideoSection;
