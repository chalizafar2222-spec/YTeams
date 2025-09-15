// Cybersecurity2025.jsx
import React from "react";
import img from "../Assets/cyber.jpeg";
import author from "../Assets/IMG_1269.JPG";

const Cybersecurity2025 = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Header */}
      <header className="flex items-center justify-between py-2 border-b"></header>

      {/* Hero Section */}
      <main className="mt-10">
        <div
          className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style={{ height: "24em" }}
        >
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
            }}
          ></div>
          <img
            src={img}
            className="absolute left-0 top-0 w-full h-full z-0 object-bottom"
            alt="Cybersecurity in 2025"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
              Cybersecurity
            </span>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              Cybersecurity in 2025 – Protecting Businesses in the Digital Age
            </h2>
            <div className="flex mt-3">
              <img
                src={author}
                className="h-10 w-10 rounded-full mr-2 object-cover object-top"
                alt="Author"
              />
              <div>
                <p className="font-semibold text-gray-200 text-sm">
                  Hamza Ali
                </p>
                <p className="font-semibold text-gray-400 text-xs">
                  17 Aug 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <p className="pb-6">
            In today’s fast-paced digital world, cybersecurity is no longer optional—it’s a necessity. Every business, from startups to large enterprises, relies on digital systems to manage operations, customer data, and financial transactions. With this reliance comes an increased risk of cyberattacks, hacking, and data breaches.
          </p>

          <p className="pb-6">
            At <strong>YTeams</strong>, we understand that strong cybersecurity is the foundation of trust and growth for every business.
          </p>

          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-8">What is Cybersecurity?</h2>
          <p className="pb-6">
            Cybersecurity is the practice of protecting systems, networks, and data from cyber threats. It involves technologies, processes, and strategies to defend against:
          </p>
          <ul className="list-disc pl-6 pb-6 space-y-2">
            <li><strong>Malware & Viruses</strong> – Software that damages or disrupts systems.</li>
            <li><strong>Phishing Attacks</strong> – Fraudulent emails and websites designed to steal sensitive data.</li>
            <li><strong>Ransomware</strong> – Hackers encrypting data and demanding payment.</li>
            <li><strong>Data Breaches</strong> – Unauthorized access to sensitive information.</li>
            <li><strong>DDoS Attacks</strong> – Overloading systems to make them unavailable.</li>
          </ul>

          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-8">Why Cybersecurity is Important in 2025</h2>
          <ul className="list-disc pl-6 pb-6 space-y-2">
            <li><strong>Protects Customer Data</strong> – A single breach can destroy customer trust.</li>
            <li><strong>Prevents Financial Loss</strong> – Cyberattacks cost businesses millions.</li>
            <li><strong>Ensures Business Continuity</strong> – Prevents disruptions to operations.</li>
            <li><strong>Builds Reputation</strong> – Strong security attracts more clients.</li>
            <li><strong>Regulatory Compliance</strong> – Governments now enforce stricter security laws.</li>
          </ul>

          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-8">Common Cybersecurity Threats</h2>
          <ul className="list-disc pl-6 pb-6 space-y-2">
            <li>Phishing Emails & Scams</li>
            <li>Ransomware Attacks</li>
            <li>Weak Passwords</li>
            <li>Insider Threats</li>
            <li>Cloud Security Risks</li>
          </ul>

          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-8">Best Cybersecurity Practices for Businesses</h2>
          <ul className="list-disc pl-6 pb-6 space-y-2">
            <li>✅ Use Multi-Factor Authentication (MFA)</li>
            <li>✅ Regular Software Updates</li>
            <li>✅ Data Encryption</li>
            <li>✅ Employee Training</li>
            <li>✅ Regular Backups</li>
            <li>✅ Firewalls & Antivirus Protection</li>
            <li>✅ Cybersecurity Audits</li>
          </ul>

          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-8">Cybersecurity Trends in 2025</h2>
          <ul className="list-disc pl-6 pb-6 space-y-2">
            <li>AI-powered Cybersecurity – Detecting attacks in real time</li>
            <li>Zero Trust Security – “Never trust, always verify”</li>
            <li>Cloud Security Enhancements</li>
            <li>Blockchain for Safer Transactions</li>
            <li>Cyber Insurance</li>
            <li>IoT Device Security</li>
          </ul>

          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-8">YTeams Cybersecurity Services</h2>
          <p className="pb-6">
            At <strong>YTeams</strong>, we provide end-to-end cybersecurity solutions including:
          </p>
          <ul className="list-disc pl-6 pb-6 space-y-2">
            <li>Network Security & Monitoring</li>
            <li>Cloud Security Management</li>
            <li>Penetration Testing (Ethical Hacking)</li>
            <li>Data Encryption & Backup Solutions</li>
            <li>Phishing Awareness Training</li>
            <li>Ransomware Protection & Recovery</li>
          </ul>

          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-8">Final Thoughts</h2>
          <p className="pb-6">
            Cybersecurity is not just an IT concern—it’s a business survival issue. In 2025, cybercriminals are smarter and more aggressive, but with the right strategy and trusted IT partners, businesses can stay protected.
          </p>
          <p className="pb-6">
            At <strong>YTeams</strong>, we ensure your business remains secure, compliant, and future-ready in the digital age.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-32 pt-12 pb-32 px-4 lg:px-0"></footer>
    </div>
  );
};

export default Cybersecurity2025;
