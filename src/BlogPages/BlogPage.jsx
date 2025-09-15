// BlogPage.jsx
import React from "react";
import web from "../Assets/web-blog.jpeg";
import author from "../Assets/IMG_1269.JPG"

const BlogPage = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            {/* Header */}
            <header className="flex items-center justify-between py-2 border-b">
            </header>
            {/* Hero Section */}
            <main className="mt-10">
                <div
                    className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
                    style={{ height: "24em" }}
                >
                    <div
                        className="absolute left-0 bottom-0 w-full h-full z-10"
                        style={{
                            backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
                        }}
                    ></div>
                    <img
                        src={web}
                        className="absolute left-0 top-0 w-full h-full z-0 object-cover"
                        alt="Blog banner"
                    />
                    <div className="p-4 absolute bottom-0 left-0 z-20">
                        <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                            Web Development
                        </span>
                        <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                            Top 5 Web Development Trends in 2025 That Every Business Should Know
                        </h2>
                        <div className="flex mt-3">
                            <img
                                src={author}
                                className="h-10 w-10 rounded-full mr-2 object-top object-cover"
                                alt="Author"
                            />
                            <div>
                                <p className="font-semibold text-gray-200 text-sm">Hamza Ali</p>
                                <p className="font-semibold text-gray-400 text-xs">17 Aug 2025</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Content */}
                <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                    <p className="pb-6">
                        The digital world continues to evolve at a rapid pace, and businesses can no longer rely
                        on outdated websites if they want to stay competitive. In 2025, customers expect websites
                        to be fast, secure, visually appealing, and intelligent. At <strong>YTeams</strong>, we
                        believe that adopting the latest web development practices is not just about following
                        trends — it is about creating meaningful digital experiences that help businesses grow.
                    </p>

                    <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-8">
                        1. Artificial Intelligence Integration
                    </h2>
                    <p className="pb-6">
                        Artificial Intelligence is transforming the way websites function. Companies are
                        increasingly using AI to provide smarter and more personalized user experiences. Features
                        such as AI-driven chatbots, product recommendations, and advanced data analytics are
                        becoming standard. In 2025, businesses that leverage AI will have a clear advantage in
                        customer satisfaction and efficiency.
                    </p>

                    <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-8">
                        2. Progressive Web Applications (PWAs)
                    </h2>
                    <p className="pb-6">
                        Progressive Web Applications combine the functionality of a website with the performance
                        of a mobile app. Unlike traditional apps, PWAs do not require downloading from an app
                        store. Instead, they run directly in a web browser while still offering offline
                        functionality, push notifications, and faster loading speeds. Businesses adopting PWAs in
                        2025 will provide customers with a smooth and reliable experience.
                    </p>

                    <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-8">
                        3. Voice Search Optimization
                    </h2>
                    <p className="pb-6">
                        The rise of voice assistants such as Siri, Alexa, and Google Assistant has changed the
                        way people search online. Increasingly, users are speaking to their devices instead of
                        typing. This shift means websites must be optimized for voice-based queries, which tend
                        to be longer and more conversational. Businesses that adapt will improve visibility and
                        gain a competitive edge.
                    </p>

                    <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-8">
                        4. Motion UI and Interactive Design
                    </h2>
                    <p className="pb-6">
                        A static, text-heavy website is no longer enough to capture attention. In 2025,
                        businesses will see more value in Motion UI and micro-interactions — subtle animations,
                        hover effects, and transitions that make websites engaging and easier to navigate. At
                        YTeams, we emphasize interactive design not only for aesthetics but also to enhance
                        usability and customer engagement.
                    </p>

                    <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-8">
                        5. Cybersecurity as a Core Focus
                    </h2>
                    <p className="pb-6">
                        Cybersecurity threats continue to grow as businesses rely more on digital platforms. Data
                        breaches and hacking attempts can damage a company’s reputation and customer trust. In
                        2025, strong measures such as SSL certificates, encrypted data transfer, and regular
                        security audits are essential. Customers are more likely to trust businesses that protect
                        their information.
                    </p>

                    <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-8">Conclusion</h2>
                    <p className="pb-6">
                        Web development in 2025 is defined by intelligence, speed, interactivity, and security.
                        Businesses that embrace these trends will not only improve customer experience but also
                        position themselves for long-term growth. At <strong>YTeams</strong>, we help companies
                        build modern, scalable, and secure web solutions tailored to their needs. Whether you are
                        a startup or an enterprise, our goal is to deliver solutions that drive measurable
                        results.
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t mt-32 pt-12 pb-32 px-4 lg:px-0">
            </footer>
        </div>
    );
};

export default BlogPage;
