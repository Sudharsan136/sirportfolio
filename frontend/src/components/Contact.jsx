import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black/90 backdrop-blur-xl border-t border-white/10 relative z-20 text-gray-300">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 tracking-wide">Get In Touch</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Whether you are interested in a keynote address, academic collaboration, or just want to say hello, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Information */}
          <div className="space-y-10">
            <h3 className="text-2xl font-serif text-amber-500 mb-8 border-b border-white/10 pb-4">
              Contact Information
            </h3>
            
            <div className="flex items-start group">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl mr-6 group-hover:bg-amber-600 group-hover:border-amber-500 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold mb-1">Email</p>
                <a href="mailto:gvr.eng@gmail.com" className="text-xl text-white hover:text-amber-400 transition-colors">
                  gvr.eng@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl mr-6 group-hover:bg-amber-600 group-hover:border-amber-500 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold mb-1">Mobile</p>
                <a href="tel:+919994717366" className="text-xl text-white hover:text-amber-400 transition-colors">
                  +91 9994717366
                </a>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl mr-6 group-hover:bg-amber-600 group-hover:border-amber-500 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold mb-1">Postal Address</p>
                <p className="text-xl text-white leading-relaxed max-w-xs">
                  12P Yamuna Street,<br />
                  Eswari Nagar, MC Road,<br />
                  Thanjavur – 613 004,<br />
                  Tamil Nadu, India
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form Container */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-serif text-white mb-8 relative z-10">Send a Message</h3>
            
            <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-amber-600 hover:bg-amber-500 text-white font-medium py-4 rounded-xl transition-colors duration-300 shadow-[0_0_15px_rgba(217,119,6,0.3)] hover:shadow-[0_0_25px_rgba(217,119,6,0.5)] uppercase tracking-widest text-sm"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
