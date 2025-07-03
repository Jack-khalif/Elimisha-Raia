import { Link, NavLink } from 'react-router-dom';
const Header = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Learn', path: '/learn' },
    { name: 'Play', path: '/play' },
    { name: 'Historicals', path: '/historicals' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50  transition-shadow duration-300 hover:shadow-xl ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl text-shadow-emerald-400 text-emerald-700 font-bold tracking-tight">
          Elimisha Raia
        </Link>
        <nav className="flex gap-6 items-center font-serif">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `inline-flex items-center rounded-full px-4 py-2 font-semibold transition-all duration-200 
                 ${
                   isActive
                     ? 'bg-indigo-200 text-teal-600 shadow-md'
                     : 'text-emerald-600'
                 }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
