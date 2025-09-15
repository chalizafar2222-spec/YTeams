import React from "react";
import { motion } from "framer-motion";
import Textbox3D from "../WhatWeDo/App/TextBox"; 
import { FaRocket, FaCode, FaGlobe } from "react-icons/fa";

const LandingLayout = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between h-screen px-10 bg-gradient-to-br from-gray-900 via-black to-blue-950 overflow-hidden text-white">
      
      {/* Floating background effects */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-10 left-0"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute w-[30rem] h-[30rem] bg-purple-500/20 rounded-full blur-3xl bottom-10 right-0"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      {/* Left side: Hero text */}
      <motion.div
        className="max-w-lg z-10 md:text-left text-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Let’s Build Your{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Dream Project
          </span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Transforming your ideas into digital experiences that inspire and engage.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:scale-105 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-gray-500 rounded-full hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Right side: 3D Box with floating icons */}
      <motion.div
        className="relative flex flex-col items-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Textbox3D />
        <motion.div
          className="absolute -top-10 -left-10 text-blue-400 text-4xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <FaRocket />
        </motion.div>
        <motion.div
          className="absolute bottom-0 -right-12 text-pink-400 text-4xl"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <FaCode />
        </motion.div>
        <motion.div
          className="absolute top-20 -right-10 text-green-400 text-4xl"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <FaGlobe />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingLayout;
