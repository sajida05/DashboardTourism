import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { tourismData } from '../tourismdata';
import { useTranslation } from 'react-i18next';

const BarChart = ({ selectedYear }) => {
  const { t } = useTranslation();

  // Find data for selectedYear
  const yearData = tourismData.find(item => item.year === parseInt(selectedYear));
  
  // Transform data to [ { coiuntry: "France", tourists: 76000000 }, ...]
  const barData = yearData
    ? Object.keys(yearData).filter(k => k !== 'year').map(country => ({
        country,
        tourists: yearData[country]
      }))
    : [];

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <RechartsBarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid stroke="#e0e0e0" strokeDasharray="3 3" />
          <XAxis 
            dataKey="country"
            tickFormatter={(country) => t(`countries.${country}`, country)}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            tickFormatter={(value) => `${(value / 1_000_000).toFixed(0)}M`} 
            tick={{ fontSize: 12 }}
            label={{ value: t('touristArrivals'), angle: -90, position: 'insideLeft', fontSize: 12 }}
          />
          <Tooltip 
            formatter={(value) => `${value.toLocaleString()}`} 
            labelFormatter={(label) => t(`countries.${label}`, label)} 
          />
          <Legend />
          <Bar dataKey="tourists" fill="#20c997" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
