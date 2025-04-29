
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ShoppingBag, Home, Car } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Заголовок страницы */}
        <section className="bg-gradient-to-br from-[#1A1F2C] to-[#6E59A5] py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">О компании</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
              Узнайте больше о Группе Компаний СОХО, нашей истории, ценностях и направлениях бизнеса
            </p>
          </div>
        </section>

        {/* История компании */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1A1F2C] mb-6">История компании</h2>
                <p className="text-gray-700 mb-4">
                  Группа Компаний СОХО – это динамично развивающийся многопрофильный холдинг, объединяющий предприятия в сфере розничной торговли, сервиса и сопутствующих услуг.
                </p>
                <p className="text-gray-700 mb-4">
                  Основанная в 1998 году в Калининграде предпринимателями Ильей Мирочником и Ильей Круковером, компания прошла путь от небольшого магазина техники до крупной региональной сети с диверсифицированными направлениями бизнеса.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
                    alt="Офис компании СОХО" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ключевые показатели */}
        <section className="py-16 bg-[#F1F0FB]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#1A1F2C] mb-12">Ключевые показатели</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center hover-scale">
                <div className="flex justify-center items-center bg-[#9b87f5]/10 w-16 h-16 rounded-full mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#9b87f5]">27</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">лет на рынке</h3>
                <p className="text-gray-600">Основана в 1998 году</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center hover-scale">
                <div className="flex justify-center items-center bg-[#9b87f5]/10 w-16 h-16 rounded-full mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#9b87f5]">18</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">магазинов</h3>
                <p className="text-gray-600">В Калининградской области</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center hover-scale">
                <div className="flex justify-center items-center bg-[#9b87f5]/10 w-16 h-16 rounded-full mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#9b87f5]">200+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">сотрудников</h3>
                <p className="text-gray-600">В дружной команде</p>
              </div>
            </div>
          </div>
        </section>

        {/* Направления бизнеса */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#1A1F2C] mb-12">Основные направления бизнеса</h2>
            
            <div className="space-y-12">
              <div className="bg-[#E5DEFF] p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-[#9b87f5] p-3 rounded-full mr-4">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1A1F2C]">Розничная торговля бытовой техникой и электроникой</h3>
                </div>
                <div className="pl-16 space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#9b87f5] mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Интернет-магазин coxo.ru с широким ассортиментом и удобной доставкой.</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#9b87f5] mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">18 розничных магазинов в Калининграде и области, предлагающих технику ведущих мировых брендов.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#FDE1D3] p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-[#9b87f5] p-3 rounded-full mr-4">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1A1F2C]">Продажа товаров для дома</h3>
                </div>
                <div className="pl-16 space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#9b87f5] mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Сеть магазинов «Домашний» — посуда, кухонные принадлежности, текстиль и предметы интерьера.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#F2FCE2] p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-[#9b87f5] p-3 rounded-full mr-4">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1A1F2C]">Автотовары и сервис</h3>
                </div>
                <div className="pl-16 space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#9b87f5] mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Шиномонтажный центр «Иванор» — продажа шин, дисков, автоаксессуаров и сопутствующих услуг.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Миссия и цели */}
        <section className="py-16 bg-[#1A1F2C] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Миссия компании</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90">
              Мы стремимся улучшать качество жизни наших клиентов, предлагая современные технологические решения и высокий уровень сервиса.
            </p>
            <Separator className="bg-white/20 my-8 max-w-md mx-auto" />
            <div className="mt-8">
              <Badge variant="outline" className="text-white border-white/30 py-1.5 px-4 text-sm">С 1998 года</Badge>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
