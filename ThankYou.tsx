import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 overflow-hidden relative">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-10 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-10 -z-10"></div>

      <main className="max-w-3xl w-full text-center">
        {/* Success Checkmark */}
        <div className="mb-12 animate-bounce">
          <div className="w-20 h-20 mx-auto rounded-full bg-green-400/10 border-2 border-green-400 flex items-center justify-center text-5xl">
            ✓
          </div>
        </div>

        <Card className="bg-white/[0.03] backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl border-white/5 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 italic">
            ¡Recibimos tu <span className="text-blue-400">mensaje!</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Gracias por confiar en Clientum, <span className="text-white font-bold">amigo</span>. Un
            consultor experto revisará tu solicitud y se pondrá en contacto en menos de 24 horas
            hábiles.
          </p>
        </Card>

        {/* What's Next */}
        <Card className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl">
          <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-8 text-center">
            ¿Qué sigue ahora?
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
            <Link href="/blog">
              <a className="border border-white/5 p-6 rounded-2xl hover:border-blue-400 hover:bg-blue-400/[0.02] transition group" data-testid="card-explore-blog">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4 text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition">
                  📖
                </div>
                <h4 className="font-bold mb-2">Explorá el Blog</h4>
                <p className="text-xs text-gray-500 leading-relaxed uppercase font-bold">
                  Leé nuestras últimas guías sobre escalabilidad B2B.
                </p>
              </a>
            </Link>

            <a href="https://wa.me/" className="border border-white/5 p-6 rounded-2xl hover:border-green-400 hover:bg-green-400/[0.02] transition group" data-testid="card-whatsapp">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4 text-green-400 group-hover:bg-green-400 group-hover:text-black transition">
                💬
              </div>
              <h4 className="font-bold mb-2">WhatsApp Directo</h4>
              <p className="text-xs text-gray-500 leading-relaxed uppercase font-bold">
                ¿Es urgente? Hablá con nuestro equipo de guardia.
              </p>
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-12 border-t border-white/5">
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-6">
              Seguí nuestra evolución
            </p>
            <div className="flex justify-center gap-8">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition text-2xl" data-testid="link-linkedin">
                💼
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition text-2xl" data-testid="link-instagram">
                📸
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition text-2xl" data-testid="link-twitter">
                𝕏
              </a>
            </div>
          </div>
        </Card>

        {/* Back Button */}
        <div className="mt-12">
          <Link href="/">
            <a className="text-xs font-bold text-gray-600 hover:text-white transition uppercase tracking-widest" data-testid="link-back-home">
              ← Volver al Inicio
            </a>
          </Link>
        </div>
      </main>

      <footer className="mt-20 py-8 text-center text-xs text-gray-700 uppercase tracking-widest">
        CLIENTUM Digital Solutions © 2025
      </footer>
    </div>
  );
}
