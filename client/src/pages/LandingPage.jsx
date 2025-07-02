import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Trophy, Globe, Star, ArrowRight, Play, Award } from 'lucide-react';
import Button from '../components/Button';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50 text-neutral-800">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <span className="inline-block mb-4 bg-primary-green/10 text-primary-green font-semibold px-4 py-1 rounded-full">🇰🇪 Made for Kenyan Students</span>
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
            Learn Your <span className="text-primary-green">Constitution</span>
            <br />
            Through <span className="text-primary-red">Fun Games</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Discover your rights, understand government, and become an informed citizen through interactive games,
            quizzes, and simplified constitutional content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/learn">
                <Button size="lg" className="bg-primary-green hover:bg-primary-green/90">
                    <Play className="w-5 h-5 mr-2" />
                    Start Learning
                </Button>
            </Link>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-green mb-2">50+</div>
              <div className="text-neutral-600">Constitution Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-red mb-2">200+</div>
              <div className="text-neutral-600">Interactive Quizzes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-yellow mb-2">47</div>
              <div className="text-neutral-600">County Information</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-black mb-2">2</div>
              <div className="text-neutral-600">Languages Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Why Choose Gen Informed?</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We make civic education fun, accessible, and relevant to your daily life as a young Kenyan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card */}
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-transparent hover:border-primary-green/50 transition-colors">
                <div className="w-12 h-12 bg-primary-green/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Simplified Constitution</h3>
                <p className="text-neutral-600">
                  Complex legal language made simple and easy to understand for students
                </p>
            </div>

            {/* Feature Card */}
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-transparent hover:border-primary-red/50 transition-colors">
                <div className="w-12 h-12 bg-primary-red/10 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-primary-red" />
                </div>
                <h3 className="text-xl font-bold mb-2">Gamified Learning</h3>
                <p className="text-neutral-600">
                  Earn badges, compete with friends, and track your progress through fun challenges
                </p>
            </div>
            
            {/* Feature Card */}
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-transparent hover:border-accent-yellow/50 transition-colors">
                <div className="w-12 h-12 bg-accent-yellow/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2">Bilingual Support</h3>
                <p className="text-neutral-600">
                  Learn in both English and Kiswahili to ensure everyone can participate
                </p>
            </div>

            {/* Feature Card */}
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-transparent hover:border-primary-black/50 transition-colors">
                <div className="w-12 h-12 bg-primary-black/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Interactive Tools</h3>
                <p className="text-neutral-600">
                  Virtual tools to explore your county, find relevant articles, and understand processes
                </p>
            </div>

            {/* Feature Card */}
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-transparent hover:border-primary-green/50 transition-colors">
                <div className="w-12 h-12 bg-primary-green/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Visual Learning</h3>
                <p className="text-neutral-600">Infographics, animations, and visual aids to make learning memorable</p>
            </div>

            {/* Feature Card */}
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-transparent hover:border-primary-red/50 transition-colors">
                <div className="w-12 h-12 bg-primary-red/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary-red" />
                </div>
                <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
                <p className="text-neutral-600">
                  Monitor your learning journey and celebrate achievements along the way
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-green to-primary-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Become an Informed Citizen?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of Kenyan students already learning about their constitution and rights.
          </p>
          <Link to="/learn">
            <Button size="lg" className="bg-white text-primary-green hover:bg-neutral-100">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>


    </div>
  );
}
