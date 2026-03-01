import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-2xl font-black italic">Bienvenido, Emiliano.</h1>
            <p className="text-sm text-gray-500">Aquí tienes el resumen de tu ecosistema digital hoy.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-bold">Empresa de Prueba S.A.</div>
              <div className="text-xs text-green-400 font-bold">Plan Enterprise</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-green-400/20 border border-green-400/40 flex items-center justify-center text-green-400">
              👤
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: "Visitas Web", value: "2.480", change: "+12%", icon: "🖱️" },
            { label: "Nuevos Leads", value: "42", change: "+5%", icon: "💰" },
            { label: "Tasa Conversión", value: "1.8%", change: "-2%", icon: "%" },
            { label: "Velocidad Carga", value: "0.9s", change: "", icon: "⏱️" },
          ].map((stat, idx) => (
            <Card key={idx} className="p-6 rounded-3xl bg-blue-900/20 border-white/5">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-green-400/10 rounded-xl text-green-400 text-xl">
                  {stat.icon}
                </div>
                {stat.change && (
                  <span className={`text-xs font-bold ${stat.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                    {stat.change}
                  </span>
                )}
              </div>
              <div className="text-2xl font-black tracking-tight">{stat.value}</div>
              <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Prospects Management Table */}
          <div className="lg:col-span-8">
            <Card className="rounded-3xl overflow-hidden bg-blue-900/20 border-white/5">
              <div className="p-8 border-b border-white/5 flex justify-between items-center">
                <h3 className="font-bold italic">Gestión de Prospectos</h3>
                <Button variant="ghost" className="text-xs font-black uppercase text-green-400" data-testid="button-view-all">
                  Ver todos
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-white/5 text-xs font-black uppercase tracking-widest text-gray-500">
                    <tr>
                      <th className="px-8 py-4">Nombre / Empresa</th>
                      <th className="px-8 py-4">Interés</th>
                      <th className="px-8 py-4">Estado</th>
                      <th className="px-8 py-4">Fecha</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-white/5">
                    {[
                      {
                        name: "Roberto Gomez",
                        company: "Logística Sur",
                        interest: "Plan Pro",
                        status: "Contactado",
                        statusColor: "bg-green-500/20 text-green-400",
                        date: "Hoy 10:24",
                      },
                      {
                        name: "Marta Pazos",
                        company: "Inmobiliaria Patagonia",
                        interest: "Web Custom",
                        status: "Pendiente",
                        statusColor: "bg-orange-500/20 text-orange-400",
                        date: "Ayer 18:45",
                      },
                      {
                        name: "Julián Rossi",
                        company: "Rossi S.A.",
                        interest: "Consultoría",
                        status: "En Llamada",
                        statusColor: "bg-blue-500/20 text-blue-400",
                        date: "22 Dic, 2025",
                      },
                    ].map((prospect, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition">
                        <td className="px-8 py-4 font-bold">
                          {prospect.name}
                          <br />
                          <span className="text-xs text-gray-500">{prospect.company}</span>
                        </td>
                        <td className="px-8 py-4">{prospect.interest}</td>
                        <td className="px-8 py-4">
                          <span
                            className={`px-3 py-1 rounded-md font-bold text-xs uppercase ${prospect.statusColor}`}
                            data-testid={`status-${prospect.status.toLowerCase().replace(" ", "-")}`}
                          >
                            {prospect.status}
                          </span>
                        </td>
                        <td className="px-8 py-4 text-xs text-gray-500">{prospect.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Project Progress */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-8 rounded-3xl bg-blue-900/20 border-white/5">
              <h3 className="font-bold mb-6 italic">Desarrollo Web</h3>
              <div className="space-y-6">
                {[
                  { label: "Maquetación UI", percentage: 100, color: "bg-green-400" },
                  { label: "Programación Backend", percentage: 65, color: "bg-blue-400" },
                  { label: "Carga de Contenido", percentage: 0, color: "bg-gray-600" },
                ].map((task, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-black uppercase mb-2">
                      <span>{task.label}</span>
                      <span className={task.color === "bg-green-400" ? "text-green-400" : task.color === "bg-blue-400" ? "text-blue-400" : "text-gray-600"}>
                        {task.percentage}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${task.color} rounded-full`}
                        style={{ width: `${task.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
                <span>ℹ️</span>
                <p className="text-xs text-gray-500 font-bold uppercase">Entrega estimada: 15 Ene</p>
              </div>
            </Card>

            <Card className="bg-gradient-to-r from-green-400 to-blue-500 p-8 rounded-3xl text-black">
              <h4 className="font-black text-lg leading-tight mb-4">¿Necesitás ayuda técnica?</h4>
              <p className="text-xs mb-6">Nuestro equipo está disponible para ayudarte.</p>
              <Button className="w-full bg-black text-white hover:bg-gray-800 font-black text-xs uppercase" data-testid="button-support">
                Abrir Ticket
              </Button>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
