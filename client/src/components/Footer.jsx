import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-200 text-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-green to-primary-red rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-gray-900" />
              </div>
              <span className="font-bold">Elimisha Raia</span>
            </div>
            <p className="text-gray-800 text-md">
              Empowering Kenyan students with constitutional knowledge through gamified learning.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Learn</h4>
            <ul className="space-y-2 text-md text-gray-600">
              <li><Link to="/learn" className="hover:text-cyan-800 transition-colors">Constitution</Link></li>
              <li><Link to="/learn" className="hover:text-cyan-800 transition-colors">Your Rights</Link></li>
              <li><Link to="/learn" className="hover:text-cyan-800 transition-colors">Government</Link></li>
              <li><Link to="/learn" className="hover:text-cyan-800 transition-colors">Counties</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/quiz" className="hover:text-cyan-800 transition-colors">Quizzes</Link></li>
              <li><Link to="/quiz" className="hover:text-cyan-800 transition-colors">Games</Link></li>
              <li><Link to="/progress" className="hover:text-cyan-800 transition-colors">Progress</Link></li>
              <li><Link to="/progress" className="hover:text-cyan-800 transition-colors">Leaderboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-cyan-800 transition-colors">Help Center</Link></li>
              <li><Link to="/about" className="hover:text-cyan-800 transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-cyan-800 transition-colors">For Teachers</Link></li>
              <li><Link to="/about" className="hover:text-cyan-800 transition-colors">About</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-md text-gray">
          <p>Email: info@elimisharaia.ke</p>
          <p>© {new Date().getFullYear()} Elimisha Raia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
