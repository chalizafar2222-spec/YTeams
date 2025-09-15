// AI2025.jsx
import React from "react";
import img from "../Assets/2-min.jpg";
import author from "../Assets/IMG_1269.JPG";

const AI2025 = () => {
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
            alt="AI in 2025"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
              Artificial Intelligence
            </span>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              Artificial Intelligence (AI) – The Future of Technology in 2025
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
            Artificial Intelligence (AI) is no longer just a buzzword—it has
            become the driving force behind digital transformation across every
            industry. From healthcare to finance, from education to e-commerce,
            AI is reshaping the way businesses operate and how people live,
            work, and interact with technology.
          </p>

          <p className="pb-6">
            At <strong>YTeams</strong>, we believe that AI is not just the
            future—it is the present. Businesses that embrace AI today are the
            ones that will thrive tomorrow.
          </p>

          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-8">
            What is Artificial Intelligence?
          </h2>
          <p className="pb-6">
            Artificial Intelligence is the simulation of human intelligence in
            machines. It allows computers to learn, reason, and make decisions
            without direct human intervention. AI is powered by technologies
            like:
          </p>
          <ul className="list-disc pl-6 pb-6 space-y-2">
            <li>
              <strong>Machine Learning (ML)</strong> – Training algorithms to
              learn from data and improve over time.
            </li>
            <li>
              <strong>Natural Language Processing (NLP)</strong> – Enabling
              machines to understand and process human language.
            </li>
            <li>
              <strong>Computer Vision</strong> – Allowing systems to interpret
              and process visual information like images and videos.
            </li>
            <li>
              <strong>Robotics & Automation</strong> – Machines performing
              physical and repetitive tasks with accuracy.
            </li>
          </ul>

          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-8">
            Real-World Applications of AI
          </h2>

          <h3 className="text-xl font-semibold mb-2">1. Healthcare</h3>
          <p className="pb-6">
            AI-powered diagnosis systems detect diseases early, virtual
            assistants provide patient support, and robotics help with complex
            surgeries.
          </p>

          <h3 className="text-xl font-semibold mb-2">2. E-Commerce</h3>
          <p className="pb-6">
            Personalized product recommendations, smart chatbots for customer
            support, and AI-driven inventory management are revolutionizing
            online shopping.
          </p>

          <h3 className="text-xl font-semibold mb-2">3. Finance</h3>
          <p className="pb-6">
            Fraud detection using AI algorithms, robo-advisors for investments,
            and automated risk management are changing financial services.
          </p>

          <h3 className="text-xl font-semibold mb-2">4. Education</h3>
          <p className="pb-6">
            Adaptive learning platforms, AI tutors, and smart grading systems
            make education more personalized and efficient.
          </p>

          <h3 className="text-xl font-semibold mb-2">5. Transportation</h3>
          <p className="pb-6">
            Self-driving cars, AI-powered traffic control, and predictive
            maintenance are making travel safer and more efficient.
          </p>

          <h3 className="text-xl font-semibold mb-2">6. Cybersecurity</h3>
          <p className="pb-6">
            AI enhances threat detection, anomaly recognition, and automated
            responses to cyberattacks, protecting sensitive data in real time.
          </p>

          <h3 className="text-xl font-semibold mb-2">7. Entertainment</h3>
          <p className="pb-6">
            From Netflix recommendations to AI-generated music and movies, AI
            shapes the way we consume content daily.
          </p>

          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-8">
            Future Trends in AI (2025 & Beyond)
          </h2>
          <ul className="list-disc pl-6 pb-6 space-y-2">
            <li>
              <strong>Generative AI</strong> – Creating realistic text, images,
              and videos with tools like ChatGPT & DALL·E.
            </li>
            <li>
              <strong>AI & IoT Integration</strong> – Smarter homes, cities, and
              industries powered by AI-connected devices.
            </li>
            <li>
              <strong>Ethical AI</strong> – Building fair, unbiased, and
              transparent systems.
            </li>
            <li>
              <strong>Edge AI</strong> – AI running on devices rather than the
              cloud, improving speed & privacy.
            </li>
            <li>
              <strong>AI in Creativity</strong> – Assisting designers, writers,
              and innovators in creating unique content.
            </li>
          </ul>

          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-8">
            Challenges & Ethical Concerns
          </h2>
          <p className="pb-6">
            While AI offers limitless opportunities, it also comes with
            challenges:
          </p>
          <ul className="list-disc pl-6 pb-6 space-y-2">
            <li>
              <strong>Bias & Fairness</strong> – AI models may reflect societal
              biases if trained on biased data.
            </li>
            <li>
              <strong>Privacy Risks</strong> – Misuse of personal data can lead
              to major security breaches.
            </li>
            <li>
              <strong>Job Displacement</strong> – Automation may reduce the need
              for certain jobs, requiring workforce reskilling.
            </li>
            <li>
              <strong>Ethical Responsibility</strong> – Ensuring AI is used for
              good, not harm, is a global priority.
            </li>
          </ul>

          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-8">
            Final Thoughts
          </h2>
          <p className="pb-6">
            Artificial Intelligence is the game-changer of the 21st century.
            Businesses that adopt AI today will lead the industries of tomorrow.
            From automating operations to providing personalized customer
            experiences, AI is the ultimate tool for growth, innovation, and
            success.
          </p>
          <p className="pb-6">
            At <strong>YTeams</strong>, we help businesses unlock the power of
            AI by developing custom solutions tailored to their goals. Whether
            you’re a startup or an enterprise, our AI expertise can help you
            transform your business in 2025 and beyond.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-32 pt-12 pb-32 px-4 lg:px-0"></footer>
    </div>
  );
};

export default AI2025;
