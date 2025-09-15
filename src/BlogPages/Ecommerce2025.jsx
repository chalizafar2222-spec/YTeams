// Ecommerce2025.jsx
import React from "react";
import img from "../Assets/1-min.jpg"

const Ecommerce2025 = () => {
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
                        alt="E-commerce future banner"
                    />
                    <div className="p-4 absolute bottom-0 left-0 z-20">
                        <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                            E-Commerce
                        </span>
                        <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                            The Future of E-Commerce in 2025: Trends, Strategies, and Opportunities
                        </h2>
                        <div className="flex mt-3">
                            <img
                                src="https://randomuser.me/api/portraits/women/45.jpg"
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
                        E-Commerce has grown from being just an alternative sales channel to becoming the backbone of global business. By 2025, the industry is expected to cross{" "}
                        <strong>$7.5 trillion</strong> in worldwide sales (Statista). For startups, small businesses, and large enterprises, the online marketplace is no longer optional—it’s essential.
                    </p>
                    <p className="pb-6">
                        At <strong>YTeams</strong>, we work with businesses to build scalable, secure, and high-performing e-commerce platforms. Let’s explore the key trends shaping 2025 and how your business can take advantage of these opportunities.
                    </p>

                    {/* Section 1 */}
                    <h2 className="text-2xl font-semibold mb-4 mt-8">1. Personalized Shopping Experiences</h2>
                    <p className="pb-6">
                        One-size-fits-all no longer works. Consumers expect brands to know their preferences and deliver tailored journeys. In 2025, personalization will go beyond basic product recommendations:
                    </p>
                    <ul className="list-disc pl-6 pb-6">
                        <li>AI-driven personalization based on behavior, demographics, and history.</li>
                        <li>Dynamic pricing that adapts in real time.</li>
                        <li>Hyper-targeted marketing that increases conversions.</li>
                    </ul>
                    <p className="pb-6">💡 Businesses investing in AI-powered personalization will stand out.</p>

                    {/* Section 2 */}
                    <h2 className="text-2xl font-semibold mb-4 mt-8">2. The Rise of Voice Commerce</h2>
                    <p className="pb-6">
                        Smart assistants like Alexa, Google Assistant, and Siri are reshaping shopping. By 2025, voice commerce is projected to generate{" "}
                        <strong>$30+ billion</strong> in annual sales.
                    </p>
                    <p className="pb-6">💡 Optimizing for voice search and checkout is now critical.</p>

                    {/* Section 3 */}
                    <h2 className="text-2xl font-semibold mb-4 mt-8">3. Social Commerce and Live Shopping</h2>
                    <p className="pb-6">
                        Social media has evolved into a powerful sales engine. Shoppable posts and live shopping events are driving conversions directly in apps like TikTok, Instagram, and Facebook.
                    </p>
                    <p className="pb-6">💡 YTeams helps businesses integrate social commerce features seamlessly.</p>

                    {/* Section 4 */}
                    <h2 className="text-2xl font-semibold mb-4 mt-8">4. Sustainable and Ethical E-Commerce</h2>
                    <p className="pb-6">
                        Gen Z and modern consumers want eco-friendly, ethical brands. Packaging, carbon-neutral shipping, and transparency will become the norm.
                    </p>
                    <p className="pb-6">💡 Highlighting green initiatives drives loyalty and growth.</p>

                    {/* Section 5 */}
                    <h2 className="text-2xl font-semibold mb-4 mt-8">5. Mobile-First and Super Apps</h2>
                    <p className="pb-6">
                        By 2025, 75%+ of e-commerce sales will be mobile. PWAs and “super apps” (inspired by WeChat) will dominate the landscape.
                    </p>
                    <p className="pb-6">💡 Businesses without mobile-first platforms risk losing customers.</p>

                    {/* Section 6 */}
                    <h2 className="text-2xl font-semibold mb-4 mt-8">6. AI, AR, and Virtual Shopping</h2>
                    <p className="pb-6">
                        From AR-powered try-ons to AI chatbots and immersive virtual showrooms, technology will reduce returns and boost satisfaction.
                    </p>
                    <p className="pb-6">💡 Immersive shopping = higher conversions and customer trust.</p>

                    {/* Section 7 */}
                    <h2 className="text-2xl font-semibold mb-4 mt-8">7. Faster, Smarter, Greener Delivery</h2>
                    <p className="pb-6">
                        Same-day delivery, drones, and autonomous vehicles are setting new expectations. Subscription-based fast-delivery models will drive loyalty.
                    </p>
                    <p className="pb-6">💡 Invest in fulfillment strategies to retain customers.</p>

                    {/* Preparation */}
                    <h2 className="text-2xl font-semibold mb-4 mt-8">How Businesses Can Prepare</h2>
                    <ul className="list-disc pl-6 pb-6">
                        <li>Invest in scalable platforms.</li>
                        <li>Prioritize cybersecurity.</li>
                        <li>Leverage analytics for smarter decisions.</li>
                        <li>Adopt omnichannel strategies.</li>
                        <li>Partner with experts like YTeams.</li>
                    </ul>

                    {/* Conclusion */}
                    <h2 className="text-2xl font-semibold mb-4 mt-8">Conclusion</h2>
                    <p className="pb-6">
                        E-commerce in 2025 will be personalized, mobile-driven, sustainable, and tech-powered. Businesses that adapt early will thrive.
                    </p>
                    <p className="pb-6">
                        At <strong>YTeams</strong>, we specialize in building future-ready platforms that integrate AI, AR, mobile-first solutions, and secure infrastructure. Whether launching your first store or scaling globally—we’ve got you covered.
                    </p>
                    <p className="pb-6">
                        📩 Ready to transform your e-commerce business? Contact <strong>YTeams</strong> today and let’s build something extraordinary.
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t mt-32 pt-12 pb-32 px-4 lg:px-0"></footer>
        </div>
    );
};

export default Ecommerce2025;
