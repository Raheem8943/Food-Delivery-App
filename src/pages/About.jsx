const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-[#5333ed] sm:text-5xl science-gothic mb-4">
            About Food Asia
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            A modern, performant food delivery application built to demonstrate advanced React concepts and state management.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-cyan-400">
            <div className="flex items-center gap-4 mb-4">
              <i className="bi bi-code-slash text-3xl text-cyan-500"></i>
              <h2 className="text-2xl font-bold text-gray-800">Tech Stack</h2>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-green-500"></i>
                React JS (Hooks & Functional Components)
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-green-500"></i>
                Redux Toolkit (State Management)
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-green-500"></i>
                Tailwind CSS (Styling)
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-green-500"></i>
                Vite (Build Tool)
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#5333ed]">
            <div className="flex items-center gap-4 mb-4">
              <i className="bi bi-layers-fill text-3xl text-[#5333ed]"></i>
              <h2 className="text-2xl font-bold text-gray-800">Key Features</h2>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <i className="bi bi-lightning-charge-fill text-yellow-500"></i>
                Live API Data Fetching
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-cart-check-fill text-[#5333ed]"></i>
                Persistent Cart Storage
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-magic text-purple-500"></i>
                Shimmer UI Loading States
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-phone text-blue-500"></i>
                Fully Responsive Design
              </li>
            </ul>
          </div>
        </div>

        {/* Developer Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-[#5333ed] p-6 text-center">
            <h2 className="text-2xl font-bold text-white">Developer Info</h2>
          </div>
          <div className="p-8 text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
              👨‍💻
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Raheem</h3>
            <p className="text-gray-600 mb-6">
              Passionate Frontend Developer building scalable web applications.
            </p>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/Raheem8943" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#5333ed] transition-colors text-2xl">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/abdul-raheemwork?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4iYqZIh1ScCvCwJJ08Qiig%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors text-2xl">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-cyan-500 transition-colors text-2xl">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
