// DigitalMarketing2025.jsx
import React from "react";
import img from "../Assets/3-min.jpg";

const DigitalMarketing2025 = () => {
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
                        alt="Digital marketing banner"
                    />
                    <div className="p-4 absolute bottom-0 left-0 z-20">
                        <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                            Digital Marketing
                        </span>
                        <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                            The Role of Digital Marketing in Business Growth in 2025
                        </h2>
                        <div className="flex mt-3">
                            <img
                                src="https://randomuser.me/api/portraits/men/65.jpg"
                                className="h-10 w-10 rounded-full mr-2 object-cover"
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
                        In today’s fast-paced digital world, having a website or an online presence is no longer enough. Businesses, whether small startups or large enterprises, need digital marketing strategies to stand out, connect with customers, and drive growth. As technology evolves, so do the ways companies attract and retain clients. In 2025, digital marketing is more crucial than ever for success.
                    </p>
                    <p className="pb-6">
                        At <strong>YTeams</strong>, we understand how a strong online presence combined with effective digital marketing can transform a business. Let’s explore why digital marketing is essential and how businesses can leverage it for growth in 2025 and beyond.
                    </p>

                    {/* Why Digital Marketing Matters */}
                    <h2 className="text-2xl font-semibold mb-4 mt-8">Why Digital Marketing Matters in 2025</h2>
                    <ul className="list-disc pl-6 pb-6">
                        <li><strong>People Spend More Time Online:</strong> Customers spend more than half their daily time online. Digital marketing helps businesses reach them where they are most active.</li>
                        <li><strong>Traditional Marketing Is Losing Relevance:</strong> Print ads, billboards, and TV commercials no longer drive purchasing decisions like before. Online research and reviews dominate.</li>
                        <li><strong>Global Reach at Low Cost:</strong> Digital campaigns offer better ROI and scalability than traditional advertising.</li>
                    </ul>

                    {/* Core Pillars */}
                    <h2 className="text-2xl font-semibold mb-4 mt-8">Core Pillars of Digital Marketing</h2>
                    <ul className="list-disc pl-6 pb-6">
                        <li><strong>SEO:</strong> Optimizing for Google through user experience, speed, and valuable content.</li>
                        <li><strong>Content Marketing:</strong> Blogs, videos, and guides that build trust and solve problems.</li>
                        <li><strong>Social Media Marketing:</strong> Authentic engagement on Instagram, TikTok, LinkedIn, and X.</li>
                        <li><strong>PPC Advertising:</strong> Targeted ads on Google, Facebook, and LinkedIn for quick visibility.</li>
                        <li><strong>Email Marketing:</strong> Personalized campaigns to nurture leads and build loyalty.</li>
                        <li><strong>Influencer & Partnerships:</strong> Leveraging trusted voices to expand reach.</li>
                    </ul>

                    {/* Trends */}
                    <h2 className="text-2xl font-semibold mb-4 mt-8">Digital Marketing Trends in 2025</h2>
                    <ul className="list-disc pl-6 pb-6">
                        <li>AI-powered personalization and automation.</li>
                        <li>Voice search optimization for smart devices.</li>
                        <li>Video-first strategies with short-form and live content.</li>
                        <li>Transparency and strong data privacy practices.</li>
                        <li>Omnichannel marketing for seamless customer journeys.</li>
                    </ul>

                    {/* Growth Impact */}
                    <h2 className="text-2xl font-semibold mb-4 mt-8">How Digital Marketing Drives Business Growth</h2>
                    <ul className="list-disc pl-6 pb-6">
                        <li>Boosts brand visibility and awareness.</li>
                        <li>Generates quality leads through targeting.</li>
                        <li>Builds customer trust via consistent content and social proof.</li>
                        <li>Drives sales by converting interest into purchases.</li>
                        <li>Supports long-term growth with lasting strategies like SEO and content.</li>
                    </ul>

                    {/* Why YTeams */}
                    <h2 className="text-2xl font-semibold mb-4 mt-8">Why Choose YTeams for Digital Marketing</h2>
                    <p className="pb-6">
                        At <strong>YTeams</strong>, we don’t just build websites—we help businesses grow online. Our tailored strategies combine SEO, content, social media, and advertising to deliver real results. Whether you’re a startup or enterprise, we aim to:
                    </p>
                    <ul className="list-disc pl-6 pb-6">
                        <li>Increase online visibility</li>
                        <li>Generate leads and conversions</li>
                        <li>Strengthen brand identity</li>
                        <li>Stay ahead of 2025 digital trends</li>
                    </ul>

                    {/* Conclusion */}
                    <h2 className="text-2xl font-semibold mb-4 mt-8">Final Thoughts</h2>
                    <p className="pb-6">
                        Digital marketing in 2025 is not optional—it’s a necessity. Businesses that invest in the right mix of SEO, content, social, and ads will thrive, while others risk falling behind.
                    </p>
                    <p className="pb-6">
                        📩 Ready to grow your business in 2025? Contact <strong>YTeams</strong> today and let’s build a winning digital marketing strategy.
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t mt-32 pt-12 pb-32 px-4 lg:px-0"></footer>
        </div>
    );
};

export default DigitalMarketing2025;
