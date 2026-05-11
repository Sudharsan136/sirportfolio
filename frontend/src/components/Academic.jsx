import React from 'react';
import sir2Image from '../assets/sir2.jpg';
import sir4Image from '../assets/sir4.JPG';

const Academic = () => {
  return (
    <section id="academic" className="py-24 bg-neutral-900/90 backdrop-blur-xl border-t border-white/10 relative z-20 text-gray-300">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 tracking-wide">Academic Profile</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        {/* Education Section */}
        <div className="mb-20 flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <h3 className="text-2xl font-serif text-amber-500 mb-8 flex items-center border-b border-white/10 pb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Education Journey
            </h3>
            
            <div className="space-y-6 text-lg font-light leading-relaxed">
              <p>
                Dr. Venkatraman received his elementary and middle school education at <strong className="text-white">Vani Vilas Middle School</strong>, Mannargudi, and completed his secondary schooling up to SSLC (1976) at the century-old <strong className="text-white">National High School</strong> in the same town.
              </p>
              <p>
                He pursued his Pre-University Course and B.A. in English at the <strong className="text-white">Government Arts College</strong>, Mannargudi (1977–1980). He then completed his M.A. in English Literature at <strong className="text-white">A.V.V.M. Sri Pushpam College</strong>, Poondi, in 1982.
              </p>
              <p>
                After beginning his career as a Lecturer in English at a Polytechnic College in 1986, he continued to upgrade his qualifications through distance education. He earned his B.Ed. (English & Special English) from <strong className="text-white">Annamalai University</strong> in 1988, followed by an M.Ed. from <strong className="text-white">Madurai Kamaraj University</strong> in 1993, and later an M.Phil. (English) from the same university in 2000.
              </p>
              
              <div className="bg-amber-900/20 border border-amber-500/30 p-6 rounded-2xl my-8 shadow-lg">
                <p className="text-amber-50">
                  He subsequently pursued doctoral research as a part-time scholar at <strong className="text-amber-400 font-semibold">SASTRA Deemed University</strong>, where he was serving as faculty. In 2009, he was awarded the <strong className="text-amber-400 font-semibold">Ph.D. in English Education</strong> for his thesis titled <span className="italic">"Developing a Set of Competencies for Teachers of English in Engineering Colleges."</span> Notably, he was the first faculty member in the Department of English at SASTRA to be awarded a Ph.D.
                </p>
              </div>
              
              <p className="italic text-gray-400 border-l-2 border-gray-600 pl-4">
                Dr. Venkatraman’s educational journey reflects his commitment to both personal intellectual growth and professional advancement.
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3 xl:w-5/12 shrink-0 flex flex-col gap-8 mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img 
                src={sir2Image} 
                alt="Dr. Venkatraman Academic Journey" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Academic Positions & Specialization Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          
          {/* Positions Held */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-amber-500/50 transition-colors">
            <h3 className="text-2xl font-serif text-amber-500 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Academic Positions Held
            </h3>
            <ul className="space-y-6 relative border-l border-white/10 ml-3 pl-6">
              <li className="relative">
                <div className="absolute w-3 h-3 bg-amber-500 rounded-full -left-[1.95rem] top-1.5 shadow-[0_0_10px_rgba(217,119,6,0.8)]"></div>
                <h4 className="text-white font-medium text-lg">Associate Professor of English</h4>
                <p className="text-amber-500/80 text-sm mb-1">2001 - 2025</p>
                <p className="text-gray-400">SASTRA University</p>
              </li>
              <li className="relative">
                <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-[1.95rem] top-1.5"></div>
                <h4 className="text-white font-medium text-lg">Lecturer in English</h4>
                <p className="text-amber-500/80 text-sm mb-1">1991 - 2001</p>
                <p className="text-gray-400">Shanmugha Polytechnic College, Thanjavur</p>
              </li>
              <li className="relative">
                <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-[1.95rem] top-1.5"></div>
                <h4 className="text-white font-medium text-lg">Lecturer in English</h4>
                <p className="text-amber-500/80 text-sm mb-1">1986 - 1991</p>
                <p className="text-gray-400">CCMR Polytechnic College, Thanjavur</p>
              </li>
            </ul>
          </div>

          {/* Areas of Specialization */}
          <div>
            <h3 className="text-2xl font-serif text-amber-500 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Areas of Specialization
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Technical Communication", "English Language Teaching", 
                "Business Communication", "Legal English", 
                "British Literature", "Technical Writing", 
                "Academic Writing", "Scientific Communication", 
                "Indian Culture and Ethics"
              ].map((spec, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-200 hover:bg-amber-600 hover:border-amber-500 hover:text-white transition-all cursor-default">
                  {spec}
                </span>
              ))}
            </div>
          </div>
          
        </div>

        {/* Courses Taught */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif text-amber-500 mb-8 flex items-center border-b border-white/10 pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Courses Taught
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h4 className="text-xl text-white mb-4 font-medium border-b border-white/10 pb-2">Technical & Professional Programs</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start"><span className="text-amber-500 mr-2">▹</span> Technical Communication (B.Tech.)</li>
                <li className="flex items-start"><span className="text-amber-500 mr-2">▹</span> Business Communication (For M.B.A)</li>
                <li className="flex items-start"><span className="text-amber-500 mr-2">▹</span> Legal English I & II (Five Year Integrated Law)</li>
                <li className="flex items-start"><span className="text-amber-500 mr-2">▹</span> Professional Communication (M.C.A)</li>
                <li className="flex items-start"><span className="text-amber-500 mr-2">▹</span> Scientific Communication for Optometrists (M.Optom)</li>
                <li className="flex items-start"><span className="text-amber-500 mr-2">▹</span> General English for B.Optom.</li>
                <li className="flex items-start"><span className="text-amber-500 mr-2">▹</span> General English (UG Courses)</li>
                <li className="flex items-start"><span className="text-amber-500 mr-2">▹</span> Indian Culture and Ethics</li>
              </ul>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h4 className="text-xl text-white mb-4 font-medium border-b border-white/10 pb-2">B.A., B.Ed. (English) Integrated</h4>
              <ul className="space-y-3 text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <li className="flex items-start"><span className="text-amber-500 mr-2">▹</span> English Language Pedagogy I</li>
                <li className="flex items-start"><span className="text-amber-500 mr-2">▹</span> English Language Pedagogy II</li>
                <li className="flex items-start"><span className="text-amber-500 mr-2">▹</span> Shakespeare</li>
                <li className="flex items-start"><span className="text-amber-500 mr-2">▹</span> Literary Theory</li>
                <li className="flex items-start"><span className="text-amber-500 mr-2">▹</span> British Novel</li>
                <li className="flex items-start"><span className="text-amber-500 mr-2">▹</span> British Poetry</li>
                <li className="flex items-start"><span className="text-amber-500 mr-2">▹</span> British Prose</li>
                <li className="flex items-start"><span className="text-amber-500 mr-2">▹</span> British Short Stories</li>
                <li className="flex items-start col-span-1 sm:col-span-2"><span className="text-amber-500 mr-2">▹</span> Philosophical Foundations of Education</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects, Research & Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          <div className="space-y-8">
            {/* Research Guidance */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-serif text-amber-500 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Research Guidance
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between items-center bg-black/30 p-3 rounded-lg">
                  <span>Ph.D. Scholars Guided</span>
                  <span className="font-bold text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full text-sm">1 (Awarded)</span>
                </li>
                <li className="flex justify-between items-center bg-black/30 p-3 rounded-lg">
                  <span>Current Research Supervision</span>
                  <span className="font-bold text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full text-sm">1 (Full-time)</span>
                </li>
              </ul>
            </div>

            {/* Academic Administrative Roles */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-serif text-amber-500 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
                Administrative Roles
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-amber-500 mt-1 mr-3 text-lg">•</span>
                  <span>Member, Board of Studies - English, Education, Law <span className="text-gray-500 text-sm ml-1">(SASTRA)</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mt-1 mr-3 text-lg">•</span>
                  <span>In-charge of English Department <span className="text-amber-400/80 text-sm ml-1 bg-amber-500/10 px-2 py-0.5 rounded">for more than 15 years</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mt-1 mr-3 text-lg">•</span>
                  <span>Executive Editor: ITIHAS, SASTRA's Quarterly Newsletter <span className="text-amber-400/80 text-sm ml-1 bg-amber-500/10 px-2 py-0.5 rounded">for 17 years</span></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            {/* Funded Projects */}
            <div className="bg-amber-900/10 border border-amber-600/20 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>
              <h3 className="text-xl font-serif text-amber-500 mb-4 flex items-center relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Funded Projects
              </h3>
              <div className="space-y-6 relative z-10">
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    <strong className="text-white">Principal Developer</strong> of the course titled, 'English for Communication,' developed under the Pedagogy Research Project of the National Mission Project on Education through ICT, coordinated by IIT, Kharagpur.
                  </p>
                  <p className="text-amber-400 text-sm font-medium">Funding: Rs 7 lakh</p>
                </div>
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    Obtained a fund for hosting South Zone Inter University Youth Festival at SASTRA University, Thanjavur from August 21-25, 2010 through the Association of Indian Universities.
                  </p>
                  <p className="text-amber-400 text-sm font-medium">Funding: Rs 8.8 lakh (Ministry of Youth Affairs and Sports, Govt. of India)</p>
                </div>
              </div>
            </div>

            {/* Major Initiatives */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-serif text-amber-500 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Major Initiatives
              </h3>
              <ul className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <li className="bg-black/30 p-4 rounded-xl border-l-2 border-amber-600">
                  Instrumental in SASTRA acquiring the library of <strong className="text-white">Dr. T.N. Ramachandran</strong>, a great scholar of Thanjavur. A collection of 40,000 rare books of all subjects was purchased by SASTRA.
                </li>
                <li className="bg-black/30 p-4 rounded-xl border-l-2 border-amber-600">
                  Under my initiative, the <strong className="text-amber-100">Dr. T.N. Ramachandran Memorial Endowment</strong> was instituted in the Department of English, SASTRA, in December 2021 with a seed amount of ₹5,00,000. The endowment supports an <span className="text-amber-400">annual memorial lecture</span> and a <span className="text-amber-400">Best Outgoing Student Award</span> to recognize academic excellence.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Awards and Recognitions */}
        <div className="bg-gradient-to-r from-amber-900/40 via-amber-700/20 to-black/40 border border-amber-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
          
          <div className="flex-1 text-center md:text-left relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-amber-500 mx-auto md:mx-0 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Awards & Recognitions</h3>
            <p className="text-xl md:text-2xl text-amber-100/90 font-serif italic">
              "Lifetime Achievement Award"
            </p>
            <p className="text-gray-400 mt-4 font-medium tracking-wide">
              Awarded by Venus International Foundation, Chennai (2016)
            </p>
          </div>
          
          <div className="w-full md:w-1/2 lg:w-5/12 shrink-0 relative z-10">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-amber-500/20 group relative">
              <img 
                src={sir4Image} 
                alt="Lifetime Achievement Award" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Academic;
