import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Blog() {
  const articles = [
    {
      title: "Cómo la Inteligencia Artificial está redefiniendo el CRM en Argentina.",
      category: "Tendencias 2025",
      excerpt:
        "Analizamos el impacto de las nuevas herramientas de IA en la gestión de clientes y cómo las PyMEs pueden aprovecharlas sin presupuestos millonarios.",
      date: "24 Dic, 2025",
      readTime: "8 min lectura",
      featured: true,
    },
    {
      title: "5 errores comunes que matan la conversión en tu Landing Page.",
      category: "Diseño Web",
      excerpt: "Pequeños cambios en el diseño que pueden significar un aumento del 20% en tus consultas diarias.",
      featured: false,
    },
    {
      title: "Estrategias de LinkedIn para Directivos: Construyendo autoridad.",
      category: "Marketing B2B",
      excerpt:
        "Cómo posicionar tu perfil personal para atraer negocios de alto valor de forma orgánica.",
      featured: false,
    },
  ];

  const categories = [
    "E-Commerce",
    "Software a Medida",
    "Automatización",
    "Casos Reales",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        {/* Header */}
        <header className="pt-40 pb-16 px-6 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Ideas para la era{" "}
              <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent italic">
                de la eficiencia.
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Guías, análisis y tendencias sobre digitalización de empresas y marketing estratégico.
            </p>
          </div>
        </header>

        {/* Content Grid */}
        <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-12 gap-12">
          {/* Articles Feed */}
          <div className="lg:col-span-8 space-y-16">
            {/* Featured Article */}
            {articles[0] && (
              <article className="group cursor-pointer" data-testid="article-featured">
                <div className="relative rounded-3xl overflow-hidden mb-8 aspect-video border border-white/10 bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">📊</div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-black/60 backdrop-blur-md text-green-400 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      {articles[0].category}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-black uppercase tracking-widest">
                    <span>{articles[0].date}</span>
                    <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                    <span>{articles[0].readTime}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:text-green-400 transition">
                    {articles[0].title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-lg">{articles[0].excerpt}</p>
                </div>
              </article>
            )}

            {/* Other Articles Grid */}
            <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
              {articles.slice(1).map((article, idx) => (
                <article
                  key={idx}
                  className="space-y-4 group cursor-pointer"
                  data-testid={`article-${idx}`}
                >
                  <div className="rounded-3xl overflow-hidden aspect-square border border-white/10 bg-gray-800 flex items-center justify-center text-5xl group-hover:scale-105 transition duration-500">
                    {idx === 0 ? "🎨" : "💼"}
                  </div>
                  <span className="text-green-400 text-xs font-black uppercase tracking-widest">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold leading-tight">{article.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{article.excerpt}</p>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center pt-12">
              <Button
                variant="outline"
                className="text-xs font-black uppercase tracking-widest"
                data-testid="button-load-more"
              >
                Cargar más artículos
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-10">
            {/* Newsletter */}
            <Card className="p-8 rounded-3xl bg-gradient-to-br from-green-400/5 to-transparent border-white/10">
              <h4 className="text-xl font-bold mb-4 italic">Newsletter Semanal</h4>
              <p className="text-sm text-gray-400 mb-6">
                Recibí estrategias de digitalización directamente en tu bandeja de entrada. Cero
                spam.
              </p>
              <form className="space-y-3">
                <Input
                  type="email"
                  placeholder="Tu email"
                  className="bg-black/40 border-white/10"
                  data-testid="input-newsletter-email"
                />
                <Button className="w-full bg-white text-black hover:bg-green-400 font-black text-xs uppercase tracking-widest" data-testid="button-subscribe">
                  Suscribirme
                </Button>
              </form>
            </Card>

            {/* Categories */}
            <div className="p-8">
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-6">
                Categorías
              </h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    className="text-xs hover:border-green-400"
                    data-testid={`button-category-${idx}`}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <Card className="p-8 rounded-3xl bg-white/[0.02] border-blue-400/20 relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="font-bold mb-2">¿Necesitás asesoría?</h4>
                <p className="text-xs text-gray-500 mb-6">
                  Analizamos tu caso particular sin costo alguno.
                </p>
                <a
                  href="/contacto"
                  className="text-xs font-black uppercase text-blue-400 tracking-widest group-hover:underline"
                  data-testid="link-consult"
                >
                  Agendar Llamada →
                </a>
              </div>
              <span className="absolute -bottom-4 -right-4 text-white/5 text-7xl -rotate-12">🚀</span>
            </Card>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
