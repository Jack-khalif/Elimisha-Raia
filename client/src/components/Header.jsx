import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import Button from './Button';

export default function Header() {
  return (
    <header className="border-b bg-emerald-200/70 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-green to-primary-red rounded-lg flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-emerald-900" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-neutral-900">Elimisha Raia</h1>
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/learn" className="text-neutral-600 font-semibold text-lg hover:text-emerald-900 transition-colors">
            Learn
          </Link>
          <Link to="/quiz" className="text-neutral-600 font-semibold text-lg hover:text-emerald-900 transition-colors">
            Quiz
          </Link>
          <Link to="/progress" className="text-neutral-600 font-semibold text-lg hover:text-emerald-900 transition-colors">
            Progress
          </Link>
          <Link to="/about" className="text-neutral-600 font-semibold text-lg hover:text-emerald-900 transition-colors">
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm" className="bg-emerald-900 hover:bg-emerald-700">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
