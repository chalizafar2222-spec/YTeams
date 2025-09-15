// import React from "react";
// import { FaLightbulb, FaUsers, FaCode, FaMobileAlt, FaGlobe } from "react-icons/fa";


// const features = [
//   { title: "Innovative", icon: <FaLightbulb />, color: "#14b8a6", desc: "We bring creative and fresh ideas to the table." },
//   { title: "Team", icon: <FaUsers />, color: "#f97316", desc: "Our experts work together to ensure success." },
//   { title: "Quality", icon: <FaCode />, color: "#ec4899", desc: "We code with precision and attention to detail." },
//   { title: "Mobile", icon: <FaMobileAlt />, color: "#3b82f6", desc: "Optimized solutions for all devices." },
//   { title: "Global", icon: <FaGlobe />, color: "#22c55e", desc: "Serving clients across the world." },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-6xl mx-auto px-6">
        
//         {/* Heading */}
//         <div className="text-center mb-14 flex flex-col items-center">
//           <div className="flex items-center gap-3">
//             {/* <img src={logo} alt="Logo" className="w-10 h-10" /> */}
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//               Why Choose <span className="text-teal-500">Devsinc?</span>
//             </h2>
//           </div>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             We deliver excellence with every project, ensuring your business thrives with our expertise and dedication.
//           </p>
//         </div>

//         {/* Features Row */}
//         <div className="flex justify-center gap-12 flex-wrap">
//           {features.map((f, i) => (
//             <div key={i} className="flex flex-col items-center">
              
//               {/* Arc + Icon Container */}
//               <div className="relative w-28 h-28 flex items-center justify-center">
//                 {/* Dashed Half Arc */}
//                 <svg
//                   className="absolute w-full h-full"
//                   viewBox="0 0 120 120"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   style={{ transform: "rotate(270deg)" }}
//                 >
//                   <path
//                     d="M10 60 A50 50 0 0 1 110 60"
//                     stroke={f.color}
//                     strokeWidth="3"
//                     strokeDasharray="6 8"
//                     strokeLinecap="round"
//                   />
//                 </svg>

//                 {/* Icon */}
//                 <div className="text-4xl" style={{ color: f.color }}>
//                   {f.icon}
//                 </div>
//               </div>

//               {/* Title */}
//               <span className="mt-3 text-sm font-medium text-gray-700">
//                 {f.title}
//               </span>

//               {/* Paragraph under icon */}
//               <p className="mt-2 text-xs text-gray-500 text-center max-w-[150px]">
//                 {f.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { FaLightbulb, FaUsers, FaCode, FaMobileAlt, FaGlobe } from "react-icons/fa";

const features = [
  {
    title: "End-to-End Expertise",
    icon: <FaLightbulb />,
    color: "#14b8a6",
    desc: "We handle your project from concept to completion, ensuring every stage is executed flawlessly."
  },
  {
    title: "Collaborative Team",
    icon: <FaUsers />,
    color: "#f97316",
    desc: "Our team works closely with you, blending your vision with our expertise for the best results."
  },
  {
    title: "Quality Development",
    icon: <FaCode />,
    color: "#ec4899",
    desc: "We build with precision, writing clean and maintainable code for long-term success."
  },
  {
    title: "Mobile First",
    icon: <FaMobileAlt />,
    color: "#3b82f6",
    desc: "Our solutions are optimized for seamless use across all devices and screen sizes."
  },
  {
    title: "Global Reach",
    icon: <FaGlobe />,
    color: "#22c55e",
    desc: "We proudly serve clients worldwide, delivering projects that meet international standards."
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-teal-500">YTeams?</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We deliver excellence with every project, ensuring your business thrives with our expertise and dedication.
          </p>
        </div>

        {/* Features in one line */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-4">
              {/* Icon with dashed circle */}
              <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                <div
                  className="absolute inset-0 rounded-full border-2 border-dashed flex items-center justify-center"
                  style={{ borderColor: f.color }}
                ></div>
                <div className="text-xl" style={{ color: f.color }}>
                  {f.icon}
                </div>
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-base font-semibold text-gray-800">{f.title}</h3>
                <p className="mt-1 text-gray-600 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}