const Footer = () => {
    return (
      <footer className="bg-gray-100 border-t mt-10">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-600">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">About GenInformed</h4>
            <p>
              A civic education platform for learning the Kenya Constitution through interactive tools, quizzes, and visuals.
            </p>
          </div>
  
          <div>
            <ul className="space-y-1">
              <li><a href="/learn" className="hover:text-blue-600">Learn</a></li>
              <li><a href="/play" className="hover:text-teal-600">Play</a></li>
              <li><a href="/historicals" className="hover:text-teal-600">Historicals</a></li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Contact</h4>
            <p>Email: info@geninformed.ke</p>
            <p>© {new Date().getFullYear()} GenInformed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  