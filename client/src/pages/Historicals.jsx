import { useState } from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '1963',
    title: 'Independence and First Constitution',
    icon: '🏴',
    image: 'https://i.guim.co.uk/img/static/sys-images/Environment/Pix/columnists/2013/12/10/1386699781860/Kenya-at-50---Jomo-Kenyat-009.jpg?width=620&dpr=1&s=none&crop=none',
    description:
      'Kenya gained independence from British rule. The first constitution was drafted during the Lancaster House conferences.',
  },
  {
    year: '1991',
    title: 'Return to Multiparty Democracy',
    icon: '🗳️',
    image: 'https://pbs.twimg.com/media/F1dzhbRWAAIwkkz?format=jpg&name=small',
    description:
      'Kenya transitioned from single-party rule to a multiparty system. This sparked major constitutional reform movements.',
  },
  {
    year: '2010',
    title: 'Promulgation of the 2010 Constitution',
    icon: '📜',
    image: 'https://cdn.standardmedia.co.ke/images/wysiwyg/images/gYYwEOgB25UpkHhTLAJNKLe22sLCr8XDD4FeysAw.jpg',
    description:
      'On August 27, 2010, Kenya adopted a new constitution by referendum. It introduced devolution, a bill of rights, and independent commissions.',
  },
  {
    year: '2020',
    title: 'BBI Reform Proposals',
    icon: '⚖️',
    image: 'https://www.kenyanews.go.ke/wp-content/uploads/2021/02/bb.jpg',
    description:
      'The Building Bridges Initiative (BBI) proposed constitutional amendments. It sparked national dialogue and legal scrutiny.',
  },
];

const Historicals = () => {
  const [selected, setSelected] = useState(timelineEvents[0]);

  return (
    <div className="bg-emerald-50 font-serif text-gray-900">
      <header className="text-center py-10 bg-emerald-700 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Kenya Constitutional Journey</h1>
        <p className="italic text-sm md:text-base">From independence to devolution to the evolution of the people's law.</p>
      </header>

      <div className="flex overflow-x-auto px-4 py-6 gap-6 bg-emerald-200 border-t border-b border-emerald-300">
        {timelineEvents.map((event, i) => (
          <motion.div
            key={i}
            onClick={() => setSelected(event)}
            whileHover={{ scale: 1.1 }}
            className={`min-w-[90px] px-3 py-2 text-center rounded-md cursor-pointer ${
              selected.year === event.year ? 'bg-white border border-emerald-700' : 'bg-emerald-100'
            }`}
          >
            <div className="text-xl">{event.icon}</div>
            <div className="text-sm font-medium text-emerald-900">{event.year}</div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-emerald-50">
        <motion.img
          key={selected.image}
          src={selected.image}
          alt={selected.title}
          className="w-full md:w-1/2 rounded-xl border shadow-md border-emerald-300"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          key={selected.title}
          className="md:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-2">{selected.title}</h2>
          <p className="italic text-emerald-600 mb-2">{selected.year}</p>
          <p className="leading-relaxed text-gray-800 text-md">{selected.description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Historicals;
