const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        {/* Left Side - Info */}
        <div className="bg-[#5333ed] text-white p-10 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 science-gothic">Let's Connect</h2>
          <p className="mb-6 opacity-90">
            This is a portfolio project demonstrating a modern Food Delivery App built with React and Redux.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <i className="bi bi-envelope-fill text-xl"></i>
              <span>Raheem.abdulwork@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="bi bi-github text-xl"></i>
              <span>github.com/Raheem8943</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="bi bi-geo-alt-fill text-xl"></i>
              <span>Remote / Worldwide</span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-10 md:w-1/2">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5333ed] focus:border-transparent outline-none transition-all"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5333ed] focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5333ed] focus:border-transparent outline-none transition-all"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button className="w-full bg-[#5333ed] text-white font-bold py-3 rounded-lg hover:bg-[#4228bd] transition-colors shadow-md cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
