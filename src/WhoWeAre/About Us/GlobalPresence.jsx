import React from "react";
import pakistan from "../../Assets/pak.jpg";
import uk from "../../Assets/uk.jpg";

const countries = [
  { img: pakistan, name: "Pakistan" },
  { img: uk, name: "United Kingdom" },
];

const GlobalPresence = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold mb-3">Our Global Presence</h2>
        <p className="text-gray-600">
          We support clients in 23+ countries and drive continued growth through
          innovation and transformation.
        </p>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
        {countries.map((country, index) => (
          <div key={index} className="group">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src={country.img}
                alt={country.name}
                className="w-full h-64 object-center transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <p className="mt-3 text-base font-medium">{country.name}</p>

            {/* Show office info only under the first (Pakistan) */}
            {index === 0 && (
              <div className="text-left mt-6">
                <h3 className="text-xl font-bold text-teal-600">
                  London, United Kingdom Office
                </h3>
                <p className="text-gray-700">
                  128 City Road London EC1V 2NX, United Kingdom
                </p>
                <p className="font-semibold mt-1">
                  Phone: <span className="text-gray-800">+92 308 1122334 | +61 433 851 870</span>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlobalPresence;