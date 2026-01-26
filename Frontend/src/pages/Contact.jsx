const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="glass overflow-hidden rounded-3xl bg-white/50 shadow-2xl dark:bg-slate-900/50">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Info Section */}
            <div className="bg-gradient-to-br from-blue-600 to-teal-600 p-10 text-white md:p-16">
              <h2 className="mb-6 text-4xl font-bold">Get in Touch</h2>
              <p className="mb-10 text-lg leading-relaxed text-blue-50">
                Reach out to us via phone, email, or by filling out the contact
                form. We're always happy to assist you!
              </p>
              
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white/80">Phone</h3>
                    <p className="text-lg">+1-212-456-7890</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white/80">Email</h3>
                    <p className="text-lg">contact@ClinicMate.com</p>
                  </div>
                </li>
                 <li className="flex items-start gap-4">
                  <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white/80">Address</h3>
                    <p className="text-lg">123 Healthcare Lane,<br/> Wellness City, USA</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Form Section */}
            <div className="p-10 md:p-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-800 dark:text-white">
                Send a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    placeholder="Your Message..."
                    rows="5"
                    className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-800 dark:text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
