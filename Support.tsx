import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Support() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero with Search */}
        <header className="pt-40 pb-16 px-6 text-center bg-gradient-to-b from-black/50 to-transparent">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 italic">
            ¿Cómo podemos <span className="text-blue-400">ayudarte?</span>
          </h1>
          <div className="max-w-2xl mx-auto relative">
            <Input
              type="text"
              placeholder="Busca guías, tutoriales o estados de ticket..."
              className="w-full bg-white/5 border-white/10 px-8 py-5 rounded-2xl text-sm"
              data-testid="input-search-support"
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
          </div>
        </header>

        {/* Support Categories */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Primeros Pasos", icon: "🚀", description: "Configuración inicial de tu cuenta y acceso al panel." },
              { title: "Web & Hosting", icon: "💻", description: "Gestión de dominios, correos y actualizaciones." },
              { title: "CRM & Datos", icon: "💾", description: "Importación de contactos y automatización de ventas." },
              { title: "Pagos & Planes", icon: "💳", description: "Facturación electrónica y cambio de servicios." },
            ].map((category, idx) => (
              <Card
                key={idx}
                className="p-8 rounded-3xl text-center bg-white/[0.02] border-white/5 hover:border-blue-400 hover:bg-blue-400/5 transition-all hover:translate-y-[-5px]"
              >
                <div className="w-16 h-16 bg-blue-400/10 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl">
                  {category.icon}
                </div>
                <h3 className="font-bold mb-2">{category.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{category.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Articles & Direct Contact */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="bg-white/5 border-white/10 p-10 rounded-3xl">
                <h2 className="text-2xl font-bold mb-8 italic">Artículos Destacados</h2>
                <div className="space-y-6">
                  {[
                    "¿Cómo integrar WhatsApp Business con el CRM?",
                    "Configuración de correos corporativos en Outlook",
                    "Guía para el uso del Dashboard de Clientum",
                  ].map((article, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="flex justify-between items-center group border-b border-white/5 pb-4 hover:text-blue-400 transition"
                      data-testid={`link-article-${idx}`}
                    >
                      <span className="text-gray-300 group-hover:text-blue-400 transition">
                        {article}
                      </span>
                      <span className="text-xs text-gray-600">→</span>
                    </a>
                  ))}
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-green-400/20 to-transparent p-8 rounded-3xl border-green-400/20">
                <h4 className="font-bold mb-4">¿Urgencia técnica?</h4>
                <p className="text-xs text-gray-400 mb-6">
                  Nuestros ingenieros están disponibles para clientes Enterprise.
                </p>
                <Button
                  className="w-full bg-green-400 text-black hover:bg-green-500 font-black text-xs uppercase tracking-widest"
                  data-testid="button-whatsapp-support"
                >
                  WhatsApp Prioritario
                </Button>
              </Card>

              <Card className="bg-white/5 border-white/10 p-8 rounded-3xl">
                <h4 className="font-bold mb-4">Videollamada</h4>
                <p className="text-xs text-gray-400 mb-6">
                  Agenda una sesión de 15 min para resolver dudas complejas.
                </p>
                <Button
                  variant="outline"
                  className="w-full font-black text-xs uppercase tracking-widest"
                  data-testid="button-book-call"
                >
                  Reservar Turno
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
