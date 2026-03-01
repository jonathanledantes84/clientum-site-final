import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function About() {
  const team = [
    {
      name: "Emiliano C.",
      role: "Founder & Strategy",
      roleColor: "text-green-400",
      image: "👨‍💼",
    },
    {
      name: "Laura G.",
      role: "UX/UI Lead",
      roleColor: "text-blue-400",
      image: "👩‍💼",
    },
    {
      name: "Martin S.",
      role: "Fullstack Dev",
      roleColor: "text-purple-400",
      image: "👨‍💻",
    },
    {
      name: "Diego M.",
      role: "B2B Consultant",
      roleColor: "text-gray-500",
      image: "👨‍🔧",
    },
  ];

  const values = [
    {
      title: "Transparencia Total",
      description: "Sin costos ocultos ni tecnicismos confusos. Hablamos el idioma de tu negocio.",
      icon: "👁️",
    },
    {
      title: "Velocidad de Ejecución",
      description: "El mercado no espera. Implementamos soluciones rápidas que generan impacto hoy.",
      icon: "⚡",
    },
    {
      title: "Foco en Resultados",
      description: "No medimos el éxito en líneas de código, sino en el crecimiento de tus ventas.",
      icon: "📈",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero */}
        <header className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-green-400 mb-6">
            Nuestra Historia
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-none mb-8">
            Humano detrás de{" "}
            <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent italic">
              lo digital.
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Nacimos en el sur de Argentina con una misión clara: convertir la complejidad tecnológica
            en una ventaja competitiva para los negocios que mueven el país.
          </p>
        </header>

        {/* Mission & Vision */}
        <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="border-l-4 border-green-400 pl-8 space-y-4">
              <h3 className="text-2xl font-bold italic">Nuestra Misión</h3>
              <p className="text-gray-400 leading-relaxed">
                Acompañar a las empresas en su transición hacia un modelo de negocio inteligente,
                donde la tecnología no sea un gasto, sino el motor principal de su rentabilidad.
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-8 space-y-4">
              <h3 className="text-2xl font-bold italic">Nuestra Visión</h3>
              <p className="text-gray-400 leading-relaxed">
                Ser el referente líder en transformación digital del interior del país, demostrando
                que desde la Patagonia se puede exportar calidad y eficiencia al mundo.
              </p>
            </div>
          </div>
          <div className="relative">
            <Card className="p-4 rounded-3xl border-white/10 rotate-2 bg-white/[0.02]">
              <div className="rounded-3xl w-full h-96 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-8xl">
                🤝
              </div>
            </Card>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-black/20 py-24 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-xs font-black uppercase tracking-widest text-center text-gray-500 mb-16">
              Nuestros Pilares
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {values.map((value, idx) => (
                <div key={idx} className="text-center space-y-4">
                  <div className="text-5xl">{value.icon}</div>
                  <h4 className="text-xl font-bold italic">{value.title}</h4>
                  <p className="text-sm text-gray-500">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-black tracking-tight mb-16 italic">Liderazgo Estratégico</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-4 h-80 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition">
                  <span className="text-6xl">{member.image}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-4">
                      <a href="#" className="text-xl text-white hover:text-green-400" data-testid={`link-linkedin-${idx}`}>
                        in
                      </a>
                      <a href="#" className="text-xl text-white hover:text-green-400" data-testid={`link-twitter-${idx}`}>
                        𝕏
                      </a>
                    </div>
                  </div>
                </div>
                <h5 className="font-bold text-lg">{member.name}</h5>
                <p className={`text-xs font-black uppercase tracking-widest ${member.roleColor}`}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
