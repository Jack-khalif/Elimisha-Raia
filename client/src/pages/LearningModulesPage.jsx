import React from 'react';

// Placeholder data - we'll replace this with API data later
const modules = [
  { id: 1, title: 'Chapter 1: Sovereignty of the People', summary: 'Learn about the foundational principles of Kenya.' },
  { id: 2, title: 'Chapter 2: The Republic', summary: 'Understand the structure and symbols of the nation.' },
  { id: 3, title: 'Chapter 3: Citizenship', summary: 'Discover the rights and responsibilities of a citizen.' },
];

const LearningModulesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-neutral-900 mb-10">Learning Modules</h2>
      <p className="text-center text-neutral-500 mb-10">Explore the simplified chapters of the Kenyan Constitution.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map(module => (
          <div key={module.id} className="bg-white p-6 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border-b-4 border-primary-green">
            <h3 className="text-xl font-bold text-neutral-700">{module.title}</h3>
            <p className="text-neutral-500 mt-2">{module.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningModulesPage;
