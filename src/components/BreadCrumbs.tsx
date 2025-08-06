import React from 'react';

interface Stat {
  title: string;
  data: string | number;
  label: string;
}

interface BreadCrumbsProps {
  icon: React.ReactNode;
  title: string;
  stats: Stat[];
}

const StatCard: React.FC<Stat> = ({ title, data, label }) => {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 24px',
        borderRadius: '12px',
      }}
      className="w-[48%] border-t-[5px] border border-[#EBEEFF] bg-[#FFFEFD]   "
    >
      <section>
      <h3
        style={{
          fontFamily: 'var(--font-red-hat-display)',
          fontWeight: 500,
          fontSize: '14px',
          color: '#828DA9',
          textTransform: 'capitalize',
          margin: 0,
        }}
      >
        {title}
      </h3>
      <h3
        style={{
          fontFamily: 'var(--font-red-hat-display)',
          fontWeight: 500,
          fontSize: '14px',
          color: '#828DA9',
          textTransform: 'uppercase',
          margin: 0,
        }}
      >
        {label}
      </h3>
      </section>
      <p
        style={{
          fontFamily: 'var(--font-red-hat-display)',
          fontWeight: 700,
          fontSize: '36px',
          color: '#3D3C52',
          margin: 0,
        }}
      >
        {String(data).padStart(2, '0')}
      </p>
    </div>
  );
};

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ icon, title, stats }) => {
  return (
    <div className="w-full border  border-[#EBEEFF]" style={{ borderRadius: '12px', padding: '12px',  }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' ,padding:'0 10px'}}>
          {icon}
          <h2 style={{ fontFamily: 'var(--font-red-hat-display)', fontSize: '24px', fontWeight: 'bold', color: '#828DA9' }}>
            {title}
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{ background: '#fff', border: '1px solid #D2D3F3', borderRadius: '24px', padding: '8px 16px', color: '#828DA9' }}>Refresh</button>
          <button style={{ background: '#fff', border: '1px solid #D2D3F3', borderRadius: '24px', padding: '8px 16px', color: '#828DA9' }}>May 2025</button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center " style={{ gap: '16px' }}>
        {stats.map((stat, index) => (
          <StatCard key={index} title={stat.title} label={stat.label} data={stat.data} />
        ))}
      </div>
    </div>
  );
};

export default BreadCrumbs;
