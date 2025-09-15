import React from "react";
import Calient1 from "../Assets/allan.avif"
import Calient2 from "../Assets/bell.avif"
import Calient3 from "../Assets/excel.avif"
import Calient4 from "../Assets/HSK.avif"
import Calient5 from "../Assets/insta.avif"
import Calient6 from "../Assets/mazito.jpg"
import Calient7 from "../Assets/mcq.avif"

const logosRow1 = [
Calient1, Calient2,Calient3,
Calient4, Calient5,
];
const logosRow2 = [
  Calient6, Calient7, Calient1,
  Calient2, Calient3,
];

export default function ClientLogos() {
  return (
    <section className="bg-white py-12 overflow-hidden">
      {/* Row 1 */}
      <div className="flex animate-slide-left gap-12">
        {[...logosRow1, ...logosRow1].map((logo, i) => (
          <img key={i} src={logo} alt="client logo" className="h-16" />
        ))}
      </div>
      {/* Row 2 */}
      <div className="flex animate-slide-right gap-12 mt-6">
        {[...logosRow2, ...logosRow2].map((logo, i) => (
          <img key={i} src={logo} alt="client logo" className="h-16" />
        ))}
      </div>
    </section>
  );
}
