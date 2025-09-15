import React from "react";
import { FaSlidersH, FaMapMarkerAlt, FaEye, FaAtom } from "react-icons/fa";

const values = [
  {
    icon: <FaSlidersH className="text-5xl mb-4 transition-transform duration-300 group-hover:translate-y-2" />,
    title: "Ship & Iterate",
    desc: "We move swiftly, refining our approach with every step to maintain a leading edge.",
  },
  {
    icon: <FaMapMarkerAlt className="text-5xl mb-4 transition-transform duration-300 group-hover:translate-y-2" />,
    title: "Trusted Pair of Hands",
    desc: "Dependable and steadfast, we are always there when it matters most.",
  },
  {
    icon: <FaEye className="text-5xl mb-4 transition-transform duration-300 group-hover:translate-y-2" />,
    title: "Overdeliver on the Promise",
    desc: "Exceeding expectations is our standard, going beyond what’s assured.",
  },
  {
    icon: <FaAtom className="text-5xl mb-4 transition-transform duration-300 group-hover:translate-y-2" />,
    title: "Clear is Kind",
    desc: "Transparent, honest communication keeps everyone on the same page.",
  },
];

const ValuesSection = () => {
  return (
    <section className="bg-gradient-to-r from-white to-teal-50 py-16">
      <div className="text-center mb-12">
        <p className="text-teal-600 font-semibold">OUR VALUES</p>
        <h2 className="text-4xl font-bold">We Believe in Providing Values.</h2>
      </div>
      <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 px-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="group bg-gray-200 rounded-2xl shadow-md p-8 text-center transition-all duration-500 hover:bg-teal-500 hover:text-white"
          >
            <div className="flex justify-center">{value.icon}</div>
            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
            <p className="text-sm">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;