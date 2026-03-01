import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Press() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero */}
        <header className="pt-40 pb-20 px-6 text-center max-w-4xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-blue-400 mb-4 block">
            Sala de Prensa
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 italic">
            Recursos para{" "}
            <span className="text-green-400">comunicadores.</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Encontrá nuestra historia, activos de marca y las últimas noticias sobre el impacto de
            Clientum en la industria digital.
          </p>
        </header>

        {/* Brand Assets */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-black mb-8 italic tracking-tight">Activos de Marca</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Logo Principal", formats: ["PNG", "SVG"] },
              { title: "Logo Versión Light", formats: ["PNG", "SVG"] },
              { title: "Paleta de Colores", formats: ["PDF GUIDE"] },
            ].map((asset, idx) => (
              <Card
                key={idx}
                className="p-10 rounded-3xl flex flex-col items-center text-center bg-white/[0.02] border-white/5 hover:border-blue-400 hover:bg-blue-400/5 transition-all"
              >
                <div className="w-full aspect-video bg-gray-800 flex items-center justify-center rounded-2xl mb-6 border border-white/5">
                  {idx === 0 && <span className="text-2xl font-black">CLIENTUM🟢</span>}
                  {idx === 1 && <span className="text-2xl font-black text-black">CLIENTUM🔵</span>}
                  {idx === 2 && <span className="text-3xl">🎨</span>}
                </div>
                <h4 className="font-bold mb-4">{asset.title}</h4>
                <div className="flex gap-2">
                  {asset.formats.map((format) => (
                    <Button
                      key={format}
                      variant="outline"
                      className="px-4 py-2 rounded-lg text-xs font-black uppercase hover:bg-white hover:text-black"
                      data-testid={`button-download-${format.toLowerCase()}`}
                    >
                      {format}
                    </Button>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Press Releases */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5 mt-10">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-black mb-12 italic tracking-tight">Últimos Comunicados</h2>
              <div className="space-y-12">
                {[
                  {
                    date: "24 DIC, 2025",
                    title: "Clientum alcanza los 500 clientes activos en el Cono Sur.",
                    excerpt:
                      "La agencia de transformación digital celebra un crecimiento del 200% interanual, consolidándose como líder en soluciones CRM para PyMEs.",
                  },
                  {
                    date: "10 NOV, 2025",
                    title: "Lanzamiento de Clientum AI: Automatización con inteligencia artificial.",
                    excerpt:
                      "Presentamos nuestra nueva capa de IA diseñada para predecir comportamientos de compra y optimizar embudos de ventas automáticamente.",
                  },
                ].map((article, idx) => (
                  <article key={idx} className="group">
                    <span className="text-xs font-bold text-green-400 uppercase tracking-widest">
                      {article.date}
                    </span>
                    <h3 className="text-2xl font-bold mt-2 group-hover:text-blue-400 transition cursor-pointer">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-4 leading-relaxed">{article.excerpt}</p>
                    <a
                      href="#"
                      className="inline-block mt-4 text-xs font-black uppercase tracking-widest border-b border-blue-400 pb-1 hover:text-blue-400"
                      data-testid="link-read-full"
                    >
                      Leer nota completa
                    </a>
                  </article>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <Card className="bg-white/5 p-8 rounded-3xl border-white/10">
                <h3 className="font-bold mb-6 italic">Clientum en números</h3>
                <div className="space-y-6">
                  {[
                    { value: "2022", label: "Año de fundación" },
                    { value: "15+", label: "Países alcanzados" },
                    { value: "100%", label: "Remoto & Global" },
                  ].map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-3xl font-black text-green-400">{stat.value}</div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="mt-8 p-8 border-white/5 rounded-3xl">
                <h4 className="font-bold mb-4">Contacto de Prensa</h4>
                <p className="text-xs text-gray-500 mb-4">Para entrevistas o consultas oficiales:</p>
                <div className="text-sm font-bold" data-testid="text-press-email">
                  prensa@clientum.com
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
