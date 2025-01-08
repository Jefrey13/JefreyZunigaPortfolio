import { Button } from "./common/Button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-primary pt-20 relative overflow-hidden px-24">
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full animate-float">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 3 + 2}s infinite ease-in-out ${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Jefrey Antonio
            <span className="block">Zuniga Rivera</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mt-6 animate-fade-up [animation-delay:200ms]">
            Ingeniero en Sistemas especializado en desarrollo web y móvil
          </p>

          <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-up [animation-delay:400ms]">
            Especializado en tecnologías como React.js, ASP.NET Core y Spring Boot, 
            con experiencia en proyectos para sistemas de salud, compras, pedidos
            y gestión de inventarios.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-fade-up [animation-delay:600ms]">
            <Button className="border-2 border-white bg-transparent hover:bg-white hover:text-primary w-full sm:w-auto text-white transition-all duration-300">
              Ver Proyectos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-2 border-white bg-transparent hover:bg-white hover:text-primary w-full sm:w-auto text-white transition-all duration-300">
              Descargar CV
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;