import { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    servicio: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ nombre: '', email: '', empresa: '', servicio: '', mensaje: '' });
      }
    } catch {
      alert('Error al enviar. Intentá de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <header className="pt-40 pb-16 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          Hablemos de tu <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent italic">crecimiento.</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Estamos en Río Negro, Argentina, pero conectamos tu negocio con el mundo entero.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-12 gap-12">
        {/* Contact Info - 4 cols */}
        <div className="lg:col-span-4 space-y-8">
          <Card className="p-8 rounded-3xl bg-white/[0.02] border-white/10">
            <h3 className="text-xs font-black uppercase tracking-widest text-green-400 mb-6">Canales Directos</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-green-400">✉️</div>
                <div>
                  <div className="text-xs text-gray-500 font-bold uppercase">Email General</div>
                  <div className="text-sm font-bold" data-testid="text-email-general">hola@clientum.com.ar</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400">🎧</div>
                <div>
                  <div className="text-xs text-gray-500 font-bold uppercase">Soporte Técnico</div>
                  <div className="text-sm font-bold" data-testid="text-email-support">soporte@clientum.com.ar</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-red-400">📍</div>
                <div>
                  <div className="text-xs text-gray-500 font-bold uppercase">Ubicación</div>
                  <div className="text-sm font-bold" data-testid="text-location-city">Río Negro, Argentina</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 rounded-3xl bg-gradient-to-br from-blue-400/10 to-transparent border-blue-400/20">
            <h3 className="font-bold mb-4 italic">¿Buscás una demo?</h3>
            <p className="text-sm text-gray-400 mb-6">Agendá una videollamada de 15 minutos con un consultor para ver nuestras herramientas en acción.</p>
            <Button variant="outline" className="w-full" data-testid="button-see-calendar">Ver Calendario</Button>
          </Card>
        </div>

        {/* Form - 8 cols */}
        <div className="lg:col-span-8">
          <Card className="p-10 md:p-12 rounded-3xl bg-white/[0.02] border-white/10">
            <h2 className="text-3xl font-bold tracking-tight mb-8 italic">Contanos tu proyecto</h2>
            
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-2">¡Mensaje enviado con éxito!</h3>
                <p className="text-gray-400 mb-6">Gracias. Te responderemos a la brevedad.</p>
                <Button onClick={() => setSubmitted(false)} data-testid="button-send-another">Enviar otro mensaje</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-500 ml-2">Nombre Completo</label>
                  <Input type="text" placeholder="Ej: Juan Pérez" value={formData.nombre} onChange={(e) => setFormData({...formData, nombre: e.target.value})} className="bg-black/40 border-white/10" required data-testid="input-nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-500 ml-2">Email Corporativo</label>
                  <Input type="email" placeholder="juan@tuempresa.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="bg-black/40 border-white/10" required data-testid="input-email" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-500 ml-2">Empresa / Rubro</label>
                  <Input type="text" placeholder="Ej: Logística, Comercio..." value={formData.empresa} onChange={(e) => setFormData({...formData, empresa: e.target.value})} className="bg-black/40 border-white/10" data-testid="input-empresa" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-500 ml-2">Servicio de Interés</label>
                  <select value={formData.servicio} onChange={(e) => setFormData({...formData, servicio: e.target.value})} className="bg-black/40 border border-white/10 px-6 py-4 rounded-xl outline-none focus:border-green-400 text-sm w-full" data-testid="select-servicio">
                    <option>Plan Start / Pro</option>
                    <option>Desarrollo Web Custom</option>
                    <option>Consultoría B2B</option>
                    <option>E-Commerce</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black uppercase text-gray-500 ml-2">¿Cómo podemos ayudarte?</label>
                  <Textarea placeholder="Breve descripción..." value={formData.mensaje} onChange={(e) => setFormData({...formData, mensaje: e.target.value})} className="bg-black/40 border-white/10" required data-testid="textarea-mensaje" />
                </div>
                <div className="md:col-span-2 pt-4">
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-green-400 text-black hover:bg-green-500 font-black text-xs uppercase tracking-widest" data-testid="button-submit">
                    {isSubmitting ? 'Enviando...' : 'Enviar Solicitud de Diagnóstico'}
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
