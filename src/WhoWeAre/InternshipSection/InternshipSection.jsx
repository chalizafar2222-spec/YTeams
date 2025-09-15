import React from "react";

export default function InternshipSection() {
  const internships = [
    {
      title: "Web Development Intern",
      duration: "3 Months · Remote/Hybrid",
      desc: "Get hands-on experience with React, Node.js, and full-stack development. Work with mentors on live projects.",
      perks: ["Mentorship", "Certificate", "Live Project Experience", "Stipend"],
    },
    {
      title: "Cybersecurity Intern",
      duration: "3 Months · Remote/Hybrid",
      desc: "Dive into ethical hacking, network security, and penetration testing with real-world simulations.",
      perks: ["Access to Security Labs", "Certificate", "Industry Mentors", "Hands-on Training"],
    },
    {
      title: "AI & Data Science Intern",
      duration: "3 Months · Remote/Hybrid",
      desc: "Learn data analysis, build AI/ML models, and experiment with Python on real datasets.",
      perks: ["AI/ML Training", "Live Projects", "Certificate", "Career Guidance"],
    },
    {
      title: "UI/UX Design Intern",
      duration: "2-3 Months · Remote",
      desc: "Work on design tools, create wireframes, and contribute to app/web design projects.",
      perks: ["Design Mentorship", "Creative Portfolio", "Certificate", "Networking"],
    },
    {
      title: "Shopify Development Intern",
      duration: "3 Months · Remote/Hybrid",
      desc: "Learn how to build and customize Shopify stores. Gain practical experience in e-commerce website development.",
      perks: ["E-commerce Training", "Certificate", "Stipend", "Portfolio Projects"],
    },
    {
      title: "SEO & Digital Marketing Intern",
      duration: "2-3 Months · Remote",
      desc: "Gain exposure to keyword research, content optimization, and marketing campaigns.",
      perks: ["Marketing Tools Access", "Certificate", "Hands-on Projects", "Mentorship"],
    },
    {
      title: "Content Writing Intern",
      duration: "2-3 Months · Remote",
      desc: "Write blogs, SEO content, and creative articles while working with experienced editors.",
      perks: ["Creative Writing Guidance", "Certificate", "Portfolio Development", "Mentorship"],
    },
    {
      title: "Cloud Computing Intern",
      duration: "3 Months · Remote/Hybrid",
      desc: "Get exposure to AWS, Azure, and GCP. Learn how to deploy, manage, and monitor cloud systems.",
      perks: ["Cloud Training", "Certificate", "Hands-on Labs", "Industry Mentorship"],
    },
    {
      title: "QA & Testing Intern",
      duration: "2-3 Months · Remote",
      desc: "Learn manual and automated testing techniques to ensure software quality.",
      perks: ["Testing Tools Access", "Certificate", "Hands-on Testing Projects", "Mentorship"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">🎓 Internship Opportunities</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Start your career journey with YTeams. Our internship programs 
          are designed to give students and graduates real-world exposure, 
          skill development, and professional growth.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {internships.map((intern, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl text-left">
              <h3 className="text-2xl font-semibold">{intern.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{intern.duration}</p>
              <p className="text-gray-700 mb-6">{intern.desc}</p>
              <ul className="mb-6 list-disc list-inside text-gray-600">
                {intern.perks.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
              <button className="px-5 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
