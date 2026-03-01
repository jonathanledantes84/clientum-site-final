import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero */}
        <header className="pt-40 pb-20 px-6 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-none">
            Resultados que hablan{" "}
            <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent italic">
              por nosotros.
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Historias reales de transformación digital en empresas argentinas que confiaron en la
            metodología Clientum.
          </p>
        </header>

        {/* Case Studies */}
        <section className="max-w-7xl mx-auto px-6 py-12 space-y-24">
          {/* Case 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <Card className="rounded-3xl overflow-hidden border-white/10 bg-gray-800 h-96 flex items-center justify-center">
                <span className="text-6xl">📦</span>
              </Card>
              <div className="absolute bottom-8 left-8 right-8 flex gap-4">
                <Card className="p-4 rounded-2xl flex-grow bg-white/[0.02] border-white/10">
                  <div className="text-xs font-black uppercase text-gray-500">Ahorro Operativo</div>
                  <div className="text-2xl font-bold text-green-400">15hs/semana</div>
                </Card>
                <Card className="p-4 rounded-2xl flex-grow bg-white/[0.02] border-white/10">
                  <div className="text-xs font-black uppercase text-gray-500">Precisión Stock</div>
                  <div className="text-2xl font-bold text-blue-400">99.8%</div>
                </Card>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <span className="inline-block bg-green-400/20 text-green-400 text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full">
                Sector Logística
              </span>
              <h2 className="text-4xl font-bold tracking-tight">
                Distribuidora del Valle: Automatización de Inventario
              </h2>
              <p className="text-gray-400 leading-relaxed italic">
                "Teníamos fugas de stock que no podíamos rastrear. Clientum integró nuestro depósito
                con las ventas en tiempo real y hoy el control es absoluto."
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <p className="text-sm text-gray-300">
                    <span className="font-bold">Desafío:</span> Desfase entre ventas online y stock físico.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <p className="text-sm text-gray-300">
                    <span className="font-bold">Solución:</span> Implementación de ERP Clientum con
                    sincronización automática.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Case 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-block bg-green-400/20 text-green-400 text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full">
                Servicios B2B
              </span>
              <h2 className="text-4xl font-bold tracking-tight">
                Estudio Morales: De Excel a un CRM Inteligente
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Logramos centralizar la comunicación de más de 200 clientes corporativos, eliminando
                el uso de hojas de cálculo dispersas y correos perdidos.
              </p>
              <div className="grid grid-cols-2 gap-4 py-4">
                <Card className="p-4 rounded-2xl bg-white/5 border-white/10">
                  <div className="text-3xl font-black text-green-400">+45%</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">En Retención</div>
                </Card>
                <Card className="p-4 rounded-2xl bg-white/5 border-white/10">
                  <div className="text-3xl font-black text-blue-400">Zero</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                    Plazos vencidos
                  </div>
                </Card>
              </div>
              <Button variant="ghost" className="text-xs font-black uppercase tracking-widest text-green-400" data-testid="link-read-full">
                Leer historia completa →
              </Button>
            </div>
            <div className="relative">
              <Card className="rounded-3xl p-8 border-white/10 bg-white/[0.02] relative">
                <span className="absolute top-4 left-6 text-6xl text-white/10">"</span>
                <p className="text-lg relative z-10 font-medium leading-relaxed mb-8">
                  "La implementación fue sorprendentemente rápida. En 30 días ya teníamos a todo el
                  equipo operando bajo una misma plataforma. El soporte post-venta de Clientum es
                  excepcional."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-400/20 border-2 border-green-400 flex items-center justify-center text-green-400">
                    RM
                  </div>
                  <div>
                    <div className="font-bold text-sm">Dr. Roberto Morales</div>
                    <div className="text-xs text-gray-500 uppercase font-black">Socio Gerente</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-32 text-center">
          <div className="py-20 border-y border-white/5">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 italic">
              ¿Tu empresa es la próxima?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-10">
              Agendá una sesión de diagnóstico gratuita de 15 minutos para analizar el potencial de
              digitalización de tu negocio.
            </p>
            <Button className="bg-green-400 text-black hover:bg-green-500 font-black text-xs uppercase tracking-widest px-10 py-6" data-testid="button-schedule">
              Agendar Diagnóstico
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
