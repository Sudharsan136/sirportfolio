import React, { useState, useEffect } from 'react';
import Academic from './components/Academic';
import Publications from './components/Publications';
import Contact from './components/Contact';
import sirPhoto from './assets/sir.jpg';
import lib1 from './assets/lib1.jpg';
import lib2 from './assets/lib2.jpg';
import lib3 from './assets/lib3.jpg';

const bgImages = [
  '/library-bg.png',
  lib1,
  lib2,
  lib3
];

const App = () => {
  const navItems = [
    'Home', 'Academic', 'Publications', 'Blog', 'Poetry', 'Legacy', 
    'Media', 'Resources', 'E-books', 'Gallery', 'Contact'
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 7000); // Change image every 7 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans selection:bg-amber-600 selection:text-white">
      {/* Background Image Carousel with Overlay */}
      {bgImages.map((img, index) => (
        <div 
          key={index}
          className={`fixed inset-0 z-0 bg-cover bg-center bg-no-repeat origin-center ${index === currentBg ? 'opacity-75 animate-slow-zoom' : 'opacity-0'}`}
          style={{ 
            backgroundImage: `url(${img})`,
            transition: 'opacity 2s ease-in-out'
          }}
        ></div>
      ))}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navbar */}
        <header className="border-b border-white/10 backdrop-blur-md bg-black/20 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={`#${item.toLowerCase()}`}
                className="text-sm md:text-base text-gray-300 hover:text-amber-500 transition-colors duration-300 tracking-wider uppercase font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <section id="home" className="container mx-auto px-4 py-16 md:py-24 min-h-screen flex items-center justify-center">
          <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Profile Section */}
            <div className="md:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-amber-600/30 p-2 shadow-2xl mb-8 group">
                {/* Profile Photo */}
                <div className="w-full h-full rounded-full overflow-hidden bg-[#f4efe4] flex items-center justify-center border border-white/10 relative">
                  <img src={sirPhoto} alt="Dr. G. Venkatraman" className="w-full h-full object-cover scale-[0.90] translate-y-3" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold font-serif mb-3 text-white tracking-tight whitespace-nowrap">
                Dr. G. Venkatraman <span className="text-amber-500 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl">PhD</span>
              </h1>
              
              <div className="h-1 w-20 bg-amber-600 mx-auto rounded-full mb-4"></div>
              
              <p className="text-sm md:text-base text-gray-300 uppercase tracking-[0.2em] font-medium leading-relaxed">
                Professor of English (Retd.)<br/>
                <span className="text-amber-500/80">Researcher | Trainer | Translator | Poet | Editor</span>
              </p>
            </div>

            {/* Content Section */}
            <div className="md:col-span-7 flex flex-col justify-center space-y-8">
              
              {/* Quote */}
              <div className="relative">
                <span className="absolute -top-6 -left-4 text-6xl text-amber-500/20 font-serif">"</span>
                <p className="text-xl md:text-3xl font-serif italic text-amber-100/90 leading-snug pl-4 border-l-4 border-amber-600 py-2">
                  Literature is not just words on a page; it is the echo of the human spirit across time.
                </p>
              </div>

              {/* Welcome Note */}
              <div className="bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/5 shadow-xl">
                <h2 className="text-2xl font-serif text-amber-500 mb-4 flex items-center">
                  <span className="bg-amber-500/20 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </span>
                  Welcome Note
                </h2>
                
                <div className="space-y-4 text-gray-300 leading-relaxed font-light text-base md:text-lg">
                  <p>
                    Welcome to my website! I am <strong className="text-white font-medium">Dr. G. Venkatraman</strong>, a retired Professor of English with nearly four decades of teaching, research, mentoring, and creative engagement in literature and language. My journey with literature and language has been deeply rewarding—shaping students, engaging with ideas, and celebrating the beauty of words.
                  </p>
                  <p>
                    This website is a reflection of my academic contributions, writings, and personal interests. It is also a space where I continue to share my thoughts on literature, pedagogy, and the enduring value of human expression.
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <button className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-amber-600/30 hover:shadow-amber-500/50 flex items-center group">
                  Explore My Work
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

            </div>
            </div>
          </section>

          {/* Academic / About Section */}
          <section id="about" className="py-24 bg-black/70 backdrop-blur-lg border-t border-white/10 relative z-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">About Dr. Venkatraman</h2>
                <div className="h-1 w-24 bg-amber-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 gap-10">
                <div className="space-y-8 text-gray-300 font-light leading-relaxed text-lg md:text-xl">
                  <p>
                    <strong className="text-white font-medium">Dr. G. Venkatraman</strong> is a retired Associate Professor of English from SASTRA Deemed University, with over 38 years of distinguished service in higher education. His career has been marked by a deep engagement with literature, language studies, technical communication, and interdisciplinary research that bridges the humanities and professional education.
                  </p>
                  
                  <div className="p-8 bg-amber-900/20 border border-amber-600/30 rounded-2xl shadow-xl shadow-black/40">
                    <p className="text-amber-50">
                      Holding a PhD in English–Education (interdisciplinary) on teacher competencies in engineering colleges, along with an M.Ed. degree, he brings together strong subject expertise and pedagogical insight. His academic journey spans teaching a wide range of courses—from British Literature, Literary Theory, and Shakespeare to Technical Communication, Business English, and Legal English—catering to diverse student communities across Engineering, Law, Management, Science, and Education.
                    </p>
                  </div>

                  <p>
                    Dr. Venkatraman has contributed extensively to curriculum design, faculty development, and research supervision, besides editing and authoring books in the areas of English language teaching and technical communication. His editorial roles include textbooks, anthologies, and academic volumes, while his research spans topics such as ESP, human-technology interaction, cultural studies, and teacher education. He has also successfully led funded projects, notably under the National Mission on Education through ICT, and has been instrumental in initiatives that enriched academic resources, such as the acquisition of Dr. T.N. Ramachandran’s rare library collection.
                  </p>

                  <p>
                    A distinctive feature of his professional journey is his long and close association with his master and mentor <strong className="text-amber-400 font-medium">Prof. K.G. Seshadri</strong>, a doyen of English, with <strong className="text-amber-400 font-medium">Dr. T.N. Ramachandran</strong>, a well-acclaimed scholar and translator, and with inspiring scholars such as Prof. S.A. Sankaranarayan, Dr. B. Krishnamurthy, Prof. Palani Arangasamy, and Dr. S. Thiyagaraja Sharma. This rich lineage of scholarship has shaped his outlook and continues to inspire his academic pursuits.
                  </p>

                  <div className="flex flex-col md:flex-row items-start md:items-center mt-12 p-8 bg-white/5 rounded-2xl border-l-4 border-amber-500 shadow-2xl">
                    <div className="bg-amber-500/20 p-4 rounded-full mb-6 md:mb-0 md:mr-8 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <p className="italic text-amber-100 text-xl md:text-2xl font-serif leading-snug">
                      Recognized with the <strong className="font-bold text-amber-400">Lifetime Achievement Award by Venus International Foundation (2016)</strong>, he continues to share his expertise through keynote lectures, workshops, and publications. His professional legacy is defined by a commitment to advancing scholarship, fostering student growth, mentoring young faculty, and promoting English studies as both a humanistic pursuit and a practical necessity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Academic Profile Component */}
          <Academic />

          {/* Publications Component */}
          <Publications />

          {/* Contact Component */}
          <Contact />

        </main>
        
        {/* Footer */}
        <footer className="py-6 border-t border-white/10 text-center text-sm text-gray-500 bg-black/40 backdrop-blur-sm">
          <p>&copy; {new Date().getFullYear()} Dr. G. Venkatraman. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
