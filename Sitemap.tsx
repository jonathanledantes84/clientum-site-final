import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function Sitemap() {
  const sections = [
    {
      title: "Comercial & Ventas",
      links: [
        { label: "Inicio (Guía B2B)", href: "/" },
        { label: "Planes y Precios", href: "/planes" },
        { label: "Servicios Integrales", href: "/servicios" },
        { label: "Desarrollo Web Premium", href: "/desarrollo-web" },
      ],
    },
    {
      title: "Institucional",
      links: [
        { label: "Nuestra Historia", href: "/nosotros" },
        { label: "Blog & Noticias", href: "/blog" },
        { label: "Casos de Éxito", href: "/casos" },
        { label: "Sala de Prensa", href: "/prensa" },
        { label: "Carreras (Hiring)", href: "/carreras" },
      ],
    },
    {
      title: "Operaciones",
      links: [
        { label: "Dashboard Cliente", href: "/dashboard" },
        { label: "Centro de Ayuda", href: "/soporte" },
        { label: "Preguntas Frecuentes", href: "/faq" },
        { label: "Contacto Directo", href: "/contacto" },
      ],
    },
    {
      title: "Legal & Sistema",
      links: [
        { label: "Privacidad y Términos", href: "/privacidad" },
        { label: "Página de Error 404", href: "/404" },
        { label: "Mapa del Sitio", href: "/sitemap" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero */}
        <header className="pt-40 pb-16 px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 italic">
            Mapa del <span className="text-green-400">Ecosistema.</span>
          </h1>
          <p className="text-gray-500 text-sm uppercase font-bold tracking-widest">
            Explorá la arquitectura de Clientum
          </p>
        </header>

        {/* Sitemap Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section, idx) => (
              <Card key={idx} className="p-8 rounded-3xl bg-white/[0.02] border-white/5 hover:border-blue-400 transition">
                <h3 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-6">
                  {section.title}
                </h3>
                <nav className="flex flex-col space-y-4">
                  {section.links.map((link, i) => (
                    <Link key={i} href={link.href}>
                      <a className="flex items-center gap-3 text-sm text-gray-400 hover:text-green-400 transition group" data-testid={`sitemap-link-${i}`}>
                        <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                        <span className="group-hover:translate-x-1 transition">{link.label}</span>
                      </a>
                    </Link>
                  ))}
                </nav>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
