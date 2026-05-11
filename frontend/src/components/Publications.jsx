import React, { useState, useEffect } from 'react';
import axios from 'axios';

// ── Static hardcoded data ──────────────────────────────────────────────────
const staticJournals = [
  { id: 1, text: 'Venkatraman, G., and B. Krishnamurthy. "Relevant and Student-Friendly Course Materials for Distance Education Programmes: A Case Study." English for Specific Purposes World Journal, Dec. 2011.' },
  { id: 2, text: 'Venkatraman, G. "Empowerment of Teachers through Continuous Competence Ascendance: Perspectives of Senior Teachers." International Journal of Business and Social Science, Mar. 2012.' },
  { id: 3, text: 'Venkatraman, G., and P. Prema. "Developing a Set of Competencies for Teachers of English in Engineering Colleges." English for Specific Purposes World Journal, Apr. 2007.' },
  { id: 4, text: 'Venkatraman, G., and P. Prema. "English Language Skills for Engineering Students: A Needs Survey." English for Specific Purposes World Journal, Nov. 2017.' },
  { id: 5, text: 'Venkatraman, G., and B. Krishnamurthy. "A Course in English for Students of Engineering with Emphasis on Problem Solving Methods." English for Specific Purposes World Journal, Sep. 2008.' },
  { id: 6, text: 'Venkatraman, G., and P. Prema. "Identification and Validation of ESP Teacher Competencies: A Research Design." English Language Teaching, vol. 6, no. 2, 2013.', badge: 'Scopus' },
  { id: 7, text: 'Venkatraman, G. "Learner-Centric and Outcome-Based Curriculum Development: Principles and Practices." ESP World Journal, vol. 50, July 2016.' },
  { id: 8, text: 'Ravi, R., and G. Venkatraman. "Essential Values for Students of Engineering: A Framework." International Journal of Economic Research, vol. 14, no. 8, 2017.', badge: 'Scopus' },
  { id: 9, text: 'Venkatraman, G., R. Ravi, and Radhakrishnan Rajasekaran. "International Trends in Teacher Competency Research: A Review." International Journal of Pure and Applied Mathematics, vol. 119, no. 7, 2018.' },
  { id: 10, text: 'Ravi, R., and G. Venkatraman. "Identification and Validation of a Set of Gandhian Values Relevant for Students of Engineering: A Research Design." International Journal of Pure and Applied Mathematics, vol. 119, no. 7, 2018.' },
  { id: 11, text: "Siva Vidhya, M., and G. Venkatraman. \"Aspects of Cultural Exchange in Amitav Ghosh's Sea of Poppies.\" Journal of Critical Reviews, vol. 7, no. 20, 2020." },
  { id: 12, text: "Siva Vidhya, M., and G. Venkatraman. \"Cultural Exchange and Human Values in Amitav Ghosh's River of Smoke: A Study.\" Journal of Pharmaceutical and Negative Results, vol. 13, no. 1, 2022." },
  { id: 13, text: 'Siva Vidhya, M., and G. Venkatraman. "Influence of Culture on Physical and Mental Health of People during Epidemics." International Journal of Biology, Pharmacy and Allied Sciences, vol. 10, no. 3, 2021.' },
  { id: 14, text: "Siva Vidhya, M., and G. Venkatraman. \"Gender Discrimination as a Component of Literature in Amitav Ghosh's Sea of Poppies.\" Perspectives on Contemporary Literature and Literary Theories in English, 2020." },
  { id: 15, text: "Siva Vidhya, M., and G. Venkatraman. \"Socio-Political Overtones in Sea of Poppies by Amitav Ghosh.\" International Journal of English Language, Literature and Humanities, vol. 7, no. 2, Feb. 2019." },
  { id: 16, text: 'Siva Vidhya, M., and G. Venkatraman. "Tracing the Theory and Aspects of Cultural Exchange and Relating the Theory with Narratology." International Journal of Research and Analytical Reviews, vol. 8, no. 3, July 2021.' },
  { id: 17, text: "Siva Vidhya, M., and G. Venkatraman. \"Role of Language in Understanding the Culture Present in Amitav Ghosh's Novel Sea of Poppies.\" Quest Journal, vol. 7, no. 7, 2019." },
  { id: 18, text: "Siva Vidhya, M., and G. Venkatraman. \"Representation of Culture and Cultural Exchange in Amitav Ghosh's Sea of Poppies.\" Bodhi International Journal, vol. 3, no. 1, 2019." },
  { id: 19, text: "Shenbagam, J., and G. Venkatraman. \"Modern Technologies and Ecofeministic Perspectives on Chitra Banerjee's The Forest of Enchantments: An Introspection.\" UGC – Humanities and Social Science Studies, vol. 12, no. 19, 2023.", badge: 'UGC' },
  { id: 20, text: 'Shenbagam, J., and G. Venkatraman. "Human Technology Integration and the Students of Engineering: A Perception-Based Analysis." Community Practitioner, July 2024.', badge: 'Scopus' },
  { id: 21, text: 'Shenbagam, J., and G. Venkatraman. "Promulgating Knowledge on Innovative Technology and SDGs through Human-Technology Interaction in Ready Player One and The Circle." IAFOR Research Archive: SEACE2025 Conference Proceedings, Malaysia, 2025.' },
];

const staticBooks = [
  { id: 'b1', text: 'Effective Technical Communication. (2023) Venkatraman, G. (Edited). Pearson Education, New Delhi.', note: 'This book served as the text book for B.Tech. programme of SASTRA.' },
  { id: 'b2', text: 'Trends and Modalities in English Language Teaching. (2021) Authors Press, New Delhi. (Co-Editor)' },
  { id: 'b3', text: 'Poems Aplenty. (2021) Indian University Press. (Co-Editor)' },
  { id: 'b4', text: 'Stories Aplenty. Literary Scholars Society, Thanjavur, September 2024. (Co-Editor)' },
  { id: 'b5', text: 'Vinayakar Nanmanimalai, English Translation by S.A. Sankaranarayanan. (Edited with an Introduction)' },
  { id: 'b6', text: 'Saraswati Anthathi, English Translation by S.A. Sankaranarayanan. (Edited with an Introduction)' },
  { id: 'b7', text: 'Sadagopar Anthathi, English Translation by S.A. Sankaranarayanan. (Edited with an Introduction)' },
];

const staticWorkshops = [
  { id: 'w1', text: 'ISTE-STTP on Technical Communication for Scientist and Engineers conducted by IIT Mumbai, at SASTRA Remote Centre from November 30 to December 5, 2015.' },
  { id: 'w2', text: 'A two-day FDP on Constructivist Approach to Teaching of English Language and Literature, September 28 & 29, 2018.' },
  { id: 'w3', text: 'Co-ordinator for Professional Communication course offered to the Online MCA Programme of SASTRA.' },
];

const staticKeynotes = [
  { id: 'k1', title: 'International Conference on Entanglements in Diasporic Trajectories', venue: 'Organized by Swamy Dayananda College of Arts and Sciences', date: 'August 23, 2024' },
  { id: 'k2', title: 'National Conference on The Threads of Human Experience: Literary Themes and Life Perspectives', venue: 'PG Dept. of English, Bon Secours College, Mannargudi', date: 'February 17, 2025' },
  { id: 'k3', title: 'Teaching English, Touching Lives: Pedagogies that Work', venue: 'Workshop on L3: Language, Literature and Linguistics, PG Department of English, Bon Secours Arts and Science College, Mannargudi', date: '19.09.2025' },
];

// Maps a DB publication type to a known section using exact admin names
const classifyType = (type = '') => {
  const t = type.toLowerCase().trim();
  if (t === 'journal publications') return 'journal';
  if (t === 'books & textbooks') return 'book';
  if (t === 'workshops / fdps / moocs') return 'workshop';
  if (t === 'keynote / talks') return 'keynote';
  return 'other'; // custom/unknown type → its own section
};
// ─────────────────────────────────────────────────────────────────────────────

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Publications = () => {
  const [dynamicPubs, setDynamicPubs] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/publications`)
      .then(res => setDynamicPubs(res.data || []))
      .catch(() => {});
  }, []);

  // Split dynamic pubs into known sections
  const dynJournals  = dynamicPubs.filter(p => classifyType(p.type) === 'journal');
  const dynBooks     = dynamicPubs.filter(p => classifyType(p.type) === 'book');
  const dynWorkshops = dynamicPubs.filter(p => classifyType(p.type) === 'workshop');
  const dynKeynotes  = dynamicPubs.filter(p => classifyType(p.type) === 'keynote');

  // Group remaining unknown types
  const otherPubs = dynamicPubs.filter(p => classifyType(p.type) === 'other');
  const otherGrouped = otherPubs.reduce((acc, pub) => {
    const key = pub.type || 'Other';
    if (!acc[key]) acc[key] = [];
    acc[key].push(pub);
    return acc;
  }, {});

  const DynPubItem = ({ pub, index, startIndex = 0 }) => (
    <div className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group border-l-2 border-amber-600/40">
      <div className="font-serif text-amber-600/50 group-hover:text-amber-500 text-xl pt-1 min-w-[2rem]">
        {startIndex + index + 1}.
      </div>
      <p className="text-gray-200 leading-relaxed flex-1">
        {pub.authors}. "{pub.title}." <span className="italic">{pub.journal}</span>, {pub.year}.
      </p>
    </div>
  );

  return (
    <section id="publications" className="py-24 bg-black/80 backdrop-blur-lg border-t border-white/10 relative z-20 text-gray-300">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 tracking-wide">Publications</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        {/* ── Books & Textbooks ── */}
        <div className="mb-24">
          <h3 className="text-3xl font-serif text-amber-500 mb-10 flex items-center border-b border-white/10 pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Books & Textbooks
          </h3>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <ul className="space-y-5">
              {staticBooks.map((book, i) => (
                <li key={book.id} className="flex items-start">
                  <span className="text-amber-500 font-serif text-xl mr-4 leading-none mt-1">{i + 1}.</span>
                  <div>
                    <p className="text-gray-300">{book.text}</p>
                    {book.note && <p className="text-gray-500 text-sm italic mt-1">{book.note}</p>}
                  </div>
                </li>
              ))}
              {/* Dynamic books appended */}
              {dynBooks.map((pub, i) => (
                <li key={pub._id} className="flex items-start border-l-2 border-amber-600/40 pl-4">
                  <span className="text-amber-500 font-serif text-xl mr-4 leading-none mt-1">{staticBooks.length + i + 1}.</span>
                  <p className="text-gray-200">{pub.authors}. "{pub.title}." {pub.journal}, {pub.year}.</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Journal Publications ── */}
        <div className="mb-24">
          <h3 className="text-3xl font-serif text-amber-500 mb-8 flex items-center border-b border-white/10 pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
            </svg>
            Journal Publications
          </h3>
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <div className="p-4 md:p-8 space-y-4">
              {staticJournals.map((paper) => (
                <div key={paper.id} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                  <div className="font-serif text-amber-600/50 group-hover:text-amber-500 text-xl md:text-2xl pt-1 min-w-[2rem]">{paper.id}.</div>
                  <div className="flex-1">
                    <p className="text-gray-300 leading-relaxed">
                      {paper.text}
                      {paper.badge && (
                        <span className="inline-block ml-3 px-2.5 py-0.5 rounded text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 align-middle">{paper.badge}</span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
              {/* Dynamic journals appended */}
              {dynJournals.map((pub, i) => (
                <DynPubItem key={pub._id} pub={pub} index={i} startIndex={staticJournals.length} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Workshops & Keynotes ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

          {/* Workshops */}
          <div>
            <h3 className="text-2xl font-serif text-amber-500 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Workshops / FDPs / MOOCs
            </h3>
            <div className="space-y-4">
              {staticWorkshops.map(w => (
                <div key={w.id} className="bg-black/40 border-l-4 border-amber-600 rounded-r-xl p-5 hover:bg-white/5 transition-colors">
                  <p className="text-gray-300 text-sm leading-relaxed">{w.text}</p>
                </div>
              ))}
              {dynWorkshops.map(pub => (
                <div key={pub._id} className="bg-black/40 border-l-4 border-amber-500 rounded-r-xl p-5 hover:bg-white/5 transition-colors">
                  <p className="text-gray-200 text-sm leading-relaxed">
                    <strong className="text-white">{pub.title}</strong> — {pub.authors}. {pub.journal}, {pub.year}.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Keynotes */}
          <div>
            <h3 className="text-2xl font-serif text-amber-500 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
              Keynote / Talks
            </h3>
            <div className="space-y-4">
              {staticKeynotes.map(k => (
                <div key={k.id} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-colors">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <strong className="text-amber-100 block mb-1">{k.title}</strong>
                    {k.venue}, <span className="text-amber-500">{k.date}</span>.
                  </p>
                </div>
              ))}
              {dynKeynotes.map(pub => (
                <div key={pub._id} className="bg-white/5 border border-amber-600/30 rounded-xl p-5 hover:border-amber-500/50 transition-colors">
                  <p className="text-gray-200 text-sm leading-relaxed">
                    <strong className="text-amber-100 block mb-1">{pub.title}</strong>
                    {pub.journal}, <span className="text-amber-500">{pub.year}</span>.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Any other custom types from Admin ── */}
        {Object.entries(otherGrouped).map(([type, pubs]) => (
          <div key={type} className="mb-16">
            <h3 className="text-2xl font-serif text-amber-500 mb-6 border-b border-white/10 pb-4">{type}</h3>
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-4 md:p-8 space-y-4">
                {pubs.map((pub, i) => (
                  <DynPubItem key={pub._id} pub={pub} index={i} />
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Publications;
