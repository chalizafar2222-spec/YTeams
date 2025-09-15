import React from "react";
import { Link } from "react-router-dom";

export default function CareersSection() {
  const jobs = [
    {
      title: "Frontend Developer",
      type: "Full-Time · Remote/On-Site",
      desc: "Craft modern, responsive interfaces using React, Next.js, and Tailwind. Collaborate with designers and backend developers.",
      benefits: ["Competitive Salary", "Flexible Hours", "Growth Opportunities", "Health Insurance", "International Clients"],
    },
    {
      title: "Backend Developer",
      type: "Full-Time · Remote/On-Site",
      desc: "Build scalable APIs and manage databases with Node.js, Express, and MongoDB. Work on high-performance backend systems.",
      benefits: ["Paid Courses", "Mentorship", "Career Growth", "Cutting-edge Projects"],
    },
    {
      title: "Cybersecurity Analyst",
      type: "Full-Time · Remote/On-Site",
      desc: "Protect systems against threats, perform penetration testing, and ensure compliance with global standards.",
      benefits: ["Security Certifications", "Global Security Tools", "Team Training", "Growth Path to Lead Analyst"],
    },
    {
      title: "UI/UX Designer",
      type: "Full-Time · Remote",
      desc: "Design seamless experiences, prototypes, and interfaces. Work closely with developers to bring designs to life.",
      benefits: ["Creative Freedom", "Design Tools Access", "Flexible Hours", "Cross-Team Collaboration"],
    },
    {
      title: "Shopify Designer & Developer",
      type: "Full-Time · Remote/On-Site",
      desc: "Build, customize, and optimize Shopify stores with strong UI/UX design principles.",
      benefits: ["E-commerce Projects", "Creative Freedom", "Career Growth", "Flexible Remote Work"],
    },
    {
      title: "SEO Specialist",
      type: "Full-Time · Remote/On-Site",
      desc: "Drive traffic growth through keyword research, on-page/off-page SEO, and content optimization.",
      benefits: ["SEO Tools Access", "Growth Opportunities", "Marketing Team Collaboration", "Global Clients"],
    },
    {
      title: "Digital Marketing Manager",
      type: "Full-Time · Remote/On-Site",
      desc: "Lead campaigns across social media, email, and paid ads. Optimize for conversions and growth.",
      benefits: ["Marketing Certifications", "High-Impact Campaigns", "Cross-Team Learning", "Leadership Opportunities"],
    },
    {
      title: "DevOps Engineer",
      type: "Full-Time · Remote/On-Site",
      desc: "Implement CI/CD pipelines, monitor cloud infrastructure, and ensure smooth deployments.",
      benefits: ["Cloud Certifications", "Advanced Tools", "Global Projects", "Professional Growth"],
    },
    {
      title: "QA Engineer",
      type: "Full-Time · Remote/On-Site",
      desc: "Ensure product quality through manual and automated testing. Collaborate with dev teams for bug-free delivery.",
      benefits: ["Automation Tools", "Career Growth", "Cross-Team Collaboration", "Flexible Hours"],
    },
    {
      title: "Content Writer",
      type: "Full-Time · Remote",
      desc: "Write compelling blogs, website copy, and product descriptions optimized for SEO and user engagement.",
      benefits: ["Creative Freedom", "Mentorship", "Career Growth", "International Exposure"],
    },
    {
      title: "Project Manager",
      type: "Full-Time · Remote/On-Site",
      desc: "Lead cross-functional teams, deliver projects on time, and communicate with clients effectively.",
      benefits: ["Leadership Training", "Career Growth", "Team Management", "High-Impact Projects"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Careers at YTeams</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Build your future with YTeams. We offer exciting career opportunities 
          across technology, design, e-commerce, marketing, and management.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {jobs.map((job, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{job.type}</p>
              <p className="text-gray-700 mb-6">{job.desc}</p>
              <ul className="mb-6 list-disc list-inside text-gray-600">
                {job.benefits.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <Link to="/3d" className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
