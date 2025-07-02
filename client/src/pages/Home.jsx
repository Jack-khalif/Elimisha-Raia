import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const [language, setLanguage] = useState( 'English');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'English' ? 'Kiswahili' : 'English'));
  };

  const translations = {
    English: {
      heroTitle: 'Discover Your Rights. Shape Your Nation.',
      heroSub: 'Civic education made accessible, interactive and inspiring. Explore the Kenyan Constitution through games, visuals, and learning that speaks to you.',
      startLearning: 'Start Learning',
      playQuiz: 'Play & Quiz',
      knowRights: 'Know Your Rights',
      learnRights: 'Understand the Bill of Rights, youth rights, land, education, and equality through simple language.',
      playBased: 'Learn Through Play',
      quizEngage: 'Take engaging quizzes and civic games that test your knowledge and challenge your thinking.',
      visualize: 'Visualize Our History',
      visualJourney: 'Dive into infographics and visuals to see Kenya\'s constitutional journey and structure of government.',
      quote: '“An informed citizen is the strongest pillar of any democracy.”',
      callToAction: 'Are you ready to be part of Kenya`s civic future?',
      explore: 'Explore the Constitution'
    },
    Kiswahili: {
      heroTitle: 'Tambua Haki Zako. Jenga Taifa Lako.',
      heroSub: 'Elimu ya uraia kwa njia rahisi, ya kuvutia na shirikishi. Chunguza Katiba ya Kenya kupitia michezo, picha na maarifa yanayoeleweka.',
      startLearning: 'Anza Kujifunza',
      playQuiz: 'Cheza & Jaribu',
      knowRights: 'Tambua Haki Zako',
      learnRights: 'Elewa Haki za Kimsingi, haki za vijana, ardhi, elimu, na usawa kwa lugha rahisi.',
      playBased: 'Jifunze Kupitia Michezo',
      quizEngage: 'Fanya majaribio ya kuvutia ya uraia yanayochochea fikra zako.',
      visualize: 'Tazama Historia Yetu',
      visualJourney: 'Angalia infografia kuonyesha safari ya Katiba na muundo wa serikali ya Kenya.',
      quote: '“Raia aliye na maarifa ndiye nguzo kuu ya demokrasia.”',
      callToAction: 'Je, uko tayari kuwa sehemu ya mustakabali wa uraia Kenya?',
      explore: 'Chunguza Katiba'
    }
  };

  const t = translations[language];

  return (
    <section className="relative min-h-screen text-emerald-900">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30"
        autoPlay
        muted
        loop
      >
        <source src="/" type="video" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 px-6 py-20 bg-gradient-to-b from-white/90 to-white/95">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-medium text-emerald-700">Civic Kenya</h2>
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-800"
          >
            {language === 'English' ? 'Swahili' : 'English'}
          </button>
        </div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">{t.heroTitle}</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">{t.heroSub}</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/learn" className="px-6 py-3 bg-emerald-700 text-white rounded-xl shadow hover:bg-emerald-800 transition">{t.startLearning}</Link>
            <Link to="/play" className="px-6 py-3 border border-emerald-700 text-emerald-700 rounded-xl hover:bg-emerald-50 transition">{t.playQuiz}</Link>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 text-center mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            { icon: 'https://cdn-icons-png.flaticon.com/512/2972/2972079.png', title: t.knowRights, desc: t.learnRights },
            { icon: 'https://cdn-icons-png.flaticon.com/512/190/190411.png', title: t.playBased, desc: t.quizEngage },
            { icon: 'https://cdn-icons-png.flaticon.com/512/3652/3652191.png', title: t.visualize, desc: t.visualJourney }
          ].map((item, i) => (
            <motion.div key={i} className="p-4" whileHover={{ scale: 1.05 }} transition={{ type: 'spring' }}>
              <img src={item.icon} alt={item.title} className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-emerald-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          className="text-white bg-emerald-600  text-center py-16 mt-24 text-xl md:text-2xl font-medium italic rounded-md shadow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {t.quote}
        </motion.blockquote>        

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-emerald-900">{t.callToAction}</h2>
          <p className="mt-3 text-gray-600">{language === 'English' ? 'Explore, learn, and engage with your Constitution today.' : 'Jifunze, chunguza na shiriki katika Katiba yako leo.'}</p>
          <Link to="/learn" className="mt-6 inline-block px-8 py-3 bg-emerald-700 text-white rounded-xl hover:bg-emerald-800 transition">{t.explore}</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
