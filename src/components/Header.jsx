import { Link } from "react-router-dom";

const Header = () => {

    const logo = new URL('../assets/logo.png', import.meta.url).href;
    
  return (
    <header className="w-full bg-white shadow-lg border-b-2 border-amber-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="logo flex items-center">
            <img 
              width={60} 
              height={60} 
              src={logo} 
              alt="Cuisinity Logo" 
              className="object-contain mr-3"
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200">
              Home
            </Link>
            <Link to="/restaurants" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200">
              Restaurants
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200">
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
              Sign In
            </button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 hidden sm:block">
              Cart (0)
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400 hover:text-amber-600 hover:border-amber-600">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
