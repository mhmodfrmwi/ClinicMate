const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 dark:bg-slate-950">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Mission Section with Glass Effect */}
        <div className="glass mb-16 overflow-hidden rounded-3xl bg-white/50 shadow-xl dark:bg-slate-900/50">
          <div className="grid grid-cols-1 items-center gap-12 p-8 md:grid-cols-2 md:p-16">
            <div>
              <h2 className="mb-6 text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                Who We Are
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                At ClinicMate, we are committed to providing top-notch healthcare
                solutions. Our platform connects you with trusted doctors, making
                it easy to schedule appointments and receive the care you need.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                With years of experience and a dedicated team, we strive to make
                healthcare accessible and hassle-free for everyone.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-gradient-to-br from-blue-500 to-teal-400 opacity-20 blur-2xl"></div>
              <img
                src="assets/doc-header-img.png"
                alt="About Us"
                className="relative z-10 w-full rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        {/* Vision/Mission Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="glass rounded-3xl bg-white/40 p-10 hover:bg-white/60 dark:bg-slate-800/40 dark:hover:bg-slate-800/60 transition-all">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Our mission is to enhance the healthcare experience by providing a
              seamless platform that empowers patients and doctors alike. We
              believe in leveraging technology to bridge the gap and deliver
              quality care to everyone.
            </p>
          </div>
          
           <div className="glass rounded-3xl bg-white/40 p-10 hover:bg-white/60 dark:bg-slate-800/40 dark:hover:bg-slate-800/60 transition-all">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              Why Choose Us
            </h2>
             <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
               <li className="flex items-center gap-3"><span className="text-blue-500">✓</span> 100+ Trusted Doctors</li>
               <li className="flex items-center gap-3"><span className="text-blue-500">✓</span> 24/7 Appointment Booking</li>
               <li className="flex items-center gap-3"><span className="text-blue-500">✓</span> Secure & Private</li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
