const Footer = () => {
    return (
      <footer className="bg-emerald-100 border-t mt-10 font-serif">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-600">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">About Elimisha Raia</h4>
            <p>
              A civic education platform for learning the Kenya Constitution through interactive tools, quizzes, and visuals.
            </p>
          </div>
  
          <div>
            <ul className="space-y-1 flex gap-6 justify-center   flex-wrap *:gap-2">
              <li><a href="/" className="hover:text-emerald-600">Home</a></li>
              <li><a href="/learn" className="hover:text-emerald-600">Learn</a></li>
              <li><a href="/play" className="hover:text-emerald-600">Play</a></li>
              <li><a href="/historicals" className="hover:text-emerald-600">Historicals</a></li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Contact</h4>
            <p>Email: info@elimisharaia.ke</p>
            <p>© {new Date().getFullYear()} Elimisha Raia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  