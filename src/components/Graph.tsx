'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface LineInfo {
  dataKey: string;
  name: string;
  stroke: string;
}

interface Dataset {
  name: string;
  data: { [key: string]: any }[];
  color: string;
}

interface GraphProps {
  title: string;
  datasets: Dataset[];
  xAxisKey: string;
  yAxisFormatter?: (tick: any) => string;
  yAxisDomain?: [number | string, number | string];
  yAxisTicks?: number[];
}

const CustomLegend: React.FC<{ lines: LineInfo[] }> = ({ lines }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '24px', paddingRight: '60px' }}>
      {lines.map((line) => (
        <div key={line.dataKey} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: line.stroke }}></div>
          <span style={{ fontFamily: 'var(--font-mulish)', fontSize: '10px', color: '#49526A' }}>{line.name}</span>
        </div>
      ))}
    </div>
  );
};

const Graph: React.FC<GraphProps> = ({ title, datasets, xAxisKey, yAxisFormatter, yAxisDomain, yAxisTicks }) => {
  const lines: LineInfo[] = datasets.map(d => ({ dataKey: d.name, name: d.name, stroke: d.color }));

  const combinedData = React.useMemo(() => {
    const dataMap = new Map<string, { [key: string]: any }>();

    datasets.forEach(dataset => {
      dataset.data.forEach(point => {
        const key = point[xAxisKey];
        if (!dataMap.has(key)) {
          dataMap.set(key, { [xAxisKey]: key });
        }
        const existingPoint = dataMap.get(key)!;
        existingPoint[dataset.name] = point.value;
      });
    });

    return Array.from(dataMap.values());
  }, [datasets, xAxisKey]);
  return (
    <div style={{ width: '100%', maxWidth: '930px', height: '400px', display: 'flex', flexDirection: 'column', background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #EBEEFF' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid #D2D3F3', background: '#F5F5FF', margin: '-20px -20px 0 -20px', borderRadius: '12px 12px 0 0' }}>
        <h2 style={{ fontFamily: 'var(--font-maven-pro)', fontWeight: 700, fontSize: '16px', color: '#828DA9', margin: 0 }}>
          {title}
        </h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={{ background: '#fff', border: '1px solid #D2D3F3', borderRadius: '24px', padding: '8px 16px', color: '#828DA9', fontFamily: 'var(--font-red-hat-display)', fontSize: '12px' }}>Refresh Graph</button>
          <button style={{ background: '#fff', border: '1px solid #D2D3F3', borderRadius: '24px', padding: '8px 16px', color: '#828DA9', fontFamily: 'var(--font-red-hat-display)', fontSize: '12px' }}>May 2025</button>
        </div>
      </div>
      <div style={{flexGrow: 1, display: 'flex', flexDirection: 'column', marginTop: '10px'}}>
        <CustomLegend lines={lines} />
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={combinedData} margin={{ top: 5, right: 30, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E4EB" />
                <XAxis dataKey={xAxisKey} tick={{ fontFamily: 'var(--font-mulish)', fontSize: '10px', fill: '#828DA9' }} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={yAxisFormatter} domain={yAxisDomain} ticks={yAxisTicks} tick={{ fontFamily: 'var(--font-mulish)', fontSize: '10px', fill: '#828DA9' }} axisLine={false} tickLine={false} />
                <Tooltip />
                {lines.map((line) => (
                  <Line key={line.dataKey} type="monotone" dataKey={line.dataKey} stroke={line.stroke} strokeWidth={2} dot={{ r: 4, fill: line.stroke }} activeDot={{ r: 6 }} />
                ))}
            </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Graph;