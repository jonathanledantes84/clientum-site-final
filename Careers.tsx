import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Careers() {
  const jobOpenings = [
    {
      title: "Fullstack Developer (React/Node)",
      category: "Engineering",
      location: "Remoto • Senior / Semi-Senior • Argentina",
      categoryColor: "bg-blue-500/20 text-blue-400",
    },
    {
      title: "UI/UX Designer & Product Lead",
      category: "Design",
      location: "Remoto • Senior • LATAM",
      categoryColor: "bg-purple-500/20 text-purple-400",
    },
    {
      title: "B2B Sales Representative",
      category: "Sales",
      location: "Remoto • Mid-Level • Buenos Aires",
      categoryColor: "bg-orange-500/20 text-orange-400",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero */}
        <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
          <span className="text-xs font-black uppercase tracking-widest text-green-400 mb-6 block">
            Hiring the future
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Cambiá el código de tu{" "}
            <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent italic">
              carrera profesional.
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Buscamos mentes inquietas que quieran transformar la digitalización en Argentina y
            Latinoamérica. 100% Remoto, 100% Objetivos.
          </p>
        </header>

        {/* Culture Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="text-blue-500 text-3xl">🌍</div>
              <h3 className="text-xl font-bold">Libertad Geográfica</h3>
              <p className="text-sm text-gray-500">
                Trabajamos desde donde seas más feliz. Solo necesitás una buena conexión y
                compromiso.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-green-400 text-3xl">⚡</div>
              <h3 className="text-xl font-bold">Cultura de Aprendizaje</h3>
              <p className="text-sm text-gray-500">
                Bonificamos cursos y certificaciones para que nunca dejes de evolucionar.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-purple-400 text-3xl">❤️</div>
              <h3 className="text-xl font-bold">Impacto Real</h3>
              <p className="text-sm text-gray-500">
                Lo que construyas aquí ayudará a cientos de PyMEs a escalar sus negocios.
              </p>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="vacantes" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <h2 className="text-3xl font-black mb-12 italic tracking-tight">
            Posiciones Abiertas.
          </h2>

          <div className="space-y-4">
            {jobOpenings.map((job, idx) => (
              <Card
                key={idx}
                className="p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white/[0.02] border-white/5 hover:border-green-400 hover:bg-green-400/5 transition-all"
              >
                <div className="flex-1">
                  <span
                    className={`text-xs font-black uppercase tracking-widest ${job.categoryColor} px-3 py-1 rounded-md mb-2 inline-block`}
                  >
                    {job.category}
                  </span>
                  <h4 className="text-xl font-bold mt-2">{job.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{job.location}</p>
                </div>
                <Button
                  className="bg-white text-black hover:bg-green-400 font-black text-xs uppercase tracking-widest px-8"
                  data-testid="button-apply-job"
                >
                  Aplicar Ahora
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Spontaneous Application Form */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <Card className="bg-white/5 p-12 border-white/10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 italic">¿No encontrás tu puesto?</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Estamos siempre buscando personas con talento y pasión. Si creés que podés aportar
                valor a Clientum, envianos tu perfil y nos pondremos en contacto cuando surja una
                oportunidad.
              </p>
              <div className="flex items-center gap-4 text-green-400 font-bold text-xs uppercase tracking-widest">
                <span>✉️</span>
                <span>talento@clientum.com</span>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full bg-black/40 border border-white/10 px-6 py-4 rounded-xl outline-none focus:border-green-400 text-sm"
                data-testid="input-fullname"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full bg-black/40 border border-white/10 px-6 py-4 rounded-xl outline-none focus:border-green-400 text-sm"
                data-testid="input-email"
              />
              <textarea
                placeholder="Contanos brevemente sobre vos..."
                rows={4}
                className="w-full bg-black/40 border border-white/10 px-6 py-4 rounded-xl outline-none focus:border-green-400 text-sm"
                data-testid="textarea-about"
              />
              <Button
                className="w-full bg-green-400 text-black hover:bg-green-500 font-black text-xs uppercase tracking-widest"
                data-testid="button-submit-application"
              >
                Enviar Postulación
              </Button>
            </form>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
