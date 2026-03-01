import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function B2BGuide() {
  const features = [
    {
      icon: "🤝",
      title: "Gestión de Pipelines de Venta",
      description:
        "Seguimiento detallado de negociaciones, desde el primer contacto hasta el cierre del contrato, con alertas de inactividad.",
    },
    {
      icon: "💰",
      title: "Facturación Recurrente y Abonos",
      description:
        "Automatización de facturas para servicios mensuales, ideal para agencias, estudios contables y proveedores IT.",
    },
    {
      icon: "👥",
      title: "Portal de Proveedores",
      description:
        "Unifica la comunicación con tu cadena de suministro para evitar cuellos de botella operativos.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero */}
        <header className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">
              Impulsando el ecosistema{" "}
              <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent italic">
                B2B en Argentina.
              </span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed mb-10">
              Entendemos que vender a empresas no es igual que vender a consumidores finales.
              Clientum ofrece la infraestructura necesaria para gestionar ciclos de venta largos y
              relaciones comerciales de alto valor.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-green-400 text-black hover:bg-green-500 px-8 py-4 font-black text-xs uppercase tracking-widest" data-testid="button-explore">
                Explorar Soluciones
              </Button>
              <Button variant="outline" className="px-8 py-4 font-black text-xs uppercase tracking-widest" data-testid="button-download-pdf">
                Descargar Guía PDF
              </Button>
            </div>
          </div>
        </header>

        {/* Solutions Section */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight italic mb-12">
                Herramientas para el <br />
                mundo corporativo.
              </h2>

              <div className="space-y-10">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-14 h-14 bg-green-400/10 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                      <p className="text-gray-500 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 rounded-3xl bg-white/[0.02] border-white/10">
              <div className="bg-black/40 rounded-2xl p-6 space-y-6">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-xs font-black uppercase text-green-400">Sales Performance</span>
                  <span className="text-xs text-gray-500 italic">Q4 Report</span>
                </div>
                <div className="space-y-4">
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 w-[75%]"></div>
                  </div>
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 w-[40%]"></div>
                  </div>
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-white/20 w-[60%]"></div>
                  </div>
                </div>
                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl">
                    <div className="text-xs text-gray-500 uppercase font-bold">Leads B2B</div>
                    <div className="text-2xl font-black">124</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl">
                    <div className="text-xs text-gray-500 uppercase font-bold">Conv. Rate</div>
                    <div className="text-2xl font-black text-green-400">18%</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Lead Magnet */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <Card className="p-12 md:p-20 rounded-3xl bg-gradient-to-br from-green-400/5 to-transparent border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <span className="text-9xl">📖</span>
            </div>

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-black tracking-tight mb-6 italic">
                Guía Gratuita: Digitalización para Empresas B2B
              </h2>
              <p className="text-gray-400 mb-10 text-lg">
                Descubrí cómo las empresas líderes están automatizando su captación de clientes y
                optimizando su flujo de caja con herramientas digitales modernas.
              </p>

              <form className="flex flex-col md:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Tu email corporativo"
                  className="bg-black/40 border-white/10 flex-grow"
                  data-testid="input-guide-email"
                />
                <Button className="bg-white text-black hover:bg-green-400 px-10 py-5 font-black text-xs uppercase tracking-widest" data-testid="button-get-guide">
                  Obtener Guía Gratis
                </Button>
              </form>
              <p className="text-xs text-gray-600 mt-4 uppercase font-bold tracking-widest">
                Sin spam. Solo contenido de valor para tu negocio.
              </p>
            </div>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
