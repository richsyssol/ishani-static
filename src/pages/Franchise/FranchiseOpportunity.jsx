import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../../utils/motion";

const FranchisePage = () => {
  const franchiseTestimonials = [
    {
      name: "Rajesh Mehta",
      location: "Pune Franchise",
      quote:
        "Partnering with Ishani Enterprises has been transformative. Their support system and quality products helped us break even within 8 months.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      location: "Mumbai Franchise",
      quote:
        "The training and marketing support from Ishani made launching our franchise smooth and successful. Excellent ROI in the first year itself.",
      rating: 5,
    },
  ];

  const availableCities = [
    "Nagpur",
    "Aurangabad",
    "Kolhapur",
    "Solapur",
    "Amravati",
    "Jalgaon",
    "Nanded",
    "Sangli",
    "Malegaon",
    "Akola",
    "Latur",
    "Dhule",
    "Ahmednagar",
    "Chandrapur",
    "Parbhani",
    "Jalna",
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mt-24 mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Page Header */}
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Ishani Enterprises Franchise Opportunities
        </h1>
        <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Join India's premium French doors and windows brand with proven
          business model
        </p>
      </motion.div>

      {/* Quick Navigation */}
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        {[
          { label: "Why Partner", path: "#why-partner" },
          { label: "Benefits", path: "#benefits" },
          { label: "Cities", path: "#cities" },
          { label: "Apply Now", path: "#apply" },
          {
            label: "Brochure",
            path: "/downloads/franchise-brochure.pdf",
            download: true,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("right", "spring", index * 0.2, 0.75)}
          >
            {item.download ? (
              <a
                href={item.path}
                download
                className="px-4 py-2 bg-gray-100 hover:bg-yellow-500 hover:text-white rounded-md transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                to={item.path}
                className="px-4 py-2 bg-gray-100 hover:bg-yellow-500 hover:text-white rounded-md transition-colors"
              >
                {item.label}
              </Link>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Why Partner Section */}
      <motion.section
        id="why-partner"
        className="mb-20 scroll-mt-20"
        variants={staggerContainer(0.1, 0.3)}
      >
        <motion.div variants={fadeIn("up", "spring", 0.2, 1)}>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Choose Ishani Enterprises?
          </h2>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Become part of India's fastest growing premium doors and windows
            brand
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer(0.1, 0.2)}
        >
          {[
            {
              icon: "🏭",
              title: "Established Manufacturing",
              description:
                "15+ years of expertise in premium door and window manufacturing",
            },
            {
              icon: "📈",
              title: "Proven Business Model",
              description:
                "Turnkey franchise system with demonstrated success across India",
            },
            {
              icon: "🏆",
              title: "Brand Recognition",
              description:
                "Award-winning brand known for quality and innovation",
            },
            {
              icon: "🛠️",
              title: "Comprehensive Training",
              description:
                "Complete technical and sales training for your team",
            },
            {
              icon: "📊",
              title: "Marketing Support",
              description:
                "National advertising + local marketing collateral provided",
            },
            {
              icon: "💰",
              title: "Attractive Margins",
              description: "Industry-leading margins and ROI potential",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.1, 1)}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        id="benefits"
        className="mb-20 py-10 bg-gray-50 rounded-xl px-8 scroll-mt-20"
        variants={fadeIn("up", "spring", 0.3, 1)}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeIn("up", "spring", 0.2, 1)}>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Franchise Benefits & Support
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              We provide everything you need to succeed as an Ishani franchisee
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer(0.1, 0.2)}
          >
            <motion.div variants={fadeIn("right", "spring", 0.3, 1)}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Franchise Support
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <div>
                      <strong className="text-gray-800">
                        Complete Setup Guidance:
                      </strong>{" "}
                      Site selection, store design, and setup assistance
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <div>
                      <strong className="text-gray-800">
                        Training Programs:
                      </strong>{" "}
                      Product knowledge, sales techniques, and installation
                      training
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <div>
                      <strong className="text-gray-800">
                        Marketing Materials:
                      </strong>{" "}
                      Brochures, banners, digital assets, and social media
                      templates
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <div>
                      <strong className="text-gray-800">
                        Technology Support:
                      </strong>{" "}
                      CRM system, inventory management, and business analytics
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeIn("left", "spring", 0.3, 1)}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Financial Benefits
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <div>
                      <strong className="text-gray-800">Attractive ROI:</strong>{" "}
                      Average break-even in 10-12 months
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <div>
                      <strong className="text-gray-800">
                        Margin Structure:
                      </strong>{" "}
                      25-35% margins on premium products
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <div>
                      <strong className="text-gray-800">
                        Territorial Rights:
                      </strong>{" "}
                      Exclusive territory protection
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <div>
                      <strong className="text-gray-800">
                        Volume Discounts:
                      </strong>{" "}
                      Higher purchase volumes = better margins
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Cities Section */}
      <motion.section
        id="cities"
        className="mb-20 scroll-mt-20"
        variants={staggerContainer(0.1, 0.3)}
      >
        <motion.div variants={fadeIn("up", "spring", 0.2, 1)}>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Cities Available for Expansion
          </h2>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            We're expanding across Maharashtra and neighboring states
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.3, 1)}
          className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {availableCities.map((city, index) => (
              <div
                key={index}
                className="bg-gray-50 p-3 rounded-md text-center"
              >
                {city}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            Don't see your city? We're constantly expanding -{" "}
            <Link to="#apply" className="text-yellow-600 hover:underline">
              Apply anyway
            </Link>
          </p>
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      {franchiseTestimonials.length > 0 && (
        <motion.section
          className="mb-20 py-12 bg-yellow-50 rounded-xl"
          variants={fadeIn("up", "spring", 0.4, 1)}
        >
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              What Our Franchisees Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {franchiseTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "spring", index * 0.2, 1)}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Application Section */}
      <motion.section
        id="apply"
        className="scroll-mt-20"
        variants={staggerContainer(0.1, 0.3)}
      >
        <motion.div variants={fadeIn("up", "spring", 0.2, 1)}>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Franchise Application
          </h2>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Take the first step towards owning an Ishani Enterprises franchise
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto mb-8"
          variants={fadeIn("up", "spring", 0.3, 1)}
        >
          <div className="p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Preferred City for Franchise *
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  required
                  list="citiesList"
                />
                <datalist id="citiesList">
                  {availableCities.map((city, index) => (
                    <option key={index} value={city} />
                  ))}
                </datalist>
              </div>

              <div>
                <label
                  htmlFor="investment"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Estimated Investment Capacity *
                </label>
                <select
                  id="investment"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  required
                >
                  <option value="">Select range</option>
                  <option value="10-20">₹10-20 Lakhs</option>
                  <option value="20-30">₹20-30 Lakhs</option>
                  <option value="30-40">₹30-40 Lakhs</option>
                  <option value="40-50">₹40-50 Lakhs</option>
                  <option value="50+">₹50+ Lakhs</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Relevant Business Experience *
                </label>
                <textarea
                  id="experience"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Describe your experience in construction, retail, or related fields"
                  required
                ></textarea>
              </div>

              <div>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    className="mt-1 mr-2 rounded text-yellow-500 focus:ring-yellow-500"
                    required
                  />
                  <span className="text-sm text-gray-600">
                    I agree to receive more information about Ishani Enterprises
                    franchise opportunities
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
              >
                Submit Franchise Application
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.4, 1)}
          className="text-center"
        >
          <p className="text-gray-600 mb-4">
            Want more details before applying?
          </p>
          <a
            href="/downloads/franchise-brochure.pdf"
            download
            className="inline-flex items-center px-4 py-2 border border-yellow-500 text-yellow-500 rounded-md hover:bg-yellow-50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Franchise Brochure
          </a>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default FranchisePage;
