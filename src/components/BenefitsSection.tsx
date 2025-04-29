
import { Check, Shield, HeadphonesIcon, Truck, CreditCard } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#1A1F2C]">
          Преимущества «СОХО»
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-start p-6 rounded-lg border border-gray-100 hover:bg-[#F2FCE2] transition-colors duration-300">
            <div className="mr-4 bg-[#9b87f5] p-3 rounded-full">
              <Check className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">Широкий ассортимент</h3>
              <p className="text-gray-600">От бюджетных до премиальных брендов</p>
            </div>
          </div>
          
          <div className="flex items-start p-6 rounded-lg border border-gray-100 hover:bg-[#E5DEFF] transition-colors duration-300">
            <div className="mr-4 bg-[#9b87f5] p-3 rounded-full">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">Доступные цены</h3>
              <p className="text-gray-600">Благодаря прямым поставкам от производителей</p>
            </div>
          </div>
          
          <div className="flex items-start p-6 rounded-lg border border-gray-100 hover:bg-[#FDE1D3] transition-colors duration-300">
            <div className="mr-4 bg-[#9b87f5] p-3 rounded-full">
              <HeadphonesIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">Профессиональные консультации</h3>
              <p className="text-gray-600">Помощь в выборе техники и аксессуаров</p>
            </div>
          </div>
          
          <div className="flex items-start p-6 rounded-lg border border-gray-100 hover:bg-[#FFDEE2] transition-colors duration-300">
            <div className="mr-4 bg-[#9b87f5] p-3 rounded-full">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">Собственный сервисный центр</h3>
              <p className="text-gray-600">Гарантийное и постгарантийное обслуживание</p>
            </div>
          </div>
          
          <div className="flex items-start p-6 rounded-lg border border-gray-100 hover:bg-[#D3E4FD] transition-colors duration-300">
            <div className="mr-4 bg-[#9b87f5] p-3 rounded-full">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">Удобные условия покупки</h3>
              <p className="text-gray-600">Кредит, рассрочка, trade-in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
