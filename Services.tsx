import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      title: "CRM & Pipeline",
      description: "Centralizamos tus leads y clientes. Seguimiento automatizado para que ninguna oportunidad se pierda en el olvido.",
      icon: "👥",
      items: ["Embudos Personalizados", "Reportes en Tiempo Real"],
    },
    {
      title: "Automatización",
      description: "Eliminamos tareas repetitivas. Conectamos tus apps favoritas para que el trabajo pesado se haga solo.",
      icon: "🤖",
      items: ["Integración Zapier/Make", "Bots de WhatsApp"],
    },
    {
      title: "Infraestructura",
      description: "Hosting de alto rendimiento y protocolos de seguridad bancaria para proteger la información de tu empresa.",
      icon: "🔒",
      items: ["Backups Diarios", "SSL & Firewalls"],
    },
  ];

  const faqItems = [
    { q: "¿Tengo que dejar de usar mis herramientas actuales?", a: "No, Clientum se integra con la mayoría de softwares del mercado (Excel, Google, Meta, etc.)." },
    { q: "¿Ofrecen soporte en español?", a: "Soporte 100% humano desde Argentina, vía WhatsApp o videollamada." },
    { q: "¿Cómo son los contratos?", a: "Trabajamos por objetivos. Sin letras chicas ni permanencias forzadas." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        {/* Header */}
        <header className="pt-40 pb-20 px-6 text-center max-w-4xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-green-400 mb-4 block">Ecosistema Clientum</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-none">
            Soluciones que se <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent italic">conectan entre sí.</span>
          </h1>
          <p className="text-gray-400 text-lg">
            No instalamos software aislado. Creamos una arquitectura digital donde cada dato fluye para generar rentabilidad.
          </p>
        </header>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="p-10 rounded-3xl space-y-6 bg-white/[0.02] border-white/5 hover:border-green-400 hover:bg-green-400/[0.02] transition-all hover:scale-105">
                <div className="w-14 h-14 bg-green-400/10 rounded-2xl flex items-center justify-center text-2xl">{service.icon}</div>
                <h3 className="text-2xl font-bold italic">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
                <ul className="text-xs font-bold text-gray-500 space-y-2 uppercase tracking-widest">
                  {service.items.map((item, i) => (
                    <li key={i}><span className="text-green-400 mr-2">✓</span>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5 mt-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black tracking-tight mb-8 italic">Cómo trabajamos.</h2>
              <div className="space-y-12">
                {[
                  { num: "01", title: "Auditoría Inicial", desc: "Analizamos tus procesos actuales para detectar cuellos de botella." },
                  { num: "02", title: "Despliegue Ágil", desc: "No esperamos meses. Entregamos módulos funcionales cada 15 días." },
                  { num: "03", title: "Escalabilidad", desc: "Tu sistema crece con vos. Añadimos funciones según tu demanda." },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <span className="text-5xl font-black text-white/10">{step.num}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-sm text-gray-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-white/5 rounded-3xl p-12 border-white/10">
              <h3 className="text-2xl font-bold mb-6 italic">Preguntas Frecuentes</h3>
              <div className="space-y-6">
                {faqItems.map((item, i) => (
                  <div key={i} className="pb-4 border-b border-white/5 last:border-0">
                    <p className="font-bold text-sm mb-2" data-testid={`faq-question-${i}`}>{item.q}</p>
                    <p className="text-xs text-gray-500">{item.a}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
