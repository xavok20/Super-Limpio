import { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Sparkles, 
  Sofa, 
  Car, 
  Bed, 
  Armchair,
  Menu,
  X,
  Instagram,
  Facebook,
  Star,
  Shield,
  Droplets,
  Award,
  Mail,
  TrendingUp,
  Users,
  ThumbsUp,
  Zap,
  ArrowRight,
  ChevronDown,
  Wind
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Logo } from '@/components/Logo';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [counters, setCounters] = useState({ years: 0, clients: 0, satisfaction: 0 });
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Reveal animations
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });

      // Stats counter animation
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && !statsVisible) {
          setStatsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [statsVisible]);

  // Counter animation
  useEffect(() => {
    if (statsVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setCounters({
          years: Math.round(15 * easeOut),
          clients: Math.round(5000 * easeOut),
          satisfaction: Math.round(98 * easeOut)
        });
        
        if (step >= steps) clearInterval(timer);
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [statsVisible]);

  // Auto-rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Lavado de Alfombras",
      description: "Lavado industrial con extracción de suciedad y ácaros. Restauramos colores y eliminamos manchas profundas.",
      features: ["Extracción de suciedad", "Eliminación de ácaros", "Secado rápido"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Sofa className="w-10 h-10" />,
      title: "Limpieza de Muebles",
      description: "Limpieza profunda de tapicería, desmanchado y desodorización. Tus muebles como nuevos.",
      features: ["Tapicería delicada", "Desmanchado", "Desodorización"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Bed className="w-10 h-10" />,
      title: "Desinfección de Colchones",
      description: "Desinfección anti-ácaros y eliminación de manchas orgánicas para un descanso saludable.",
      features: ["Anti-ácaros", "Desinfección UV", "Eliminación de olores"],
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: <Car className="w-10 h-10" />,
      title: "Tapicería de Vehículos",
      description: "Detallado completo: asientos, techo, piso, cajuela y tablero. Interior impecable.",
      features: ["Asientos y tapetes", "Techo y tablero", "Aromatización"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Armchair className="w-10 h-10" />,
      title: "Sillas de Comedor/Oficina",
      description: "Lavado de textiles en sillas operativas o domésticas con cuidado especial.",
      features: ["Textiles delicados", "Cuero y tela", "Protección anti-manchas"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Wind className="w-10 h-10" />,
      title: "Cortinas y Persianas",
      description: "Desmontaje, lavado, planchado e instalación. Todo tipo de telas y sistemas.",
      features: ["Desmontaje cuidadoso", "Lavado especializado", "Instalación incluida"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "15 Años de Experiencia",
      description: "Empresa familiar ecuatoriana con trayectoria comprobada en el sector."
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Insumos Biodegradables",
      description: "Productos eco-amigables, seguros para tu familia y mascotas."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Garantía de Satisfacción",
      description: "Si no estás conforme, rectificamos sin costo dentro de 24 horas."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Secado Rápido",
      description: "Tiempos de secado de 4 a 6 horas con nuestra tecnología avanzada."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personal de Confianza",
      description: "Técnicos expertos con capacitación continua y supervisión."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Facturación y Contratos",
      description: "Operamos con estándares legales, factura electrónica incluida."
    }
  ];

  const testimonials = [
    {
      name: "María González",
      text: "Excelente servicio, dejaron mi sala como nueva. Muy profesionales y puntuales.",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      text: "Llevo 3 años contratándolos para mis alfombras. Siempre impecables.",
      rating: 5
    },
    {
      name: "Ana Lucía Vásquez",
      text: "Mi colchón quedó sin olores y súper fresco. Recomendados al 100%.",
      rating: 5
    }
  ];

  const processSteps = [
    { 
      step: "01", 
      title: "Contacto", 
      description: "Escríbenos por WhatsApp o llámanos para cotizar",
      icon: <MessageCircle className="w-6 h-6" />
    },
    { 
      step: "02", 
      title: "Evaluación", 
      description: "Evaluamos en sitio el estado y tipo de servicio",
      icon: <SearchIcon />
    },
    { 
      step: "03", 
      title: "Cotización", 
      description: "Recibes presupuesto claro sin compromiso",
      icon: <CheckCircle className="w-6 h-6" />
    },
    { 
      step: "04", 
      title: "Servicio", 
      description: "Ejecutamos la limpieza con equipos profesionales",
      icon: <Sparkles className="w-6 h-6" />
    },
    { 
      step: "05", 
      title: "Resultado", 
      description: "Disfruta tus espacios renovados y frescos",
      icon: <ThumbsUp className="w-6 h-6" />
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection('inicio')}>
              <div className="relative">
                <div className="bg-white p-2 rounded-xl shadow-lg group-hover:shadow-blue-500/30 transition-shadow">
                  <Logo size={36} />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00C853] rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-[#212121]' : 'text-white'}`}>
                  Super Limpio
                </span>
                <p className={`text-xs transition-colors ${isScrolled ? 'text-gray-500' : 'text-white/70'}`}>
                  15 años de experiencia
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'servicios', label: 'Servicios' },
                { id: 'nosotros', label: 'Nosotros' },
                { id: 'proceso', label: 'Proceso' },
                { id: 'contacto', label: 'Contacto' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className={`nav-link font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#007BFF]' : 'text-white/90 hover:text-white'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a 
                href="tel:+593984459261" 
                className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/593984459261" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-[#00C853] hover:bg-[#00a344] text-white rounded-full px-6 btn-shine">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 top-0 bg-white z-40 mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="p-6 pt-20 space-y-4">
            {[
              { id: 'inicio', label: 'Inicio' },
              { id: 'servicios', label: 'Servicios' },
              { id: 'nosotros', label: 'Nosotros' },
              { id: 'proceso', label: 'Proceso' },
              { id: 'contacto', label: 'Contacto' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className="block w-full text-left py-3 text-xl font-medium text-gray-800 border-b border-gray-100"
              >
                {item.label}
              </button>
            ))}
            <a 
              href="https://wa.me/593984459261" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full pt-4"
            >
              <Button className="w-full bg-[#00C853] hover:bg-[#00a344] text-white rounded-full py-6 text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Cotizar por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-brand">
          <div className="absolute inset-0 bg-gradient-mesh"></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="blob blob-blue w-96 h-96 -top-20 -left-20 animate-float"></div>
            <div className="blob blob-green w-80 h-80 top-1/3 right-0 animate-float-reverse"></div>
            <div className="blob blob-blue w-64 h-64 bottom-0 left-1/3 animate-float-delayed"></div>
            
            {/* Sparkle particles */}
            {[...Array(8)].map((_, i) => (
              <Sparkles 
                key={i}
                className="absolute text-white/20 animate-float"
                style={{
                  width: `${20 + Math.random() * 30}px`,
                  height: `${20 + Math.random() * 30}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${4 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="text-center lg:text-left">
              <div className="hero-text-reveal">
                <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2">
                  <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                  Más de 15 años de experiencia en Quito
                </Badge>
              </div>
              
              <h1 className="hero-text-reveal text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Devolvemos la
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00C853] to-[#7EE787]">
                  frescura a tu hogar
                </span>
              </h1>
              
              <p className="hero-text-reveal text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0">
                Especialistas en limpieza profunda de alfombras, muebles, colchones y tapicería de vehículos en Quito. 
                Tecnología avanzada y productos biodegradables.
              </p>

              <div className="hero-text-reveal flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="https://wa.me/593984459261" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-[#00C853] hover:bg-[#00a344] text-white rounded-full px-8 text-lg btn-shine shadow-lg shadow-green-500/30">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Cotizar Gratis
                  </Button>
                </a>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-[#007BFF] rounded-full px-8 text-lg"
                  onClick={() => scrollToSection('servicios')}
                >
                  Ver Servicios
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Trust badges */}
              <div className="hero-text-reveal mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                {[
                  { icon: <Shield className="w-4 h-4" />, text: "Garantía" },
                  { icon: <CheckCircle className="w-4 h-4" />, text: "Facturación" },
                  { icon: <Clock className="w-4 h-4" />, text: "Puntualidad" }
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-white">{badge.icon}</span>
                    <span className="text-white/90 text-sm">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Stats Card */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-white/10 rounded-2xl">
                      <div className="text-4xl font-bold text-white mb-1">15+</div>
                      <div className="text-white/70 text-sm">Años de experiencia</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-2xl">
                      <div className="text-4xl font-bold text-white mb-1">5K+</div>
                      <div className="text-white/70 text-sm">Clientes satisfechos</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-2xl">
                      <div className="text-4xl font-bold text-[#00C853] mb-1">98%</div>
                      <div className="text-white/70 text-sm">Satisfacción</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-2xl">
                      <div className="text-4xl font-bold text-white mb-1">4-6h</div>
                      <div className="text-white/70 text-sm">Tiempo de secado</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#00C853] rounded-2xl p-4 shadow-xl animate-bounce-soft">
                  <div className="flex items-center gap-3">
                    <ThumbsUp className="w-8 h-8 text-white" />
                    <div>
                      <div className="text-white font-bold">100%</div>
                      <div className="text-white/80 text-xs">Garantizado</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('servicios')} className="text-white/70 hover:text-white transition-colors">
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#007BFF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00C853]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 reveal">
            <Badge className="mb-4 bg-[#007BFF]/10 text-[#007BFF] border-[#007BFF]/20">
              Nuestros Servicios
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-[#212121] mb-4">
              ¿Qué limpiamos por ti?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ofrecemos servicios profesionales de limpieza para todo tipo de superficies textiles. 
              Todos incluyen mano de obra especializada, maquinaria industrial e insumos biodegradables.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`service-card card-hover border-0 shadow-lg overflow-hidden cursor-pointer transition-all duration-500 reveal stagger-${index + 1} ${activeService === index ? 'ring-2 ring-[#007BFF]' : ''}`}
                onClick={() => setActiveService(index)}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#212121] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-5 text-sm leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#00C853] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center reveal">
            <p className="text-gray-600 mb-4">¿Necesitas un servicio personalizado?</p>
            <a 
              href="https://wa.me/593984459261" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-gradient-brand hover:opacity-90 text-white rounded-full px-8 btn-shine">
                <Phone className="w-5 h-5 mr-2" />
                Solicitar Cotización
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gradient-brand relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: counters.years, suffix: "+", label: "Años de experiencia" },
              { value: counters.clients, suffix: "+", label: "Clientes satisfechos" },
              { value: counters.satisfaction, suffix: "%", label: "Satisfacción" },
              { value: 6, suffix: "h", label: "Secado máximo" }
            ].map((stat, index) => (
              <div key={index} className="text-center reveal stagger-${index + 1}">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="reveal">
              <Badge className="mb-4 bg-[#00C853]/10 text-[#00C853] border-[#00C853]/20">
                ¿Por qué elegirnos?
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-[#212121] mb-6">
                La diferencia
                <span className="text-gradient"> Super Limpio</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Somos una empresa familiar ecuatoriana con más de 15 años de trayectoria. 
                Nos diferenciamos por combinar la experiencia técnica artesanal con una 
                gestión logística eficiente y garantías legales sólidas.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors reveal-left stagger-${index + 1}">
                    <div className="bg-gradient-brand p-3 rounded-xl h-fit">
                      <div className="text-white">{benefit.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#212121] mb-1">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image/Visual */}
            <div className="relative reveal-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-[#007BFF] to-[#00C853] flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="relative inline-block mb-6">
                      <div className="bg-white/20 p-6 rounded-3xl backdrop-blur-sm">
                        <Logo size={80} className="animate-pulse-glow" />
                      </div>
                      <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Calidad Garantizada</h3>
                    <p className="text-white/80 mb-6">Tu satisfacción es nuestra prioridad número uno</p>
                    
                    {/* Feature list */}
                    <div className="space-y-3 text-left max-w-xs mx-auto">
                      {[
                        "Personal de confianza",
                        "Equipos industriales",
                        "Productos biodegradables",
                        "Garantía de satisfacción"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#00C853]" />
                          <span className="text-white/90">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 reveal-scale">
                <div className="flex items-center gap-4">
                  <div className="bg-[#00C853]/10 p-3 rounded-xl">
                    <Shield className="w-8 h-8 text-[#00C853]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#212121]">100%</div>
                    <div className="text-gray-500 text-sm">Garantizado</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-5 reveal-scale stagger-2">
                <div className="flex items-center gap-4">
                  <div className="bg-[#007BFF]/10 p-3 rounded-xl">
                    <Users className="w-8 h-8 text-[#007BFF]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#212121]">15+</div>
                    <div className="text-gray-500 text-sm">Años exp.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#007BFF]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 reveal">
            <Badge className="mb-4 bg-[#007BFF]/10 text-[#007BFF] border-[#007BFF]/20">
              Nuestro Proceso
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-[#212121] mb-4">
              ¿Cómo trabajamos?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Un proceso simple y eficiente para brindarte el mejor servicio de limpieza.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((item, index) => (
              <div key={index} className="relative reveal stagger-${index + 1}">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full card-lift">
                  <div className="w-14 h-14 bg-gradient-brand rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white text-xl font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#212121] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                
                {/* Connector arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-[#007BFF]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <Badge className="mb-4 bg-yellow-100 text-yellow-700 border-yellow-200">
              Testimonios
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-[#212121] mb-4">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card border-0 shadow-lg reveal stagger-${index + 1}">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-brand rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="font-medium text-[#212121]">{testimonial.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <div className="reveal">
              <Badge className="mb-4 bg-[#007BFF]/10 text-[#007BFF] border-[#007BFF]/20">
                Contacto
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-[#212121] mb-6">
                ¿Listo para renovar tus espacios?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Contáctanos hoy mismo y recibe una cotización personalizada. 
                Atendemos Quito y sus alrededores.
              </p>

              <div className="space-y-5">
                <a 
                  href="https://wa.me/593984459261" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="bg-[#00C853]/10 p-3 rounded-xl group-hover:bg-[#00C853]/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-[#00C853]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p className="text-lg font-semibold text-[#212121] group-hover:text-[#00C853] transition-colors">
                      098 445 9261
                    </p>
                  </div>
                </a>

                <a 
                  href="tel:+593987406018"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="bg-[#007BFF]/10 p-3 rounded-xl group-hover:bg-[#007BFF]/20 transition-colors">
                    <Phone className="w-6 h-6 text-[#007BFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Teléfono</p>
                    <p className="text-lg font-semibold text-[#212121] group-hover:text-[#007BFF] transition-colors">
                      098 740 6018 / 022 350 944
                    </p>
                  </div>
                </a>

                <a 
                  href="mailto:info@super-limpio.com"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="bg-purple-100 p-3 rounded-xl group-hover:bg-purple-200 transition-colors">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-lg font-semibold text-[#212121] group-hover:text-purple-600 transition-colors">
                      info@super-limpio.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Horario</p>
                    <p className="text-lg font-semibold text-[#212121]">
                      Lunes - Sábado: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="bg-pink-100 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Ubicación</p>
                    <p className="text-lg font-semibold text-[#212121]">
                      Quito - Ecuador (Servicio a domicilio)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <p className="text-gray-600 mb-4">Síguenos en redes sociales</p>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-3 rounded-xl text-white"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon bg-blue-600 p-3 rounded-xl text-white"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://wa.me/593984459261" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon bg-[#00C853] p-3 rounded-xl text-white"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right - CTA Card */}
            <div className="flex items-center reveal-right">
              <Card className="w-full border-0 shadow-2xl overflow-hidden">
                <div className="bg-gradient-brand p-8 text-center text-white relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  
                  <div className="mx-auto mb-4 relative z-10 bg-white/20 p-4 rounded-2xl backdrop-blur-sm inline-block">
                    <Logo size={56} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 relative z-10">¡Cotiza Gratis!</h3>
                  <p className="text-white/80 mb-6 relative z-10">
                    Sin compromiso. Evaluamos en sitio y te damos el mejor precio.
                  </p>
                  <a 
                    href="https://wa.me/593984459261" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block relative z-10"
                  >
                    <Button size="lg" className="bg-white text-[#007BFF] hover:bg-gray-100 rounded-full px-8 btn-shine">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Escribir por WhatsApp
                    </Button>
                  </a>
                </div>
                <CardContent className="p-8">
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">También puedes llamarnos directamente</p>
                    <a 
                      href="tel:+593984459261"
                      className="inline-flex items-center gap-2 text-xl font-bold text-[#212121] hover:text-[#007BFF] transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      098 445 9261
                    </a>
                  </div>
                  
                  {/* Trust indicators */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex justify-center gap-6 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-[#00C853]" />
                        Facturación
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-[#00C853]" />
                        Garantía
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-[#00C853]" />
                        Puntualidad
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#212121] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-2 rounded-xl">
                  <Logo size={40} />
                </div>
                <div>
                  <span className="text-2xl font-bold">Super Limpio</span>
                  <p className="text-white/50 text-xs">15 años de experiencia</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Especialistas en limpieza profesional de alfombras, muebles, colchones e interiores de vehículos. 
                Empresa familiar ecuatoriana con más de 15 años de trayectoria.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors social-icon"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors social-icon"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/593984459261" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#00C853] p-2 rounded-lg hover:bg-[#00a344] transition-colors social-icon"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('inicio')} className="text-gray-400 hover:text-white transition-colors">Inicio</button></li>
                <li><button onClick={() => scrollToSection('servicios')} className="text-gray-400 hover:text-white transition-colors">Servicios</button></li>
                <li><button onClick={() => scrollToSection('nosotros')} className="text-gray-400 hover:text-white transition-colors">Nosotros</button></li>
                <li><button onClick={() => scrollToSection('contacto')} className="text-gray-400 hover:text-white transition-colors">Contacto</button></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Lavado de Alfombras</li>
                <li className="text-gray-400">Limpieza de Muebles</li>
                <li className="text-gray-400">Desinfección de Colchones</li>
                <li className="text-gray-400">Tapicería de Vehículos</li>
                <li className="text-gray-400">Cortinas y Persianas</li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Super Limpio. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              Quito - Ecuador | Empresa familiar con 15+ años de experiencia
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/593984459261" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#00C853] hover:bg-[#00a344] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-soft group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          ¡Escríbenos!
        </span>
      </a>
    </div>
  );
}

// Helper icon component
function SearchIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

export default App;
