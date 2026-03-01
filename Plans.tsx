import { Link } from 'wouter';
import { Check, X, Star, Zap } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface Plan {
  nombre: string;
  precio: string;
  periodo: string;
  destacado: boolean;
  descripcion: string;
  caracteristicas: { incluido: boolean; texto: string }[];
  beneficios?: string[];
  nota?: string;
}

const planes: Plan[] = [
  {
    nombre: "CLIENTUM START",
    precio: "$720.000",
    periodo: "anual",
    destacado: false,
    descripcion: "Ideal para comenzar tu presencia digital",
    caracteristicas: [
      { incluido: true, texto: "Publicación destacada en resultados" },
      { incluido: true, texto: "Visualización en mapa" },
      { incluido: true, texto: "Banner rotativo en búsquedas" },
      { incluido: true, texto: "Ficha completa de empresa" },
      { incluido: true, texto: "Logo, fotos y video" },
      { incluido: true, texto: "Integración con Tienda CLIENTUM" },
      { incluido: false, texto: "Publicidad en Google Ads" },
      { incluido: true, texto: "75% OFF en sitio web institucional" },
      { incluido: true, texto: "Descuentos en email marketing" }
    ],
    beneficios: [
      "4 cuotas sin interés con débito automático",
      "10% descuento por pago anual"
    ]
  },
  {
    nombre: "CLIENTUM PRO",
    precio: "$900.000",
    periodo: "anual",
    destacado: true,
    descripcion: "Máxima visibilidad y resultados",
    caracteristicas: [
      { incluido: true, texto: "Todo lo del plan START" },
      { incluido: true, texto: "Banner destacado premium" },
      { incluido: true, texto: "Mayor visibilidad" },
      { incluido: true, texto: "Mejor posicionamiento" },
      { incluido: true, texto: "Google Ads - Publicidad en primeros resultados" },
      { incluido: true, texto: "Optimización continua" },
      { incluido: true, texto: "Reportes mensuales" },
      { incluido: true, texto: "100% OFF en sitio web institucional" },
      { incluido: true, texto: "Creación/optimización perfil Google" }
    ],
    beneficios: [
      "4 cuotas sin interés con débito automático",
      "10% descuento por pago anual",
      "Sitio web institucional GRATIS"
    ]
  },
  {
    nombre: "CLIENTUM PERFORMANCE",
    precio: "$200.000",
    periodo: "mensual",
    destacado: false,
    descripcion: "Publicidad avanzada con captación de leads",
    caracteristicas: [
      { incluido: true, texto: "Campañas de Google Ads optimizadas" },
      { incluido: true, texto: "Posicionamiento estratégico" },
      { incluido: true, texto: "Optimización constante" },
      { incluido: true, texto: "Landing page propia" },
      { incluido: true, texto: "Formularios integrados" },
      { incluido: true, texto: "Leads directos al CRM CLIENTUM" },
      { incluido: true, texto: "Reportes avanzados" },
      { incluido: true, texto: "Descuentos en email marketing" }
    ],
    beneficios: [
      "Inversión publicitaria no incluida",
      "Gestión profesional de campañas"
    ],
    nota: "Ideal para empresas que quieren escalar rápido"
  }
];

export default function Plans() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-white">
      <Navbar />
      <div className="bg-[#001529] text-white py-20 pt-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6" data-testid="text-page-title">Planes CLIENTUM</h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto" data-testid="text-hero-description">
            Soluciones flexibles adaptadas a PyMEs reales. Elegí el plan que mejor se adapte a tu negocio.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#002B5C] mb-6 text-center" data-testid="text-benefits-title">
            Todos los planes incluyen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-2" data-testid="benefit-1">
              <Check className="h-5 w-5 text-[#4A90E2]" />
              <span className="text-sm">4 cuotas sin interés con débito</span>
            </div>
            <div className="flex items-center gap-2" data-testid="benefit-2">
              <Check className="h-5 w-5 text-[#4A90E2]" />
              <span className="text-sm">10% descuento pago anual</span>
            </div>
            <div className="flex items-center gap-2" data-testid="benefit-3">
              <Check className="h-5 w-5 text-[#4A90E2]" />
              <span className="text-sm">Gestión profesional</span>
            </div>
            <div className="flex items-center gap-2" data-testid="benefit-4">
              <Check className="h-5 w-5 text-[#4A90E2]" />
              <span className="text-sm">Soporte continuo</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16" data-testid="grid-plans">
          {planes.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 ${
                plan.destacado
                  ? 'bg-gradient-to-br from-[#002B5C] to-[#4A90E2] text-white shadow-2xl transform scale-105'
                  : 'bg-white shadow-lg border border-gray-200'
              }`}
              data-testid={`card-plan-${index}`}
            >
              {plan.destacado && (
                <div className="flex items-center justify-center gap-2 mb-4" data-testid="badge-popular">
                  <Star className="h-5 w-5 text-yellow-300" />
                  <span className="text-sm font-semibold text-yellow-300">MÁS POPULAR</span>
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${plan.destacado ? 'text-white' : 'text-[#002B5C]'}`} data-testid={`text-plan-name-${index}`}>
                {plan.nombre}
              </h3>
              <p className={`text-sm mb-6 ${plan.destacado ? 'text-gray-200' : 'text-gray-600'}`} data-testid={`text-plan-description-${index}`}>
                {plan.descripcion}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold" data-testid={`text-plan-price-${index}`}>{plan.precio}</span>
                <span className={`text-sm ml-2 ${plan.destacado ? 'text-gray-200' : 'text-gray-600'}`}>
                  /{plan.periodo}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.caracteristicas.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" data-testid={`item-feature-${index}-${i}`}>
                    {item.incluido ? (
                      <Check className={`h-5 w-5 flex-shrink-0 ${plan.destacado ? 'text-green-300' : 'text-[#4A90E2]'}`} />
                    ) : (
                      <X className="h-5 w-5 flex-shrink-0 text-gray-400" />
                    )}
                    <span className={item.incluido ? '' : 'text-gray-400 line-through'}>
                      {item.texto}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.beneficios && (
                <div className={`border-t pt-4 mb-6 ${plan.destacado ? 'border-white/20' : 'border-gray-200'}`}>
                  {plan.beneficios.map((beneficio, i) => (
                    <p key={i} className="text-xs mb-1 flex items-center gap-1" data-testid={`text-benefit-${index}-${i}`}>
                      <Zap className="h-3 w-3" />
                      {beneficio}
                    </p>
                  ))}
                </div>
              )}

              {plan.nota && (
                <p className="text-xs italic mb-4 opacity-80" data-testid={`text-note-${index}`}>{plan.nota}</p>
              )}

              <Link
                href="/contacto"
                className={`block text-center py-3 px-6 rounded-md font-semibold transition-all ${
                  plan.destacado
                    ? 'bg-white text-[#002B5C] hover:bg-gray-100'
                    : 'bg-[#4A90E2] text-white hover:bg-[#357ABD]'
                }`}
                data-testid={`link-contract-${index}`}
              >
                Contratar ahora
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#002B5C] mb-6 text-center" data-testid="text-payment-methods-title">
            Formas de Pago
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="p-4" data-testid="payment-transfer">
              <p className="font-medium text-gray-700">Transferencia</p>
            </div>
            <div className="p-4" data-testid="payment-debit">
              <p className="font-medium text-gray-700">Débito automático</p>
            </div>
            <div className="p-4" data-testid="payment-mercadopago">
              <p className="font-medium text-gray-700">Mercado Pago</p>
            </div>
            <div className="p-4" data-testid="payment-cards">
              <p className="font-medium text-gray-700">Tarjetas</p>
            </div>
            <div className="p-4" data-testid="payment-electronic">
              <p className="font-medium text-gray-700">Pagos electrónicos</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#002B5C] mb-8 text-center" data-testid="text-testimonials-title">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { texto: "Excelente la publicidad y el acompañamiento", autor: "PyME de Servicios" },
              { texto: "Aumentamos visibilidad y productividad", autor: "Comercio Local" },
              { texto: "Servicio claro y profesional", autor: "Industria" }
            ].map((testimonio, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-md" data-testid={`testimonial-${i}`}>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-3 italic" data-testid={`text-testimonial-${i}`}>"{testimonio.texto}"</p>
                <p className="text-sm text-gray-500 font-medium" data-testid={`text-author-${i}`}>— {testimonio.autor}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-[#002B5C] mb-4" data-testid="text-final-cta-title">
            ¿Tenés dudas sobre qué plan elegir?
          </h2>
          <p className="text-lg text-gray-700 mb-6" data-testid="text-final-cta-description">
            Dejanos tu mensaje y te asesoramos sin compromiso
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-[#4A90E2] text-white font-semibold rounded-md px-8 py-3 hover:bg-[#357ABD] transition-all shadow-lg"
            data-testid="link-more-info"
          >
            Quiero más info
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
