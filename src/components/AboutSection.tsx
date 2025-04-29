
import { CalendarDays, Users, ShoppingBag } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1A1F2C]">
          Наша история успеха
        </h2>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-700 mb-6">
            Группа Компаний СОХО – это динамично развивающийся многопрофильный холдинг, объединяющий предприятия в сфере розничной торговли, сервиса и сопутствующих услуг. Основанная в 1998 году в Калининграде предпринимателями Ильей Мирочником и Ильей Круковером, компания прошла путь от небольшого магазина техники до крупной региональной сети с диверсифицированными направлениями бизнеса.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-[#F2FCE2] rounded-lg p-8 transform transition duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-[#9b87f5] rounded-full flex items-center justify-center mx-auto mb-4">
              <CalendarDays className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">27 лет на рынке</h3>
            <p className="text-gray-600">Основана в 1998 году</p>
          </div>
          
          <div className="bg-[#E5DEFF] rounded-lg p-8 transform transition duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-[#9b87f5] rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">18 магазинов</h3>
            <p className="text-gray-600">В Калининградской области</p>
          </div>
          
          <div className="bg-[#FFDEE2] rounded-lg p-8 transform transition duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-[#9b87f5] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">200+ сотрудников</h3>
            <p className="text-gray-600">В нашей команде</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
