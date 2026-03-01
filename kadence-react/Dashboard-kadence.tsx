/**
 * KADENCE BLOCKS VERSION - Dashboard.tsx
 * Dashboard page with Kadence-style components
 */

export default function DashboardKadence() {
  const stats = [
    { label: 'Ventas del mes', value: '$2.450.000', change: '+12%', positive: true },
    { label: 'Clientes activos', value: '156', change: '+8', positive: true },
    { label: 'Tickets abiertos', value: '23', change: '-5', positive: true },
    { label: 'Tasa de conversión', value: '34%', change: '+2%', positive: true },
  ];

  const recentSales = [
    { client: 'Retail Plus', product: 'Clientum Pro', amount: '$900.000', date: 'Hoy', status: 'completed' },
    { client: 'TechBA', product: 'Clientum Start', amount: '$720.000', date: 'Ayer', status: 'completed' },
    { client: 'GastroNet', product: 'Clientum Pro', amount: '$900.000', date: 'Ayer', status: 'pending' },
    { client: 'AutoSur', product: 'Performance', amount: '$200.000', date: 'Hace 3 días', status: 'completed' },
  ];

  return (
    <div style={{ fontFamily: "'Open Sans', system-ui, sans-serif", color: '#1a2332', minHeight: '100vh', background: '#f5f7fa' }}>
      
      {/* Header */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #d4dce8', padding: '24px 32px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#1a2332' }}>Dashboard</h1>
            <p style={{ fontSize: '14px', color: '#6b7a8d', marginTop: '4px' }}>Bienvenido de nuevo 👋</p>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a href="/contacto" style={{ fontSize: '14px', color: '#2b4a7a', textDecoration: 'none' }}>Soporte</a>
            <div style={{ width: '40px', height: '40px', background: 'rgba(43,74,122,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
              👤
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {stats.map((stat, idx) => (
            <div key={idx} style={{
              background: '#ffffff',
              border: '1px solid #d4dce8',
              borderRadius: '12px',
              padding: '24px',
            }}>
              <div style={{ fontSize: '13px', color: '#6b7a8d', marginBottom: '8px' }}>{stat.label}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                <span style={{ fontSize: '28px', fontWeight: 700, color: '#1a2332' }}>{stat.value}</span>
                <span style={{ 
                  fontSize: '13px', 
                  fontWeight: 600, 
                  color: stat.positive ? '#2db87a' : '#ef4444',
                  background: stat.positive ? 'rgba(45,184,122,0.1)' : 'rgba(239,68,68,0.1)',
                  padding: '2px 8px',
                  borderRadius: '4px',
                }}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Sales */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px 32px' }}>
        <div style={{
          background: '#ffffff',
          border: '1px solid #d4dce8',
          borderRadius: '12px',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#1a2332' }}>Ventas recientes</h2>
            <a href="#" style={{ fontSize: '14px', color: '#2b4a7a', textDecoration: 'none' }}>Ver todas →</a>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #d4dce8' }}>
                <th style={{ textAlign: 'left', padding: '12px 0', fontSize: '12px', fontWeight: 600, color: '#6b7a8d', textTransform: 'uppercase' }}>Cliente</th>
                <th style={{ textAlign: 'left', padding: '12px 0', fontSize: '12px', fontWeight: 600, color: '#6b7a8d', textTransform: 'uppercase' }}>Producto</th>
                <th style={{ textAlign: 'right', padding: '12px 0', fontSize: '12px', fontWeight: 600, color: '#6b7a8d', textTransform: 'uppercase' }}>Monto</th>
                <th style={{ textAlign: 'center', padding: '12px 0', fontSize: '12px', fontWeight: 600, color: '#6b7a8d', textTransform: 'uppercase' }}>Fecha</th>
                <th style={{ textAlign: 'center', padding: '12px 0', fontSize: '12px', fontWeight: 600, color: '#6b7a8d', textTransform: 'uppercase' }}>Estado</th>
              </tr>
            </thead>
            <tbody>
              {recentSales.map((sale, idx) => (
                <tr key={idx} style={{ borderBottom: idx < recentSales.length - 1 ? '1px solid #f0f2f5' : 'none' }}>
                  <td style={{ padding: '16px 0', fontSize: '14px', fontWeight: 500, color: '#1a2332' }}>{sale.client}</td>
                  <td style={{ padding: '16px 0', fontSize: '14px', color: '#6b7a8d' }}>{sale.product}</td>
                  <td style={{ padding: '16px 0', fontSize: '14px', fontWeight: 600, color: '#1a2332', textAlign: 'right' }}>{sale.amount}</td>
                  <td style={{ padding: '16px 0', fontSize: '14px', color: '#6b7a8d', textAlign: 'center' }}>{sale.date}</td>
                  <td style={{ padding: '16px 0', textAlign: 'center' }}>
                    <span style={{ 
                      fontSize: '12px', 
                      fontWeight: 500, 
                      padding: '4px 12px', 
                      borderRadius: '9999px',
                      background: sale.status === 'completed' ? 'rgba(45,184,122,0.1)' : 'rgba(245,158,11,0.1)',
                      color: sale.status === 'completed' ? '#2db87a' : '#f59e0b',
                    }}>
                      {sale.status === 'completed' ? 'Completado' : 'Pendiente'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <a href="/contacto" style={{
            background: '#ffffff',
            border: '1px solid #d4dce8',
            borderRadius: '12px',
            padding: '24px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <span style={{ fontSize: '24px' }}>➕</span>
            <span style={{ fontSize: '14px', fontWeight: 500, color: '#1a2332' }}>Nuevo cliente</span>
          </a>
          <a href="/planes" style={{
            background: '#ffffff',
            border: '1px solid #d4dce8',
            borderRadius: '12px',
            padding: '24px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <span style={{ fontSize: '24px' }}>📊</span>
            <span style={{ fontSize: '14px', fontWeight: 500, color: '#1a2332' }}>Ver reportes</span>
          </a>
          <a href="/blog" style={{
            background: '#ffffff',
            border: '1px solid #d4dce8',
            borderRadius: '12px',
            padding: '24px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <span style={{ fontSize: '24px' }}>🎓</span>
            <span style={{ fontSize: '14px', fontWeight: 500, color: '#1a2332' }}>Capacitaciones</span>
          </a>
        </div>
      </div>

    </div>
  );
}
