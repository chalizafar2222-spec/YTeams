// import React from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim"; // ✅ slim version

// const mediaLogos = [
//   "/assets/forbes.png",
//   "/assets/yahoo.png",
//   "/assets/mashable.png",
//   "/assets/business-insider.png",
//   "/assets/benzinga.png",
// ];

// export default function FeaturedIn() {
//   const particlesInit = async (engine) => {
//     await loadSlim(engine); // ✅ init slim engine
//   };

//   return (
//     <section className="relative bg-white py-20">
//       {/* Particles background */}
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={{
//           background: { color: "transparent" },
//           particles: {
//             number: { value: 50 },
//             color: { value: "#999" },
//             links: { enable: true, color: "#999" },
//             move: { enable: true, speed: 1 },
//           },
//         }}
//         className="absolute top-0 left-0 w-full h-full"
//       />

//       {/* Content */}
//       <div className="relative z-10 px-8">
//         <h2 className="text-3xl font-bold mb-8 text-black">Featured In</h2>
//         <div className="flex flex-wrap justify-center gap-12">
//           {mediaLogos.map((logo, i) => (
//             <img key={i} src={logo} alt="media logo" className="h-10" />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from 'react'

function FeaturedIn() {
  return (
    <div>
      
    </div>
  )
}

export default FeaturedIn

