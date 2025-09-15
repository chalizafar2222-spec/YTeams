// import React, { useState } from "react";
// import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import logo from "../Assets/IMG_9847.png";

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null); // mobile submenu toggle

//   const menuItems = [
//     {
//       title: "WHAT WE DO",
//       dropdown: {
//         Capabilities: {
//           "Digital Transformation": [
//             "Web development",
//             "App Development",
//             "Custom Software Development",
//             "UX/UI Design",
//           ],
//           "Business Applications": ["D365 ERP", "D365 CRM", "Power Apps"],
//           "Emerging Technologies": [
//             "Metaverse",
//             "Augmented reality",
//             "Blockchain & Cryptography",
//           ],
//         },
//       },
//     },
//     {
//       title: "WHO WE ARE",
//       dropdown: {
//         Company: {
//           "About Us": ["Mission", "Vision", "Leadership"],
//           "Our Values": ["Integrity", "Innovation", "Collaboration"],
//           Careers: ["Open Positions", "Culture", "Internships"],
//         },
//       },
//     },
//     {
//       title: "HOW WE DELIVER",
//       dropdown: {
//         Approach: {
//           "Agile Methodology": ["Scrum", "Kanban"],
//           "Project Management": ["Planning", "Execution", "Delivery"],
//           "Client Engagement": ["Workshops", "Consultations"],
//         },
//       },
//     },
//     {
//       title: "JOIN DEVSINC",
//       dropdown: {
//         Opportunities: {
//           "Job Openings": ["Engineering", "Design", "Marketing", "Sales"],
//           "Internships": ["Summer Program", "Graduate Program"],
//           "Freelance": ["Contract Work", "Remote Projects"],
//         },
//       },
//     },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 bg-transparent text-black">
//       <div className="flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 cursor-pointer group">
//           <img
//             src={logo}
//             alt="Logo"
//             className="w-8 transition-all duration-500 ease-in-out"
//           />
//           <span className="text-black font-bold text-xl opacity-0 -translate-x-2 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0">
//             <span className="text-[#77c8e1]">Y</span>Teams
//           </span>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-6 relative">
//           {menuItems.map((item, idx) => (
//             <li key={idx} className="relative group">
//               <button className="flex items-center gap-1 hover:text-teal-400 text-sm">
//                 {item.title}
//                 {item.dropdown && <FaChevronDown className="text-xs" />}
//               </button>

//               {item.dropdown && (
//                 <div className="absolute left-1/2 -translate-x-[35%] top-full mt-2 bg-white w-[90vw] max-w-[900px] p-8 shadow-lg z-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-md items-start">
//                     {Object.entries(item.dropdown).map(([sectionTitle, sectionData], i) =>
//                       Object.entries(sectionData).map(([category, links], j) => (
//                         <div key={`${i}-${j}`}>
//                           <h3 className="font-bold text-lg mb-2">{category}</h3>
//                           {Array.isArray(links) && (
//                             <ul className="space-y-1">
//                               {links.map((link, k) => (
//                                 <li key={k} className="hover:text-teal-400 cursor-pointer">
//                                   <Link
//                                     to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
//                                   >
//                                     {link}
//                                   </Link>
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                         </div>
//                       ))
//                     )}
//                   </div>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>


//         {/* Right Buttons */}
//         <div className="hidden md:flex items-center gap-4">
//           <button className="bg-teal-500 px-4 py-2 rounded-full font-semibold hover:bg-teal-400">
//             Explore Careers
//           </button>
//           <button className="border border-teal-500 px-4 py-2 rounded-full font-semibold hover:bg-teal-500 hover:text-black">
//             Let's Talk Business
//           </button>
//           <button className="hover:text-teal-400">Global</button>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden text-xl"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           {mobileOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="md:hidden bg-white px-6 pb-6 max-h-[80vh] overflow-y-auto">
//           {menuItems.map((item, idx) => (
//             <div key={idx} className="border-b border-gray-300 py-2">
//               <div
//                 className="font-semibold flex justify-between items-center cursor-pointer"
//                 onClick={() =>
//                   setOpenDropdown(openDropdown === idx ? null : idx)
//                 }
//               >
//                 {item.title}
//                 {item.dropdown && (
//                   <FaChevronDown
//                     className={`transition-transform duration-200 ${openDropdown === idx ? "rotate-180" : ""
//                       }`}
//                   />
//                 )}
//               </div>
//               {item.dropdown && openDropdown === idx && (
//                 <div className="mt-2 pl-4 text-sm">
//                   {Object.entries(item.dropdown).map(
//                     ([sectionTitle, sectionData], i) => (
//                       <div key={i}>
//                         <h2 className="text-lg font-bold mt-3">
//                           {sectionTitle}
//                         </h2>
//                         {Object.entries(sectionData).map(
//                           ([category, links], j) => (
//                             <div key={j} className="mt-2">
//                               <h3 className="font-semibold">{category}</h3>
//                               {Array.isArray(links) && (
//                                 <ul className="space-y-1 mt-1">
//                                   {links.map((link, k) => (
//                                     <li
//                                       key={k}
//                                       className="hover:text-teal-400"
//                                     >
//                                       <Link
//                                         to={`/${link
//                                           .toLowerCase()
//                                           .replace(/\s+/g, "-")}`}
//                                       >
//                                         {link}
//                                       </Link>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               )}
//                             </div>
//                           )
//                         )}
//                       </div>
//                     )
//                   )}
//                 </div>
//               )}
//             </div>
//           ))}

//           <div className="mt-4 flex flex-col gap-3">
//             <button className="bg-teal-500 px-4 py-2 rounded-full font-semibold hover:bg-teal-400">
//               Explore Careers
//             </button>
//             <button className="border border-teal-500 px-4 py-2 rounded-full font-semibold hover:bg-teal-500 hover:text-black">
//               Let's Talk Business
//             </button>
//             <button className="hover:text-teal-400">Global</button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Assets/IMG_9847.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    {
      title: "WHAT WE DO",
      dropdown: {
        Capabilities: {
          "Digital Transformation": [
            { name: "Web Development", path: "/web-service" },
            { name: "App Development", path: "/app" },
            { name: "UX/UI Design", path: "/ux" },
          ],
          "Business Applications": [
            { name: "D365 ERP", path: "/d365-erp" },
            { name: "D365 CRM", path: "/d365-crm" },
            { name: "Power Apps", path: "/power-apps" },
          ],
          "Emerging Technologies": [
            { name: "Metaverse", path: "/metaverse" },
          ],
        },
      },
    },

    {
      title: "WHO WE ARE",
      dropdown: {
        Company: {
          "About Us": [
            { name: "About Us", path: "/about-us" },
            { name: "Our Team", path: "/our-team" },
          ],
          Careers: [
            { name: "Open Positions", path: "open-position" },
            { name: "Internships", path: "internship" },
          ],
        },
      },
    },
    // {
    //   title: "JOIN YTEAMS",
    //   dropdown: {
    //     Opportunities: {
    //       "Job Openings": [
    //         { name: "Engineering", path: "/join-yteams/job-openings/engineering" },
    //         { name: "Design", path: "/join-yteams/job-openings/design" },
    //         { name: "Marketing", path: "/join-yteams/job-openings/marketing" },
    //         { name: "Sales", path: "/join-yteams/job-openings/sales" },
    //       ],
    //       Internships: [
    //         { name: "Summer Program", path: "/join-yteams/internships/summer-program" },
    //         { name: "Graduate Program", path: "/join-yteams/internships/graduate-program" },
    //       ],
    //       Freelance: [
    //         { name: "Contract Work", path: "/join-yteams/freelance/contract-work" },
    //         { name: "Remote Projects", path: "/join-yteams/freelance/remote-projects" },
    //       ],
    //     },
    //   },
    // },
{
      title: "JOIN YTEAMS",
      path: "/3dd",
    },
    {
      title: "Contact Us",
      path: "/contact-us",
    },
  ];

  const renderLinks = (links) => (
    <ul className="space-y-1">
      {links.map((linkItem, k) => {
        const linkName =
          typeof linkItem === "string" ? linkItem : linkItem.name;
        const linkPath =
          typeof linkItem === "string"
            ? `/${linkItem.toLowerCase().replace(/\s+/g, "-")}`
            : linkItem.path;
        const isExternal = linkPath.startsWith("http");

        return (
          <li key={k} className="hover:text-teal-400 cursor-pointer">
            {isExternal ? (
              <a href={linkPath} target="_blank" rel="noopener noreferrer">
                {linkName}
              </a>
            ) : (
              <Link to={linkPath}>{linkName}</Link>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white text-black">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer group">
          <img
            src={logo}
            alt="Logo"
            className="w-8 transition-all duration-500 ease-in-out"
          />
          <span className="text-black font-bold text-xl opacity-0 -translate-x-2 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0">
            <span className="text-[#77c8e1]">Y</span>Teams
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 relative">
          {menuItems.map((item, idx) => (
            <li key={idx} className="relative group">
              {item.path ? (
                // ✅ Direct Link for Contact Us
                <Link
                  to={item.path}
                  className="flex items-center gap-1 hover:text-teal-400 text-sm"
                >
                  {item.title}
                </Link>
              ) : (
                <button className="flex items-center gap-1 hover:text-teal-400 text-sm">
                  {item.title}
                  {item.dropdown && <FaChevronDown className="text-xs" />}
                </button>
              )}

              {item.dropdown && (
                <div className="absolute left-1/2 -translate-x-[35%] top-full mt-2 bg-white w-[90vw] max-w-[900px] p-8 shadow-lg z-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-md items-start">
                    {Object.entries(item.dropdown).map(
                      ([sectionTitle, sectionData], i) =>
                        Object.entries(sectionData).map(
                          ([category, links], j) => (
                            <div key={`${i}-${j}`}>
                              <h3 className="font-bold text-lg mb-2">
                                {category}
                              </h3>
                              {Array.isArray(links) && renderLinks(links)}
                            </div>
                          )
                        )
                    )}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/open-position" className="bg-teal-500 px-4 py-2 rounded-full font-semibold hover:bg-teal-400">
            Explore Careers
          </Link>
          <Link to="/calendar" className="border border-teal-500 px-4 py-2 rounded-full font-semibold hover:bg-teal-500 hover:text-black">
            Let's Talk Business
          </Link>
          {/* <button className="hover:text-teal-400">Global</button> */}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-6 pb-6 max-h-[80vh] overflow-y-auto">
          {menuItems.map((item, idx) => (
            <div key={idx} className="border-b border-gray-300 py-2">
              {item.path ? (
                // ✅ Direct Link for Contact Us in mobile
                <Link
                  to={item.path}
                  className="font-semibold block hover:text-teal-400"
                >
                  {item.title}
                </Link>
              ) : (
                <>
                  <div
                    className="font-semibold flex justify-between items-center cursor-pointer"
                    onClick={() =>
                      setOpenDropdown(openDropdown === idx ? null : idx)
                    }
                  >
                    {item.title}
                    {item.dropdown && (
                      <FaChevronDown
                        className={`transition-transform duration-200 ${openDropdown === idx ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </div>
                  {item.dropdown && openDropdown === idx && (
                    <div className="mt-2 pl-4 text-sm">
                      {Object.entries(item.dropdown).map(
                        ([sectionTitle, sectionData], i) => (
                          <div key={i}>
                            <h2 className="text-lg font-bold mt-3">
                              {sectionTitle}
                            </h2>
                            {Object.entries(sectionData).map(
                              ([category, links], j) => (
                                <div key={j} className="mt-2">
                                  <h3 className="font-semibold">{category}</h3>
                                  {Array.isArray(links) && renderLinks(links)}
                                </div>
                              )
                            )}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}

          <div className="mt-4 flex flex-col gap-3">
            <button className="bg-teal-500 px-4 py-2 rounded-full font-semibold hover:bg-teal-400">
              Explore Careers
            </button>
            <button className="border border-teal-500 px-4 py-2 rounded-full font-semibold hover:bg-teal-500 hover:text-black">
              Let's Talk Business
            </button>
            <button className="hover:text-teal-400">Global</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
