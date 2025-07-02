import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-green to-primary-red rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold">Gen Informed</span>
            </div>
            <p className="text-neutral-400 text-sm">
              Empowering Kenyan students with constitutional knowledge through gamified learning.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link to="/learn" className="hover:text-white transition-colors">Constitution</Link></li>
              <li><Link to="/learn" className="hover:text-white transition-colors">Your Rights</Link></li>
              <li><Link to="/learn" className="hover:text-white transition-colors">Government</Link></li>
              <li><Link to="/learn" className="hover:text-white transition-colors">Counties</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link to="/quiz" className="hover:text-white transition-colors">Quizzes</Link></li>
              <li><Link to="/quiz" className="hover:text-white transition-colors">Games</Link></li>
              <li><Link to="/progress" className="hover:text-white transition-colors">Progress</Link></li>
              <li><Link to="/progress" className="hover:text-white transition-colors">Leaderboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link to="/about" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">For Teachers</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm text-neutral-400">
          <p>&copy; 2024 Gen Informed. Made with ❤ for Kenya 🇰🇪</p>
        </div>
      </div>
    </footer>
  );
}
