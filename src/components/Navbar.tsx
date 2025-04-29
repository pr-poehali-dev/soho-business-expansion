
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#1A1F2C]">
              СОХО
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#9b87f5] transition-colors">
              Главная
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#9b87f5] transition-colors">
              О компании
            </Link>
            <Link to="/catalog" className="text-gray-700 hover:text-[#9b87f5] transition-colors">
              Каталог
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-[#9b87f5] transition-colors">
              Услуги
            </Link>
            <Link to="/contacts" className="text-gray-700 hover:text-[#9b87f5] transition-colors">
              Контакты
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center">
            <div className="mr-4">
              <p className="text-sm text-gray-500">Свяжитесь с нами:</p>
              <p className="text-[#1A1F2C] font-semibold">8 (4012) 33-55-77</p>
            </div>
            <Button size="sm" className="bg-[#9b87f5] hover:bg-[#7E69AB]">
              <Phone className="w-4 h-4 mr-2" />
              Заказать звонок
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#9b87f5] transition-colors p-2"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-[#9b87f5] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-[#9b87f5] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              О компании
            </Link>
            <Link 
              to="/catalog" 
              className="text-gray-700 hover:text-[#9b87f5] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Каталог
            </Link>
            <Link 
              to="/services" 
              className="text-gray-700 hover:text-[#9b87f5] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </Link>
            <Link 
              to="/contacts" 
              className="text-gray-700 hover:text-[#9b87f5] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Button size="sm" className="bg-[#9b87f5] hover:bg-[#7E69AB] w-full">
              <Phone className="w-4 h-4 mr-2" />
              Заказать звонок
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
