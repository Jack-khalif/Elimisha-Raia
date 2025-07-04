import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenCheck, LockKeyhole } from 'lucide-react';

// Placeholder data - we'll replace this with API data later
const modules = [
  { id: 1, title: 'Chapter 1: Sovereignty of the People', summary: 'Learn about the foundational principles of Kenya.' },
  { id: 2, title: 'Chapter 2: The Republic', summary: 'Understand the structure and symbols of the nation.' },
  { id: 3, title: 'Chapter 3: Citizenship', summary: 'Discover the rights and responsibilities of a citizen.' },
];

const LearningModulesPage = () => {
  return (
    <div className="min-h-screen bg-emerald-50 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-emerald-800 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Your Civic Adventure
        </motion.h2>
        <p className="text-neutral-600 text-lg mb-12">
          Explore Kenya's Constitution one quest at a time. Unlock chapters and level up your knowledge.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              className={`rounded-xl shadow-lg p-6 transition duration-300 relative ${
                module.unlocked
                  ? 'bg-white border-l-4 border-emerald-600'
                  : 'bg-gray-100 border-l-4 border-gray-400 opacity-70 pointer-events-none'
              }`}
              whileHover={module.unlocked ? { scale: 1.02 } : {}}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-3">
                {module.unlocked ? (
                  <BookOpenCheck className="w-6 h-6 text-emerald-600" />
                ) : (
                  <LockKeyhole className="w-6 h-6 text-gray-500" />
                )}
                <h3 className="text-xl font-semibold text-neutral-800">{module.title}</h3>
              </div>
              <p className="text-neutral-600 mb-4">{module.summary}</p>
              {module.unlocked ? (
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition font-medium">
                  Start Quest
                </button>
              ) : (
                <p className="text-sm italic text-gray-500">Complete previous quests to unlock</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningModulesPage;
