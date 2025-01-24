import React from "react";

const AboutUs = () => {
    return (
        <div className="bg-gray-50 mt-20 pt-26 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                {/* Header Section */}
                <h1 className="text-4xl font-bold text-gray-900">About BT-COIN</h1>
                <p className="mt-6 text-lg text-gray-600">
                    BT-COIN is a leading innovator in the blockchain and cryptocurrency mining space. We provide cutting-edge tools and secure platforms for users to mine various cryptocurrencies, ensuring high efficiency and security.
                </p>

                {/* Vision, Mission, and Values Section */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1505751172444-590e4ed6f370"
                                alt="Vision"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                        <p className="text-base text-gray-600 mt-4">
                            At BT-COIN, our vision is to empower individuals and businesses by making blockchain mining more accessible, secure, and profitable. We aim to be the global leader in blockchain technology, pushing the boundaries of innovation to create a sustainable future for decentralized finance.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1505775030261-6e97f46b2493"
                                alt="Mission"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                        <p className="text-base text-gray-600 mt-4">
                            Our mission is to provide our users with the most secure and user-friendly mining solutions. We are committed to ensuring the best mining experience by combining state-of-the-art technology, world-class security protocols, and a transparent and supportive community.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1509885005099-819dd3fa9e8f"
                                alt="Core Values"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Our Core Values</h3>
                        <p className="text-base text-gray-600 mt-4">
                            We believe in integrity, innovation, and collaboration. Our commitment to transparency and ethical practices helps us build trust with our users, partners, and the entire blockchain community. By fostering a culture of continuous learning and collaboration, we are driving the future of blockchain technology.
                        </p>
                    </div>
                </div>

                {/* Team Members Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-semibold text-gray-900">Meet Our Leadership Team</h2>
                    <p className="mt-6 text-lg text-gray-600">
                        The success of BT-COIN is built on the passion and dedication of our leadership team, who bring years of experience in the blockchain, finance, and technology industries.
                    </p>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-32 h-32 rounded-full mx-auto bg-gray-200 mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1541720872-fbd106f5b7b6"
                                    alt="John Doe"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">John Doe</h3>
                            <p className="text-base text-gray-600">CEO & Founder</p>
                            <p className="text-gray-600 mt-4">
                                John brings over 15 years of experience in the blockchain space. He is passionate about decentralization and aims to lead BT-COIN towards creating a more equitable financial system.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-32 h-32 rounded-full mx-auto bg-gray-200 mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1542744095-9606f11c7467"
                                    alt="Jane Smith"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Jane Smith</h3>
                            <p className="text-base text-gray-600">Lead Developer</p>
                            <p className="text-gray-600 mt-4">
                                Jane is a seasoned developer with deep expertise in blockchain technology. She leads the development of BT-COIN’s mining platform, ensuring its security and performance at the highest standards.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-32 h-32 rounded-full mx-auto bg-gray-200 mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1502544432731-c5b505357b9f"
                                    alt="Michael Brown"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Michael Brown</h3>
                            <p className="text-base text-gray-600">Chief Marketing Officer</p>
                            <p className="text-gray-600 mt-4">
                                Michael has a strong background in digital marketing and community growth. He works tirelessly to increase BT-COIN’s global presence and drive the company's vision forward.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Our Technology Section */}
                <div className="mt-20 bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-gray-900 text-center">Our Technology</h2>
                    <p className="mt-6 text-lg text-gray-600 text-center">
                        BT-COIN leverages state-of-the-art technology to ensure that our users have the best mining experience. Our mining platform is powered by cutting-edge infrastructure and secured with the latest encryption techniques to ensure safe and profitable mining operations.
                    </p>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-32 h-32 rounded-full mx-auto bg-gray-200 mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1526743442029-15b9bafdb48e"
                                    alt="Algorithms"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Advanced Mining Algorithms</h3>
                            <p className="text-base text-gray-600 mt-4">
                                Our platform utilizes advanced mining algorithms that are optimized for maximum efficiency, ensuring higher yields with less power consumption.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-32 h-32 rounded-full mx-auto bg-gray-200 mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1574158622689-8d7c149b1597"
                                    alt="Infrastructure"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Scalable Infrastructure</h3>
                            <p className="text-base text-gray-600 mt-4">
                                BT-COIN's infrastructure is designed for scalability, allowing our platform to handle an increasing number of users and transactions seamlessly without compromising performance.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-32 h-32 rounded-full mx-auto bg-gray-200 mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1587481287747-d075b7c10b4b"
                                    alt="Security"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Secure Blockchain Network</h3>
                            <p className="text-base text-gray-600 mt-4">
                                Security is our top priority. Our platform is built on a secure blockchain network, using the latest security protocols to protect user data and mining transactions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Our Partners Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-semibold text-gray-900">Our Partners & Supporters</h2>
                    <p className="mt-6 text-lg text-gray-600 text-center">
                        We are proud to collaborate with leading organizations in the blockchain and tech industries. These partnerships strengthen our platform and help us deliver the best services to our users.
                    </p>
                    <div className="mt-12 flex justify-center space-x-12">
                        <div className="w-32 h-32 bg-gray-200 rounded-md">
                            <img
                                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
                                alt="Partner 1"
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                        <div className="w-32 h-32 bg-gray-200 rounded-md">
                            <img
                                src="https://images.unsplash.com/photo-1508590163041-e5686c9c5e8d"
                                alt="Partner 2"
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                        <div className="w-32 h-32 bg-gray-200 rounded-md">
                            <img
                                src="https://images.unsplash.com/photo-1505485281164-1d407a07c658"
                                alt="Partner 3"
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-semibold text-gray-900">Our Journey So Far</h2>
                    <p className="mt-6 text-lg text-gray-600 text-center">
                        BT-COIN has made significant strides in the blockchain space, growing from a small startup to a leading player in the industry. Here's a brief look at our journey:
                    </p>
                    <div className="mt-12 flex justify-center space-x-12">
                        <div className="text-center">
                            <div className="text-xl font-semibold text-gray-900">2020</div>
                            <p className="text-gray-600">BT-COIN Founded</p>
                        </div>
                        <div className="text-center">
                            <div className="text-xl font-semibold text-gray-900">2021</div>
                            <p className="text-gray-600">Launched First Mining Platform</p>
                        </div>
                        <div className="text-center">
                            <div className="text-xl font-semibold text-gray-900">2022</div>
                            <p className="text-gray-600">Crossed 1 Million Active Users</p>
                        </div>
                    </div>
                </div>

                {/* Closing Statement Section */}
                <div className="mt-20 text-center">
                    <p className="text-lg text-gray-600">
                        At BT-COIN, we’re committed to revolutionizing the cryptocurrency mining industry. Join us today and be part of a global community that’s shaping the future of finance.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
