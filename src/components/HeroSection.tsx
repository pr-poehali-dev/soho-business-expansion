
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[90vh] bg-gradient-to-br from-[#1A1F2C] to-[#6E59A5] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center animate-fade-in">
          Группа Компаний СОХО
        </h1>
        <p className="text-xl md:text-2xl text-white/90 text-center max-w-3xl mb-10 animate-fade-in" style={{animationDelay: "0.2s"}}>
          Многопрофильный холдинг в сфере розничной торговли, сервиса и сопутствующих услуг
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
          <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
            Наши магазины
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            О компании
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A1F2C] to-transparent h-20"></div>
    </div>
  );
};

export default HeroSection;
