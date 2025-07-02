import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import Button from './Button';

export default function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-green to-primary-red rounded-lg flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-neutral-900">Gen Informed</h1>
            <p className="text-xs text-neutral-600">Civic Learning Kenya</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/learn" className="text-neutral-600 hover:text-primary-green transition-colors">
            Learn
          </Link>
          <Link to="/quiz" className="text-neutral-600 hover:text-primary-green transition-colors">
            Quiz
          </Link>
          <Link to="/progress" className="text-neutral-600 hover:text-primary-green transition-colors">
            Progress
          </Link>
          <Link to="/about" className="text-neutral-600 hover:text-primary-green transition-colors">
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm" className="bg-primary-green hover:bg-primary-green/90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
