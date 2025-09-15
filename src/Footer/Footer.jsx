// import React from "react";

// const Footer = () => {
//   return (
//     <div className="relative">
//       {/* Wave SVG */}
//       <div className="absolute top-0 left-0 w-full -mt-10 overflow-hidden leading-none rotate-180">
//         <svg
//           className="relative block w-[calc(120%+1.3px)] h-12"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0,0V46.29c47.71,22,103.84,29.27,158,17.43
//               C230.52,51.46,284,15.81,339.37,6.07
//               c56.09-9.91,112.38,10.37,166.63,27.35
//               C585.09,56.24,639.68,69.5,693,57.89
//               c60.64-13,113.12-46.41,172.71-55.14
//               C925.52-8.73,985,12.9,1042.26,29.9
//               c55.79,16.4,112.27,22.87,157.74,4.22V0Z"
//             opacity=".25"
//             fill="#6366F1"
//           ></path>
//           <path
//             d="M0,0V15.81C47.42,35.69,103.82,48,158,40.22
//               c70.2-9.64,130.07-52.46,186.68-69.12
//               C478.6-43.31,534.86-22,589.67,1.52
//               c56.06,23.94,113.74,40.6,173,33.08
//               c61.28-7.77,114.91-42.21,172.72-61.45
//               c30.27-9.73,59.29-5.95,87.69,6.16
//               c22.86,9.65,48.1,14.52,73.92,15.81V0Z"
//             opacity=".5"
//             fill="#008080"
//           ></path>
//           <path
//             d="M0,0V5.63C45.42,20.9,100.45,35.9,155,32.68
//               c54.36-3.19,104.37-28.91,158-39.23
//               c51.77-10,106.51-6.51,156,7.75
//               c55.65,15.73,117.84,35.7,175,20.62
//               c31.31-8.1,60.24-24.09,90-37.69
//               c41.83-18.33,92.09-29.89,138.42-27.63
//               c37.64,1.87,74.57,15.81,110.58,29.64V0Z"
//             fill="#2dd4bf"
//           ></path>
//         </svg>
//       </div>

//       {/* Footer Section - Full Width */}
//       <div className="bg-indigo-100 px-4 pt-16 w-full md:px-24 lg:px-8">
//         <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
//           {/* Column 1 - Logo + Company Description */}
//           <div className="md:max-w-md lg:col-span-2">
//             <a
//               href="/"
//               aria-label="Company"
//               title="Company"
//               className="inline-flex items-center"
//             >
//               <svg
//                 className="w-8 text-deep-purple-accent-400"
//                 viewBox="0 0 24 24"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeMiterlimit="10"
//                 stroke="currentColor"
//                 fill="none"
//               >
//                 <rect x="3" y="1" width="7" height="12" />
//                 <rect x="3" y="17" width="7" height="6" />
//                 <rect x="14" y="1" width="7" height="6" />
//                 <rect x="14" y="11" width="7" height="12" />
//               </svg>
//               <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
//                 HealthGrid
//               </span>
//             </a>
//             <div className="mt-4 text-sm text-gray-700">
//               Empowering families and educators with purpose-built tech to
//               reform healthcare and unlock the full potential of communities.
//             </div>
//           </div>

//           {/* Column 2 - Category */}
//           <div className="space-y-2 text-sm">
//             <p className="text-base font-bold tracking-wide text-gray-900">
//               Category
//             </p>
//             <a href="/" className="text-gray-600 hover:text-deep-purple-500">
//               News
//             </a>
//             <a href="/" className="text-gray-600 hover:text-deep-purple-500">
//               Innovation
//             </a>
//             <a href="/" className="text-gray-600 hover:text-deep-purple-500">
//               Health Tech
//             </a>
//             <a href="/" className="text-gray-600 hover:text-deep-purple-500">
//               Policy
//             </a>
//           </div>

//           {/* Column 3 - Resources */}
//           <div className="space-y-2 text-sm">
//             <p className="text-base font-bold tracking-wide text-gray-900">
//               Resources
//             </p>
//             <a href="/" className="text-gray-600 hover:text-deep-purple-500">
//               Blog
//             </a>
//             <a href="/" className="text-gray-600 hover:text-deep-purple-500">
//               Research
//             </a>
//             <a href="/" className="text-gray-600 hover:text-deep-purple-500">
//               Case Studies
//             </a>
//             <a href="/" className="text-gray-600 hover:text-deep-purple-500">
//               Help Center
//             </a>
//           </div>

//           {/* Column 4 - Company */}
//           <div className="space-y-2 text-sm">
//             <p className="text-base font-bold tracking-wide text-gray-900">
//               Company
//             </p>
//             <a href="/" className="text-gray-600 hover:text-deep-purple-500">
//               About
//             </a>
//             <a href="/" className="text-gray-600 hover:text-deep-purple-500">
//               Careers
//             </a>
//             <a href="/" className="text-gray-600 hover:text-deep-purple-500">
//               Contact
//             </a>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
//           <p className="text-sm text-gray-600">
//             ©️ 2025 HealthGrid. All rights reserved.
//           </p>
//           <div className="flex items-center mt-4 space-x-4 sm:mt-0">
//             {[...Array(3)].map((_, index) => (
//               <a
//                 key={index}
//                 href="/"
//                 className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
//               >
//                 <svg
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className={["h-5", "h-6", "h-5"][index]}
//                 >
//                   <circle cx="12" cy="12" r="10" />
//                 </svg>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React from "react";
import logo from "../Assets/IMG_9847.png";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import EmailSection from "../EmailSection/EmailSection";



const Footer = () => {
  return (
    <footer className="bg-white text-gray-400 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Middle Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm">
          {/* Column 1 with Logo */}
          <div>
            <Link to="/" className="flex items-center space-x-2 group relative overflow-hidden">
              <img
                src={logo}
                alt="Yteams Logo"
                className="w-12 object-contain"
              />
              {/* Text comes in on hover */}
              <span className="absolute left-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-5 transition-all duration-500 font-semibold flex text-3xl">
                <span className="text-[#77c8e1]">Y</span>
                <span className="text-black">Teams</span>
              </span>
            </Link>
            <p className="mt-4 mb-3 text-black">At YTeams, ideas flow like energy—driving innovation and creating technology that transforms the future.</p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-black font-semibold mb-4">WHAT WE DO</h3>
            <ul className="space-y-2">
              <li><Link to="/web-service" className="hover:text-[#77c8e1]">Web Development</Link></li>
              <li><Link to="/app" className="hover:text-[#77c8e1]">App Development</Link></li>
              <li><Link to="/ux" className="hover:text-[#77c8e1]">UX/UI Design</Link></li>
              <li><Link to="/d365-erp" className="hover:text-[#77c8e1]">D365 ERP</Link></li>
              <li><Link to="/d365-crm" className="hover:text-[#77c8e1]">D365 CRM</Link></li>
              <li><Link to="/power-apps" className="hover:text-[#77c8e1]">Power Apps</Link></li>
              <li><Link to="/metaverse" className="hover:text-[#77c8e1]">Metaverse</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-black font-semibold mb-4">WHO WE ARE</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="hover:text-[#77c8e1]">About Us</Link></li>
              <li><Link to="/our-team" className="hover:text-[#77c8e1]">Our Team</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-black font-semibold mb-4">Careers</h3>
            <ul className="space-y-2">
              <li><Link to="/open-position" className="hover:text-[#77c8e1]">Open Positions</Link></li>
              <li><Link to="/internship" className="hover:text-[#77c8e1]">Internships</Link></li>
            </ul>
          </div>
          {/* Column 5 */}
          <div>
            <h3 className="text-black font-semibold mb-4">Blogs</h3>
            <ul className="space-y-2">
              <li><Link to="/trend" className="hover:text-[#77c8e1]">Web Development in 2025</Link></li>
              <li><Link to="/framework" className="hover:text-[#77c8e1]">Framework to Choose in 2025</Link></li>
              <li><Link to="/ecommerce" className="hover:text-[#77c8e1]">Future of E-Commerce in 2025</Link></li>
              <li><Link to="/digital-marketing" className="hover:text-[#77c8e1]">Digital Marketing Growth in 2025</Link></li>
              <li><Link to="/shopify" className="hover:text-[#77c8e1]">Shopify in 2025</Link></li>
              <li><Link to="/ai" className="hover:text-[#77c8e1]">(AI) Future of Technology in 2025</Link></li>
              <li><Link to="/cyber" className="hover:text-[#77c8e1]">Cybersecurity in 2025</Link></li>
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="border-t border-gray-700 mt-6 pt-6 flex flex-wrap justify-center items-center text-sm space-x-4">
          <span className="text-black mr-4">Join YTeams - Be Part of the Future:</span>
          {[<FaFacebookSquare />, <FaLinkedin />, <FaInstagram />, <FaTiktok />, <FaYoutube />,].map((company, index) => (
            <a key={index} href="#" className="hover:text-[#77c8e1] text-xl">
              {company}
            </a>
          ))}
          
           <EmailSection />
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>
            Privacy Policy | Terms & Condition © 2025 All rights reserved{" "}
            <a href="" className="text-[#77c8e1]">YTeams</a>
          </p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Compliances</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
