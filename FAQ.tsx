import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function FAQ() {
  const faqItems = [
    {
      q: "¿Cuánto tiempo demora el desarrollo de una web?",
      a: "Nuestros plazos estándar varían según el proyecto. Una Landing Page suele estar lista en 7-10 días hábiles, mientras que un sitio institucional complejo puede tomar entre 3 y 5 semanas. Trabajamos bajo una metodología ágil para entregarte avances semanales.",
    },
    {
      q: "¿El servicio de CRM está incluido en el precio?",
      a: "Contamos con diferentes niveles. El plan Starter incluye la configuración inicial, mientras que los planes Business y Pro incluyen la licencia completa de nuestra plataforma propietaria con soporte prioritario 24/7.",
    },
    {
      q: "¿Cómo se gestionan los pagos en Clientum?",
      a: "Aceptamos transferencias bancarias, tarjetas de crédito (vía Stripe/MercadoPago) y criptoactivos (USDT/BTC). Para proyectos de desarrollo, trabajamos con un anticipo del 50% y el saldo restante contra entrega.",
    },
    {
      q: "¿Ofrecen soporte después del lanzamiento?",
      a: "¡Por supuesto! No te dejamos solo. Todos nuestros desarrollos incluyen 30 días de garantía técnica y soporte post-lanzamiento. Además, ofrecemos planes de mantenimiento mensual para asegurar que tu sitio esté siempre actualizado y seguro.",
    },
  ];

  const categories = ["Todas", "Servicios", "Tecnología", "Pagos"];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero */}
        <header className="pt-40 pb-16 px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 italic">
            Despejamos tus <br />
            <span className="text-blue-400">dudas.</span>
          </h1>
          <div className="max-w-xl mx-auto relative mb-12">
            <Input
              type="text"
              placeholder="¿Qué necesitas saber?"
              className="bg-white/5 border-white/10 px-8 py-5"
              data-testid="input-search-faq"
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition ${
                  idx === 0
                    ? "bg-blue-400 text-black"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
                data-testid={`button-category-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* FAQ Content */}
        <section className="max-w-4xl mx-auto px-6 py-12 pb-32">
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <details
                key={idx}
                className="rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden hover:border-green-400 hover:bg-green-400/[0.02] transition group"
              >
                <summary className="p-8 flex justify-between items-center cursor-pointer">
                  <h3 className="font-bold text-lg pr-4">{item.q}</h3>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-open:rotate-180 transition-transform flex-shrink-0">
                    ▼
                  </div>
                </summary>
                <div className="px-8 pb-8 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          {/* Support CTA */}
          <div className="mt-20 bg-white/5 p-12 rounded-3xl border border-white/10 text-center">
            <h3 className="text-2xl font-bold mb-4 italic">¿No encontraste tu respuesta?</h3>
            <p className="text-gray-400 text-sm mb-8">
              Nuestro equipo de soporte humano está disponible para ayudarte con cualquier consulta
              técnica o comercial.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button
                variant="default"
                className="bg-green-400 text-black hover:bg-green-500 px-10 py-4 font-black text-xs uppercase tracking-widest"
                data-testid="button-talk-consultant"
              >
                Hablar con un consultor
              </Button>
              <Button
                variant="outline"
                className="px-10 py-4 font-black text-xs uppercase tracking-widest"
                data-testid="button-open-ticket"
              >
                Abrir Ticket
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
