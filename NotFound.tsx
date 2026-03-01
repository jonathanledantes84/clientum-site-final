import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6 overflow-hidden relative">
      {/* Decorative orbs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-400 rounded-full blur-3xl opacity-10 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-10 -z-10"></div>

      {/* 404 Error Code */}
      <div className="text-[15rem] font-black leading-none text-white/10 absolute italic">404</div>

      <main className="max-w-2xl w-full text-center relative z-10">
        <div className="bg-white/[0.03] backdrop-blur-md border border-white/5 p-10 md:p-16 rounded-3xl">
          <div className="mb-8">
            <div className="text-xs font-black uppercase tracking-widest text-green-400 mb-4">
              Ups, algo salió mal
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight italic mb-4">
              Perdimos la <span className="text-blue-400">conexión.</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              La página que estás buscando fue movida, eliminada o nunca existió. No te
              preocupes, te ayudamos a volver al camino correcto.
            </p>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-3 gap-3 mb-10">
            <Link href="/">
              <Button variant="outline" className="w-full flex flex-col items-center gap-2 h-auto py-4" data-testid="button-home">
                <span className="text-lg">🏠</span>
                <span className="text-[9px] font-black uppercase tracking-widest">Inicio</span>
              </Button>
            </Link>
            <Link href="/planes">
              <Button variant="outline" className="w-full flex flex-col items-center gap-2 h-auto py-4" data-testid="button-plans">
                <span className="text-lg">🚀</span>
                <span className="text-[9px] font-black uppercase tracking-widest">Planes</span>
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" className="w-full flex flex-col items-center gap-2 h-auto py-4" data-testid="button-dashboard">
                <span className="text-lg">👤</span>
                <span className="text-[9px] font-black uppercase tracking-widest">Panel</span>
              </Button>
            </Link>
          </div>

          <div>
            <Link href="/contacto">
              <a className="text-xs font-bold text-gray-500 hover:text-white transition uppercase tracking-widest underline decoration-green-400 underline-offset-4" data-testid="link-report-error">
                Reportar un error técnico
              </a>
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <div className="text-xl font-black tracking-tight">
            CLIENTUM<span className="text-green-400">.</span>
          </div>
        </div>
      </main>
    </div>
  );
}
