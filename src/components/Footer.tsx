
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4">О СОХО</h3>
            <p className="text-gray-300 mb-4">
              Динамично развивающийся многопрофильный холдинг в сфере розничной торговли, сервиса и сопутствующих услуг.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#9b87f5] transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-[#9b87f5] transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-white hover:text-[#9b87f5] transition-colors">
                <Youtube />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 text-[#9b87f5]" />
                <span>8 (4012) 33-55-77</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 text-[#9b87f5]" />
                <span>info@coxo.ru</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-[#9b87f5]" />
                <span>г. Калининград, ул. Театральная, 35</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Магазины</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#9b87f5] transition-colors">СОХО электро</a></li>
              <li><a href="#" className="hover:text-[#9b87f5] transition-colors">Домашний</a></li>
              <li><a href="#" className="hover:text-[#9b87f5] transition-colors">Иванор</a></li>
              <li><a href="#" className="hover:text-[#9b87f5] transition-colors">Все магазины</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#9b87f5] transition-colors">О компании</a></li>
              <li><a href="#" className="hover:text-[#9b87f5] transition-colors">Вакансии</a></li>
              <li><a href="#" className="hover:text-[#9b87f5] transition-colors">Сервисный центр</a></li>
              <li><a href="#" className="hover:text-[#9b87f5] transition-colors">Контакты</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
          <p>© 1998-2025 Группа Компаний СОХО. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
