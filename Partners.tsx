import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Partners() {
  const tiers = [
    {
      title: "Bronze",
      commission: "10%",
      popular: false,
      features: ["Pagos mensuales", "Acceso a Media Kit", "Link de referido único"],
    },
    {
      title: "Silver",
      commission: "15%",
      popular: true,
      features: ["Todo lo de Bronze", "Soporte prioritario", "Dashboard avanzado"],
    },
    {
      title: "Gold",
      commission: "20%",
      popular: false,
      features: ["Todo lo de Silver", "White Label opcional", "Bonus por volumen"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero */}
        <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
          <span className="text-xs font-black uppercase tracking-widest text-blue-400 mb-6 block">
            Ecosystem Growth
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight italic">
            Crezcamos <span className="text-green-400">juntos.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Unite al programa de partners de Clientum y ganá comisiones recurrentes recomendando
            soluciones de transformación digital líderes en el mercado.
          </p>
        </header>

        {/* Partner Tiers */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, idx) => (
              <Card
                key={idx}
                className={`p-10 rounded-3xl transition-all ${
                  tier.popular
                    ? "border-blue-400/30 bg-white/[0.04]"
                    : "bg-white/[0.02] border-white/5 hover:border-green-400 hover:bg-green-400/[0.02]"
                }`}
              >
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Nivel {String(idx + 1).padStart(2, "0")}
                  {tier.popular && <span className="text-blue-400 ml-2">(Más popular)</span>}
                </div>
                <h3 className="text-2xl font-black mb-4">{tier.title}</h3>
                <div className="text-4xl font-black text-green-400 mb-6">
                  {tier.commission} <span className="text-sm text-gray-500 font-normal">comisión</span>
                </div>
                <ul className="space-y-4 text-sm mb-8 text-gray-300">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={tier.popular ? "text-blue-400" : "text-gray-600"}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.popular ? "default" : "outline"}
                  className={`w-full font-black text-xs uppercase tracking-widest ${
                    tier.popular ? "bg-blue-400 text-white hover:bg-blue-500" : ""
                  }`}
                  data-testid={`button-tier-${tier.title.toLowerCase()}`}
                >
                  {tier.popular ? "Aplicar a Silver" : tier.title === "Gold" ? "Consultar Gold" : "Empezar ahora"}
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section id="unirse" className="max-w-7xl mx-auto px-6 py-24">
          <Card className="p-12 md:p-20 rounded-3xl bg-white/[0.02] border-white/5 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight mb-6 italic">
                Empezá a monetizar <br />
                tu <span className="text-blue-400">influencia.</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Buscamos partners comprometidos con la calidad. Si sos consultor, agencia o creador
                de contenido B2B, Clientum es el aliado perfecto para potenciar tus ingresos.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-xs font-bold">
                    JD
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-black flex items-center justify-center text-xs font-bold">
                    MS
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-400 border-2 border-black flex items-center justify-center text-xs font-black text-black">
                    +50
                  </div>
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-gray-500">
                  Partners activos hoy
                </span>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Nombre" className="bg-black border-white/10" data-testid="input-name" />
                <Input placeholder="Apellido" className="bg-black border-white/10" data-testid="input-lastname" />
              </div>
              <Input
                type="email"
                placeholder="Email profesional"
                className="bg-black border-white/10"
                data-testid="input-partner-email"
              />
              <select className="w-full bg-black border border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-green-400 text-sm text-gray-500" data-testid="select-partner-type">
                <option>Tipo de Partner</option>
                <option>Agencia de Marketing</option>
                <option>Consultor Independiente</option>
                <option>Afiliado / Creador</option>
              </select>
              <Button className="w-full bg-white text-black hover:bg-green-400 py-5 font-black text-xs uppercase tracking-widest" data-testid="button-submit-partner">
                Enviar Solicitud
              </Button>
            </form>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
