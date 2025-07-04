import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-emerald-50 px-6 py-16 text-center flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-6">
          About <span className="text-neutral-900">Elimisha Raia</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-700 mb-6 leading-relaxed">
          Elimisha Raia is a youth-powered civic education platform made for Kenya. We believe that knowledge of our Constitution should be as accessible, engaging, and empowering as the future we're building together.
        </p>

        <p className="text-md text-neutral-600 mb-4">
          Through gamified learning, simplified constitutional content, and interactive experiences, we spark curiosity and action among the next generation of Kenyan citizens.
        </p>

        <div className="mt-10 border-t border-emerald-200 pt-6">
          <h2 className="text-xl font-semibold text-emerald-600 mb-2">Our Mission</h2>
          <p className="text-neutral-700">
            To make civic education playful, powerful, and personal for every young Kenyan.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600 mt-8 mb-2">Our Vision</h2>
          <p className="text-neutral-700">
            A generation that understands its rights, voices its power, and shapes a better Kenya—together.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
