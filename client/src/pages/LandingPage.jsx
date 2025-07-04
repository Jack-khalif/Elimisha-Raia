import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

export default function LandingPage() {
  return (
    <div className="min-h-screen font-serif bg-gradient-to-br from-emerald-50 via-white to-red-50 text-neutral-800 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-10 bg-[url('https://i0.wp.com/act.or.ke/wp-content/uploads/2022/06/6.jpg?resize=1024%2C683&ssl=1')] bg-cover bg-center text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-emerald-100/90 backdrop-blur-sm z-0" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-xl font-bold leading-tight text-neutral-900 mb-6 drop-shadow-md">
            Play. Learn. Know <span className="text-emerald-600">Your Constitution</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            Become an informed citizen through interactive games, challenges, and simplified knowledge—crafted just for the youth of Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/learn">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Play className="w-5 h-5 mr-2" />
                Start Playing
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-gray-700 border-emerald-600 hover:bg-emerald-100">
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Animated Stats */}
      <section className="py-20 bg-white">
        <motion.div 
          className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {},
          }}
        >
          {[
            { number: '50+', label: 'Constitution Articles' },
            { number: '200+', label: 'Interactive Quizzes' },
            { number: '47', label: 'Counties Covered' },
            { number: '2', label: 'Languages: 🇬🇧 / 🇰🇪' },
          ].map(({ number, label }, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-emerald-600 mb-2">{number}</div>
              <div className="text-neutral-600 text-lg">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-10 bg-gradient-to-r from-emerald-600 to-emerald-400 text-white text-center">
        <motion.div 
          className="container mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Play, Learn & Transform?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of Kenyan youth making civic education exciting and accessible through gameplay.
          </p>
          <Link to="/learn">
            <Button size="lg" className="bg-emerald-400 text-gray-900 hover:bg-emerald-200">
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
