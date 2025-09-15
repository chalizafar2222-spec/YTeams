import React from "react";

const WebDevelopmentProcess = () => {
  const steps = [
    {
      num: 1,
      title: "Discovery & Planning",
      desc: "We begin by understanding your business, goals, and target audience. Through collaborative discussions, we define project requirements, timelines, and resources to create a roadmap for success."
    },
    {
      num: 2,
      title: "Design & Prototyping",
      desc: "Our design team creates wireframes and prototypes that reflect the user journey and interface flow. We focus on ensuring intuitive navigation and visually appealing design to engage users from the first interaction."
    },
    {
      num: 3,
      title: "Development & Coding",
      desc: "Once designs are approved, we start building the website using the latest technologies and frameworks like React, Node.js, and Laravel. We ensure the website is responsive, secure, and high-performance."
    },
    {
      num: 4,
      title: "Testing & Quality Assurance",
      desc: "Our team rigorously tests the website across multiple devices and browsers to ensure everything works perfectly and meets the highest standards."
    },
    {
      num: 5,
      title: "Launch & Deployment",
      desc: "After final approvals, we deploy the website to the live environment. Our team ensures smooth migration and scaling for minimal downtime and a successful launch."
    },
    {
      num: 6,
      title: "Post-Launch Support & Maintenance",
      desc: "After launch, we offer ongoing maintenance and support services to keep your website updated, secure, and running efficiently. We regularly monitor performance and provide enhancements as needed."
    }
  ];

  // Circle layout positions (only for large screens)
  const positions = [
    { x: 250, y: 80 },
    { x: 410, y: 160 },
    { x: 410, y: 340 },
    { x: 250, y: 420 },
    { x: 90, y: 340 },
    { x: 90, y: 160 }
  ];

  const textPositions = [
    { x: 250, y: -55 },
    { x: 540, y: 150 },
    { x: 540, y: 350 },
    { x: 250, y: 500 },
    { x: -40, y: 380 },
    { x: -40, y: 150 }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-20 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-24">
        Our Web Development Process
      </h1>

      {/* Large Screen Circle Layout */}
      <div className="hidden md:block relative w-[500px] h-[500px] mt-6">
        {/* Rectangle Path */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          className="absolute top-0 left-0 w-full h-full"
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#06b6d4" }} />
              <stop offset="100%" style={{ stopColor: "#000" }} />
            </linearGradient>
          </defs>
          <rect
            x="90"
            y="90"
            width="320"
            height="320"
            rx="60"
            ry="60"
            stroke="url(#grad)"
            strokeWidth="20"
            fill="none"
          />
        </svg>

        {/* Number Circles + Text */}
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            {/* Number Circle */}
            <div
              className="absolute flex items-center justify-center w-12 h-12 bg-cyan-500 text-white font-bold rounded-full text-lg"
              style={{
                left: `${positions[i].x - 24}px`,
                top: `${positions[i].y - 24}px`
              }}
            >
              {step.num}
            </div>

            {/* Text */}
            <div
              className="absolute w-48 text-center"
              style={{
                left: `${textPositions[i].x - 96}px`,
                top: `${textPositions[i].y - 50}px`
              }}
            >
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Mobile & Tablet Vertical Layout */}
      <div className="block md:hidden space-y-8 mt-6">
        {steps.map((step) => (
          <div key={step.num} className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-10 h-10 bg-cyan-500 text-white font-bold rounded-full">
              {step.num}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDevelopmentProcess;
