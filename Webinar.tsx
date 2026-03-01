import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Webinar() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    company: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Registro exitoso. Recibirás el enlace por email.");
    setFormData({ nombre: "", email: "", company: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-10 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-10 -z-10"></div>

      {/* Navbar */}
      <nav className="h-20 flex items-center justify-center border-b border-white/5">
        <div className="text-2xl font-extrabold tracking-tight">
          CLIENTUM<span className="text-green-400">.</span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block bg-blue-400/20 text-blue-400 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            Evento Online Gratuito
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none mb-6 italic">
            Escalá tu Agencia a <br />
            <span className="text-green-400">USD 10k/mes</span> con IA.
          </h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            En esta Masterclass en vivo, Emiliano (Founder de Clientum) te mostrará el framework
            exacto que usamos para automatizar ventas y optimizar el desarrollo web sin morir en el
            intento.
          </p>

          {/* Timer */}
          <div className="flex gap-4 mb-10">
            {[
              { label: "Días", value: "02" },
              { label: "Horas", value: "14" },
              { label: "Mins", value: "35" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center"
              >
                <span className="text-2xl font-black">{item.value}</span>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <ul className="space-y-4 text-sm font-semibold text-gray-300">
            <li className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              Cómo captar clientes high-ticket sin pauta.
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              El stack tecnológico para lanzar webs en 7 días.
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              Automatización de CRM para triplicar conversiones.
            </li>
          </ul>
        </div>

        {/* Registration Form */}
        <div className="lg:pl-10">
          <Card className="p-8 md:p-12 rounded-3xl bg-white/[0.03] backdrop-blur-md border-white/10 shadow-2xl relative">
            <div className="absolute -top-4 -right-4 bg-green-400 text-black text-xs font-black px-4 py-2 rounded-xl rotate-12 shadow-xl">
              CUPOS LIMITADOS
            </div>

            <h3 className="text-2xl font-bold mb-8 text-center">Reservá tu lugar gratis</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-4 mb-2 block">
                  Nombre completo
                </label>
                <Input
                  type="text"
                  placeholder="Ej: Emiliano"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="bg-black/40 border-white/10"
                  required
                  data-testid="input-webinar-name"
                />
              </div>
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-4 mb-2 block">
                  Email corporativo
                </label>
                <Input
                  type="email"
                  placeholder="nombre@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-black/40 border-white/10"
                  required
                  data-testid="input-webinar-email"
                />
              </div>
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-4 mb-2 block">
                  ¿Tenés una agencia/empresa?
                </label>
                <select
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-green-400 text-sm text-gray-400"
                  data-testid="select-company-status"
                >
                  <option>Sí, activa</option>
                  <option>Estoy por empezar</option>
                  <option>Trabajo freelance</option>
                </select>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-400 text-black hover:bg-green-500 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-green-400/20 mt-4"
                data-testid="button-register-webinar"
              >
                Quiero Acceder a la Masterclass
              </Button>

              <p className="text-xs text-gray-500 text-center mt-6">
                <span className="mr-1">🔒</span> Tus datos están protegidos por Clientum.
              </p>
            </form>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center px-6 mt-12">
        <div className="flex justify-center gap-12 mb-8 opacity-40 grayscale text-xs font-black uppercase tracking-widest">
          <span>Forbes Accel</span>
          <span>Tech Insider</span>
          <span>Digital Argentina</span>
        </div>
        <p className="text-xs text-gray-700 uppercase tracking-widest">© 2025 Clientum Masterclass Series</p>
      </footer>
    </div>
  );
}
