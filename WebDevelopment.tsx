import { Link } from 'wouter';
import { Globe, ShoppingBag, Check, Zap, Shield, Smartphone } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function WebDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-white">
      <Navbar />
      <div className="bg-[#001529] text-white py-20 pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6" data-testid="text-page-title">Desarrollo Web & Tiendas Online</h1>
            <p className="text-xl text-gray-300 font-light" data-testid="text-hero-description">
              Sitios pensados para vender, no solo para verse lindos. Diseño profesional integrado con CRM y gestión.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-700 font-light" data-testid="text-intro">
            En CLIENTUM diseñamos sitios web y tiendas online optimizados para conversión, velocidad, 
            experiencia de usuario e integración con tu sistema de gestión. Nuestros desarrollos no son 
            plantillas genéricas: son <strong>herramientas comerciales</strong>.
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden" data-testid="card-institutional">
            <div className="bg-gradient-to-r from-[#002B5C] to-[#4A90E2] p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <Globe className="h-12 w-12" />
                <div>
                  <h2 className="text-3xl font-bold" data-testid="text-institutional-title">Sitio Web Institucional</h2>
                  <p className="text-gray-200" data-testid="text-institutional-subtitle">Presencia profesional + captación de leads</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-xl text-[#002B5C] mb-4" data-testid="text-pricing-title">Precios</h3>
                  <div className="space-y-3">
                    <div data-testid="price-standard">
                      <p className="text-sm text-gray-600">Precio estándar anual:</p>
                      <p className="text-3xl font-bold text-[#002B5C]">$300.000</p>
                    </div>
                    <div className="border-t border-gray-300 pt-3" data-testid="price-with-ads">
                      <p className="text-sm text-gray-600">Con Plan Publicitario CLIENTUM:</p>
                      <p className="text-3xl font-bold text-[#4A90E2]">$75.000</p>
                    </div>
                    <div className="bg-yellow-100 rounded-lg p-3" data-testid="price-full-plan">
                      <p className="text-sm font-semibold text-yellow-900">
                        Con Plan FULL: <span className="text-green-700">100% BONIFICADO</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-xl text-[#002B5C] mb-4" data-testid="text-features-title">Incluye</h3>
                  <div className="space-y-2">
                    {[
                      "Dominio .com.ar registrado",
                      "Certificado SSL (seguridad)",
                      "Hosting profesional incluido",
                      "Diseño responsive (mobile, tablet, PC)",
                      "Hasta 5 secciones personalizadas",
                      "Blog integrado",
                      "Mapa de ubicación",
                      "Formulario de contacto",
                      "Integración WhatsApp",
                      "Hasta 6 cuentas de correo (1GB c/u)",
                      "Modificaciones ilimitadas",
                      "Optimización SEO básica",
                      "Soporte técnico continuo"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2" data-testid={`feature-institutional-${i}`}>
                        <Check className="h-5 w-5 text-[#4A90E2] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#4A90E2]" data-testid="card-ecommerce">
            <div className="bg-gradient-to-r from-[#4A90E2] to-[#002B5C] p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <ShoppingBag className="h-12 w-12" />
                <div>
                  <h2 className="text-3xl font-bold" data-testid="text-ecommerce-title">Tienda Online Profesional</h2>
                  <p className="text-gray-200" data-testid="text-ecommerce-subtitle">Vende sin fricción y medí resultados</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-xl text-[#002B5C] mb-4" data-testid="text-ecommerce-pricing-title">Precios</h3>
                  <div className="space-y-3">
                    <div data-testid="ecommerce-price-standard">
                      <p className="text-sm text-gray-600">Precio anual:</p>
                      <p className="text-3xl font-bold text-[#002B5C]">$400.000</p>
                    </div>
                    <div className="border-t border-gray-300 pt-3" data-testid="ecommerce-price-with-ads">
                      <p className="text-sm text-gray-600">Con Plan Publicitario CLIENTUM:</p>
                      <p className="text-3xl font-bold text-[#4A90E2]">$150.000</p>
                    </div>
                    <div className="bg-yellow-100 rounded-lg p-3" data-testid="ecommerce-price-full">
                      <p className="text-sm font-semibold text-yellow-900">
                        Bonificaciones disponibles con Plan FULL
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-xl text-[#002B5C] mb-4" data-testid="text-ecommerce-features-title">Incluye</h3>
                  <div className="space-y-2">
                    {[
                      "Todo lo del sitio institucional",
                      "Tienda online autogestionable",
                      "Carga de productos ilimitados",
                      "Variantes (color, talle, etc)",
                      "Cupones de descuento",
                      "Control de stock en tiempo real",
                      "Gestión de pedidos",
                      "Integración Mercado Pago",
                      "Métodos de envío configurables",
                      "Integración Facebook Shop",
                      "Integración Instagram Shop",
                      "WhatsApp ventas directo",
                      "Integración total con CRM CLIENTUM"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2" data-testid={`feature-ecommerce-${i}`}>
                        <Check className="h-5 w-5 text-[#4A90E2] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-bold text-green-900 mb-2" data-testid="text-objective-title">Objetivo del servicio</h4>
                <p className="text-green-800" data-testid="text-objective">
                  Vender sin fricción, gestionar pedidos automáticamente y tener visibilidad total 
                  del negocio desde una sola plataforma.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#002B5C] mb-8 text-center" data-testid="text-tech-title">
            Tecnología y Seguridad
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-center" data-testid="card-security">
              <Shield className="h-12 w-12 text-[#4A90E2] mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-[#002B5C] mb-2" data-testid="text-security-title">Seguridad Total</h3>
              <p className="text-sm text-gray-600" data-testid="text-security-desc">
                Certificados SSL, backups automáticos y protección avanzada
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center" data-testid="card-responsive">
              <Smartphone className="h-12 w-12 text-[#4A90E2] mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-[#002B5C] mb-2" data-testid="text-responsive-title">100% Responsive</h3>
              <p className="text-sm text-gray-600" data-testid="text-responsive-desc">
                Optimizado para celular, tablet y escritorio
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center" data-testid="card-speed">
              <Zap className="h-12 w-12 text-[#4A90E2] mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-[#002B5C] mb-2" data-testid="text-speed-title">Carga Rápida</h3>
              <p className="text-sm text-gray-600" data-testid="text-speed-desc">
                Optimización de velocidad y performance
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#002B5C] to-[#4A90E2] rounded-2xl p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center" data-testid="text-integration-title">
            Integración con Ecosistema CLIENTUM
          </h2>
          <p className="text-center text-lg mb-8 text-gray-200" data-testid="text-integration-desc">
            Tu sitio web deja de ser un "folleto digital" y se convierte en parte integral de tu sistema de ventas
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "CRM automático",
              "ERP integrado",
              "Reportes en tiempo real",
              "Automatizaciones",
              "Marketing unificado"
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-4 text-center" data-testid={`integration-item-${i}`}>
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#002B5C] mb-4" data-testid="text-final-cta-title">
            ¿Listo para tener tu sitio web profesional?
          </h2>
          <p className="text-lg text-gray-600 mb-8" data-testid="text-final-cta-desc">
            Hablemos sobre tu proyecto
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-[#4A90E2] text-white font-semibold rounded-md px-8 py-4 hover:bg-[#357ABD] transition-all shadow-lg"
            data-testid="link-quote"
          >
            Solicitar presupuesto
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
