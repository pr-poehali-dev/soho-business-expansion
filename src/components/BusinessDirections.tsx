
import { Tv, Home, Car } from "lucide-react";

const BusinessDirections = () => {
  return (
    <section className="py-16 bg-[#F6F6F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1A1F2C]">
          Основные направления бизнеса
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Мы развиваем несколько ключевых направлений, предлагая нашим клиентам широкий спектр товаров и услуг
        </p>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-[#9b87f5]/10 flex items-center justify-center">
              <Tv className="w-20 h-20 text-[#9b87f5]" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1A1F2C]">Бытовая техника и электроника</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2">✓</span>
                  <span>Интернет-магазин coxo.ru с широким ассортиментом</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2">✓</span>
                  <span>18 розничных магазинов в Калининграде и области</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2">✓</span>
                  <span>Техника ведущих мировых брендов</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-[#9b87f5]/10 flex items-center justify-center">
              <Home className="w-20 h-20 text-[#9b87f5]" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1A1F2C]">Товары для дома</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2">✓</span>
                  <span>Сеть магазинов «Домашний»</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2">✓</span>
                  <span>Посуда и кухонные принадлежности</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2">✓</span>
                  <span>Текстиль и предметы интерьера</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-[#9b87f5]/10 flex items-center justify-center">
              <Car className="w-20 h-20 text-[#9b87f5]" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1A1F2C]">Автотовары и сервис</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2">✓</span>
                  <span>Шиномонтажный центр «Иванор»</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2">✓</span>
                  <span>Продажа шин, дисков и автоаксессуаров</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2">✓</span>
                  <span>Сопутствующие автомобильные услуги</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessDirections;
