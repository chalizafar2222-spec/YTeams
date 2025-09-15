// import React, { useState } from "react";
// import { FaLinkedin } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import team1 from "../../Assets/ali.avif";
// import team2 from "../../Assets/Ali Hasnain .avif";
// import team3 from "../../Assets/lucas.avif";
// import team4 from "../../Assets/ahmad.avif";
// import team5 from "../../Assets/adeel.avif";
// import team6 from "../../Assets/jawad.avif";
// import team7 from "../../Assets/mubeen.avif";
// import team8 from "../../Assets/rai.avif";
// import team9 from "../../Assets/hamna.avif";
// import team10 from "../../Assets/aimen.avif";
// import team11 from "../../Assets/noor.avif";

// const teamMembers = [
//   {
//     id: 1,
//     name: "Ali Zafar",
//     role: "CEO",
//     image: team1,
//     description: "Expert in UI/UX with 5 years of experience."
//   },
//   {
//     id: 2,
//     name: "Ali Hasnain",
//     role: "Director & CTO",
//     image: team2,
//     description: "Full Stack Developer proficient in MERN stack."
//   },
//   {
//     id: 3,
//     name: "Lucas Henry",
//     role: "Vice President",
//     image: team3,
//     description: "Growth marketing specialist with a creative edge."
//   },
//   {
//     id: 4,
//     name: "Ahmad Nawaz",
//     role: "Business Development Manager",
//     image: team4,
//     description: "Creative director with a passion for branding."
//   },
//   {
//     id: 5,
//     name: "Adeel Ashraf",
//     role: "IT Consultant & ERP Expert",
//     image: team5,
//     description: "Creative director with a passion for branding."
//   },
//   {
//     id: 6,
//     name: "jawad Haider",
//     role: "Software Developer ( Australia Office )",
//     image: team6,
//     description: "Creative director with a passion for branding."
//   },
//   {
//     id: 7,
//     name: "Lucas Henry",
//     role: "Legal Adviser",
//     image: team7,
//     description: "Creative director with a passion for branding."
//   },
//   {
//     id: 8,
//     name: "Rai Mukhtar",
//     role: "Operations Manager",
//     image: team8,
//     description: "Creative director with a passion for branding."
//   },
//   {
//     id: 9,
//     name: "Hamna Farooq",
//     role: "Node JS Developer",
//     image: team9,
//     description: "Creative director with a passion for branding."
//   },
//   {
//     id: 10,
//     name: "Hamza Farooq",
//     role: "QA Engineer",
//     image: "",
//     description: "Creative director with a passion for branding."
//   },
//   {
//     id: 11,
//     name: "Aimen Ikram",
//     role: "Business Developer",
//     image: team10,
//     description: "Creative director with a passion for branding."
//   },
//   {
//     id: 12,
//     name: "Noor Zainab",
//     role: "Business Developer",
//     image: team11,
//     description: "Creative director with a passion for branding."
//   }
// ];

// const roles = [ "All","CEO", "Director & CTO", "Vice President", "Business Development Manager", "IT Consultant & ERP Expert", "Software Developer ( Australia Office )", "Legal Adviser", "Operations Manager", "Node JS Developer", "QA Engineer", "Business Developer" ];

// const TeamSection = () => {
//   const [activeRole, setActiveRole] = useState("All");

//   const filteredTeam =
//     activeRole === "All"
//       ? teamMembers
//       : teamMembers.filter((member) => member.role === activeRole);

//   return (
//     <section className="bg-white py-16 text-white">
//       <div className="px-4 mx-auto max-w-screen-xl text-center lg:px-6">
//         <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
//           <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">Our Team</h2>
//           <p className="font-light text-gray-400 sm:text-xl">
//             Meet the people behind the success of YTeams.
//           </p>
//         </div>

//         <div className="flex justify-center gap-4 mb-10 flex-wrap">
//           {roles.map((role) => (
//             <button
//               key={role}
//               onClick={() => setActiveRole(role)}
//               className={`px-4 py-2 border rounded-full text-sm font-medium transition-colors duration-300 hover:bg-black hover:text-white ${
//                 activeRole === role ? "bg-black text-white" : "text-black border-gray-500"
//               }`}
//             >
//               {role}
//             </button>
//           ))}
//         </div>

//         <div className="grid gap-8 mb-6 lg:mb-16 sm:grid-cols-2 md:grid-cols-4">
//           {filteredTeam.map(({ id, name, role, image, description }) => (
//             <div
//               key={id}
//               className="text-center rounded-lg border border-[#77c8e1] p-6 hover:shadow-xl transition duration-300"
//             >
//               <img
//                 className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
//                 src={image}
//                 alt={name}
//                 loading="lazy"
//               />
//               <h3 className="mb-1 text-xl font-bold tracking-tight text-white">{name}</h3>
//               <p className="text-gray-400 mb-2">{role}</p>
//               <p className="text-sm text-gray-500">{description}</p>
//               <ul className="flex justify-center mt-4 space-x-4">
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-[rgb(213,86,83)]"><FaInstagram /></a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-blue-600 w-5 h-5"><FaLinkedin /></a>
//                 </li>
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;

import React, { useState } from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

import team1 from "../../Assets/ali.avif";
import team2 from "../../Assets/Ali Hasnain .avif";
import team3 from "../../Assets/lucas.avif";
import team4 from "../../Assets/ahmad.avif";
import team5 from "../../Assets/adeel.avif";
import team6 from "../../Assets/jawad.avif";
import team7 from "../../Assets/mubeen.avif";
import team8 from "../../Assets/rai.avif";
import team9 from "../../Assets/hamna.avif";
import team10 from "../../Assets/aimen.avif";
import team11 from "../../Assets/noor.avif";
import team12 from "../../Assets/IMG_1269.JPG";
import team13 from "../../Assets/AZIB.jpg";


const teamMembers = [
  {
    id: 1,
    name: "Ali Zafar",
    role: "CEO",
    category: "CEO/CTO",
    img: team1,
    socials: {
      github: "https://github.com/alizafar",
      twitter: "https://twitter.com/alizafar",
      linkedin: "https://linkedin.com/in/alizafar",
    },
  },
  {
    id: 2,
    name: "Ali Hasnain",
    role: "Director & CTO",
    category: "CEO/CTO",
    img: team2,
    socials: {
      github: "https://github.com/alihasnain",
      twitter: "https://twitter.com/alihasnain",
      linkedin: "https://linkedin.com/in/alihasnain",
    },
  },
  {
    id: 3,
    name: "Lucas Henry",
    role: "Vice President",
    category: "Management",
    img: team3,
    socials: {
      github: "https://github.com/lucashenry",
      twitter: "https://twitter.com/lucashenry",
      linkedin: "https://linkedin.com/in/lucashenry",
    },
  },
  {
    id: 4,
    name: "Ahmad Nawaz",
    role: "Business Development Manager",
    category: "Management",
    img: team4,
    socials: {
      github: "https://github.com/ahmadnawaz",
      twitter: "https://twitter.com/ahmadnawaz",
      linkedin: "https://linkedin.com/in/ahmadnawaz",
    },
  },
  {
    id: 5,
    name: "Adeel Ashraf",
    role: "IT Consultant & ERP Expert",
    category: "Management",
    img: team5,
    socials: {
      github: "https://github.com/adeelashraf",
      twitter: "https://twitter.com/adeelashraf",
      linkedin: "https://linkedin.com/in/adeelashraf",
    },
  },
  {
    id: 6,
    name: "Jawad Haider",
    role: "Software Developer (Australia Office)",
    category: "Development",
    img: team6,
    socials: {
      github: "https://github.com/jawadhaider",
      twitter: "https://twitter.com/jawadhaider",
      linkedin: "https://linkedin.com/in/jawadhaider",
    },
  },
  {
    id: 7,
    name: "Mubeen",
    role: "Operations Manager",
    category: "Management",
    img: team7,
    socials: {
      github: "https://github.com/mubeen",
      twitter: "https://twitter.com/mubeen",
      linkedin: "https://linkedin.com/in/mubeen",
    },
  },
  {
    id: 8,
    name: "Rai Mukhtar",
    role: "Legal Adviser",
    category: "Legal",
    img: team8,
    socials: {
      github: "https://github.com/raimukhtar",
      twitter: "https://twitter.com/raimukhtar",
      linkedin: "https://linkedin.com/in/raimukhtar",
    },
  },
  {
    id: 9,
    name: "Hamza Ali",
    role: "Mern Stack Developer",
    category: "Development",
    img: team12,
    socials: {
      github: "https://github.com/hamzaali",
      twitter: "https://twitter.com/hamzaali",
      linkedin: "https://www.linkedin.com/in/hamza-ali-940387370/",
    },
  },
  {
    id: 10,
    name: "M.Azib",
    role: "Mern Stack Developer",
    category: "Development",
    img: team13,
    socials: {
      github: "https://github.com/hamzaali",
      twitter: "https://twitter.com/hamzaali",
      linkedin: "https://www.linkedin.com/in/hamza-ali-940387370/",
    },
  },
  {
    id: 11,
    name: "Gohar Nazir",
    role: "Legal Adviser",
    category: "Development",
    img: team8,
    socials: {
      github: "https://github.com/goharnazir",
      twitter: "https://twitter.com/goharnazir",
      linkedin: "https://linkedin.com/in/goharnazir",
    },
  },
  {
    id: 12,
    name: "Hamna Farooq",
    role: "Node JS Developer",
    category: "Development",
    img: team9,
    socials: {
      github: "https://github.com/hamnafarooq",
      twitter: "https://twitter.com/hamnafarooq",
      linkedin: "https://linkedin.com/in/hamnafarooq",
    },
  },
  {
    id: 13,
    name: "Hamza Farooq",
    role: "QA Engineer",
    category: "Development",
    img: "", // no image provided
    socials: {
      github: "https://github.com/hamzafarooq",
      twitter: "https://twitter.com/hamzafarooq",
      linkedin: "https://linkedin.com/in/hamzafarooq",
    },
  },
  {
    id: 14,
    name: "Aimen Ikram",
    role: "Business Developer",
    category: "Management",
    img: team10,
    socials: {
      github: "https://github.com/aimenikram",
      twitter: "https://twitter.com/aimenikram",
      linkedin: "https://linkedin.com/in/aimenikram",
    },
  },
  {
    id: 15,
    name: "Noor Zainab",
    role: "Business Developer",
    category: "Management",
    img: team11,
    socials: {
      github: "https://github.com/noorzainab",
      twitter: "https://twitter.com/noorzainab",
      linkedin: "https://linkedin.com/in/noorzainab",
    },
  },
];

export default function TeamSection() {
  const [category, setCategory] = useState("All");

  const filteredMembers =
    category === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.category === category);

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      {/* Top filter */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">Meet the Team</h2>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none"
        >
          <option>All</option>
          <option>CEO/CTO</option>
          <option>Development</option>
          <option>Management</option>
          <option>Legal</option>
        </select>
      </div>

      {/* Grid layout */}
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left side text */}
        <div className="lg:col-span-1 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">
            The Heart of Our Excellence
          </h3>
          <p className="text-gray-600">
            This section celebrates the unique stories, skills, and passions of
            our team members. From the strategic thinkers to the creative
            innovators, each person contributes to the vibrant culture and
            remarkable service we're known for.
          </p>
        </div>

        {/* Team cards */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray-100 rounded-xl shadow-md overflow-hidden group"
            >
              <img
  src={member.img}
  alt={member.name}
  className="w-full h-60 object-cover object-top group-hover:scale-105 transition-transform duration-300"
/>

              <div className="p-4">
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
                <div className="flex gap-3 mt-3 text-gray-600">
                  {member.socials?.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="hover:text-black cursor-pointer" />
                    </a>
                  )}
                  {member.socials?.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="hover:text-blue-500 cursor-pointer" />
                    </a>
                  )}
                  {member.socials?.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
